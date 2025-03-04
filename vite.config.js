import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [svelte(),
    tailwindcss()  
  ],
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
