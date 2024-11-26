import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import playformCompress from "@playform/compress";
import opengraphImages, { presets } from "astro-opengraph-images";

// playformCompress() should be last (See https://github.com/PlayForm/Compress#readme)
import icon from "astro-icon";

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
  }), icon(), playformCompress()],
  output: "server",
  adapter: vercel()
});