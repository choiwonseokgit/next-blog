import PostListPage from "@/components/post-list-page";
import { getCategoryList } from "@/lib/post";

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await getCategoryList();
  // console.log(categories);
  return categories.map((category) => ({
    category,
  }));
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

async function CategoryPage({ params }: CategoryPageProps) {
  // console.log(params);
  return <PostListPage category={params.category} />;
}

export default CategoryPage;
