import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";
import { Post, PostMatter } from "@/types/post";

export const parsePost = (filePath: string) => {
  const absolutePath = path.join(process.cwd(), filePath);
  const file = fs.readFileSync(absolutePath, "utf8");
  const { data, content } = matter(file);
  const postMatter = data as PostMatter;

  //pathParts
  const pathParts = filePath.split("\\"); // window
  const [category, slug] = [pathParts[2], pathParts[3]];
  const url = `blog/${category}/${slug}`;
  // console.log(category, slug);

  return { ...postMatter, content, url };
};

export const getAllPostPaths = (category?: string) => {
  const folder = category || "**";
  const postPaths: string[] = sync(`${folder}/**/*.mdx`);
  // console.log(postPaths);
  return postPaths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
  const paths: string[] = getAllPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
};
