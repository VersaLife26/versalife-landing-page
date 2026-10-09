#!/usr/bin/env node
/**
 * One-time Google Search Console helper for versalifehealth.com.
 * Usage:
 *   node scripts/gsc-fix.mjs auth     # opens browser, saves refresh token locally
 *   node scripts/gsc-fix.mjs audit    # list properties, sitemaps, inspect key URLs
 *   node scripts/gsc-fix.mjs submit   # resubmit sitemaps
 *
 * Token file: scripts/.gsc-token.json (gitignored)
 */
import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKEN_PATH = join(__dirname, ".gsc-token.json");

const CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID ||
  "347626597503-dr6t24m0i3g1nl1suam86rs650t3fhau.apps.googleusercontent.com";
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/oauth2callback";
const SCOPES = [
  "https://www.googleapis.com/auth/webmasters",
  "https://www.googleapis.com/auth/userinfo.email",
].join(" ");

const DOMAIN_PROPERTY = "sc-domain:versalifehealth.com";
const SITEMAPS = [
  "https://versalifehealth.com/sitemap.xml",
  "https://telemedicine.versalifehealth.com/sitemap.xml",
];
const INSPECT_URLS = [
  "https://versalifehealth.com/",
  "https://versalifehealth.com/privacy",
  "https://versalifehealth.com/terms",
  "https://versalifehealth.com/contact",
  "https://telemedicine.versalifehealth.com/",
];

function loadTokens() {
  if (!existsSync(TOKEN_PATH)) return null;
  return JSON.parse(readFileSync(TOKEN_PATH, "utf8"));
}

function saveTokens(tokens) {
  writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2), { mode: 0o600 });
}

async function refreshAccessToken(refreshToken) {
  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Token refresh failed: ${await res.text()}`);
  const data = await res.json();
  return { ...loadTokens(), ...data, refresh_token: refreshToken };
}

async function getAccessToken() {
  let tokens = loadTokens();
  if (!tokens?.refresh_token) {
    console.error("No token. Run: node scripts/gsc-fix.mjs auth");
    process.exit(1);
  }
  if (tokens.expiry_date && Date.now() < tokens.expiry_date - 60_000) {
    return tokens.access_token;
  }
  tokens = await refreshAccessToken(tokens.refresh_token);
  tokens.expiry_date = Date.now() + (tokens.expires_in || 3600) * 1000;
  saveTokens(tokens);
  return tokens.access_token;
}

async function authFlow() {
  if (!CLIENT_SECRET) {
    console.error("Set GOOGLE_CLIENT_SECRET (Search Console OAuth desktop client) before running auth.");
    process.exit(1);
  }
  const authUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: "code",
      scope: SCOPES,
      access_type: "offline",
      prompt: "consent",
    });

  console.log("\nAuthorize in the browser (same Google account as Search Console):\n");
  console.log(authUrl);
  console.log("");
  try {
    execSync(`start "" "${authUrl}"`, { stdio: "ignore", shell: true });
  } catch {
    /* manual open */
  }

  const code = await new Promise((resolve, reject) => {
    const server = createServer(async (req, res) => {
      if (!req.url?.startsWith("/oauth2callback")) return;
      const url = new URL(req.url, "http://localhost:3000");
      const c = url.searchParams.get("code");
      const err = url.searchParams.get("error");
      if (err) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("<h1>Authorization denied</h1>");
        server.close();
        reject(new Error(err));
        return;
      }
      if (!c) return;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Success</h1><p>Return to the terminal.</p>");
      server.close();
      resolve(c);
    });
    server.listen(3000, () => console.log("Waiting for callback on http://localhost:3000/oauth2callback …"));
  });

  const body = new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(await res.text());
  const tokens = await res.json();
  tokens.expiry_date = Date.now() + (tokens.expires_in || 3600) * 1000;
  saveTokens(tokens);
  console.log("Saved token to", TOKEN_PATH);
}

async function gscFetch(path, { method = "GET", body } = {}) {
  const token = await getAccessToken();
  const res = await fetch(`https://www.googleapis.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status}: ${text}`);
  return json;
}

async function inspectUrl(siteUrl, inspectionUrl) {
  const token = await getAccessToken();
  const res = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inspectionUrl, siteUrl }),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`inspect → ${res.status}: ${text.slice(0, 200)}`);
  return JSON.parse(text);
}

function pickSite(sites) {
  const entries = sites.siteEntry || [];
  const domain = entries.find((s) => s.siteUrl === DOMAIN_PROPERTY);
  if (domain) return DOMAIN_PROPERTY;
  const prefix = entries.find((s) => s.siteUrl === "https://versalifehealth.com/");
  if (prefix) return "https://versalifehealth.com/";
  if (entries.length === 1) return entries[0].siteUrl;
  throw new Error(
    `No matching property. Found: ${entries.map((e) => e.siteUrl).join(", ") || "(none)"}`,
  );
}

async function audit() {
  const sites = await gscFetch("/webmasters/v3/sites");
  console.log("\nVerified properties:");
  for (const s of sites.siteEntry || []) {
    console.log(`  ${s.siteUrl} (${s.permissionLevel})`);
  }
  const siteUrl = pickSite(sites);
  console.log("\nUsing property:", siteUrl);

  const sm = await gscFetch(
    `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`,
  );
  console.log("\nSubmitted sitemaps:");
  for (const s of sm.sitemap || []) {
    console.log(`  ${s.path} — ${s.lastSubmitted || "?"} — errors:${s.errors ?? 0} warnings:${s.warnings ?? 0}`);
  }

  console.log("\nURL inspection (indexing state):");
  for (const url of INSPECT_URLS) {
    try {
      const r = await inspectUrl(siteUrl, url);
      const result = r.inspectionResult?.indexStatusResult || {};
      console.log(`  ${url}`);
      console.log(
        `    verdict=${result.verdict ?? "?"} coverage=${result.coverageState ?? "?"} indexing=${result.indexingState ?? "?"}`,
      );
      if (result.robotsTxtState) console.log(`    robotsTxt=${result.robotsTxtState}`);
      if (result.pageFetchState) console.log(`    fetch=${result.pageFetchState}`);
    } catch (e) {
      console.log(`  ${url} — inspect failed: ${e.message}`);
    }
  }
}

async function submit() {
  const sites = await gscFetch("/webmasters/v3/sites");
  const siteUrl = pickSite(sites);
  for (const feed of SITEMAPS) {
    const path = `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(feed)}`;
    await gscFetch(path, { method: "PUT" });
    console.log("Submitted:", feed);
  }
}

const cmd = process.argv[2] || "audit";
try {
  if (cmd === "auth") await authFlow();
  else if (cmd === "audit") await audit();
  else if (cmd === "submit") await submit();
  else {
    console.log("Commands: auth | audit | submit");
    process.exit(1);
  }
} catch (e) {
  console.error(e.message || e);
  process.exit(1);
}
