import { createRoute, z } from "@hono/zod-openapi";

import * as HttpStatusCodes from "@/constants/http-status-codes";
import { createRouter } from "@/lib/create-app";
import jsonContent from "@/lib/json-content-helper";

const router = createRouter().openapi(
  // Document the route first
  createRoute({
    // We can use tags to define what heads this route should be a part of, in the Docs
    tags: ["Index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCodes.OK]: jsonContent(z.object({ message: z.string() }), "Test Route"),
    },
  }),
  // Then implement the route
  (c) => {
    return c.json({ message: "Hello World!" }, 200);
  },
);

export default router;
