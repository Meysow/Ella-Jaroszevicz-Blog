import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    SANITY_API_READ_TOKEN: z
      .string()
      .min(1, "SANITY_API_READ_TOKEN is required"),
  },

  /**
   * Client-side environment variables (prefixed with NEXT_PUBLIC_)
   */
  client: {
    NEXT_PUBLIC_APP_URL: z
      .string()
      .url("NEXT_PUBLIC_APP_URL must be a valid URL"),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z
      .string()
      .min(1, "NEXT_PUBLIC_SANITY_PROJECT_ID is required"),
    NEXT_PUBLIC_SANITY_DATASET: z
      .string()
      .min(1, "NEXT_PUBLIC_SANITY_DATASET is required"),
    NEXT_PUBLIC_SANITY_API_VERSION: z
      .string()
      .default("2024-11-14")
      .transform((val) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) {
          throw new Error("Invalid API version format. Use YYYY-MM-DD");
        }
        return val;
      }),
    NEXT_PUBLIC_SUPABASE_URL: z
      .string()
      .url("NEXT_PUBLIC_SUPABASE_URL must be a valid URL"),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z
      .string()
      .min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  },

  /**
   * Mapping runtime environment variables from process.env
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
});
