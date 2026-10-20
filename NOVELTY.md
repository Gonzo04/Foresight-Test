# Novelty inventory

## Libraries

| app | ecosystem | name | exact version | latest version today | kind (a-f) | source code URL |
| --- | --- | --- | --- | --- | --- | --- |
| backend | npm | hono | 4.6.10 | 4.13.13 | a | https://github.com/honojs/hono |
| backend | npm | @hono/node-server | 1.13.7 | 2.1.5 | d | https://github.com/honojs/node-server |
| backend | npm | got | 11.8.6 | 16.1.0 | a | https://github.com/sindresorhus/got |
| backend | npm | jsonwebtoken | 7.4.3 | 9.0.3 | a | https://github.com/auth0/node-jsonwebtoken |
| backend | npm | uuid | 7.0.3 | 14.0.3 | a | https://github.com/uuidjs/uuid |
| backend | npm | resend | 4.0.0 | 6.34.1 | a | https://github.com/resend/resend-node |
| backend | npm | ably | 2.8.0 | 2.29.0 | a | https://github.com/ably/ably-pubsub-js |
| backend | npm | @algolia/client-search | 5.9.0 | 5.60.0 | d | https://github.com/algolia/algoliasearch-client-javascript |
| backend | npm | valibot | 0.42.1 | 1.5.0 | a | https://github.com/open-circle/valibot |
| backend | npm | srht | 0.2.0 | 0.2.0 | c | https://hg.sr.ht/~pmc/node-srht |
| backend | npm | noveltylab-platform-integrations | 1.1.5 | 1.1.5 | e | (no repository field in npm registry) |
| frontend | npm | solid-js | 1.8.21 | 1.9.17 | a | https://github.com/solidjs/solid |
| frontend | npm | @solidjs/router | 0.14.10 | 1.0.0 | d | https://github.com/solidjs/solid-router |
| frontend | npm | pusher-js | 8.4.0 | 8.6.0 | a | https://github.com/pusher/pusher-js |
| frontend | npm | @clerk/clerk-js | 4.73.2 | 6.39.1 | a | https://github.com/clerk/javascript |
| frontend | npm | contentful | 11.1.2 | 11.12.10 | a | https://github.com/contentful/contentful.js |
| frontend | npm | @sanity/client | 6.21.3 | 8.10.0 | a | https://github.com/sanity-io/client |
| frontend | npm | nanoid | 3.3.7 | 6.0.2 | a | https://github.com/ai/nanoid |
| frontend | npm | validator | 13.12.0 | 13.15.15 | b | https://github.com/validatorjs/validator.js |
| frontend | npm | rollup | 4.24.0 | 4.64.12 | a | https://github.com/rollup/rollup |
| frontend | npm | @rollup/plugin-node-resolve | 15.3.0 | 16.0.3 | d | https://github.com/rollup/plugins |
| android | maven | io.ktor:ktor-bom | 2.0.3 | 3.6.0 | f | https://github.com/ktorio/ktor (POM has `<scm>`) |
| android | maven | io.arrow-kt:arrow-core | 1.1.5 | 2.3.0-alpha.7 | f | https://github.com/arrow-kt/arrow (POM has `<scm>`) |
| android | maven | org.kodein.di:kodein-di | 7.22.0 | 7.33.0 | f | http://kodein.org (POM has `<scm>`) |
| android | maven | co.touchlab:kermit | 2.0.4 | 2.2.0 | f | https://github.com/touchlab/Kermit (POM has `<scm>`) |
| android | maven | io.github.aakira:napier | 2.7.1 | 2.7.1 | f | https://github.com/aakira/Napier (POM has `<scm>`) |
| android | maven | com.russhwolf:multiplatform-settings-no-arg | 1.1.1 | 1.3.0 | f | https://github.com/russhwolf/multiplatform-settings (POM has `<scm>`) |
| android | maven | org.jsoup:jsoup | 1.17.2 | 1.23.2 | f | https://jsoup.org/ (POM has `<scm>`) |
| android | maven | com.auth0:java-jwt | 3.19.4 | 4.6.2 | f | https://github.com/auth0/java-jwt (POM has `<scm>`) |
| android | maven | org.slf4j:slf4j-api | 2.0.13 | 2.1.0-alpha1 | f | https://search.maven.org/artifact/org.slf4j/slf4j-api/2.0.13/jar (POM has no `<scm>`) |
| android | maven | ch.qos.logback:logback-classic | 1.5.6 | 1.5.20 | f | https://search.maven.org/artifact/ch.qos.logback/logback-classic/1.5.6/jar (POM has no `<scm>`) |
| android | maven | com.onesignal:OneSignal | 4.8.6 | 5.10.2 | f | https://github.com/one-signal/OneSignal-Android-SDK (POM has `<scm>`) |
| android | maven | com.mixpanel.android:mixpanel-android | 8.2.0 | 8.11.1 | f | https://github.com/mixpanel/mixpanel-android (POM has `<scm>`) |

## Services

| app | service name | how it is used (1-5) | file and line | real API host |
| --- | --- | --- | --- | --- |
| backend | Postmark | 1 (direct HTTP call) | `/backend/src/services/email.ts:7` | `api.postmarkapp.com` |
| backend | Brevo | 1 (direct HTTP call) | `/backend/src/services/email.ts:20` | `api.brevo.com` |
| backend | Resend | 2 (official client library only) | `/backend/src/services/email.ts:5` | `api.resend.com` |
| backend | Ably | 2 (official client library only) | `/backend/src/services/realtime.ts:4` | `rest.ably.io` |
| backend | Auth0 | 3 (env variable only) | `/backend/src/config.ts:3` | `YOUR_AUTH0_DOMAIN_HERE` |
| backend | Algolia | 4 (host built from variable) | `/backend/src/services/search.ts:5` | `{APP_ID}-dsn.algolia.net` |
| frontend | Contentful | 1 (direct HTTP call) | `/frontend/src/api/content.js:2` | `cdn.contentful.com` |
| frontend | Sanity | 4 (host built from variable) | `/frontend/src/api/sanity.js:3` | `{PROJECT_ID}.api.sanity.io` |
| frontend | Pusher | 2 (official client library only) | `/frontend/src/realtime/pusher.js:1` | `api-<cluster>.pusher.com` |
| frontend | Clerk | 2 (official client library only) | `/frontend/src/auth/clerk.js:1` | `api.clerk.com` |
| frontend | OpenWeatherMap | 3 (env variable only) | `/frontend/src/api/weather.js:2` | `VITE_OPENWEATHER_ENDPOINT` |
| android | OneSignal | 5 (Android SDK via manifest meta-data) | `/android/app/src/main/AndroidManifest.xml:13` | `onesignal.com` |
| android | Vonage | 3 (BuildConfig/env variable only) | `/android/app/src/main/java/com/foresight/novelty/ServiceConfig.kt:4` | `YOUR_VONAGE_BASE_URL_HERE` |
| android | Upstash | 3 (BuildConfig/env variable only) | `/android/app/src/main/java/com/foresight/novelty/ServiceConfig.kt:5` | `YOUR_UPSTASH_URL_HERE` |
| android | Mux | 1 (direct host constant) | `/android/app/src/main/java/com/foresight/novelty/ServiceConfig.kt:6` | `api.mux.com` |
| android | TomTom | 1 (direct host constant) | `/android/app/src/main/java/com/foresight/novelty/ServiceConfig.kt:7` | `api.tomtom.com` |
| backend test | Plaid | 1 (service used only in tests) | `/backend/test/plaid.test.ts:5` | `production.plaid.com` |

## Traps

- `/backend/src/routes/novelty.ts:7` — Documentation link comment (`developers.ably.com`) only; a correct tool should not classify it as an API call.
- `/backend/src/constants.ts:1` — `ALGOLIA_DOCS_URL` starts like a service variable but points to a donation website; a correct tool should ignore it as a service endpoint.
- `/backend/test/plaid.test.ts:5` — Plaid host appears only in a test file; a correct tool should mark it as test-only usage.
- `/backend/src/constants.ts:2` — String points to docs domain of a used service (`docs.brevo.com`); a correct tool should avoid treating documentation domains as runtime API hosts.
