import PortraitPeint from "../../../public/images/portrait-peint.png";
import { BlogCard } from "./blog-card";

interface RelatedPostsProps {
  currentPostSlug: string;
}

export function RelatedPosts({ currentPostSlug }: RelatedPostsProps) {
  const posts = [
    {
      slug: "modern-design-principles",
      title: "Modern Design Principles",
      excerpt: "Understanding the key principles of modern web design...",
      date: "2024-03-15",
      author: {
        name: "John Doe",
        image: PortraitPeint,
      },
      coverImage: PortraitPeint,
      category: "Design",
      readTime: "6 min read",
    },
  ].filter((post) => post.slug !== currentPostSlug);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
