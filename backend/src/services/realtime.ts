import Ably from "ably";
import { config } from "../config.js";

const ably = new Ably.Realtime({ key: config.ablyApiKey });

export function publishRealtimeUpdate() {
  return ably.channels.get("novelty-feed").publish("update", {
    at: Date.now(),
    kind: "library-news"
  });
}
