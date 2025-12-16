import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "vite-plugin-linaria";

export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ["src/**/*.jsx"], // supaya cuma JSX diproses
    }),
  ],
  base: "./",
});
