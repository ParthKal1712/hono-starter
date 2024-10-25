import { createRouter } from "@/lib/create-app";

import * as handlers from "./users.handlers";
import * as routes from "./users.routes";

// Create a router for this route
const router = createRouter().openapi(routes.list, handlers.list);

// Remember to register this route in app.ts
export default router;
