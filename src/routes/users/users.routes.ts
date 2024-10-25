import { createRoute, z } from "@hono/zod-openapi";

import { OK } from "@/constants/http-status-codes";
import jsonContent from "@/lib/json-content-helper";

const tags = ["Users"];

// The root of the "/users" route will return a list of all users
export const list = createRoute({
  path: "/users",
  method: "get",
  tags,
  responses: {
    [OK]: jsonContent(z.array(z.object({
      name: z.string(),
      enabled: z.boolean(),
    })), "List of Users."),
  },
});

// We will export a type definition of the Route so that we can use it to validate our handlers
export type ListRoute = typeof list;
