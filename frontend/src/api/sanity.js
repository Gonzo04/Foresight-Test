export function createSanityUrl() {
  const projectId = "YOUR_SANITY_PROJECT_ID_HERE";
  return `https://${projectId}.api.sanity.io/v2023-10-01/data/query/production`;
}
