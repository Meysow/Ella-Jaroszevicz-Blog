// src/lib/supabaseClient.ts
import { env } from "@/env.mjs";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL as string,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);
