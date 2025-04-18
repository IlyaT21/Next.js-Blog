import getPostMetadata from "@/components/utility/getPostMetadata";
import PostPreview from "@/components/homepage/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
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
