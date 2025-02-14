"use client"

import { Button } from "@/components/ui/button";
import { signOut } from "@/modules/auth/actions";

const SignOutButton = ({className, children, asChild}: {className?: string, children?: React.ReactNode, asChild?: boolean}) => {
  return (
    <Button variant={"ghost"} asChild={asChild} className={className} onClick={() => signOut()}>
      {children}
    </Button>
  )
}

export default SignOutButton