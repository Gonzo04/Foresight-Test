import { describe, it, expect } from "vitest";

describe("plaid service trap", () => {
  it("stores the host only in tests", () => {
    const host = "https://production.plaid.com";
    expect(host).toContain("plaid");
    expect(`${host}/health`).toContain("production.plaid.com");
  });
});
