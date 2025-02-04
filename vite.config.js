import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        compression({ algorithm: "gzip" }), // Enable Gzip compression
        compression({ algorithm: "brotliCompress" }), // Enable Brotli compression
    ],
    base: "/",
});
