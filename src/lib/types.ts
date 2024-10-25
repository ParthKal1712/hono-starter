import type { OpenAPIHono, RouteConfig, RouteHandler, z } from "@hono/zod-openapi";
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

// This is a custom type that initializes a Route Handler with our App's specific Bindings (ie. types).
// This definition basically says:
// 1. Define a type called 'AppRouter' that takes in a generic type 'R', that must always extend RouteConfig
//    (ie. must always contain a Route Definition)
// 2. This type 'ApppRouter' would be equal to using a 'RouteHandler', and giving it our AppBindings,
//    and 'R', a generic we take as an input
export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;
