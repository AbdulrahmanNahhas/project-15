"use client"

import * as React from "react"
import { Hexagon, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PointsProps {
  value?: number
  todayPoints?: number
  weeklyPoints?: number[]
  className?: string
}

export function Points({
  value = 0,
  todayPoints = 13,
  weeklyPoints = [5, 8, 12, 3, 7, 10, 13],
  className,
}: PointsProps) {
  const [open, setOpen] = React.useState(false)
  // أيام الأسبوع - Days of the week
  const DAYS = ["1", "2", "3", "4", "5", "6", "7"]

  // مكون عرض النقاط - Points display component
  const PointsContent = () => (
    <div className="space-y-6 w-full max-w-md">
      {/* عنوان النقاط اليومية - Daily points header */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">
        نشاطك هذا الاسبوع
        </h3>
        <p className="text-gray-600">
        لقد ربحت <span className="text-primary">{todayPoints} نقطة</span> هذا الاسبوع!
        </p>
      </div>

      {/* مخطط النقاط الأسبوعية - Weekly points chart */}
      <div className="flex items-end justify-between gap-3">
        {DAYS.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium text-gray-900">{weeklyPoints[i]}xp</span>
            <div className="w-8 bg-gray-100 rounded-full">
              <div
                className={`w-8 rounded-full ${i === DAYS.length - 1 ? "bg-primary" : "bg-gray-300"}`}
                style={{
                  height: `${Math.max(20, (weeklyPoints[i] / Math.max(...weeklyPoints)) * 100)}px`,
                }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600 mt-1">{day}</span>
          </div>
        ))}
      </div>
    </div>
  )
  
  const PointsTrigger = () => (
    <>
      <Hexagon className="!size-5 text-primary fill-primary" />
      <Hexagon className="!size-2.5 text-background group-hover:fill-accent group-hover:text-accent fill-background absolute top-[9px] right-[13px]" />
      <span>{value}</span>
    </>
  )
  // عرض سطح المكتب - Desktop view
  const DesktopView = () => (
    <div className="hidden md:block">
      <Popover>
        <PopoverTrigger className={cn("flex gap-1 text-lg relative !px-2 !py-1 !h-7 group", buttonVariants({variant: "ghost"}))}>
          <PointsTrigger/>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-6" align="center" side="bottom" alignOffset={0} sideOffset={10}>
          <PointsContent />
        </PopoverContent>
      </Popover>
    </div>
  )

  // عرض الجوال - Mobile view
  const MobileView = () => (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className={cn("group flex gap-2 text-lg relative !px-2 !py-1 !h-7", buttonVariants({variant: "ghost"}))}>
          <PointsTrigger/>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="border-b text-center">
            <DrawerTitle>النشاط</DrawerTitle>
            <DrawerClose className="absolute right-4 top-4">
              <X className="h-4 w-4" />
            </DrawerClose>
          </DrawerHeader>
          <div className="p-6 flex justify-center">
            <PointsContent />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )

  return (
    <div className={className}>
      <DesktopView />
      <MobileView />
    </div>
  )
}

