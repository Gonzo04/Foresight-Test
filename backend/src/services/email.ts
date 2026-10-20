import got from "got";
import { Resend } from "resend";
import { config } from "../config.js";

const resend = new Resend(config.resendApiKey);

export async function sendWithPostmark() {
  return got.post("https://api.postmarkapp.com/email", {
    json: {
      From: "alerts@example.test",
      To: "hello@example.test",
      Subject: "Novelty report",
      TextBody: "Postmark call for dependency discovery"
    },
    headers: { "X-Postmark-Server-Token": config.postmarkToken }
  });
}

export async function sendWithBrevo() {
  return got.post("https://api.brevo.com/v3/smtp/email", {
    json: {
      sender: { email: "alerts@example.test" },
      to: [{ email: "hello@example.test" }],
      subject: "Brevo ping",
      textContent: "Dependency-only monitoring"
    },
    headers: { "api-key": config.brevoApiKey }
  });
}

export async function sendWithResend() {
  return resend.emails.send({
    from: "alerts@example.test",
    to: "hello@example.test",
    subject: "Resend ping",
    text: "This uses only the official client library"
  });
}
