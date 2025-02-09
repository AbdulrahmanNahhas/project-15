"use client";

import Header from './header'
import Footer from './footer'
// import { Banner } from "./banner"

import { cn } from '@/lib/utils';

interface MarketingLayoutProps {
  children: React.ReactNode
}

export const MarketingLayout = ({children}: MarketingLayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className={cn("relative")}> {/*, banner && "top-24" */}
        <Header banner={false} />
        <main className={"h-full mt-24"}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}