"use client"

import * as React from "react"
import { Zap, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

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

  // عرض سطح المكتب - Desktop View
  const DesktopView = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="hidden md:flex gap-2 text-lg px-2">
          <Zap className="size-10 fill-amber-500 text-amber-500" />
          <span>{value}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <StreakContent />
      </PopoverContent>
    </Popover>
  )

  // عرض الجوال - Mobile View
  const MobileView = () => (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden flex gap-2">
          <Zap />
          <span>{value}</span>
        </Button>
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
  )

  return (
    <div className={className}>
      <DesktopView />
      <MobileView />
    </div>
  )
}