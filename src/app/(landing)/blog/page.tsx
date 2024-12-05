import { BlogCategories } from "@/components/blog/blog-categories";
import { BlogList } from "@/components/blog/blog-list";
import { BlogSearchInput } from "@/components/blog/blog-search";

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8 md:flex md:space-x-8">
      <aside className="md:w-1/4 space-y-6">
        <BlogSearchInput />
        <BlogCategories />
      </aside>

      <main className="md:w-3/4">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <BlogList />
      </main>
    </div>
  );
}
