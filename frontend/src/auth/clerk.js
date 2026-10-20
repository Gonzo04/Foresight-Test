import { Clerk } from "@clerk/clerk-js";

export function startClerk() {
  const clerk = new Clerk("pk_test_YOUR_CLERK_KEY_HERE");
  return clerk.load();
}
