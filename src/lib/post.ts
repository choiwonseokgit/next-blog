import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";

export const parsePost = (filePath: string) => {
  const absolutePath = path.join(process.cwd(), filePath);
  const file = fs.readFileSync(absolutePath, "utf8");
  const { data, content } = matter(file);

  return { data, content };
};

export const getAllPostPaths = (category?: string) => {
  const folder = category || "**";
  const postPaths: string[] = sync(`${folder}/**/*.mdx`);
  return postPaths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string) => {
  const paths: string[] = getAllPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
};
