export const dynamic = "force-static";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://oasis2024.bits-oasis.org/",
      lastModified: new Date(),
    },
  ];
}
