import { resolve } from "node:path";

function normalizeSiteUrl(siteUrl) {
  const value = siteUrl.trim();

  if (!value) {
    return "";
  }

  const url = new URL(value);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("La URL del sitio debe comenzar con http:// o https://.");
  }

  return url.origin;
}

function createAbsoluteUrl(siteUrl, route) {
  return new URL(route, `${siteUrl}/`).href;
}

function createSitemap(siteUrl, pages) {
  const urls = pages
    .map(
      ({ route }) =>
        `  <url><loc>${createAbsoluteUrl(siteUrl, route)}</loc></url>`,
    )
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

function createRobots(siteUrl) {
  if (!siteUrl) {
    return "User-agent: *\nDisallow: /\n";
  }

  return [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${createAbsoluteUrl(siteUrl, "/sitemap.xml")}`,
    "",
  ].join("\n");
}

export function createSiteMetadataPlugin({ pages, root, siteUrl }) {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);
  const pagesByFilename = new Map(
    pages.map((page) => [resolve(root, page.input), page]),
  );

  return {
    generateBundle() {
      this.emitFile({
        fileName: "robots.txt",
        source: createRobots(normalizedSiteUrl),
        type: "asset",
      });

      if (normalizedSiteUrl) {
        this.emitFile({
          fileName: "sitemap.xml",
          source: createSitemap(normalizedSiteUrl, pages),
          type: "asset",
        });
      }
    },
    name: "site-metadata",
    transformIndexHtml: {
      handler(html, { filename }) {
        const page = pagesByFilename.get(resolve(filename));

        if (!normalizedSiteUrl) {
          return html.replace(
            'content="index, follow"',
            'content="noindex, nofollow"',
          );
        }

        if (!page) {
          return html;
        }

        const pageUrl = createAbsoluteUrl(normalizedSiteUrl, page.route);

        return {
          html,
          tags: [
            {
              attrs: {
                rel: "canonical",
                href: pageUrl,
              },
              injectTo: "head",
              tag: "link",
            },
            {
              attrs: {
                property: "og:url",
                content: pageUrl,
              },
              injectTo: "head",
              tag: "meta",
            },
          ],
        };
      },
      order: "post",
    },
  };
}
