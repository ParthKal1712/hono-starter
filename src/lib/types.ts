import type { OpenAPIHono, z } from "@hono/zod-openapi";
import type { PinoLogger } from "hono-pino";

// Declaring the App Bindings for our App
export interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

export type AppOpenAPI = OpenAPIHono<AppBindings>;

// Here, we define the generic ZodSchema (Schema that can contain any other Zod Schema)
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
export type ZodSchema = z.ZodUnion | z.AnyZodObject | z.ZodArray<z.AnyZodObject>;
