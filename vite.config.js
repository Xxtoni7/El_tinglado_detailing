import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import { createSiteMetadataPlugin } from "./config/siteMetadata.js";
import { siteConfig, sitePages } from "./src/config/site.js";
import { business } from "./src/features/landing/data/business.js";

export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, import.meta.dirname, "");
  const siteUrl = environment.VITE_SITE_URL || siteConfig.url;
  const input = Object.fromEntries(
    sitePages.map(({ input: inputPath, name }) => [
      name,
      resolve(import.meta.dirname, inputPath),
    ]),
  );

  return {
    build: {
      rolldownOptions: {
        input,
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      createSiteMetadataPlugin({
        business,
        pages: sitePages,
        root: import.meta.dirname,
        siteUrl,
      }),
    ],
  };
});
