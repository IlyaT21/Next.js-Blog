import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PostMetadata } from '../utility/PostMetadata';

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      key={props.slug}
      className="w-full max-w-[520px] lg:w-[31%] p-4 border rounded-xl"
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {props.title}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-4">{props.subtitle}</p>
      <p className="text-xl text-muted-foreground mt-2">{props.date}.</p>
      <Button asChild className="mt-4">
        <Link href={`/posts/${props.slug}`}>Read More</Link>
      </Button>
    </div>
  );
}

export default PostPreview