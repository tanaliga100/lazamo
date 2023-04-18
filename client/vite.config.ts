import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT),
  },
  define: {
    "process.env.PORT": `${process.env.PORT}`,
    "process.env.TEST": `"${process.env.TEST}"`,
  },
});
