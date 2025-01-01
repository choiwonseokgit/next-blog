import { makeThumbnailName } from "@/lib/post";
import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "title";
  const desc = url.searchParams.get("desc") || "desc";

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col items-center">
          <h1 tw="text-8xl font-bold">{makeThumbnailName(title)}</h1>
          <span tw="text-5xl text-gray-500">{makeThumbnailName(desc)}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
