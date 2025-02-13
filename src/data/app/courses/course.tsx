export const courseLevelsData = {
  levels: [
    {
      id: 1,
      title: "مبادئ البرمجة",
      description: "تعلم المفاهيم الأساسية للبرمجة وأساسيات التفكير البرمجي",
      lessons: [
        {
          title: "مقدمة في البرمجة",
          icon: "👋",
          completed: true,
          locked: false,
        },
        {
          title: "المتغيرات والثوابت",
          icon: "📦",
          completed: true,
          locked: false,
        },
        {
          title: "العمليات الحسابية",
          icon: "🔢",
          completed: true,
          locked: false,
        },
        {
          title: "الجمل الشرطية",
          icon: "🔀",
          completed: false,
          locked: false,
        },
        {
          title: "اختبار المستوى الأول",
          icon: "📝",
          completed: false,
          locked: true,
        },
      ],
    },
    {
      id: 2,
      title: "هياكل البيانات",
      description: "تعلم كيفية تنظيم وتخزين البيانات بشكل فعال",
      lessons: [
        {
          title: "المصفوفات",
          icon: "📊",
          completed: false,
          locked: false,
        },
        {
          title: "القوائم المتسلسلة",
          icon: "🔗",
          completed: false,
          locked: false,
        },
        {
          title: "المكدسات",
          icon: "📚",
          completed: false,
          locked: false,
        },
        {
          title: "الطوابير",
          icon: "🎯",
          completed: false,
          locked: false,
        },
        {
          title: "اختبار المستوى الثاني",
          icon: "📝",
          completed: false,
          locked: true,
        },
      ],
    },
    {
      id: 3,
      title: "الخوارزميات",
      description: "تعلم أساسيات الخوارزميات وطرق حل المشكلات البرمجية",
      lessons: [
        {
          title: "مقدمة في الخوارزميات",
          icon: "🔍",
          completed: false,
          locked: false,
        },
        {
          title: "خوارزميات الفرز",
          icon: "📋",
          completed: false,
          locked: false,
        },
        {
          title: "خوارزميات البحث",
          icon: "🎯",
          completed: false,
          locked: false,
        },
        {
          title: "التحليل الخوارزمي",
          icon: "📈",
          completed: false,
          locked: false,
        },
        {
          title: "اختبار المستوى الثالث",
          icon: "📝",
          completed: false,
          locked: true,
        },
      ],
    },
    {
      id: 4,
      title: "البرمجة المتقدمة",
      description: "تعلم المفاهيم المتقدمة في البرمجة وتطبيقاتها",
      lessons: [
        {
          title: "البرمجة كائنية التوجه",
          icon: "🎨",
          completed: false,
          locked: false,
        },
        {
          title: "معالجة الأخطاء",
          icon: "⚠️",
          completed: false,
          locked: false,
        },
        {
          title: "التزامن والتوازي",
          icon: "⚡",
          completed: false,
          locked: false,
        },
        {
          title: "أنماط التصميم",
          icon: "🏗️",
          completed: false,
          locked: false,
        },
        {
          title: "الاختبار النهائي",
          icon: "🎓",
          completed: false,
          locked: true,
        },
      ],
    },
  ],
};

export const courseDescriptionData = {
  description: {
    paragraphs: [
      "تم تصميم هذه الدورة لتقديم فهم شامل لأساسيات تجربة المستخدم (UX). ستتعلم المبادئ الأساسية للتصميم المتمحور حول المستخدم وكيفية تطبيقها في مشاريع حقيقية.",
      "خلال هذه الدورة، ستتعرف على عملية تصميم UX بأكملها، بدءاً من البحث وتحليل المستخدمين، مروراً بإنشاء النماذج الأولية واختبار المستخدم، وصولاً إلى التصميم النهائي.",
      "ستكتسب المهارات العملية في استخدام أدوات التصميم الرئيسية وتقنيات البحث المختلفة، مما يمكنك من إنشاء تجارب مستخدم جذابة وفعالة.",
    ],
  },
  prerequisites: {
    text: "لا يلزم خبرة سابقة في التصميم",
  },
  topics: [
    "مبادئ UX",
    "بحوث المستخدم",
    "النماذج الأولية",
    "اختبار المستخدم",
    "التصميم التفاعلي",
    "معمارية المعلومات",
  ],
  experts: [
    {
      name: "سارة أحمد",
      role: "مصممة UX رئيسية",
      avatar: "/experts/sarah.jpg",
    },
    {
      name: "محمد علي",
      role: "مدير المنتج",
      avatar: "/experts/mohamed.jpg",
    },
    {
      name: "ليلى حسن",
      role: "باحثة UX",
      avatar: "/experts/layla.jpg",
    },
  ],
};