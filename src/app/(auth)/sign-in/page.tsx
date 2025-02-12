"use client";

// React and Next.js imports
import { useState, useTransition, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
// import { useRouter } from "next/navigation";

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
import { Social } from "@/modules/auth/components/social";

// Icons
import { CircleHelp } from "lucide-react";

// Schemas
import { LoginSchema } from "@/modules/auth/schemas";

/**
 * SignInPage Component
 * Handles user authentication through email/password login
 */
const SignInPageContent = () => {
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
     <div className="w-full max-w-md auth-card-shadow sm:shadow-xl px-8 py-10 rounded-xl bg-background sm:border duration-500 space-y-3">
       {/* Logo Header */}
       <div className="text-3xl font-semibold flex items-center gap-1 mx-auto flex-col !mb-5">
         <Image 
           className="h-12 w-auto" 
           alt={"Logo"} 
           src={"/logo.png"} 
           width={50} 
           height={50} 
         />
         <span className="text-xl font-semibold whitespace-nowrap">مرحبًا بعودتك</span>
       </div>

       {/* Social Login - Currently Disabled */}
       <Social />

       <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border !mt-6">
         <span className="text-xs text-muted-foreground">أو</span>
       </div>

       {/* Login Form */}
       <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                       className="rounded-[0.5rem] placeholder:text-end h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0"
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
                       className="rounded-[0.5rem] placeholder:text-end h-10 duration-300 hover:border-foreground focus:border-foreground shadow-none !outline-none !ring-0"
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
             className={`w-full rounded-[0.5rem] h-10 border border-primary ${(!form.formState.isValid) ? 'opacity-50 cursor-not-allowed' : ''}`} 
             disabled={isPending || (!form.formState.isValid)}
           >
             تسجيل الدخول
           </Button>
         </form>
       </Form>

       {/* Sign Up Link */}
       <div className="flex items-center justify-center">
         <Link
           href="/sign-up"
           className="text-xs text-muted-foreground hover:underline hover:opacity-75 font-light"
         >
           ليس لديك حساب؟ إنشاء حساب
         </Link>
       </div>
     </div>
   </div>
);};
const SignInPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInPageContent />
    </Suspense>
  );
};

export default SignInPage;