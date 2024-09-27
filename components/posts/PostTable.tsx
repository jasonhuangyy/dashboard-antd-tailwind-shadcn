import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import posts from "@/data/posts";
import { Post } from "@/types/Post";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PostPagenaton from "./PostPagenation";

type PostTableProps = {
  title?: string;
  limit?: number;
  pagenation?: boolean;
};
const PostTable = ({ title, limit, pagenation }: PostTableProps) => {
  const sortedPosts: Post[] = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <>
      {/* <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3> */}
      <Card className="bg-slate-50 dark:bg-slate-800">
        <CardHeader>
          <CardTitle>{title ? title : "Posts"}</CardTitle>
          <CardDescription>
            View all posts and manage them from here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell text-right">
                  Date
                </TableHead>
                <TableHead>view</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.title}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {post.author}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    {post.date}
                  </TableCell>
                  <TableCell>
                    <Link href={`/posts/edit/${post.id}`}>
                      <button className="bg-primary  text-secondary font-bold py-2 px-4 rounded text-xs">
                        Edit
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {pagenation && <PostPagenaton />}
        </CardContent>
      </Card>
    </>
  );
};

export default PostTable;
