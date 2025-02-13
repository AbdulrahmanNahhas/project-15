export type Lesson = {
  title: string;
  url: string;
  completed?: boolean;
};
export type Unit = {
  title: string;
  description: string;
  Lessons: Lesson[];
};

export const AlgebraUnits: Unit[] = [
  {
    title: "المعادلات والمتباينات الخطية",
    description:
      "حل وتمثيل المعادلات والمتباينات الخطية في متغير واحد ومتغيرين.",
    Lessons: [
      {
        title: "حل المعادلات الخطية",
        url: "/lesson/solving-linear-equations",
        completed: true,
      },
      {
        title: "تمثيل المعادلات الخطية",
        url: "/lesson/graphing-linear-equations",
        completed: true,
      },
      {
        title: "حل المتباينات الخطية",
        url: "/lesson/solving-linear-inequalities",
        completed: true,
      },
      {
        title: "أنظمة المعادلات الخطية",
        url: "/lesson/systems-of-linear-equations",
        completed: true,
      },
    ],
  },
  {
    title: "المعادلات والمتباينات الخطية 2",
    description:
      "حل وتمثيل المعادلات والمتباينات الخطية في متغير واحد ومتغيرين.",
    Lessons: [
      {
        title: "حل المعادلات الخطية",
        url: "/lesson/solving-linear-equations",
        completed: true,
      },
      {
        title: "تمثيل المعادلات الخطية",
        url: "/lesson/graphing-linear-equations",
      },
      {
        title: "حل المتباينات الخطية",
        url: "/lesson/solving-linear-inequalities",
      },
      {
        title: "أنظمة المعادلات الخطية",
        url: "/lesson/systems-of-linear-equations",
      },
    ],
  },
];

export const unitsSidebar = [
  {
    title: "المعادلات والمتباينات الخطية",
    description: "حل وتمثيل المعادلات والمتباينات الخطية في متغير واحد ومتغيرين.",
  },
  {
    title: "الدوال وتمثيلها البياني",
    description: "استكشاف أنواع مختلفة من الدوال وتمثيلها البياني."
  },
  {
    title: "الدوال التربيعية والمعادلات",
    description: "دراسة الدوال التربيعية وتمثيلها البياني وحل المعادلات التربيعية.",
  },
  {
    title: "الدوال متعددة الحدود",
    description: "استكشاف دوال متعددة الحدود من درجات أعلى وخصائصها.",
  },
  {
    title: "الدوال الكسرية",
    description: "دراسة الدوال الكسرية وتمثيلها البياني وحل المعادلات الكسرية.",
  },
  {
    title: "الدوال الجذرية والأسس الكسرية",
    description: "استكشاف الدوال الجذرية وخصائص الأسس الكسرية.",
  },
  {
    title: "الدوال الأسية واللوغاريتمية",
    description: "دراسة النمو والانحلال الأسي والتعرف على اللوغاريتمات.",
  },
  {
    title: "المتتاليات والمتسلسلات",
    description: "استكشاف المتتاليات والمتسلسلات الحسابية والهندسية.",
  },
  {
    title: "القطوع المخروطية",
    description: "دراسة خصائص القطوع المخروطية وتمثيلها البياني.",
  },
  {
    title: "الاحتمالات والإحصاء",
    description: "مقدمة في نظرية الاحتمالات والتحليل الإحصائي.",
  },
]