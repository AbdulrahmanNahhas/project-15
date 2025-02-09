import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PostCard } from "../blog/post-card";

const featuredPosts = [
  {
    id: 1,
    title: "دليل شامل للمنهج السوري الجديد للصف التاسع",
    description:
      "تعرف على التغييرات الرئيسية في المنهج الدراسي للصف التاسع وكيفية الاستعداد لها.",
    date: "٧ شباط ٢٠٢٤",
    image: "/img.png",
    category: "المناهج الدراسية",
  },
  {
    id: 2,
    title: "دورة مجانية: أساسيات البرمجة للمبتدئين",
    description:
      "انضم إلى دورتنا المجانية عبر الإنترنت لتعلم أساسيات البرمجة باستخدام لغة Python.",
    date: "٤ شباط ٢٠٢٤",
    image: "/img.png",
    category: "الدورات التدريبية",
  },
  {
    id: 3,
    title: "كيفية التحضير لامتحانات الشهادة الثانوية",
    description:
      "نصائح وإرشادات للطلاب حول كيفية الاستعداد بفعالية لامتحانات الشهادة الثانوية.",
    date: "٣١ كانون الثاني ٢٠٢٤",
    image: "/img.png",
    category: "الموارد التعليمية",
  },
];

export function Posts() {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8"> مقالات مختارة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        <div className="mt-8 text-center">
          <Link href="/blog" passHref>
            <Button size={"lg"} className={"font-semibold"}>
              الذهاب إلى المدونة
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
