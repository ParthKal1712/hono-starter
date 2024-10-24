import type { ZodSchema } from "./types";

// Helper to use in every route to indicate content type and its Zod Schema
function jsonContent<
  T extends ZodSchema,
>(schema: T, description: string) {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
}

export default jsonContent;
