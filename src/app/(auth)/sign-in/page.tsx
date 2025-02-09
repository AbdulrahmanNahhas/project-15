"use client";

// React and Next.js imports
import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

// Form validation
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Custom Components
import FormError from "@/modules/auth/components/form-error";
import FormSuccess from "@/modules/auth/components/form-success";
// import { Social } from "@/components/auth/social";

// Icons
import { CircleHelp } from "lucide-react";

// Schemas
import { LoginSchema } from "@/modules/auth/schemas";

/**
 * SignInPage Component
 * Handles user authentication through email/password login
 */
const SignInPage = () => {
  // State management
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  // const router = useRouter();
  
  // Get URL search params for messages
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  // Initialize form with Zod schema
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * Handle form submission
   * @param values Form values matching LoginSchema
   */
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    // Reset form status
    setError("");
    setSuccess("");

    startTransition(() => {
      // Commented out login logic for future implementation
      // login(values)
      //   .then((data) => {
      //     if (data.error) {
      //       setError(data.error)
      //       console.log(`${data.error}`);
      //     }

      //     if (data.success) {
      //       setSuccess(data.success);
      //       return router.push("/home")
      //     }
      //   })
      //   .catch((error) => {
      //     setError("حدث خطأ ما.");
      //     console.log(error);
      //   });
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Auth Card Container */}
      <div className="w-full max-w-[400px] auth-card-shadow sm:shadow-xl px-8 py-10 rounded-xl bg-background sm:border duration-500">
        {/* Logo Header */}
        <div className="text-3xl font-semibold h-10 flex items-center gap-1 mb-8 mx-auto">
          <Image 
            className="h-8 w-auto" 
            alt={"Logo"} 
            src={"/logo.png"} 
            width={50} 
            height={50} 
          />
          <span className="text-xl font-semibold whitespace-nowrap">المنصة السورية</span>
        </div>

        {/* Login Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Form Status Messages */}
            <FormError message={error} />
            <FormSuccess message={success} />
            {message && (
              <div className="bg-foreground/5 p-3 rounded-md flex items-center gap-x-2 text-sm text-foreground border">
                <CircleHelp className="h-4 w-4" />
                <p>{message}</p>
              </div>
            )}

            <div className="space-y-4">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد إلكتروني</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        style={{ direction: "ltr" }}
                        disabled={isPending}
                        placeholder="بريدك الإلكتروني"
                        type="email"
                        className="placeholder:text-end h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>كلمة المرور</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        style={{ direction: "ltr" }}
                        disabled={isPending}
                        placeholder="كلمة المرور الخاصة بك"
                        type="password"
                        className="placeholder:text-end h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">
                        لا تتذكر كلمة المرور الخاصة بك؟
                      </Link>
                    </Button>
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isPending}>
              تسجيل الدخول
            </Button>
          </form>
        </Form>

        {/* Social Login - Currently Disabled */}
        {/* <Social className="mt-2" /> */}

        {/* Sign Up Link */}
        <div className="flex mt-4 items-center justify-center">
          <Link
            href="/sign-up"
            className="text-xs text-muted-foreground hover:underline hover:opacity-75 font-light"
          >
            ليس لديك حساب؟ إنشاء حساب
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;