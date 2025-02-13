// Constants for lesson status
const LESSON_STATUS = {
  MASTERED: "mastered",
  PROFICIENT: "proficient", 
  FAMILIAR: "familiar",
  ATTEMPTED: "attempted",
  NOT_STARTED: "notStarted"
} as const

// Types
export interface LessonItem {
  title: string
  status: typeof LESSON_STATUS[keyof typeof LESSON_STATUS]
  index: number
  learn: {
    type: "article" | "video"
    title: string
    index: number
    status: boolean
  }[]
  practice: {
    title: string
    index: number
    status: boolean
  }[]
}

// Mock data for lessons
export const lessons: LessonItem[] = [
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

export const lessonSidebar = {
  title: "المعادلات الخطية",
  index: 1,
  learn: [
    { type: "article", title: "مقدمة في المعادلات الخطية", index: 0, status: true },
    { type: "video", title: "طرق حل المعادلات", index: 1, status: true },
    { type: "video", title: "خصائص المعادلات الخطية", index: 2, status: true },
    { type: "article", title: "تطبيقات على المعادلات الخطية", index: 4, status: true },
  ],
  practice: [
    { type: "quiz", title: "اختبار المعادلات الخطية 1", index: 3, status: true },
    { type: "quiz", title: "اختبار المعادلات الخطية 2", index: 5, status: true },
  ]
}