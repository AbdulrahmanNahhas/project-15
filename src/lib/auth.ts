import { createClient } from "@/supabase/server";

export async function getUser() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) return null;
  if (!user) return null;

  const { data, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (userError) return null;
  return data;
}