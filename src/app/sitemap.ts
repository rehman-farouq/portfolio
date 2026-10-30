import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const BASE = "https://rehmanfarouq.site";
const APP_DIR = path.join(process.cwd(), "src", "app");

/** Slugs = sub-folders that contain a page.tsx. New blog posts / tools are picked up automatically. */
function slugsIn(section: string): { slug: string; lastModified: Date }[] {
  const dir = path.join(APP_DIR, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(dir, d.name, "page.tsx")))
    .map((d) => ({
      slug: d.name,
      lastModified: fs.statSync(path.join(dir, d.name, "page.tsx")).mtime,
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["", 1.0, "monthly"],
    ["/about", 0.8, "monthly"],
    ["/experience", 0.8, "monthly"],
    ["/projects", 0.8, "monthly"],
    ["/skills", 0.7, "monthly"],
    ["/contact", 0.8, "yearly"],
    ["/tools", 0.9, "weekly"],
    ["/blog", 0.9, "weekly"],
    ["/privacy-policy", 0.2, "yearly"],
    ["/terms-of-service", 0.2, "yearly"],
  ];

  const now = new Date();
  return [
    ...staticPages.map(([route, priority, changeFrequency]) => ({
      url: `${BASE}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...slugsIn("tools").map(({ slug, lastModified }) => ({
      url: `${BASE}/tools/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...slugsIn("blog").map(({ slug, lastModified }) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
