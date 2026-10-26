import { editorialByAlpha2 } from "../content/countries";

const TIMEOUT_MS = 20_000;
const CONCURRENCY = 4;
const USER_AGENT = "PocketWorld/0.1 (https://pocket-world-six.vercel.app; editorial link check)";
// Sites that refuse automated clients; a person should open these links in a browser.
const BLOCKED_STATUSES = new Set([401, 403, 429]);

// Some government servers reset connections from non-browser clients instead of answering 403.
const BLOCKED_ERROR_CODES = new Set(["ECONNRESET"]);

type Status = number | "error" | "blocked";
type Result = { url: string; usedBy: string[]; status: Status; detail?: string };

async function check(url: string): Promise<{ status: Status; detail?: string }> {
  for (const method of ["HEAD", "GET"] as const) {
    try {
      const response = await fetch(url, { method, redirect: "follow", headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(TIMEOUT_MS) });
      if (method === "HEAD" && (response.status === 405 || response.status >= 400)) continue;
      return { status: response.status };
    } catch (error) {
      if (method === "HEAD") continue;
      const code = error instanceof Error && error.cause && typeof error.cause === "object" && "code" in error.cause ? String(error.cause.code) : undefined;
      const detail = code ?? (error instanceof Error ? error.message : String(error));
      return { status: code && BLOCKED_ERROR_CODES.has(code) ? "blocked" : "error", detail };
    }
  }
  return { status: "error" };
}

async function main() {
  const usage = new Map<string, Set<string>>();
  for (const [alpha2, byLocale] of Object.entries(editorialByAlpha2)) {
    for (const content of Object.values(byLocale)) {
      for (const source of content.sources) {
        if (!usage.has(source.url)) usage.set(source.url, new Set());
        usage.get(source.url)!.add(alpha2);
      }
    }
  }

  const queue = [...usage.keys()];
  const results: Result[] = [];
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const url = queue.shift()!;
      results.push({ url, usedBy: [...usage.get(url)!], ...(await check(url)) });
    }
  }));

  const isBlocked = (status: Status) => status === "blocked" || (typeof status === "number" && BLOCKED_STATUSES.has(status));
  const broken = results.filter((result) => result.status === "error" || (typeof result.status === "number" && result.status >= 400 && !isBlocked(result.status)));
  const blocked = results.filter((result) => isBlocked(result.status));
  const format = (result: Result) => `  ${result.status}  ${result.url}  (${result.usedBy.join(", ")})${result.detail ? ` — ${result.detail}` : ""}`;

  console.log(`Checked ${results.length} unique source URLs from ${Object.keys(editorialByAlpha2).length} countries`);
  console.log(`OK: ${results.length - broken.length - blocked.length}`);
  if (blocked.length) console.log(`Blocked for automated clients (check manually in a browser):\n${blocked.map(format).join("\n")}`);
  if (broken.length) {
    console.log(`Broken:\n${broken.map(format).join("\n")}`);
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
