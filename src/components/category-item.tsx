import Link from "next/link";
import { Button } from "./ui/button";

interface CategoryItemProps {
  name: string;
  cnt: number;
  href: string;
  isSelected: boolean;
}

function CategoryItem({ isSelected, name, cnt, href }: CategoryItemProps) {
  return (
    <li>
      <Button asChild variant={isSelected ? "default" : "ghost"}>
        <Link href={href}>{`${name} (${cnt})`}</Link>
      </Button>
    </li>
  );
}

export default CategoryItem;
