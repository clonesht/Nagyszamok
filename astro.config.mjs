import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nagyszamok.hu",
  output: "static",
  vite: {
    css: {
      url: false, // disable URL handling in CSS
      postcss: { plugins: [] }
    },
    plugins: [
      {
        name: "json-hmr",
        handleHotUpdate({ file, server, modules }) {
          if (file.endsWith(".json")) {
            // Invalidate the JSON module and all its importers
            const jsonModules = server.moduleGraph.getModulesByFile(file);
            if (!jsonModules) return;

            for (const mod of jsonModules) {
              server.moduleGraph.invalidateModule(mod);
              // Walk up importers and invalidate them too
              for (const importer of mod.importers) {
                server.moduleGraph.invalidateModule(importer);
              }
            }

            // Send a client-side page reload only (no SSR restart)
            server.hot.send({ type: "full-reload", path: "*" });
            return []; // Tell Vite we handled it
          }
        },
      },
    ],

  },
  devToolbar: { enabled: false },
  integrations: [sitemap()]
});
