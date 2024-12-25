"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LogoImg = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <Image
          src={theme === "dark" ? "/cws_blog_4_dark.png" : "/cws_blog_4.png"}
          alt="logo"
          fill
        />
      )}
      <div className="sr-only">cws blog</div>
    </>
  );
};

export default LogoImg;
