import { Post } from "@/types/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MdxComponents } from "./mdx";

interface PostDetailBodyProps {
  postDetail: Post;
}

const prettyCodeOptions: Options = {
  keepBackground: true,
  theme: {
    dark: "slack-dark",
    light: "slack-dark",
  },
};

const PostDetailBody = ({ postDetail }: PostDetailBodyProps) => {
  return (
    <MDXRemote
      source={postDetail.content}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // 깃허브 Flavored 마크다운 지원 추가 (version downgrade)
            remarkGfm,
            // 이모티콘 접근성 향상
            remarkA11yEmoji,
            // mdx 1줄 개행 지원
            remarkBreaks,
          ],
          rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, prettyCodeOptions],
            rehypeAutolinkHeadings,
          ],
        },
      }}
      components={MdxComponents}
    />
  );
};

export default PostDetailBody;
