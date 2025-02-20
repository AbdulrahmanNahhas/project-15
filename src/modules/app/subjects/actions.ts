"use server";

import { getUser } from "@/lib/auth";
import { createClient } from "@/supabase/server";

// Action: Get all subjects
export async function getSubjects() {
  const supabase = await createClient();
  const user = await getUser();

  const { data, error } = await supabase
    .from("subjects")
    .select("id, title, description")
    .eq("grade_id", user.grade_id);
    
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// Action: Get subject by ID
export async function getSubjectById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("subjects")
    .select("id, title, grade_id")
    .eq("id", id)
    .maybeSingle();
    
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
