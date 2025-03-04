import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  server:{
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        "service-worker": "src/service-worker.js"
      }
    }
  }
});
