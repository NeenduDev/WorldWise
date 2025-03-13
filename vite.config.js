import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnWarning: false, // Add this line
      failOnError: false, // Add this line if you want to prevent stopping on errors as well
    }),
  ],
  server: {
    hmr: {
      overlay: true,
    },
  },
});
