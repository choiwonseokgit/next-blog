import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import ThemeProvider from "@/layouts/theme/provider";
import { blogDesc, blogTitle } from "@/config/const";

export const metadata: Metadata = {
  title: blogTitle,
  description: blogDesc,
  icons: {
    icon: "/cws_blog_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="flex min-h-screen flex-col font-pretendard"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
