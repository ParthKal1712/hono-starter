import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

// Read and expand the environment variables
expand(config());

// Define the environment variables schema
const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(9999),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info"),
});

// Validate the environment variables
// eslint-disable-next-line node/no-process-env
export const env = EnvSchema.parse(process.env);
