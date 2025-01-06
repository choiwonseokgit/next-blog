import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import ThemeProvider from "@/layouts/theme/provider";
import {
  baseDomain,
  blogDesc,
  blogThumbnailURL,
  blogTitle,
} from "@/config/const";

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogTitle,
  description: blogDesc,
  icons: {
    icon: "/cws_blog_logo_small.png",
  },
  openGraph: {
    title: blogTitle,
    description: blogDesc,
    siteName: blogTitle,
    images: [blogThumbnailURL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDesc,
    images: [blogThumbnailURL],
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
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
