import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    tanstackStart({
      server: { entry: "src/server.ts" },
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/residential" },
        { path: "/business" },
        { path: "/providers" },
        { path: "/contact" },
        { path: "/legal" },
        { path: "/privacy" },
        { path: "/terms" },
        { path: "/disclaimer" },
      ],
    }),
    react(),
  ],
});
