

## Plan: Integrate Free News API for Dynamic Resource Cards

### Current State
- Resources page displays 6 static items from `src/data/resources.ts` (3 news + 3 blogs)
- `ResourceDetail.tsx` renders full article content from the same static data
- Cards show title, excerpt, tags, category, date, read time

### Approach
Use **GNews API** (free tier: 100 requests/day, no credit card required) to fetch real regulatory/compliance news. A Supabase Edge Function will proxy requests to keep the API key secure. Static blog posts will remain as-is; fetched news articles will be merged into the grid.

### Implementation Steps

1. **Store GNews API key as a secret**
   - User registers at [gnews.io](https://gnews.io) (free, instant)
   - Store the key via Lovable secrets tool

2. **Create edge function `supabase/functions/fetch-news/index.ts`**
   - Proxy calls to `https://gnews.io/api/v4/search`
   - Search queries: `"medical devices" OR "regulatory compliance" OR "cosmetics regulation" OR "import export India" OR "EPR compliance"`
   - Return normalized articles (title, description, publishedAt, source, url, image)
   - CORS headers included

3. **Create `src/hooks/useNewsArticles.ts`**
   - React Query hook calling the edge function
   - 10-minute stale time to avoid excessive API calls
   - Maps API response to `ResourceItem`-compatible shape (type: "news", auto-generated slug, tags from keywords)

4. **Update `src/data/resources.ts`**
   - Export static blogs separately
   - Export types for reuse

5. **Update `src/pages/Resources.tsx`**
   - Merge static blogs + dynamic news into `allResources`
   - Show loading skeleton while news loads
   - Existing search/filter logic works unchanged (operates on merged array)
   - "Fresh This Week" section uses dynamic news

6. **Update `src/pages/ResourceDetail.tsx`**
   - For dynamic news articles (identified by slug prefix `api-`), show article summary + "Read full article" link to the original source URL
   - Static blogs render as before

### Architecture
```text
Browser
  │
  ├─ Static blogs ─── src/data/resources.ts
  │
  └─ Dynamic news ─── useNewsArticles hook
                          │
                          ▼
                    Supabase Edge Function
                          │
                          ▼
                      GNews API (free)
```

### What stays the same
- All existing blog content and detail pages
- Card design, animations, search, and filter UI
- Newsletter CTA section

