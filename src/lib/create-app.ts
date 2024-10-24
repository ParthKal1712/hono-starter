import { OpenAPIHono } from "@hono/zod-openapi";

import notFound from "@/middleware/not-found";
import onError from "@/middleware/on-error";
import { pinoLogger } from "@/middleware/pino-logger";

import type { AppBindings } from "./types";

import defaultHook from "./zod-default-hook";

export function createRouter() {
  // Create a blank Hono app with OpenAPIHono
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use(pinoLogger());

  // Custom 'not-found' and 'error' handlers
  app.notFound(notFound);
  app.onError(onError);

  return app;
}
