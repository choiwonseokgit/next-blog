import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <nav className="border-b">
      <div className="flex justify-between mx-10 px-52 py-5">
        <Button asChild variant="outline">
          <Link href="/">CWS[Blog]</Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">button1</Button>
          <Button variant="ghost">button2</Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
