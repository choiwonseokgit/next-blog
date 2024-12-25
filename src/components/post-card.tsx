import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Post } from "@/types/post";
import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <li>
      <Link href={post.url}>
        <Card className="h-full shadow-md transition overflow-hidden hover:shadow-xl dark:border-slate-700 dark:hover:border-white">
          <div className="relative aspect-video w-full rounded-t-md border-b">
            <Image
              src={post.thumbnail}
              alt={`thumbnail-${post.title}`}
              sizes="(max-width: 1000px) 50vw, 450px"
              fill
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <div className="font-semibold text-xs text-sky-600 ">
                {post.categoryName}
              </div>
              <div className="inline-block h-[10px] w-[1px] bg-gray-500 mx-2 opacity-20" />
              <span className="text-gray-500 text-xs">{post.date}</span>
            </div>
            <CardTitle className="text-xl">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{post.desc}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}

export default PostCard;
