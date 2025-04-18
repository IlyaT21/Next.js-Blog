import React from "react";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/utility/getPostMetadata";
import { getPostContent } from "@/lib/getPostContent";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate posts as static pages
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const content = getPostContent(slug);

  return (
    <div className="flex flex-col items-center w-full max-w-[1360px] mx-auto gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {slug}
      </h1>
      <div className="flex flex-col items-center gap-4">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
