export async function fetchContentfulEntries() {
  const url = "https://cdn.contentful.com/spaces/YOUR_SPACE/entries";
  const response = await fetch(url, {
    headers: { Authorization: "******" }
  });

  if (!response.ok) return [];
  const body = await response.json();
  return body.items ?? [];
}
