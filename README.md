# Next.js Markdown Blog with Shadcn/UI & Tailwind

A modern, **TypeScript** blog built with the Next.js App Router, **Shadcn/UI**, and **Tailwind CSS**. Posts are written in Markdown, parsed with `gray-matter`, and styled using Tailwind’s Typography plugin. Dynamic metadata (title, description, Open Graph) is generated per post.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Development](#development)
   - [Build & Production](#build--production)
4. [Writing Posts](#writing-posts)
5. [Styling & Components](#styling--components)
   - [Tailwind & Typography](#tailwind--typography)
   - [Shadcn/UI](#shadcnui)
   - [Markdown Renderer](#markdown-renderer)
6. [SEO & Metadata](#seo--metadata)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

- **Next.js App Router** for file-system–based routing and SSG/SSR
- **TypeScript** for type safety
- Markdown-based posts with frontmatter (`title`, `subtitle`, `date`, etc.)
- Dynamic metadata via `generateMetadata` (title, description, Open Graph)
- Styled with **Tailwind CSS** + `@tailwindcss/typography` plugin
- UI components from **Shadcn/UI**
- Custom reusable **`Stack`** layout component
- Responsive design and dark mode support

## Prerequisites

- Node.js v16+ (recommended)
- npm or yarn

## Getting Started

### Installation

```bash
# Clone the repo
git clone git@github.com:IlyaT21/Next.js-Blog.git
cd Next.js-Blog

# Install dependencies
npm install
# or
# yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Build for production
npm run build

# Preview the production build
npm run start
```

---

## Writing Posts

1. Create a new `.md` file under `/posts`, e.g. `my-new-post.md`.
2. Add YAML frontmatter at the top:

   ```markdown
   ---
   title: "My New Post"
   subtitle: "An intro to my new post"
   date: "2025-04-18"
   ---

   # Heading

   Your markdown content here.
   ```

3. Save and view at `http://localhost:3000/posts/my-new-post`.

## Styling & Components

### Tailwind & Typography

- Typography plugin (`@tailwindcss/typography`) provides the `.prose` class for rendered Markdown.
- Dark mode support with `dark:prose-invert`.

```tsx
<div className="prose prose-neutral dark:prose-invert">
  <Markdown>{content}</Markdown>
</div>
```

### Shadcn/UI

- Utility-first, unopinionated components.
- Install via `npm install @shadcn/ui` and configure per docs.

### Markdown Renderer

- Uses `react-markdown` under the hood.
- Customize elements via `components` prop to swap in Shadcn/UI components.

## SEO & Metadata

- `generateStaticParams` defines dynamic routes at build time.
- `generateMetadata` in `[slug]/page.tsx` returns a `Metadata` object:
  ```ts
  export async function generateMetadata({ params }) {
    const post = getPostMetadata().find((p) => p.slug === params.slug);
    return {
      title: post.title,
      description: post.subtitle,
      openGraph: {
        title: post.title,
        description: post.subtitle,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.subtitle,
      },
    };
  }
  ```

## Deployment

- Deploy on Vercel for zero-configuration: push to GitHub and import repo.
- Ensure `NEXT_PUBLIC_BASE_URL` is set for absolute URL generation if needed.

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m 'feat: describe your change'`
4. Push branch: `git push origin feature/name`
5. Open a Pull Request

## License

This project is open source under the [MIT License](LICENSE).
