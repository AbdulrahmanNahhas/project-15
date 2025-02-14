import { createClient } from '@/supabase/server'
import { redirect } from 'next/navigation'

const MyProject = async () => {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  return redirect(`/user/${session?.user.user_metadata.username}`)
}

export default MyProject