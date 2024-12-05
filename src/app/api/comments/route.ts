import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function postComment(request: Request) {
  const { content, postSlug: slug } = (await request.json()) as {
    content: string;
    postSlug: string;
  };
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!content) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 });
  }

  if (!slug) {
    return NextResponse.json(
      { error: "postSlug is required" },
      { status: 400 }
    );
  }

  const { data, error: insertError } = await supabase
    .from("comments")
    .insert([{ content, slug, userId: session?.user?.id }])
    .select("*, user:profiles(name, avatar_url)");

  if (insertError) {
    return NextResponse.json({ error: insertError?.message }, { status: 500 });
  }

  return NextResponse.json(data?.[0], { status: 201 });
}

export async function getComments(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const postSlug = requestUrl.searchParams.get("postSlug");

    if (!postSlug) {
      return NextResponse.json(
        { error: "postSlug is required" },
        { status: 400 }
      );
    }

    const supabase = createRouteHandlerClient({ cookies });

    const { data: comments, error } = await supabase
      .from("comments")
      .select("*, user:profiles(name, avatar_url)")
      .eq("postSlug", postSlug)
      .order("createdAt", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!comments) {
      return NextResponse.json(
        { error: "Failed to retrieve comments" },
        { status: 500 }
      );
    }

    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
