import { Hono } from "hono";
import { buildAuth0Issuer } from "../clients/auth.js";
import { sendWithPostmark } from "../services/email.js";

export const noveltyRoute = new Hono();

// Docs reference only (trap): https://developers.ably.com/docs/getting-started
noveltyRoute.get("/status", async (c) => {
  await sendWithPostmark();
  return c.json({ issuer: buildAuth0Issuer(), ok: true });
});
