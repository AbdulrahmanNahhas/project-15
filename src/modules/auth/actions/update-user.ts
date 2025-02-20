"use server";

import { FormData } from "@/data/app/onboarding/types";
import { getUser } from "@/lib/auth";
import { createClient } from "@/supabase/server";

// bio: undefined
// certificate: "004d16c0-3978-4c44-898e-b630da63c190"
// coverImageUrl: undefined
// gender: "ذكر"
// grade: "004d16c0-3978-4c44-898e-b630da63c190"
// imageUrl: undefined
// muhafazah: "إدلب"
// role: "learner"
// userType: "k12"

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
      is_onboarded: true,
      grade_id: values.grade,
      gender: values.gender,
      muhafazah: values.muhafazah,
    })
    .eq("id", user.id);

  if (error) {
    return { status: "error", message: error.message };
  }

  return { status: "success", message: "تم تحديث البيانات الشخصية بنجاح" };
}