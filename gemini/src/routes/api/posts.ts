import { APIEvent } from "@solidjs/start/server";
import { getBindings } from "../../lib/db";

const RAINBOW = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#4f46e5", "#8b5cf6"];

export async function GET(event: APIEvent) {
  try {
    const env = await getBindings(event);
    if (!env.DB) return new Response("DB not configured", { status: 500 });

    const { results } = await env.DB.prepare("SELECT * FROM posts ORDER BY datetime DESC").all();
    
    const posts = (results || []).map((r: any) => ({
      id: r.id,
      comment: r.comment,
      position: { lat: r.lat, lng: r.lng },
      poster: r.poster,
      color: r.color,
      datetime: r.datetime
    }));

    return new Response(JSON.stringify(posts), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(event: APIEvent) {
  try {
    const env = await getBindings(event);
    const auth = event.request.headers.get("Authorization");
    
    // Auth Check
    if (auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    const payload = await event.request.json();
    
    // Calculate rainbow day color
    const { results } = await env.DB.prepare("SELECT COUNT(*) as count FROM posts").all();
    const count = (results?.[0]?.count as number) || 0;
    const color = RAINBOW[count % RAINBOW.length];
    
    const id = crypto.randomUUID();
    const datetime = new Date().toISOString();

    await env.DB.prepare(
      "INSERT INTO posts (id, comment, lat, lng, poster, color, datetime) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).bind(
      id, payload.comment, payload.position.lat, payload.position.lng, payload.poster, color, datetime
    ).run();

    return new Response(JSON.stringify({ success: true, id, color }), { status: 201 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
