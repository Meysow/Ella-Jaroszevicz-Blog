"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface CommentFormProps {
  postSlug: string;
  onCommentAdded: () => void;
}

export function CommentForm({ postSlug, onCommentAdded }: CommentFormProps) {
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      if (!comment) {
        throw new Error("Comment is empty");
      }

      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment, postSlug }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      setComment("");
      onCommentAdded();
      toast({
        title: "Success",
        description: "Your comment has been posted.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <Textarea
        placeholder="Leave a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="mb-4"
        required
      />
      <Button type="submit" disabled={submitting}>
        {submitting ? "Posting..." : "Post Comment"}
      </Button>
    </form>
  );
}
