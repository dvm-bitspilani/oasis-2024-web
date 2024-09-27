import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.bits-oasis.org/",
      lastModified: new Date(),
    },
  ];
}
