"use client";

// React and Next.js imports
import { useState, useTransition, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

// Form validation
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Input } from "@ui//input";
import { Button } from "@ui//button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui//form";

// Custom Components
import FormError from "@/modules/auth/components/form-error";
import FormSuccess from "@/modules/auth/components/form-success";
import { Social } from "@/modules/auth/components/social";

// Icons
import { IconHelp } from "@tabler/icons-react";

// Schemas
import { LoginSchema } from "@/modules/auth/schemas";
import { login } from "@/modules/auth/actions/login";

const LoginPageContent = () => {
 // State management
 const [error, setError] = useState<string | undefined>("");
 const [success, setSuccess] = useState<string | undefined>("");
 const [isPending, startTransition] = useTransition();
 const router = useRouter();
 
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
   mode: "onChange"
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
     console.log(values);
     login(values)
       .then((data) => {
         if (data.error) {
           setError(data.error)
           console.log(`${data.error}`);
         }

         if (data.success) {
           setSuccess(data.success);
           return router.push("/home")
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
     <div className="w-full max-w-md auth-card-shadow px-8 pt-8 pb-6 rounded-3xl border-primary bg-background sm:border sm:my-10 duration-500 space-y-4">
       {/* Logo Header */}
       <div className="text-3xl font-semibold flex items-center gap-1 mx-auto flex-col mb-5!">
         <Image 
           className="h-12 w-auto" 
           alt={"Logo"} 
           src={"/logo.png"} 
           width={50} 
           height={50} 
         />
         <span className="text-xl font-semibold whitespace-nowrap">مرحبًا بعودتك</span>
       </div>

       {/* Login Form */}
       <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
           {/* Form Status Messages */}
           <FormError message={error} />
           <FormSuccess message={success} />
           {message && (
             <div className="bg-foreground/5 p-3 rounded-md flex items-center gap-x-2 text-sm text-foreground border">
               <IconHelp className="h-4 w-4" />
               <p>{message}</p>
             </div>
           )}

           <div className="flex flex-col gap-2">
             {/* Email Field */}
             <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>البريد إلكتروني</FormLabel>
                   <FormControl className="mt-1.5">
                     <Input
                       {...field}
                       style={{ direction: "ltr" }}
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
                 <FormItem>
                   <FormLabel>كلمة المرور</FormLabel>
                   <FormControl className="mt-1.5">
                     <Input
                       {...field}
                       style={{ direction: "ltr" }}
                       disabled={isPending}
                       placeholder="كلمة المرور الخاصة بك"
                       type="password"
                       className="rounded-full bg-accent/50 hover:bg-accent placeholder:text-end h-10 duration-300 hover:border-foreground shadow-none !outline-border !ring-border focus:border-border"
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
           <Button 
             type="submit" 
             className={`w-full rounded-full h-10 border border-primary ${(!form.formState.isValid) ? 'opacity-50 cursor-not-allowed' : ''}`} 
             disabled={isPending || (!form.formState.isValid)}
           >
             تسجيل الدخول
           </Button>
         </form>
       </Form>

       <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border mt-4!">
         <span className="text-xs text-muted-foreground">أو</span>
       </div>
       <Social />

       {/* Sign Up Link */}
        <Link
          href="/register"
          className="flex items-center justify-center text-xs text-muted-foreground hover:underline hover:opacity-75 font-light"
        >
          ليس لديك حساب؟ إنشاء حساب
        </Link>
     </div>
   </div>
);};

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
};

export default LoginPage;