import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: {
      name: string;
      image: string | StaticImageData;
    };
    coverImage: string | StaticImageData;
    category: string;
    readTime: string;
  };
}

/**
 * A strongly typed component that displays a single blog post.
 *
 * @param {BlogCardProps} props - The props of the component.
 * @param {BlogPost} props.post - The blog post to display.
 * @returns {JSX.Element} The component.
 */
export function BlogCard({ post }: BlogCardProps): JSX.Element {
  const {
    slug,
    title,
    excerpt,
    date,
    author: { name: authorName, image: authorImage },
    coverImage,
    category,
    readTime,
  } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image src={coverImage} alt={title} fill className="object-cover" />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-sm text-muted-foreground">{readTime}</span>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  typeof authorImage === "string"
                    ? authorImage
                    : authorImage.src
                }
                alt={authorName}
              />
              <AvatarFallback>{authorName?.[0] || "?"}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{authorName}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
