import React from 'react'
import Link from "next/link"
import {
  // IconHome,
  IconInfoCircle,
  IconBolt,
  IconPlayerPlay,
  IconFileText,
  // IconCrown,
  // IconStar,
  IconClock,
  IconAward,
  IconSparkles,
  IconChevronLeft,
  IconCheck,
  IconHomeFilled
} from "@tabler/icons-react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {cn} from "@/lib/utils";
// import {Separator} from "@/components/ui/separator";
import {Progress} from "@/components/ui/progress";

const LESSON_STATUS = {
  MASTERED: "mastered",
  PROFICIENT: "proficient", 
  FAMILIAR: "familiar",
  ATTEMPTED: "attempted",
  NOT_STARTED: "notStarted"
} as const;

// const STATUS_STYLES = {
//   [LESSON_STATUS.MASTERED]: "bg-[#4c3a81] !text-white hover:bg-[#4c3a81] border-[#4c3a81]",
//   [LESSON_STATUS.PROFICIENT]: "bg-[#8878b0] hover:bg-[#8878b0] border-[#8878b0]",
//   [LESSON_STATUS.FAMILIAR]: "bg-gradient-to-t from-[#D77D0C] from-0% via-[#D77D0C] via-50% to-transparent to-50% border border-[#D77D0C]",
//   [LESSON_STATUS.ATTEMPTED]: "bg-gradient-to-t from-[#C66124] from-0% via-[#C66124] via-25% to-transparent to-25% border border-[#C66124]",
//   [LESSON_STATUS.NOT_STARTED]: "border-2 border-gray-300 bg-transparent"
// };

// const STATUS_LABELS = {
//   [LESSON_STATUS.MASTERED]: "متقن",
//   [LESSON_STATUS.PROFICIENT]: "متمكن",
//   [LESSON_STATUS.FAMILIAR]: "مألوف",
//   [LESSON_STATUS.ATTEMPTED]: "تمت المحاولة",
//   [LESSON_STATUS.NOT_STARTED]: "لم يُبدأ بعد",
//   quiz: "اختبار",
//   unitTest: "اختبار الوحدة"
// };

// type StatusStylesKey = keyof typeof STATUS_STYLES;

interface LessonItem {
  type?: string; // "video" | "article" | "quiz" | "unitTest
  title: string;
  index: number;
  status: boolean;
}

const lessons = [
  {
    title: "المعادلات الخطية",
    status: LESSON_STATUS.MASTERED,
    index: 1,
    learn: [
      { type: "article", title: "مقدمة في المعادلات الخطية", index: 0, status: true },
      { type: "video", title: "طرق حل المعادلات", index: 1, status: true },
      { type: "video", title: "خصائص المعادلات الخطية", index: 2, status: true },
      { type: "article", title: "تطبيقات على المعادلات الخطية", index: 3, status: true },
    ],
    practice: [
      { title: "اختبار المعادلات الخطية 1", index: 4, status: true },
      { title: "اختبار المعادلات الخطية 2", index: 5, status: true },
    ]
  },
  {
    title: "التعبيرات الجبرية",
    status: LESSON_STATUS.PROFICIENT,
    index: 2,
    learn: [
      { type: "article", title: "فهم التعبيرات الجبرية", index: 0, status: false },
      { type: "video", title: "التعبيرات الجبرية في الحياة اليومية", index: 1, status: false },
      { type: "video", title: "التعبيرات الرياضية وتبسيطها", index: 2, status: false },
      { type: "article", title: "إعادة كتابة التعبيرات", index: 3, status: false },
      { type: "video", title: "تمارين في التعبيرات الجبرية", index: 4, status: false },
    ],
    practice: [
      { title: "تمارين على التعبيرات الجبرية", index: 5, status: false },
      { title: "تحدي التعبيرات الجبرية", index: 6, status: false },
    ]
  },
  {
    title: "الدوال الخطية",
    status: LESSON_STATUS.FAMILIAR,
    index: 3,
    learn: [
      { type: "article", title: "أساسيات الدوال الخطية", index: 0, status: false },
      { type: "video", title: "كيفية رسم الدوال الخطية", index: 1, status: false },
      { type: "video", title: "تمثيل الدوال على الرسم البياني", index: 2, status: false },
      { type: "article", title: "التغيرات في الدوال الخطية", index: 3, status: false },
    ],
    practice: [
      { title: "حل مسائل الدوال الخطية", index: 4, status: false },
      { title: "تحدي الدوال الخطية", index: 5, status: false },
    ]
  },
  {
    title: "الأنظمة الخطية",
    status: LESSON_STATUS.ATTEMPTED,
    index: 4,
    learn: [
      { type: "article", title: "مدخل إلى الأنظمة الخطية", index: 0, status: false },
      { type: "video", title: "حل الأنظمة الخطية بالتعويض", index: 1, status: false },
      { type: "video", title: "الحل البياني للأنظمة", index: 2, status: false },
      { type: "article", title: "تطبيقات الأنظمة في الحياة العملية", index: 3, status: false },
      { type: "video", title: "حل الأنظمة باستخدام الحذف", index: 4, status: false },
    ],
    practice: [
      { title: "اختبار الأنظمة الخطية 1", index: 5, status: false },
      { title: "اختبار الأنظمة الخطية 2", index: 6, status: false },
    ]
  },
  {
    title: "المتباينات الخطية",
    status: LESSON_STATUS.NOT_STARTED,
    index: 5,
    learn: [
      { type: "article", title: "مقدمة في المتباينات الخطية", index: 0, status: false },
      { type: "video", title: "حل المتباينات وإشاراتها", index: 1, status: false },
      { type: "video", title: "تمثيل المتباينات على خط الأعداد", index: 2, status: false },
      { type: "article", title: "حل المسائل المركبة للمتباينات", index: 3, status: false },
      { type: "video", title: "التطبيقات العملية للمتباينات", index: 4, status: false },
    ],
    practice: [
      { title: "تمرين على المتباينات الخطية", index: 5, status: false },
      { title: "تحدي المتباينات الخطية", index: 6, status: false },
    ]
  },
  {
    title: "الأسس والجذور",
    status: LESSON_STATUS.MASTERED,
    index: 6,
    learn: [
      { type: "article", title: "فهم الأسس", index: 0, status: true },
      { type: "video", title: "القواعد الأساسية للأسس", index: 1, status: true },
      { type: "video", title: "الجذور ومعانيها", index: 2, status: true },
      { type: "article", title: "العلاقة بين الأسس والجذور", index: 3, status: true },
    ],
    practice: [
      { title: "مسائل على الأسس والجذور", index: 4, status: true },
      { title: "تحدي الأسس والجذور", index: 5, status: true },
    ]
  },
  {
    title: "التربيع والجذر التربيعي",
    status: LESSON_STATUS.PROFICIENT,
    index: 7,
    learn: [
      { type: "article", title: "مقدمة للتربيع والجذر التربيعي", index: 0, status: false },
      { type: "video", title: "خصائص الجذر التربيعي", index: 1, status: false },
      { type: "video", title: "التربيع في المسائل الرياضية", index: 2, status: false },
      { type: "article", title: "العلاقة بين التربيع والجذر التربيعي", index: 3, status: false },
    ],
    practice: [
      { title: "تمرين على التربيع والجذر التربيعي", index: 4, status: false },
      { title: "اختبار الجذر التربيعي", index: 5, status: false },
      { title: "تحدي الجذر التربيعي", index: 6, status: false },
    ]
  },
  {
    title: "الصيغ والمعادلات التربيعية",
    status: LESSON_STATUS.FAMILIAR,
    index: 8,
    learn: [
      { type: "article", title: "فهم المعادلات التربيعية", index: 0, status: false },
      { type: "video", title: "طرق حل المعادلات التربيعية", index: 1, status: false },
      { type: "video", title: "استخدام الصيغ لحل المعادلات", index: 2, status: false },
      { type: "article", title: "أمثلة على المعادلات التربيعية", index: 3, status: false },
      { type: "video", title: "التطبيقات العملية للمعادلات التربيعية", index: 4, status: false },
    ],
    practice: [
      { title: "حل مسائل المعادلات التربيعية", index: 5, status: false },
      { title: "اختبار المعادلات التربيعية", index: 6, status: false },
    ]
  }
];

const LessonButton = ({ item, type = "learn" }: { item: LessonItem; type?: "learn" | "practice" }) => {
  const Icon = type === "learn" ? 
    (item.type === "video" ? IconPlayerPlay : IconFileText) : 
    IconBolt;

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
  );
};

const UnitPage = () => {
  return (
    <div className="container mx-auto my-14 px-6 flex flex-col max-w-4xl">
      <div className="flex flex-col gap-4 bg-accent/30 border-2 rounded-2xl p-6">
        {/* Breadcrumb */}
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

        {/* Header */}
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

        {/* Legend */}
        {/* <div className="flex flex-wrap items-center gap-3">
          {Object.entries({...STATUS_LABELS, quiz: "اختبار", unitTest: "اختبار الوحدة"}).map(([status, label]) => (
            <div className="flex items-center gap-2" key={status}>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  STATUS_STYLES[status as StatusStylesKey] || "bg-gray-100",
                  "size-7 rounded-sm"
                )}
              >
                {status === LESSON_STATUS.MASTERED && <IconCrown className="size-2 fill-white" />}
                {status === "quiz" && <IconBolt className="size-3 text-slate-600" />}
                {status === "unitTest" && <IconStar className="size-3 text-slate-600" />}
              </Button>
              <span className="capitalize">{label}</span>
            </div>
          ))}
        </div> */}

        {/* Progress Grid */}
        {/* <div className="flex flex-wrap items-center gap-2">
          {lessons.map((item, index) => (
            <TooltipProvider key={index} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      STATUS_STYLES[item.status as StatusStylesKey] || "bg-gray-100",
                      "size-7"
                    )}
                  >
                    {item.status === LESSON_STATUS.MASTERED && <IconCrown className="size-2 fill-white" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-black">
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div> */}
      </div>

      {/* Lessons */}
      <div className="space-y-12 relative pt-0">
        <div className='w-4 !h-full bg-accent border-2 absolute top-0 left-1/2 -translate-x-1/2  z-0 border-t-0'>

        </div>
        {lessons.map((lesson, index) => (
          <Card key={index} className="shadow-none bg-card relative z-10 mx-auto">
            <CardHeader className="text-lg mx-auto mb-4 text-center border-b bg-accent/50">
              <CardTitle>الدرس {index +1}: {lesson.title}</CardTitle>
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
        ))}

        {/* Quiz Card */}
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
      </div>
    </div>
  )
}

export default UnitPage;