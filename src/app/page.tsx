import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
import { Button } from "@/components/ui/button";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div
      key={post.slug}
      className="w-full max-w-[520px] lg:w-[31%] p-4 border rounded-xl"
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {post.title}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-4">{post.subtitle}</p>
      <p className="text-xl text-muted-foreground mt-2">{post.date}.</p>
      <Button asChild className="mt-4">
        <Link href={`/posts/${post.slug}`}>Read More</Link>
      </Button>
    </div>
  ));

  return (
    <div className="flex flex-col items-center w-full max-w-[1360px] mx-auto gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Supercool Blog
      </h1>
      <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-4 flex-wrap gap-y-12">
        {postPreviews}
      </div>
    </div>
  );
}
