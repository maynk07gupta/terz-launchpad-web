import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { ResourceItem } from "@/data/resources";

interface GNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  sourceName: string;
  sourceUrl: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function inferCategory(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase();
  if (text.includes("medical device") || text.includes("cdsco")) return "Medical Devices";
  if (text.includes("cosmetic") || text.includes("beauty")) return "Cosmetics";
  if (text.includes("metrology") || text.includes("lmpc")) return "Legal Metrology";
  if (text.includes("import") || text.includes("export") || text.includes("iec")) return "Import/Export";
  if (text.includes("epr") || text.includes("waste") || text.includes("recycl")) return "EPR";
  if (text.includes("ivd") || text.includes("diagnostic")) return "IVD";
  return "Regulatory";
}

function inferTags(title: string, description: string): string[] {
  const text = `${title} ${description}`.toLowerCase();
  const tags: string[] = [];
  const tagMap: Record<string, string> = {
    compliance: "Compliance",
    regulation: "Regulation",
    cdsco: "CDSCO",
    fda: "FDA",
    "medical device": "Medical Devices",
    cosmetic: "Cosmetics",
    import: "Import",
    export: "Export",
    epr: "EPR",
    metrology: "Legal Metrology",
    pharma: "Pharma",
    india: "India",
  };
  for (const [keyword, tag] of Object.entries(tagMap)) {
    if (text.includes(keyword)) tags.push(tag);
    if (tags.length >= 3) break;
  }
  return tags.length > 0 ? tags : ["Regulatory", "Compliance"];
}

function mapToResourceItem(article: GNewsArticle): ResourceItem {
  const category = inferCategory(article.title, article.description);
  const tags = inferTags(article.title, article.description);
  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  return {
    type: "news",
    slug: `api-${slugify(article.title)}`,
    title: article.title,
    excerpt: article.description || article.content?.slice(0, 200) || "",
    category,
    publishedOn: publishedDate,
    readTime: "3 min read",
    author: article.sourceName || "External Source",
    authorRole: "News Source",
    tags,
    takeaways: [],
    content: [
      {
        body: article.content || article.description || "",
      },
    ],
    // Extra fields for API articles
    sourceUrl: article.url,
    imageUrl: article.image,
  } as ResourceItem & { sourceUrl?: string; imageUrl?: string };
}

async function fetchNews(): Promise<ResourceItem[]> {
  const { data, error } = await supabase.functions.invoke("fetch-news", {
    body: { max: 10 },
  });

  if (error) throw new Error(error.message || "Failed to fetch news");
  if (!data?.articles) return [];

  return data.articles.map(mapToResourceItem);
}

export function useNewsArticles() {
  return useQuery({
    queryKey: ["news-articles"],
    queryFn: fetchNews,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
