'use client'

import { NavUser } from "@/modules/app/ui/layouts/sidebar/nav-user"
import { useUser } from '@/modules/auth/hooks/use-user'
import SignOutButton from "./logout"
import { buttonVariants } from "@ui//button"
import { cn } from "@/lib/utils"

export function UserButton() {
  const { user, isLoading, error } = useUser()

  // Handle error state
  if (error) {
    return <SignOutButton className={cn(buttonVariants({variant: "destructive"}))}>
      حدث خطأ، اضغط تسجيل الخروج
    </SignOutButton> // Or proper error handling
  }

  return <NavUser user={user} loading={isLoading} />
}