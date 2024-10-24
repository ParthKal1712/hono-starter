import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import packageJson from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  // Expose the OpenAPI Documentation on the /doc route
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      // We want the title and version to be consistent with the package.json
      title: packageJson.name,
      version: packageJson.version,
    },
  });

  // Point the Scalar OpenAPI Reference Spec towards our OpenAPI Spec hosted at "/doc"
  app.get(
    "/reference",
    apiReference({
      spec: {
        url: "/doc",
      },
      theme: "kepler",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
    }),
  );
}
