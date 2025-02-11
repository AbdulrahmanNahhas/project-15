import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const EarnBadge = () => {
  return (
    <Card className="border-0 shadow-none space-y-4 bg-accent/75 rounded-3xl p-12">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="font-bold flex items-center gap-2 mb-2 text-xl">
          احصل على شارة التحقق
          <BadgeCheck className="fill-primary text-primary-foreground" />
          {/* <Badge variant="secondary" className="rounded-full">
            <Zap className="h-3 w-3 mr-1" />
            5000
          </Badge> */}
        </h2>
        <p className="text-base text-muted-foreground">أكمل جميع الخطوات المطلوبة للتحقق من ملفك الشخصي.</p>
      </div>
    </div>
    <div className="space-y-2">
      <Progress value={33} className="h-3 my-4" />
      <div className="grid grid-cols-2 gap-2 text-sm w-full">
        <Button variant={"outline"} size={"lg"} className="flex items-center gap-2 justify-between h-12 p-4">
          <span>

          إضافة صورة شخصية
          </span>
          <Badge className="w-6 h-6 rounded-full p-0 flex items-center bg-green-600 justify-center">
            <CheckIcon className="w-3 h-3 stroke-2" />
          </Badge>
        </Button>
        <Button variant={"outline"} size={"lg"} className="flex items-center gap-2 justify-between h-12 p-4">
          <span>

          إكمال الملف الأساسي
          </span>
          <Badge className="w-6 h-6 rounded-full p-0 flex items-center bg-muted justify-center">
            <CheckIcon className="w-3 h-3 stroke-2 text-black" />
          </Badge>
        </Button>
      </div>
    </div>
  </Card> 
  )
}

export default EarnBadge