import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";
import { Post, PostMatter } from "@/types/post";
import { Category } from "@/types/category";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const getPostDetail = async (category: string, slug: string) => {
  const postDetail = await parsePost(
    `src/posts/${category}/${slug}/content.mdx`
  );
  return postDetail;
};

//post parse
export const parsePost = async (filePath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(filePath);
  const postDetail = await parsePostDetail(filePath);

  //console.log(postAbstract);

  return { ...postDetail, ...postAbstract };
};

export const parsePostDetail = async (filePath: string) => {
  const normalizedPath = path.normalize(filePath);
  const absolutePath = path.join(process.cwd(), normalizedPath);
  const file = fs.readFileSync(absolutePath, "utf8");
  const { data, content } = matter(file);
  const postMatter = data as PostMatter;
  const date = format(postMatter.date, "yyyy.MM.dd", { locale: ko });

  return { ...postMatter, date, content };
};

export const parsePostAbstract = (filePath: string) => {
  //pathParts
  const normalizedPath = path.normalize(filePath);
  const pathParts = normalizedPath.split(path.sep);
  const [category, slug] = [pathParts[2], pathParts[3]];
  const categoryName = makeCategoryName(category);
  const url = `/blog/${category}/${slug}`;
  // console.log(category, slug);

  console.log(url);
  console.log(path.normalize(url));

  return { url, category, categoryName, slug };
};

export const getAllPostPaths = (category?: string) => {
  const folder = (category && `**/${category}`) || "**";
  const postPaths: string[] = sync(`${folder}/**/*.mdx`);
  console.log("postPaths", postPaths);
  return postPaths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
  const paths: string[] = getAllPostPaths(category);
  //console.log(paths);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
};

// 모든 카테고리 목록 조회
export const getCategoryDetailList = async (): Promise<Category[]> => {
  const categoryPaths: string[] = fs.readdirSync(
    path.join(process.cwd(), "src/posts")
  );

  const categories: Category[] = categoryPaths.map((category) => ({
    name: makeCategoryName(category),
    path: category,
    cnt: sync(`**/${category}/**/*.mdx`).length,
  }));

  return categories;
};

export const getCategoryList = async () => {
  const categoryPaths: string[] = fs.readdirSync(
    path.join(process.cwd(), "src/posts")
  );

  return categoryPaths;
};

export const getCategoriesCnt = async () => {
  return getAllPostPaths().length;
};

export const makeCategoryName = (category: string) => {
  const name = category
    .split("_")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");

  return name;
};
