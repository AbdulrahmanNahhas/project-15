import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TablePost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: {
    image: string;
    initials: string;
  };
}

interface PostsTableProps {
  posts: TablePost[];
}

export function PostsTable({ posts }: PostsTableProps) {
  return (
    <Table>
      <TableHeader className="sr-only">
        <TableRow>
          <TableCell>العنوان</TableCell>
          <TableCell>الفئة</TableCell>
          <TableCell>التاريخ</TableCell>
          <TableCell>المؤلف</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id} className="group cursor-pointer h-16 border-dotted border-y-2 !border-b-2">
            <TableCell className="font-medium group-hover:text-primary transition-colors text-right">
              {post.title}
            </TableCell>
            <TableCell className="text-muted-foreground text-right">
              {post.category}
            </TableCell>
            <TableCell className="text-muted-foreground text-right">
              {post.date}
            </TableCell>
            <TableCell className="text-left">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.image} alt="المؤلف" />
                <AvatarFallback>{post.author.initials}</AvatarFallback>
              </Avatar>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}