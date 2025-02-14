import React from 'react'
import Image from 'next/image'
import { Calendar, Globe, Smartphone, Clock4, Award } from 'lucide-react'
import { Button } from '@ui//button'

const CourseSidebar = ({lastUpdate}: {lastUpdate: string}) => {
  return (        <div className="space-y-6 h-fit sticky top-20">
    <Image
      src="/certificate.png"
      width={600}
      height={300}
      alt="Certificate preview"
      className="mx-auto mb-4"
    />

    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm">
        <Calendar className="h-4 w-4" />
        <span>اخر تحديث {lastUpdate}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Globe className="h-4 w-4" />
        <span>اللغة العربية</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Smartphone className="h-4 w-4" />
        <span>متاح على الهاتف</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Clock4 className="h-4 w-4" />
        <span>تعلم ذاتي عبر الإنترنت</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Award className="h-4 w-4" />
        <span>شهادة إتمام قابلة للمشاركة</span>
      </div>
    </div>

    <Button className="w-full bg-primary text-white hover:bg-primary/90">
      ابدأ الدورة مجاناً
    </Button>
    {/*       <div>
      <p className="font-medium mb-2">مشاركة</p>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div> */}
  </div>
  )
}

export default CourseSidebar