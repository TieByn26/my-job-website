import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/public/image": "http://localhost:8080",
    },
  },
  preview: {
    port: 3000,
  },
});