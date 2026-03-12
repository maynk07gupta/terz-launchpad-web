import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GNEWS_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GNEWS_API_KEY not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { query, max } = await req.json().catch(() => ({ query: undefined, max: undefined }));

    const searchQuery =
      query ||
      '"medical devices" OR "regulatory compliance" OR "cosmetics regulation" OR "import export India" OR "EPR compliance" OR "CDSCO" OR "legal metrology"';
    const maxResults = Math.min(max || 10, 10);

    const url = new URL("https://gnews.io/api/v4/search");
    url.searchParams.set("q", searchQuery);
    url.searchParams.set("lang", "en");
    url.searchParams.set("max", String(maxResults));
    url.searchParams.set("sortby", "publishedAt");
    url.searchParams.set("token", apiKey);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data.errors?.[0] || "GNews API error", status: response.status }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const articles = (data.articles || []).map(
      (article: {
        title: string;
        description: string;
        content: string;
        url: string;
        image: string;
        publishedAt: string;
        source: { name: string; url: string };
      }) => ({
        title: article.title,
        description: article.description,
        content: article.content,
        url: article.url,
        image: article.image,
        publishedAt: article.publishedAt,
        sourceName: article.source?.name,
        sourceUrl: article.source?.url,
      })
    );

    return new Response(JSON.stringify({ articles, totalArticles: data.totalArticles || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
