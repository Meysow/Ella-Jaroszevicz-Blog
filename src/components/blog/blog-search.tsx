"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function BlogSearchInput() {
  return (
    <div className="relative">
      <h2 className="text-lg font-semibold mb-4">Search Blog Posts</h2>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          aria-label="Search blog posts"
          placeholder="Search blog posts..."
          className="pl-8"
        />
      </div>
    </div>
  );
}
