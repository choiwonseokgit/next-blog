import { CATEGORY_COLORS } from "@/const/category-color";
import { Post } from "@/types/post";
import Link from "next/link";

interface PostDetailHeaderProps {
  postDetail: Post;
}

const PostDetailHeader = ({ postDetail }: PostDetailHeaderProps) => {
  return (
    <header className="mt-14 pb-10 mb-10 text-center flex flex-col items-center border-b">
      <h1 className="mb-5 text-4xl">{postDetail.title}</h1>
      <div className="text-base flex items-center">
        <Link
          href={`/blog/${postDetail.category}`}
          className={`font-semibold ${CATEGORY_COLORS[postDetail.category]} no-underline underline-offset-4 hover:underline`}
        >
          {postDetail.categoryName}
        </Link>
        <div className="inline-block h-[14px] w-[1px] bg-gray-500 mx-2 opacity-20" />
        <span className="text-gray-500">{postDetail.dateStr}</span>
      </div>
    </header>
  );
};

export default PostDetailHeader;
