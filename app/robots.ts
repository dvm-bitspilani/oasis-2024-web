import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/2024"],
    },
    sitemap: "https://www.bits-oasis.org/sitemap.xml",
  };
}
