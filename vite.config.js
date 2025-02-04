import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression"; // ✅ Import the plugin

export default defineConfig({
    plugins: [
        react(),
        viteCompression({ algorithm: "gzip" }), // ✅ Use `viteCompression`
        viteCompression({ algorithm: "brotliCompress" }), // ✅ Brotli compression
    ],
    base: "/",
});
