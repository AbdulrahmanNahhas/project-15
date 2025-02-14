'use server'

import { createClient } from "@/supabase/server";
import { z } from "zod";
import { RegisterSchema } from "./schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { LOGIN_ROUTE } from "@/routes";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const supabase = await createClient();
  
  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        username: values.username,
        first_name: values.first_name,
        last_name: values.last_name,
      }
    }
  });


  if (error?.message) {
    switch (error.message) {
      case "User already registered":
        return { error: "هذا البريد الإلكتروني مستخدم بالفعل." };
      default:
        // return { error: "حدث خطأ ما." };
        return { error: error.message };
    }
  }

  revalidatePath("/home");

  // return { success: "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني." };
  return { success: "تم إنشاء الحساب بنجاح."};
}


export async function signOut() {
  const supabase = await createClient();
  
  await supabase.auth.signOut();

  return redirect(LOGIN_ROUTE);
}