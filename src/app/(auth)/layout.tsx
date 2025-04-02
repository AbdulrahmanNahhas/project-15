import { AnimatedGridPattern } from '@/components/common/animated-grid-pattern'
import { cn } from '@/lib/utils'
import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        // repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[0] h-[100%] skew-y-0 -z-10",
        )}
      />
    </div>
  )
}

export default AuthLayout