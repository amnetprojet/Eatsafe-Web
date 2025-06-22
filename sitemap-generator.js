import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

import routes from "./routes.js";

async function generateSitemap() {
  const sitemapPath = path.resolve("./public/sitemap.xml");

  const sitemapStream = new SitemapStream({
    hostname: "https://www.eatsafe.pro",
  });
  const writeStream = createWriteStream(sitemapPath);

  sitemapStream.pipe(writeStream);

  for (const url of routes) {
    sitemapStream.write({ url });
  }

  sitemapStream.end();

  // Attendre que la génération finisse
  await streamToPromise(sitemapStream);

  console.log(`Sitemap généré dans ${sitemapPath}`);
}

generateSitemap().catch(console.error);
