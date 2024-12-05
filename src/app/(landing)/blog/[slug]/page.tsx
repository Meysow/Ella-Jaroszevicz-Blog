import { BlogPost } from "@/components/blog/blog-post";
import { CommentsSection } from "@/components/blog/comments/comments-section";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Separator } from "@/components/ui/separator";
import PortraitPeint from "../../../../../public/images/portrait-peint.png";

// This would come from your data source in a real app
const posts = [
  {
    slug: "getting-started-web-development",
    title: "Getting Started with Web Development",
    content: `Web development is an exciting journey that combines creativity with technical skills.
      In this comprehensive guide, we'll explore the fundamental concepts and tools you need
      to begin your web development journey.
      
      First, let's understand the three core technologies:
      - HTML: The backbone of web content
      - CSS: The styling language
      - JavaScript: The programming language of the web
      
      Throughout this post, we'll dive deep into each of these technologies and how they
      work together to create modern web applications.`,
    date: "2024-03-20",
    author: {
      name: "John Doe",
      image: PortraitPeint,
      role: "Software Engineer",
    },
    coverImage: PortraitPeint,
    category: "Web Development",
    readTime: "5 min read",
    tags: ["Web Development", "Programming", "Beginners"],
  },
  {
    slug: "future-of-ai",
    title: "The Future of AI",
    content: `Artificial Intelligence is reshaping our world in unprecedented ways.
      This post explores the latest developments and future possibilities in AI technology.`,
    date: "2024-03-18",
    author: {
      name: "John Doe",
      image: PortraitPeint,
      role: "Software Engineer",
    },
    coverImage: PortraitPeint,
    category: "Artificial Intelligence",
    readTime: "4 min read",
    tags: ["AI", "Technology", "Future"],
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)!;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <BlogPost post={post} />

      <Separator className="my-12" />

      <CommentsSection postSlug={params.slug} />

      <Separator className="my-12" />

      <RelatedPosts currentPostSlug={params.slug} />
    </div>
  );
}
