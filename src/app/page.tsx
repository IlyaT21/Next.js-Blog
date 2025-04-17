import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug}>
      <Link href={`/posts/${slug}`}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {slug}
        </h3>
      </Link>
    </div>
  ));

  return (
    <div className="flex flex-col items-center w-full max-w-[1360px] mx-auto gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Supercool Blog
      </h1>
      <div className="flex flex-col items-center gap-4">{postPreviews}</div>
    </div>
  );
}
