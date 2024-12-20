import { getPostList } from "@/lib/post";
import React from "react";

async function PostListPage() {
  const postList = await getPostList();

  console.log(postList);

  return <div>PostListPage</div>;
}

export default PostListPage;
