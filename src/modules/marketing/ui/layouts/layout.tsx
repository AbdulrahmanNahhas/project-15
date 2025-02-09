"use client";

import Header from './header'
import Footer from './footer'
import { Banner } from "./banner"

import { Button } from '@/components/ui/button'
import { Clock, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';

interface MarketingLayoutProps {
  children: React.ReactNode
}

// Define the sale end date
const saleEndDate = new Date('2025-09-09T23:59:59')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export const MarketingLayout = ({children}: MarketingLayoutProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = saleEndDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      {!isVisible || timeLeft.isExpired ? null : (
        <Banner variant="border" className="text-foreground fixed top-0 z-50">
          <div className="flex w-full gap-2 md:items-center">
            <div className="flex grow gap-3 md:items-center">
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 max-md:mt-0.5"
                aria-hidden="true"
              >
                <Clock className="opacity-80" size={16} strokeWidth={2} />
              </div>
              <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">إطلاق المنصة السورية</p>
                  <p className="text-sm text-muted-foreground">
                    الوقت المتبقي لإطلاق المنصة السورية للعلن بعد أكثر من عام من تطورها
                  </p>
                </div>
                <div className="flex gap-3 max-md:flex-wrap">
                  <div className="flex items-center divide-x divide-primary-foreground rounded-lg bg-primary/15 text-sm tabular-nums border-l">
                    {timeLeft.days > 0 && (
                      <span className="flex h-8 items-center justify-center p-2">
                        {timeLeft.days}
                        <span className="text-muted-foreground">ي</span>
                      </span>
                    )}
                    <span className="flex h-8 items-center justify-center p-2">
                      {timeLeft.hours.toString().padStart(2, "0")}
                      <span className="text-muted-foreground">س</span>
                    </span>
                    <span className="flex h-8 items-center justify-center p-2">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                      <span className="text-muted-foreground">د</span>
                    </span>
                    <span className="flex h-8 items-center justify-center p-2">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                      <span className="text-muted-foreground">ث</span>
                    </span>
                  </div>
                  {/* <Button size="sm" className="text-sm">انشئ حسابك الآن</Button> */}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
              onClick={() => setIsVisible(false)}
              aria-label="Close banner"
            >
              <X
                size={16}
                strokeWidth={2}
                className="opacity-60 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </Button>
          </div>
        </Banner>
      )}
      <div className={cn("relative", isVisible && "top-24")}>
        <Header banner={isVisible} />
        <main className={"h-full mt-24"}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}