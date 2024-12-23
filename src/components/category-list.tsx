import { Category } from "@/types/category";
import CategoryItem from "./category-item";

interface CategoryListProps {
  categories: Category[];
  allCategoriesCnt: number;
  selectdCategory?: string;
}

function CategoryList({
  categories,
  allCategoriesCnt,
  selectdCategory = "All",
}: CategoryListProps) {
  return (
    <ul className="flex gap-4 py-6">
      <CategoryItem
        name={"All"}
        isSelected={selectdCategory === "All"}
        href="/blog"
        cnt={allCategoriesCnt}
      />
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          isSelected={selectdCategory === category.name}
          href={`/blog/${category.name}`}
          {...category}
        />
      ))}
    </ul>
  );
}

export default CategoryList;
