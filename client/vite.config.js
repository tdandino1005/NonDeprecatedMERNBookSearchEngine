<<<<<<< HEAD
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
>>>>>>> f9b79737be8b2bca6e2ad8fce129741b0b92357e

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
