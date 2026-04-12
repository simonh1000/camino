import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    envDir: "../",
  },
  server: {
    preset: "cloudflare-pages"
  }
});
