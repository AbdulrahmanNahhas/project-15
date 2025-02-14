'use server'

import { LoginSchema } from '@/modules/auth/schemas';
import { LOGIN_ROUTE } from '@/routes';
import { getURL } from '@/lib/helpers';

import { createClient } from '@/supabase/server'
import { Provider } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import * as z from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  const supabase = await createClient()

  let { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password
  })

  if (error) {
    switch (error.message) {
      case "The user account has been locked due to too many failed login attempts. Please try again later.":
        return {error: "تم قفل الحساب بسبب عدد كبير من المحاولات الفاشلة. الرجاء المحاولة لاحقاً"}
      case "Invalid login credentials":
        return {error: "البريد الإلكتروني أو كلمة المرور غير صحيحة"}
      default:
        // return {error: "حدث خطأ ما. الرجاء المحاولة لاحقاً"}
        return {error: error.message }
    }
  }

  return {success: "تم تسجيل الدخول بنجاح"}
}

export async function loginWithSocial(provider: Provider) {
  if (!provider) {
    return redirect(`?${LOGIN_ROUTE}message=لم يتم تحديد أي Provider`)
  }

  const supabase = await createClient()
  const redirectUrl = getURL("/auth/callback")
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    }
  })

  if (error) {
    console.error("ERR - [ACTIONS / LOGIN]: ", error);
    
    // Handle specific database error
    if (error.message?.includes('Database error saving new user')) {
      return redirect('/login?message=حدث خطأ في حفظ بيانات المستخدم. الرجاء المحاولة مرة أخرى')
    }

    return redirect('/login?message=فشل تسجيل الدخول')
  }

  return redirect(data.url)
}