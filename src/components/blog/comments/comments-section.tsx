"use client";

import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CommentForm } from "./comments-form";
import { CommentList } from "./comments-list";

interface CommentsSectionProps {
  postSlug: string;
}

export function CommentsSection({ postSlug }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const { toast } = useToast();

  const handleCommentAdded = () => {
    toast({
      title: "Comment added",
      description: "Your comment has been posted successfully.",
    });
    // Refresh comments
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Comments</h2>
      <CommentForm postSlug={postSlug} onCommentAdded={handleCommentAdded} />
      <CommentList postSlug={postSlug} />
    </section>
  );
}
