import Pusher from "pusher-js";

export function connectRealtime() {
  return new Pusher("YOUR_PUSHER_KEY_HERE", {
    cluster: "eu"
  });
}
