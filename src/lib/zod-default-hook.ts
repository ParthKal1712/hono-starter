import type { Hook } from "@hono/zod-openapi";

import { UNPROCESSABLE_ENTITY } from "@/constants/http-status-codes";

// This hook will be invoked in ALL ROUTES whenever there is a validation error in Zod
// This will enable us to give consistent errors for all routes
const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: result.error,
      },
      UNPROCESSABLE_ENTITY,
    );
  }
};

export default defaultHook;
