import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex justify-center border-b">
      <div className="flex justify-between max-w-[1200px] px-4 py-5 flex-1">
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
