"use server";

import { FormData } from "@/data/app/onboarding/types";
import { getUser } from "@/lib/auth";
import { createClient } from "@/supabase/server";

// {
//   gender: string;
//   muhafazah: string;
//   userType: string;
//   grade: string;
//   certificate: string;
//   role: string;
// }

export async function updateUser(values: FormData) {
  const supabase = await createClient();
  const user = await getUser();

  if (!user) {
    return { status: "error", message: "User not found" };
  }

  console.log("Update User: ", values);

  const { error } = await supabase
    .from("users")
    .update({
      onboarding_completed: true,
    })
    .eq("id", user.id);

  if (error) {
    return { status: "error", message: error.message };
  }

  return { status: "success", message: "تم تحديث البيانات الشخصية بنجاح" };
}