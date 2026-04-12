import { APIEvent } from "@solidjs/start/server";
import { getBindings } from "../../lib/db";

export async function GET(event: APIEvent) {
  const env = await getBindings(event);
  const waves = await env.KV.get("wave_count") || "0";
  return new Response(waves);
}

export async function POST(event: APIEvent) {
  const env = await getBindings(event);
  const current = parseInt(await env.KV.get("wave_count") || "0");
  const next = (current + 1).toString();
  await env.KV.put("wave_count", next);
  return new Response(next);
}
