import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), icon()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@/components": "/src/components",
        "@/layouts": "/src/layouts",
        "@/content": "/src/content",
        "@/styles": "/src/styles",
      },
    },
  },
  adapter: netlify(),
});
