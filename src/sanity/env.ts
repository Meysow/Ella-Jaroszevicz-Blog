import { env } from "@/env.mjs";

export const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-11-14";
export const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
