"use client";

// React and Next.js imports
import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Form validation
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Custom Components
import FormError from "@/modules/auth/components/form-error";
import FormSuccess from "@/modules/auth/components/form-success";
import { Social } from "@/modules/auth/components/social";

// Utils
import { cn } from "@/lib/utils";
import { RegisterSchema } from "@/modules/auth/schemas";
import Image from "next/image";
// import { register } from "./actions";
// import { loginRoute } from "@/routes";

/**
 * SignUpPage Component
 * Handles user registration with email/password and social providers
 */
const SignUpPage = () => {
  // State management
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Initialize form with Zod schema
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  /**
   * Handle form submission
   * @param values Form values matching RegisterSchema
   */
  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      // register(values)
      //   .then((data) => {
      //     if (data?.error) {
      //       setError(data.error);
      //       console.log(`${data.error}`);
      //     }

      //     if (data?.success) {
      //       setSuccess(data.success);
      //       return router.push(`${loginRoute}/?message=${data.success}`);
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
      <div className="w-full max-w-[500px] md:w-[500px] auth-card-shadow md:shadow-xl px-8 py-10 rounded-xl bg-background sm:border sm:my-10 duration-500">
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

        {/* Registration Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Name Fields Container */}
              <div className="md:flex block items-center gap-4 w-full space-y-6 md:space-y-0">
                {/* First Name Field */}
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>الأسم</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="اسمك الأول"
                          type="text"
                          className="h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name Field */}
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>أسم العائلة</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="اسمك الاخير"
                          type="text"
                          className="h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>أسم الحساب</FormLabel>
                    <Popover>
                      <PopoverTrigger className={cn(buttonVariants({variant: "outline", size: "icon"}), "!p-1 w-6 h-6 text-xs shadow-none mr-1")}>؟</PopoverTrigger>
                      <PopoverContent className="space-y-2">
                        <h4 className="font-medium leading-none">الشروط</h4>
                        <FormDescription>
                          - يجب أن يحتوي فقط على أحرف أنجليزية
                        </FormDescription>
                        <FormDescription>
                          - يمنع استخدام مسافة بين الأحرف
                        </FormDescription>
                        <FormDescription>- يجب أن يكون فريد</FormDescription>
                      </PopoverContent>
                    </Popover>

                    <FormControl>
                      <div className="relative overflow-hidden group">
                        <svg
                          className="absolute px-0 py-3 h-10 w-8 border left-0 top-0 text-black bg-accent rounded-l-md group-hover:border-foreground duration-300"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="200px"
                          width="200px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                        </svg>
                        <Input
                          style={{ direction: "ltr" }}
                          {...field}
                          disabled={isPending}
                          placeholder="Username"
                          type="text"
                          lang="eng"
                          className="h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0 pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد إلكتروني</FormLabel>
                    <FormControl>
                      <Input
                        style={{ direction: "ltr" }}
                        {...field}
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
                        style={{ direction: "ltr" }}
                        {...field}
                        disabled={isPending}
                        placeholder="كلمة المرور الخاصة بك"
                        type="password"
                        className="placeholder:text-end h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Form Status Messages */}
            <FormError message={error} />
            <FormSuccess message={success} />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isPending}>
              إنشاء حساب جديد
            </Button>
          </form>
        </Form>

        {/* Social Login */}
        <Social className="mt-2"/>

        {/* Sign In Link */}
        <div className="flex mt-4 items-center justify-center">
          <Link
            href="/sign-in"
            className="text-xs text-muted-foreground hover:underline hover:opacity-75 font-light"
          >
            لديك حساب بالفعل؟ تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;