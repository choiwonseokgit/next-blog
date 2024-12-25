import { Category } from "@/types/category";
import CategoryItem from "./category-item";

interface CategoryListProps {
  categories: Category[];
  categoriesCnt: number;
  selectedCategory?: string;
}

function CategoryList({
  categories,
  categoriesCnt,
  selectedCategory = "All",
}: CategoryListProps) {
  //console.log(selectedCategory);
  return (
    <ul className="flex gap-4 py-6">
      <CategoryItem
        name={"All"}
        isSelected={selectedCategory === "All"}
        href="/blog"
        cnt={categoriesCnt}
      />
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          isSelected={selectedCategory === category.path}
          href={`/blog/${category.path}`}
          {...category}
        />
      ))}
    </ul>
  );
}

export default CategoryList;
