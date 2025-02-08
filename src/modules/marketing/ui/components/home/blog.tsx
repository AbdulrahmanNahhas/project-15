import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const samplePosts = [
  {
    id: '1',
    title: 'إطلاق خط منتجاتنا الجديد',
    excerpt: 'نحن متحمسون للإعلان عن أحدث مجموعة من المنتجات المبتكرة المصممة لجعل حياتك أسهل.',
    date: '2023-04-15',
    author: 'جين دو',
  },
  {
    id: '2',
    title: 'مستقبل الذكاء الاصطناعي في الأعمال',
    excerpt: 'استكشف كيف يعيد الذكاء الاصطناعي تشكيل مشهد الأعمال وماذا يعني ذلك لشركتك.',
    date: '2023-04-10',
    author: 'جون سميث',
  },
  {
    id: '3',
    title: '5 نصائح لحياة مستدامة',
    excerpt: 'اكتشف طرقًا بسيطة وفعالة لتقليل بصمتك الكربونية وعيش حياة أكثر صداقة للبيئة.',
    date: '2023-04-05',
    author: 'إميلي جرين',
  },
  {
    id: '4',
    title: 'إطلاق خط منتجاتنا الجديد',
    excerpt: 'نحن متحمسون للإعلان عن أحدث مجموعة من المنتجات المبتكرة المصممة لجعل حياتك أسهل.',
    date: '2023-04-15',
    author: 'جين دو',
  },
  {
    id: '5',
    title: 'مستقبل الذكاء الاصطناعي في الأعمال',
    excerpt: 'استكشف كيف يعيد الذكاء الاصطناعي تشكيل مشهد الأعمال وماذا يعني ذلك لشركتك.',
    date: '2023-04-10',
    author: 'جون سميث',
  },
  {
    id: '6',
    title: '5 نصائح لحياة مستدامة',
    excerpt: 'اكتشف طرقًا بسيطة وفعالة لتقليل بصمتك الكربونية وعيش حياة أكثر صداقة للبيئة.',
    date: '2023-04-05',
    author: 'إميلي جرين',
  }
];

export function Posts() {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8"> مقالات مختارة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {samplePosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()} كتبها {post.author}
                </div>
                <Link href={`/blog/${post.id}`} passHref>
                  <Button variant="outline" size="sm">قراءة المزيد</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" passHref>
            <Button size={"lg"} className={"font-semibold"}>الذهاب إلى المدونة</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}