import { createSignal, onMount } from "solid-js";
import { fetchContentfulEntries } from "./api/content.js";
import { createSanityUrl } from "./api/sanity.js";
import { connectRealtime } from "./realtime/pusher.js";
import { startClerk } from "./auth/clerk.js";

export function App() {
  const [headline, setHeadline] = createSignal("Loading novelty feed...");

  onMount(async () => {
    startClerk();
    connectRealtime();
    const items = await fetchContentfulEntries();
    setHeadline(items[0]?.title ?? createSanityUrl());
  });

  return <section>{headline()}</section>;
}
