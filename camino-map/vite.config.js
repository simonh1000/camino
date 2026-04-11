import { defineConfig } from "vite";

export default defineConfig((env) => {
    const isProd = env.mode === "production";

    const minify = isProd;
    const cssMinify = isProd;

    return {
        build: {
            outDir: "dist",
            emptyOutDir: true,
            lib: {
                entry: "src/camino-map.js",
                formats: ["iife"],
                name: "camino-map.js",
            },
            rollupOptions: {
                output: {
                    format: "iife",
                    entryFileNames: "[name].js",
                },
            },
            // defaults to false when building lib
            // we want this to be true so no css files are extracted / generated
            cssCodeSplit: true,
            minify,
            cssMinify,
        },
        server: {
            host: "localhost",
            cors: true,
            open: "index.html",
        },
    };
});
