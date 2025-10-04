import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GITHUB_CLIENT_ID: z.string().min(1, "Missing GITHUB_CLIENT_ID"),
    GITHUB_CLIENT_SECRET: z.string().min(1, "Missing GITHUB_CLIENT_SECRET"),
    GOOGLE_CLIENT_ID: z.string().min(1, "Missing GOOGLE_CLIENT_ID"),
    GOOGLE_CLIENT_SECRET: z.string().min(1, "Missing GOOGLE_CLIENT_SECRET"),
  },
  client: {},

  experimental__runtimeEnv: process.env,
});
