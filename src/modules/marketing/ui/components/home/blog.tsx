import Link from "next/link";
import { Button } from "@ui//button";
import { PostCard } from "../blog/post-card";
import { featuredPosts } from "@/data/marketing/blog/posts";

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
