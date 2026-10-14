import type { MetadataRoute } from "next";
import { siteData } from "../data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteData.siteUrl}/`, changeFrequency: "monthly", priority: 1 }];
}
