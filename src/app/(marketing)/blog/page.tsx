import { Button } from "@/components/ui/button"
import { PostCard } from "@/modules/marketing/ui/components/blog/post-card"
import { PostsTable } from "@/modules/marketing/ui/components/blog/posts-table"

// Categories
const categories = ["جميع الفئات", "المناهج الدراسية", "الدورات التدريبية", "الموارد التعليمية", "أخبار التعليم"]

// Posts Data
const featuredPosts = [
  {
    id: 1,
    title: "دليل شامل للمنهج السوري الجديد للصف التاسع",
    description: "تعرف على التغييرات الرئيسية في المنهج الدراسي للصف التاسع وكيفية الاستعداد لها.",
    date: "٧ شباط ٢٠٢٤",
    image: "/img.png",
    category: "المناهج الدراسية",
  },
  {
    id: 2,
    title: "دورة مجانية: أساسيات البرمجة للمبتدئين",
    description: "انضم إلى دورتنا المجانية عبر الإنترنت لتعلم أساسيات البرمجة باستخدام لغة Python.",
    date: "٤ شباط ٢٠٢٤",
    image: "/img.png",
    category: "الدورات التدريبية",
  },
  {
    id: 3,
    title: "كيفية التحضير لامتحانات الشهادة الثانوية",
    description: "نصائح وإرشادات للطلاب حول كيفية الاستعداد بفعالية لامتحانات الشهادة الثانوية.",
    date: "٣١ كانون الثاني ٢٠٢٤",
    image: "/img.png",
    category: "الموارد التعليمية",
  },
]
const tablePosts = [
  {
    id: 1,
    title: "إطلاق تطبيق جديد للتعلم الذاتي في مادة الرياضيات",
    category: "الموارد التعليمية",
    date: "٢٤ كانون الثاني ٢٠٢٤",
    author: {
      image: "/placeholder.svg",
      initials: "أح",
    },
  },
  {
    id: 2,
    title: "ورشة عمل افتراضية: تقنيات التدريس الحديثة للمعلمين",
    category: "الدورات التدريبية",
    date: "١٦ كانون الثاني ٢٠٢٤",
    author: {
      image: "/placeholder.svg",
      initials: "سم",
    },
  },
  {
    id: 3,
    title: "تحديث المناهج الدراسية للمرحلة الابتدائية: ما الجديد؟",
    category: "المناهج الدراسية",
    date: "٩ كانون الثاني ٢٠٢٤",
    author: {
      image: "/placeholder.svg",
      initials: "رق",
    },
  },
  {
    id: 4,
    title: "نصائح للطلاب: كيفية إدارة الوقت بفعالية أثناء الدراسة",
    category: "نصائح دراسية",
    date: "٢ كانون الثاني ٢٠٢٤",
    author: {
      image: "/placeholder.svg", 
      initials: "مع"
    }
  },
  {
    id: 5,
    title: "تقرير: تأثير التعلم عن بعد على التحصيل الدراسي",
    category: "الدراسات والأبحاث",
    date: "٢٨ كانون الأول ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "نح"
    }
  },
  {
    id: 6,
    title: "دليل شامل لاختيار التخصص الجامعي المناسب",
    category: "التوجيه المهني",
    date: "٢١ كانون الأول ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "عك"
    }
  },
  {
    id: 7,
    title: "مهارات القرن ٢١: ما يحتاج الطلاب معرفته",
    category: "المهارات الحياتية",
    date: "١٥ كانون الأول ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "لس"
    }
  },
  {
    id: 8,
    title: "تطوير مناهج العلوم: نحو تعليم تفاعلي أفضل",
    category: "المناهج الدراسية",
    date: "٨ كانون الأول ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "هـم"
    }
  },
  {
    id: 9,
    title: "استراتيجيات التعلم النشط في الفصول الدراسية",
    category: "طرق التدريس",
    date: "١ كانون الأول ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "رب"
    }
  },
  {
    id: 10,
    title: "دمج التكنولوجيا في التعليم: تحديات وحلول",
    category: "التعليم الرقمي",
    date: "٢٥ تشرين الثاني ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "طح"
    }
  },
  {
    id: 11,
    title: "برنامج تدريبي جديد للمعلمين في المدارس الثانوية",
    category: "الدورات التدريبية",
    date: "١٨ تشرين الثاني ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "كم"
    }
  },
  {
    id: 12,
    title: "تقييم نظام الامتحانات الجديد: النتائج الأولية",
    category: "التقييم والاختبارات",
    date: "١٢ تشرين الثاني ٢٠٢٣",
    author: {
      image: "/placeholder.svg",
      initials: "صع"
    }
  }
]

function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-right" >
      <div className="mb-8">
        <div className="text-sm text-primary mb-2">المدونة</div>
        <h1 className="text-4xl font-bold mb-4">أخبار ورؤى تعليمية</h1>
        <p className="text-muted-foreground">
          تعرف على آخر المستجدات في المناهج السورية، والدورات التدريبية، وأخبار التعليم في سوريا.
        </p>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "جميع الفئات" ? "default" : "secondary"}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <PostsTable posts={tablePosts} />
    </div>
  )
}

export default BlogPage;