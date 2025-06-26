import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/terms-of-service", "/privacy-policy", "/about"],
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
