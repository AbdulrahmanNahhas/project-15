import { Button } from "@ui//button"
import { categories, featuredPosts, tablePosts } from "@/data/marketing/blog/posts";
import { PostCard } from "@/modules/marketing/ui/components/blog/post-card"
import { PostsTable } from "@/modules/marketing/ui/components/blog/posts-table"

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