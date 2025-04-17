import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";

type PostPageProps = {
  params: {
    slug: string;
  };
};

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

function PostPage({ params }: PostPageProps) {
  const slug = params.slug;
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

export default PostPage;
