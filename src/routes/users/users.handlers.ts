import type { AppRouteHandler } from "@/lib/types";

import type { ListRoute } from "./users.routes";

export const list: AppRouteHandler<ListRoute> = (c) => {
  return c.json([{
    name: "Learn Hono",
    enabled: true,
  }]);
};
