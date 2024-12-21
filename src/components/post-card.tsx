import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Post } from "@/types/post";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface PostCardProps extends React.ComponentProps<typeof Card> {
  post: Post;
}

function PostCard({ post, className, ...props }: PostCardProps) {
  return (
    <Link href={post.url}>
      <li>
        <Card
          className={cn(
            "w-full h-full shadow-md transition hover:shadow-xl",
            className
          )}
          {...props}
        >
          <div className="relative aspect-video w-full rounded-t-md border-b">
            <Image
              src={post.thumbnail}
              alt={`thumbnail-${post.title}`}
              sizes="(max-width: 1000px) 50vw, 450px"
              fill
            />
          </div>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>card content</p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </li>
    </Link>
  );
}

export default PostCard;
