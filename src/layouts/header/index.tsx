import Link from "next/link";
import ThemeSwitchBtn from "../theme/switch-btn";
import LogoImg from "./logo-img";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

function Header() {
  return (
    <nav className="flex justify-center border-b">
      <div className="flex justify-between items-center max-w-[1200px] px-4 py-0 flex-1">
        <Link href="/">
          <div className="relative md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
            <LogoImg />
          </div>
        </Link>
        <div className="flex gap-2">
          <ThemeSwitchBtn />
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/choiwonseokgit" target="_blank">
              <Github className="size-[1.2rem]" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
