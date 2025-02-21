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
import { Input } from "@ui//input";
import { Button, buttonVariants } from "@ui//button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui//form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui//popover";

// Custom Components
import FormError from "@/modules/auth/components/form-error";
import FormSuccess from "@/modules/auth/components/form-success";
import { Social } from "@/modules/auth/components/social";

// Utils
import { cn } from "@/lib/utils";
import { RegisterSchema } from "@/modules/auth/schemas";
import Image from "next/image";
import { register } from "@/modules/auth/actions";
import { LOGIN_ROUTE } from "@/routes";

/**
 * RegisterPage Component
 * Handles user registration with email/password and social providers
 */
const RegisterPage = () => {
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
      register(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
            console.log(`${data.error}`);
          }

          if (data?.success) {
            setSuccess(data.success);
            return router.push(`${LOGIN_ROUTE}/?message=${data.success}`);
          }
        })
        .catch((error) => {
          setError("حدث خطأ ما.");
          console.log(error);
        });
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Auth Card Container */}
      <div className="w-full max-w-[500px] md:w-[500px] auth-card-shadow px-8 pt-8 pb-6 rounded-3xl border-primary bg-primary/1 sm:border sm:my-10 duration-500">
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {/* Name Fields Container */}
              <div className="flex flex-col md:flex-row items-center gap-4 !w-full">
                {/* First Name Field */}
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="md:flex-1 flex flex-col gap-0 w-full">
                      <FormLabel>الأسم</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="اسمك الأول"
                          type="text"
                          className="rounded-full bg-accent/50 hover:bg-accent placeholder:text-start h-10 duration-300 hover:border-foreground shadow-none !outline-border !ring-border focus:border-border"
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
                    <FormItem className="md:flex-1 flex flex-col gap-0 w-full">
                      <FormLabel>أسم العائلة</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="اسمك الاخير"
                          type="text"
                          className="rounded-full bg-accent/50 hover:bg-accent placeholder:text-start h-10 duration-300 hover:border-foreground shadow-none !outline-border !ring-border focus:border-border"
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
                      <PopoverTrigger className={cn(buttonVariants({variant: "outline", size: "icon"}), "p-1! size-5 border-border/50 cursor-pointer text-xs shadow-none mr-1")}>؟</PopoverTrigger>
                      <PopoverContent className="flex flex-col gap-2" alignOffset={-90} align="start">
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
                      <div className="relative overflow-hidden group rounded-full bg-accent/50">
                        <svg
                          className="absolute px-0 py-3 h-10 w-10 border left-0 top-0 text-black bg-accent rounded-l-full group-hover:border-foreground duration-300"
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
                          className="h-10 duration-300 pl-12 rounded-r-full hover:border-foreground shadow-none !outline-border !ring-border focus:border-border"
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
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>البريد إلكتروني</FormLabel>
                    <FormControl >
                      <Input
                        style={{ direction: "ltr" }}
                        {...field}
                        disabled={isPending}
                        placeholder="example@gmail.com"
                        type="email"
                        className="rounded-full bg-accent/50 hover:bg-accent placeholder:text-start h-10 duration-300 hover:border-foreground shadow-none !outline-border !ring-border focus:border-border"
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
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>كلمة المرور</FormLabel>
                    <FormControl>
                      <Input
                        style={{ direction: "ltr" }}
                        {...field}
                        disabled={isPending}
                        placeholder="كلمة المرور الخاصة بك"
                        type="password"
                        className="placeholder:text-end rounded-full bg-accent/50 hover:bg-accent h-10 duration-300 hover:border-foreground shadow-none !outline-border !ring-border focus:border-border"
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
            <Button type="submit" className="w-full rounded-full" disabled={isPending}>
              إنشاء حساب جديد
            </Button>
          </form>
        </Form>

        {/* Social Login */}
        <Social className="mt-2"/>

        {/* Sign In Link */}
        <div className="flex mt-4 items-center justify-center">
          <Link
            href="/login"
            className="text-xs text-muted-foreground hover:underline hover:opacity-75 font-light"
          >
            لديك حساب بالفعل؟ تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;