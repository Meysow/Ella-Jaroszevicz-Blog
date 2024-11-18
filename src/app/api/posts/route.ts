// app/api/posts/route.ts
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

// Define the GROQ query to fetch posts
const query = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "author": author->name,
    "authorImage": author->image,
    "category": category->title,
    excerpt,
    mainImage
  }
`;

export async function GET() {
  try {
    // Fetch posts from Sanity using the client
    const posts = await client.fetch(query);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
