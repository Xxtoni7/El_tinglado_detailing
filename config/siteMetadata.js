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

function createBusinessStructuredData({ business, siteUrl }) {
  const imageUrl = siteUrl
    ? createAbsoluteUrl(siteUrl, "/og-image.webp")
    : undefined;
  const businessId = siteUrl ? `${siteUrl}/#local-business` : undefined;
  const localBusiness = {
    "@type": "LocalBusiness",
    name: business.tradeName,
    telephone: business.phoneDisplay.replace(/[^\d+]/g, ""),
    address: {
      "@type": "PostalAddress",
      ...business.structuredData.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...business.structuredData.geo,
    },
    openingHoursSpecification: business.structuredData.openingHoursSpecification.map(
      (hours) => ({
        "@type": "OpeningHoursSpecification",
        ...hours,
      }),
    ),
    sameAs: [business.googleMapsUrl, business.instagramUrl],
  };

  if (businessId) {
    localBusiness["@id"] = businessId;
    localBusiness.url = createAbsoluteUrl(siteUrl, "/");
    localBusiness.image = imageUrl;
  }

  const graph = [localBusiness];

  if (siteUrl) {
    graph.push({
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: createAbsoluteUrl(siteUrl, "/"),
      name: business.tradeName,
      publisher: {
        "@id": businessId,
      },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function createSiteMetadataPlugin({ business, pages, root, siteUrl }) {
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
        if (!page) {
          return html;
        }

        const outputHtml = normalizedSiteUrl
          ? html
          : html.replace(
              'content="index, follow"',
              'content="noindex, nofollow"',
            );
        const tags = [];

        if (page.name === "home") {
          tags.push({
            attrs: {
              type: "application/ld+json",
            },
            children: JSON.stringify(
              createBusinessStructuredData({
                business,
                siteUrl: normalizedSiteUrl,
              }),
            ).replaceAll("<", String.raw`\u003c`),
            injectTo: "head",
            tag: "script",
          });
        }

        if (!normalizedSiteUrl) {
          return {
            html: outputHtml,
            tags,
          };
        }

        const pageUrl = createAbsoluteUrl(normalizedSiteUrl, page.route);

        return {
          html: outputHtml,
          tags: [
            ...tags,
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
            {
              attrs: {
                property: "og:image",
                content: createAbsoluteUrl(siteUrl, "/og-image.webp"),
              },
              injectTo: "head",
              tag: "meta",
            },
            {
              attrs: {
                property: "og:image:alt",
                content: "Autos en el taller de El Tinglado Detailing",
              },
              injectTo: "head",
              tag: "meta",
            },
            {
              attrs: {
                name: "twitter:image",
                content: createAbsoluteUrl(siteUrl, "/og-image.webp"),
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
