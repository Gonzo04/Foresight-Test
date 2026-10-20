export function weatherEndpointFromEnv() {
  return import.meta.env.VITE_OPENWEATHER_ENDPOINT ?? "VITE_OPENWEATHER_ENDPOINT";
}
