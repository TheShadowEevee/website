import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import playformCompress from "@playform/compress";
import opengraphImages from "astro-opengraph-images";

// playformCompress() should be last (See https://github.com/PlayForm/Compress#readme)
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), opengraphImages(), playformCompress()],
  output: "server",
  adapter: vercel()
});