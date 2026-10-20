import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { config } from "./config.js";
import { noveltyRoute } from "./routes/novelty.js";
import { ALGOLIA_DOCS_URL, BREVO_DOCS_DOMAIN } from "./constants.js";

const app = new Hono();
app.route("/api", noveltyRoute);

app.get("/", (c) =>
  c.json({
    message: "foresight-watch-novelty backend",
    marker: ALGOLIA_DOCS_URL,
    docs: BREVO_DOCS_DOMAIN
  })
);

serve({
  fetch: app.fetch,
  port: config.port
});
