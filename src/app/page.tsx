import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

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
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {post.title}
        </h3>
      </Link>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{post.subtitle}</p>
      <p className="text-xl text-muted-foreground">{post.date}.</p>
    </div>
  ));

  return (
    <div className="flex flex-col items-center w-full max-w-[1360px] mx-auto gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Supercool Blog
      </h1>
      <div className="flex flex-col items-start gap-4">{postPreviews}</div>
    </div>
  );
}
