"use client"

import * as React from "react"
import { Zap, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// واجهة خصائص التتابع - Streak Props Interface
interface StreaksProps {
  value?: number    // قيمة التتابع - streak value
  className?: string
}

export function Streaks({ value = 0, className }: StreaksProps) {
  const [open, setOpen] = React.useState(false)
  // أيام الأسبوع - Days of the week
  const DAYS = ["ح", "ن", "ث", "ر", "خ", "ج", "س"]

  // مكون محتوى التتابع - Streak Content Component
  const StreakContent = () => (
    <div className="bg-card p-6 rounded-xl relative">
      {/* أيقونة البرق - Lightning icon */}
      <div className="absolute top-5 left-5">
        <Zap className="w-8 h-8 text-amber-500 fill-amber-500" />
      </div>

      <div className="space-y-6 max-w-[300px]">
        {/* عنوان ورسالة التتابع - Streak title and message */}
        <div className="space-y-2">
          <h3 className="text-[#C4A839] text-3xl font-bold">تتابع {value} يوم</h3>
          <p className="text-[#B69E3A] text-lg">
            {value === 0 
              ? "قم بدرس اليوم لبدء تتابع جديد!" 
              : "واصل! أنت تقوم بعمل رائع!"}
          </p>
        </div>

        {/* مؤشر التقدم الأسبوعي - Weekly progress indicator */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between mb-4">
            {DAYS.map((day, i) => (
              <span key={i} className="text-sm font-medium text-gray-500">
                {day}
              </span>
            ))}
          </div>

          <div className="relative">
            <div className="h-3 bg-gray-200 rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 bg-gray-200 rounded-full transform -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const StreakTrigger = () => (
    <>
      <Zap className="size-10 fill-amber-500 text-amber-500" />
      <span>{value}</span>
    </>
  )

  // عرض سطح المكتب - Desktop View
  const DesktopView = () => (
    <div className="hidden md:flex">
    <Popover>
      <PopoverTrigger className={cn("group flex !gap-1 text-lg relative !px-2 !py-2 !h-7", buttonVariants({variant: "ghost"}))}>
        <StreakTrigger />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center" side="bottom" alignOffset={0} sideOffset={10}>
        <StreakContent />
      </PopoverContent>
    </Popover>
    </div>
  )

  // عرض الجوال - Mobile View
  const MobileView = () => (
    <div className="md:hidden">
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className={cn("group flex gap-2 text-lg relative !px-2 !py-1 !h-7", buttonVariants({variant: "ghost"}))}>
        <StreakTrigger />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b text-center">
          <DrawerTitle>التتابع</DrawerTitle>
          <DrawerClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </DrawerClose>
        </DrawerHeader>
        <div className="p-6 flex justify-center">
          <StreakContent />
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