import type { D1Database, KVNamespace } from "@cloudflare/workers-types";

let devProxy: any;

export async function getBindings(
  event: any,
): Promise<{ DB: D1Database; KV: KVNamespace; ADMIN_PASSWORD?: string }> {
  // Production Cloudflare context
  if (event.nativeEvent.context.cloudflare?.env) {
    return event.nativeEvent.context.cloudflare.env;
  }

  // Fallback to proxy for local dev
  if (import.meta.env.DEV) {
    if (!devProxy) {
      const { getPlatformProxy } = await import("wrangler");
      devProxy = await getPlatformProxy();
    }
    return {
      DB: devProxy.env.DB,
      KV: devProxy.env.KV,
      ADMIN_PASSWORD: import.meta.env.VITE_ADMIN_PASSWORD || "password",
    };
  }

  throw new Error("Cloudflare bindings not found");
}
