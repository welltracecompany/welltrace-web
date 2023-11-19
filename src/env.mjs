import { createEnv } from "@t3-oss/env-nextjs";
import * as zod from "zod";

export const env = createEnv({
  server: {
    POSTGRES_HOST: zod.string(),
    POSTGRES_DATABASE: zod.string(),
    POSTGRES_URL_NON_POOLING: zod.string().url(),
    POSTGRES_URL: zod.string().url(),
    POSTGRES_PRISMA_URL: zod.string().url(),
    POSTGRES_USER: zod.string(),
    POSTGRES_PASSWORD: zod.string(),
  },
  client: {},

  experimental__runtimeEnv: {
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  },
});
