import PostDetailBody from "@/components/post-detail-body";
import PostDetailHeader from "@/components/post-detail-header";
import { getAllPostPaths, getPostDetail, parsePostAbstract } from "@/lib/post";

export function generateStaticParams() {
  const allPostPaths = getAllPostPaths();
  const paramList = allPostPaths
    .map((postPath) => parsePostAbstract(postPath))
    .map(({ category, slug }) => ({ category, slug }));

  return paramList;
}

interface PostDetailProps {
  params: { category: string; slug: string };
}

const PostDetailPage = async ({
  params: { category, slug },
}: PostDetailProps) => {
  // console.log(category, slug);
  const postDetail = await getPostDetail(category, slug);
  // console.log(postDetail);

  return (
    <div className="prose dark:prose-invert mx-auto px-5 max-w-[750px]">
      <PostDetailHeader postDetail={postDetail} />
      <article>
        <PostDetailBody postDetail={postDetail} />
      </article>
    </div>
  );
};

export default PostDetailPage;
