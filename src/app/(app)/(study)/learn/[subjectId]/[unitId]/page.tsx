import React from 'react'
import Link from "next/link"
import {
  IconInfoCircle,
  IconBolt,
  IconPlayerPlay,
  IconFileText,
  IconClock,
  IconAward,
  IconSparkles,
  IconChevronLeft,
  IconCheck,
  IconHomeFilled
} from "@tabler/icons-react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@ui//card"
import { Button } from "@ui//button"
import {cn} from "@/lib/utils"
import {Progress} from "@ui//progress"
import { LessonItem, lessons } from '@/data/app/study/lessosn'

// Component for rendering lesson buttons
const LessonButton = ({ item, type = "learn" }: { item: LessonItem["learn"][0] | LessonItem["practice"][0]; type?: "learn" | "practice" }) => {
  // Determine icon based on lesson type
  const Icon = type === "learn" ? 
    ('type' in item && item.type === "video" ? IconPlayerPlay : IconFileText) : 
    IconBolt

  return (
    <Button 
      variant="outline" 
      className={cn(
        "group w-full justify-start p-4 h-auto shadow-none hover:shadow-inne flex gap-3",
        item.status && "hover:bg-green-100/30"
      )}
    >
      {item.status ? (
        <IconCheck className="!size-5 bg-green-600 rounded-sm p-0.5 text-white stroke-[3]" />
      ) : (
        <Icon className={cn("!size-6", item.status && "text-green-600")} />
      )}
      {item.title}
    </Button>
  )
}

// Component for breadcrumb navigation
const Breadcrumb = () => (
  <nav className="flex items-center space-x-2 text-sm">
    <Link href="/public" className="text-muted-foreground ml-2">
      <IconHomeFilled className="h-4 w-4"/>
    </Link>
    <span className="text-muted-foreground">•</span>
    <Link href="/" className="text-muted-foreground hover:text-primary/90">
      الصف التاسع
    </Link>
    <span className="text-muted-foreground">•</span>
    <Link href="/" className="text-muted-foreground hover:text-primary/90">
      الرياضيات
    </Link>
    <span className="text-muted-foreground">•</span>
    <Link href="/" className="text-muted-foreground hover:text-primary/90">
      الوحدة الأولى
    </Link>
  </nav>
)

// Component for unit header
const UnitHeader = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">الوحدة 1: المعادلات والمتباينات الخطية</h1>
      <Button variant="ghost" size="icon" className="text-primary">
        <IconInfoCircle className="h-4 w-4" />
      </Button>
    </div>
    <div className="gap-2 flex flex-col sm:flex-row sm:items-center justify-start">
      <span className="text-base font-normal">نسبة إتقان الوحدة: 75%</span>
    </div>
  </div>
)

// Component for lesson card
const LessonCard = ({ lesson, index }: { lesson: LessonItem; index: number }) => (
  <Card className="shadow-none bg-card relative z-10 mx-auto">
    <CardHeader className="text-lg mx-auto mb-4 text-center border-b bg-accent/50">
      <CardTitle>الدرس {index + 1}: {lesson.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h3 className="text-base text-muted-foreground font-normal mb-3">تعلم</h3>
          <div className="space-y-2">
            {lesson.learn.map((item, i) => (
              <LessonButton key={i} item={item} type="learn" />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-base text-muted-foreground font-normal mb-3">تدرب</h3>
          <div className="space-y-2">
            {lesson.practice.map((item, i) => (
              <LessonButton key={i} item={item} type="practice" />
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

// Component for quiz card
const QuizCard = () => (
  <Card className="group w-full max-w-4xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-4 border-primary">
    <CardHeader className="py-2 bg-primary text-primary-foreground">
      <CardTitle className="text-2xl font-bold flex items-center justify-between py-2">
        <span>الاختبار {1}: لنبدأ المرح!</span>
        <IconSparkles className="w-8 h-8 animate-pulse" />
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6 pt-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between text-primary">
        <div className="flex items-center space-x-2 space-x-reverse">
          <IconClock className="w-6 h-6" />
          <span className="text-lg">{15} دقيقة من تمرين العقل</span>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <IconAward className="w-6 h-6" />
          <span className="text-lg">{450} نقطة عبقرية في انتظارك!</span>
        </div>
      </div>
      <Progress value={0} className="h-3 bg-secondary" />
    </CardContent>
    <CardFooter className="pt-0 flex flex-col md:flex-row gap-3">
      <p className="md:text-xl text-center font-medium text-primary">
        هل أنت مستعد لتحدي عقلك؟ دعنا نرى ما لديك!
      </p>
      <Button className="w-full md:w-auto mr-auto bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-6 transition-all duration-300 ease-in-out group-hover:pr-6 group-hover:pl-4 flex flex-row-reverse justify-between items-center">
        <IconChevronLeft className="w-6 h-6 transition-all duration-300 ease-in-out translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"/>
        <span className="flex-grow text-right">ابدأ مغامرة الاختبار</span>
        <div className="flex items-center space-x-2 space-x-reverse">
          <IconBolt className="size-8 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:rotate-12"/>
        </div>
      </Button>
    </CardFooter>
  </Card>
)

// Main page component
const UnitPage = () => {
  return (
    <div className="container mx-auto my-14 px-6 flex flex-col max-w-4xl">
      {/* Unit info section */}
      <div className="flex flex-col gap-4 bg-accent/30 border-2 rounded-2xl p-6">
        <Breadcrumb />
        <UnitHeader />
      </div>

      {/* Lessons section */}
      <div className="space-y-12 relative pt-0">
        <div className='w-4 !h-full bg-accent border-2 absolute top-0 left-1/2 -translate-x-1/2  z-0 border-t-0' />
        
        {/* Render lesson cards */}
        {lessons.map((lesson: LessonItem, index: number) => (
          <LessonCard key={index} lesson={lesson} index={index} />
        ))}

        {/* Quiz section */}
        <QuizCard />
      </div>
    </div>
  )
}

export default UnitPage