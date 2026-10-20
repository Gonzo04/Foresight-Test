import { config } from "../config.js";

export function buildAuth0Issuer() {
  return `https://${config.auth0Domain}/`;
}

export function authAudience() {
  return config.auth0Audience;
}
