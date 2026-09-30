export const dynamic = "force-static";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/2024"],
    },
    sitemap: "https://oasis2024.bits-oasis.org/sitemap.xml",
  };
}
