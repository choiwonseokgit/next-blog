import Giscus from "@/components/giscus";
import PostDetailBody from "@/components/post-detail-body";
import PostDetailHeader from "@/components/post-detail-header";
import { baseDomain } from "@/config/const";
import { getAllPostPaths, getPostDetail, parsePostAbstract } from "@/lib/post";
import { Metadata } from "next";

interface Props {
  params: { category: string; slug: string };
}

export function generateStaticParams() {
  const allPostPaths = getAllPostPaths();
  const paramList = allPostPaths
    .map((postPath) => parsePostAbstract(postPath))
    .map(({ category, slug }) => ({ category, slug }));

  return paramList;
}

export async function generateMetadata({
  params: { category, slug },
}: Props): Promise<Metadata> {
  const postDetail = await getPostDetail(category, slug);

  const title = `${postDetail.title} | CWS BLOG`;
  const imageURL = `${baseDomain}${postDetail.thumbnail}`;

  return {
    title,
    description: postDetail.desc,

    openGraph: {
      title,
      description: postDetail.desc,
      type: "article",
      publishedTime: postDetail.date.toISOString(),
      url: `${baseDomain}${postDetail.url}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: postDetail.desc,
      images: [imageURL],
    },
  };
}

const PostDetailPage = async ({ params: { category, slug } }: Props) => {
  const postDetail = await getPostDetail(category, slug);

  return (
    <div className="prose dark:prose-invert mx-auto px-5 max-w-[750px] w-full sm:px-6">
      <PostDetailHeader postDetail={postDetail} />
      <article className="relative">
        <PostDetailBody postDetail={postDetail} />
      </article>
      <hr />
      <Giscus />
    </div>
  );
};

export default PostDetailPage;
