import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Image, { StaticImageData } from "next/image";

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    date: string;
    author: {
      name: string;
      image: string | StaticImageData;
      role: string;
    };
    coverImage: string | StaticImageData;
    category: string;
    readTime: string;
    tags: string[];
  };
}

export function BlogPost({ post }: BlogPostProps) {
  const {
    title,
    content,
    date,
    author: { name: authorName, image: authorImage, role: authorRole },
    coverImage,
    category,
    readTime,
    tags,
  } = post;

  return (
    <article>
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge>{category}</Badge>
          <span className="text-sm text-muted-foreground">{readTime}</span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{title}</h1>

        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={typeof authorImage === "string" ? authorImage : authorImage.src}
              alt={authorName}
            />
            <AvatarFallback>{authorName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{authorName}</div>
            <div className="text-sm text-muted-foreground">
              {authorRole} · {formatDistanceToNow(new Date(date), { addSuffix: true })}
            </div>
          </div>
        </div>
      </header>

      <div className="relative h-[400px] w-full mb-8">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
