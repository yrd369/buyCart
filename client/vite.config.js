import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/products": {
        target: "http://localhost:9000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
