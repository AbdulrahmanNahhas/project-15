import Image from 'next/image'

export interface Post {
  id: number
  title: string
  description: string
  date: string
  image: string
  category: string
}

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-4/3 mb-4 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 text-right">
        <div className="text-sm text-muted-foreground">{post.date}</div>
        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground">{post.description}</p>
      </div>
    </div>
  )
}
