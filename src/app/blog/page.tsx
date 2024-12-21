import PostCard from "@/components/post-card";
import { getPostList } from "@/lib/post";
import React from "react";

async function PostListPage() {
  const postList = await getPostList();

  console.log(postList);

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4">
      categoryList
      <section className="flex justify-center">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {postList.map((post) => (
            <PostCard key={`${post.url}`} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default PostListPage;
