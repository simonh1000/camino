import { APIEvent } from "@solidjs/start/server";
import { getBindings } from "../../lib/db";

export async function POST(event: APIEvent) {
  try {
    const env = await getBindings(event);
    const payload = await event.request.json();

    if (payload.password === env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    return new Response("Unauthorized", { status: 401 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
