import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  server: {
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
