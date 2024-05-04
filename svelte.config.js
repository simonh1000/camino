// import adapter from "@sveltejs/adapter-static";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // https://kit.svelte.dev/docs/single-page-apps
        // adapter: adapter({
        //     fallback: "index.html", // may differ from host to host
        // }),
        adapter: adapter(),
    },
};

export default config;
