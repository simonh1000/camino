import { APIEvent } from "@solidjs/start/server";
import { getBindings } from "../../../lib/db";

export async function DELETE(event: APIEvent) {
  try {
    const env = await getBindings(event);
    const auth = event.request.headers.get("Authorization");
    
    // Auth Check
    if (auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { id } = event.params;
    
    const { success } = await env.DB.prepare("DELETE FROM posts WHERE id = ?").bind(id).run();
    
    if (!success) {
      return new Response("Failed to delete post", { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, deleted: id }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function PATCH(event: APIEvent) {
  try {
    const env = await getBindings(event);
    const auth = event.request.headers.get("Authorization");
    
    // Auth Check
    if (auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { id } = event.params;
    const payload = await event.request.json();
    
    // Only patching the comment
    if (typeof payload.comment !== "string") {
      return new Response("Missing 'comment' in payload", { status: 400 });
    }

    const { success } = await env.DB.prepare("UPDATE posts SET comment = ? WHERE id = ?")
      .bind(payload.comment, id)
      .run();
      
    if (!success) {
      return new Response("Failed to update post", { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, updated: id }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
