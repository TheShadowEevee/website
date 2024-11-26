import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import opengraphImages, { presets } from "astro-opengraph-images";
import icon from "astro-icon";
import playformCompress from "@playform/compress"; // Should be last item in integrations

// https://astro.build/config
export default defineConfig({
  site: "https://shad.moe",
  integrations: [tailwind(), react(), opengraphImages({
    options: {
      //fonts: [{
      //  name: "Roboto",
      //  weight: 400,
      //  style: "normal",
      //  data: fs.readFileSync("node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"),
      //}]
    },
    render: presets.blackAndWhite
  }), icon({
    include: {
      "simple-icons": ["github", "bluesky", "gitea", "linkedin"],
    }
  }), playformCompress()],
  output: "server",
  adapter: vercel()
});