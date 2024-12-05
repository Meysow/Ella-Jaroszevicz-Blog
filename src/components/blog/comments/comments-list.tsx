"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Comment } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Heart, Reply } from "lucide-react";
import { useEffect, useState } from "react";

interface CommentListProps {
  postSlug: string;
}

export function CommentList({ postSlug }: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?postSlug=${postSlug}`);
        if (!response.ok) {
          const { error } = await response.json();
          if (error === "No comments found") {
            // Handle no comments as a valid case
            setComments([]); // Set comments to an empty array
            return; // Exit early to avoid further processing
          } else {
            throw new Error("Failed to fetch comments");
          }
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid response shape");
        }
        setComments(data);
      } catch (error) {
        console.error(error);
        setComments([]); // Ensure comments are reset to an empty array on other errors
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postSlug]);

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="space-y-6 mt-8">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <Avatar className="h-10 w-10">
            {comment.user.avatar_url ? (
              <AvatarImage
                src={comment.user.avatar_url}
                alt={comment.user.name}
              />
            ) : (
              <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1">
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{comment.user.name}</span>
                <span className="text-sm text-muted-foreground">
                  {comment.created_at
                    ? formatDistanceToNow(new Date(comment.created_at))
                    : "Unknown"}
                </span>
              </div>
              <p className="text-sm">{comment.content}</p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <Heart className="w-4 h-4" />
                <span>{comment.likes || 0}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <Reply className="w-4 h-4" />
                <span>Reply</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
