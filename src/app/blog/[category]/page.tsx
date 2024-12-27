import PostListPage from "@/components/post-list-page";
import { blogTitle } from "@/config/const";
import { getCategoryList, makeCategoryName } from "@/lib/post";
import { Metadata } from "next";

interface Props {
  params: {
    category: string;
  };
}

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await getCategoryList();

  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params: { category },
}: Props): Promise<Metadata> {
  const cg = makeCategoryName(category);
  const title = `${cg} | ${blogTitle}`;
  // const url = `${baseDomain}/${category}`;

  return {
    title,
    openGraph: {
      title,
      // url,
      // images: [blogThumbnailURL],
    },
    twitter: {
      title,
      // images: [blogThumbnailURL],
    },
  };
}

async function CategoryPage({ params }: Props) {
  return <PostListPage category={params.category} />;
}

export default CategoryPage;
