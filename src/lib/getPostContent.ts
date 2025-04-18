import fs from "fs";
import path from "path";

// Get content from specific post in posts file
export const getPostContent = (slug: string): string => {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  return content;
};
