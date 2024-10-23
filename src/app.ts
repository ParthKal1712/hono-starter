import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";

import notFound from "@/middleware/not-found";
import onError from "@/middleware/on-error";
import { pinoLogger } from "@/middleware/pino-logger";

// Declaring the App Bindings for our App
interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

// Create an Hono app with OpenAPIHono
const app = new OpenAPIHono<AppBindings>();
app.use(pinoLogger());

// Defining Routes
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Custom 'not-found' and 'error' handlers
app.notFound(notFound);
app.onError(onError);

export default app;
