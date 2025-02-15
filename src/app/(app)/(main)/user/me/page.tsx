'use client'

import { useUser } from '@/components/context/auth-context'
import { redirect } from 'next/navigation'
import { LOGIN_ROUTE } from '@/routes';
import Loading from '@/components/common/loading';

const UserMe = () => {
  const {user, isLoading} = useUser(); // No API calls, gets data from context

  if (isLoading) {
    return <Loading />
  }

  if (!user) {
    return redirect(LOGIN_ROUTE)
  }

  return redirect(`/user/${user?.username}`)
}

export default UserMe