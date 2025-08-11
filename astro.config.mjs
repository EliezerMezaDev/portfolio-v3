import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  resolve: {
    alias: {
     '@': '/src',
        '@/components': '/src/components',
        '@/layouts': '/src/layouts',
        '@/content': '/src/content',
        '@/styles': '/src/styles',
    },
  },
});
