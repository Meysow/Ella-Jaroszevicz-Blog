"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BlogCard } from "./blog-card";

import PortraitPeint from "../../../public/images/portrait-peint.png";

const POSTS_PER_PAGE = 6;

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);

  const samplePosts = [
    {
      slug: "getting-started-web-development",
      title: "Getting Started with Web Development",
      excerpt:
        "Learn the fundamentals of web development and start your journey into the world of coding...",
      date: "2024-03-20",
      author: {
        name: "John Doe",
        image: PortraitPeint,
      },
      coverImage: PortraitPeint,
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      slug: "future-of-ai",
      title: "The Future of AI",
      excerpt:
        "Exploring the latest trends and developments in artificial intelligence and machine learning...",
      date: "2024-03-18",
      author: {
        name: "John Doe",
        image: PortraitPeint,
      },
      coverImage: PortraitPeint,
      category: "Artificial Intelligence",
      readTime: "4 min read",
    },
    {
      slug: "modern-design-principles",
      title: "Modern Design Principles",
      excerpt:
        "Understanding the key principles of modern web design and user experience...",
      date: "2024-03-15",
      author: {
        name: "John Doe",
        image: PortraitPeint,
      },
      coverImage: PortraitPeint,
      category: "Design",
      readTime: "6 min read",
    },
  ];

  const totalPageCount = Math.ceil(samplePosts.length / POSTS_PER_PAGE);
  const displayedPosts = samplePosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {displayedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPageCount > 1 && (
        <div className="flex justify-center space-x-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(totalPageCount, prev + 1))}
            disabled={currentPage === totalPageCount}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
