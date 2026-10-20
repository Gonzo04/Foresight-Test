export const config = {
  port: Number(process.env.PORT ?? 4100),
  auth0Domain: process.env.AUTH0_DOMAIN ?? "YOUR_AUTH0_DOMAIN_HERE",
  auth0Audience: process.env.AUTH0_AUDIENCE ?? "YOUR_AUTH0_AUDIENCE_HERE",
  algoliaAppId: process.env.ALGOLIA_APP_ID ?? "YOUR_ALGOLIA_APP_ID_HERE",
  algoliaSearchKey: process.env.ALGOLIA_SEARCH_KEY ?? "YOUR_ALGOLIA_SEARCH_KEY_HERE",
  resendApiKey: process.env.RESEND_API_KEY ?? "YOUR_RESEND_API_KEY_HERE",
  ablyApiKey: process.env.ABLY_API_KEY ?? "YOUR_ABLY_API_KEY_HERE",
  postmarkToken: process.env.POSTMARK_SERVER_TOKEN ?? "YOUR_POSTMARK_SERVER_TOKEN_HERE",
  brevoApiKey: process.env.BREVO_API_KEY ?? "YOUR_BREVO_API_KEY_HERE"
};
