import { createSearchClient } from "@algolia/client-search";
import { config } from "../config.js";

export async function searchHeadline(query: string) {
  const host = `https://${config.algoliaAppId}-dsn.algolia.net`;
  const client = createSearchClient(config.algoliaAppId, config.algoliaSearchKey, {
    hosts: [{ url: host, accept: "read", protocol: "https" }]
  });

  return client.searchSingleIndex({
    indexName: "novelty_articles",
    searchParams: { query }
  });
}
