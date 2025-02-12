import CourseHeader from "@/modules/app/ui/components/courses/course/course-header";
import CourseLevels from "@/modules/app/ui/components/courses/course/course-levels";
import CourseSidebar from "@/modules/app/ui/components/courses/course/course-sidebar";
import CourseDescription from "@/modules/app/ui/components/courses/course/course-description";

const courseLevelsData = {
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

const courseDescriptionData = {
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

const CoursePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* رأس الصفحة */}
      <CourseHeader
        title="أساسيات تجربة المستخدم"
        description="إتقان أساسيات UX لبناء أساس قوي في المبادئ وسير العمل المتمحور حول المستخدم ، مما يساعدك على المساهمة بفعالية في تطوير المنتج وإنشاء تجارب مستخدم أفضل."
        badge="مبتدئ"
        duration={6}
        lessons={25}
        rating={4.8}
        students={122084}
        reviews={129}
      />

      {/* محتوى الدورة */}
      <div className="grid lg:grid-cols-3 gap-8 relative">
        <div className="space-y-12 lg:col-span-2 pl-6">
          <CourseLevels levels={courseLevelsData.levels} />
        </div>

        {/* الشريط الجانبي */}
        <CourseSidebar lastUpdate="7 فبراير 2025" />
      </div>

      {/* معلومات الدورة */}
      <CourseDescription
        description={courseDescriptionData.description}
        prerequisites={courseDescriptionData.prerequisites}
        topics={courseDescriptionData.topics}
        experts={courseDescriptionData.experts}
      />
    </div>
  );
};

export default CoursePage;
