import type { ZodError } from "zod";

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

// Infer the type of the environment variables from the Zod Schema
export type env = z.infer<typeof EnvSchema>;

// eslint-disable-next-line import/no-mutable-exports, ts/no-redeclare
let env: env;

try {
  // Validate the environment variables
  // eslint-disable-next-line node/no-process-env
  env = EnvSchema.parse(process.env);
}
catch (e) {
  const error = e as ZodError;

  // Show the flattened Zod Validation Error in the console
  console.error("❌ Invalid environment variables:");
  console.error(error.flatten().fieldErrors);

  // Exit the process
  process.exit(1);
}

export default env;
