import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://adatok.hu",
  output: "static",
  vite: {
    css: {
      url: false, // disable URL handling in CSS
      postcss: { plugins: [] }
    }
  },
  devToolbar: { enabled: false },
  integrations: [sitemap()]
});
