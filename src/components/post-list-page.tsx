import CategoryList from "@/components/category-list";
import PostCard from "@/components/post-card";
import {
  getCategoriesCnt,
  getCategoryDetailList,
  getPostList,
} from "@/lib/post";

interface PostListPageProps {
  category?: string;
}

async function PostListPage({ category }: PostListPageProps) {
  const categoryList = await getCategoryDetailList();
  const categoriesCnt = await getCategoriesCnt();
  const postList = await getPostList(category);

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4">
      <CategoryList
        categories={categoryList}
        categoriesCnt={categoriesCnt}
        selectedCategory={category}
      />
      <section>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {postList.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default PostListPage;
