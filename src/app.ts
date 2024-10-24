import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import index from "@/routes/index.route";

// Create the Hono App using our custom settings
const app = createApp();

// Defining Routes
const routes = [index];

// Traversing through the list of routes and implementing them
routes.forEach((route) => {
  app.route("/", route);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Configure the OpenAPI Documentation route
configureOpenAPI(app);

export default app;
