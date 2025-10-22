import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Filter,
  Flame,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { resources } from "@/data/resources";

type FilterKey = "all" | "news" | "blog";

const filterButtons: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "news", label: "News" },
  { key: "blog", label: "Blogs" },
];

const trendingTopics = [
  "Medical Devices",
  "Market Entry",
  "Digital Compliance",
  "Audit Ready",
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState<FilterKey>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCompressed, setIsCompressed] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompressed(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredResources = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();
    const filterByType =
      activeTab === "all"
        ? resources
        : resources.filter((item) => item.type === activeTab);

    if (!normalizedQuery) {
      return filterByType;
    }

    return filterByType.filter((item) => {
      const haystack = [
        item.title,
        item.excerpt,
        item.category,
        item.author,
        item.tags.join(" "),
        item.content.map((block) => `${block.heading ?? ""} ${block.body}`).join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeTab, searchTerm]);

  const resultLabel = useMemo(() => {
    const count = filteredResources.length;
    if (count === 0) return "No matches yet";
    if (count === 1) return "1 resource";
    return `${count} resources`;
  }, [filteredResources.length]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const formatDate = (isoDate: string) => {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(isoDate));
  };

  const getTypeStyles = (type: "news" | "blog") => {
    if (type === "news") {
      return {
        pill: "bg-sky-500/15 text-sky-500 border border-sky-500/30",
        accent: "from-sky-500/10 via-sky-400/5 to-transparent",
      };
    }
    return {
      pill: "bg-fuchsia-500/15 text-fuchsia-500 border border-fuchsia-500/30",
      accent: "from-fuchsia-500/10 via-fuchsia-400/5 to-transparent",
    };
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden pb-32 pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-float-slow" />
          <div className="absolute right-[-5%] top-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl animate-float-delayed" />
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(12,58,148,0.35)_0%,transparent_60%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
              Terz Knowledge Center
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Insights engineered to keep your compliance edge sharp.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Dive into curated news and long-form analysis from our regulatory experts.
              Every story is designed to make your next decision faster and more confident.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm text-primary/90">
                  <TrendingUp className="h-4 w-4" />
                  Trending topics from the last 30 days
                </div>
                <Separator className="my-4 border-white/10" />
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleSearchChange(topic)}
                      className="group rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/20"
                    >
                      <span>{topic}</span>
                      <ArrowUpRight className="ml-2 h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <Flame className="h-4 w-4" />
                  Fresh additions this week
                </div>
                <Separator className="my-4 border-white/10" />
                <ul className="space-y-3 text-sm text-white/80">
                  {resources.slice(0, 3).map((item) => (
                    <li key={item.slug} className="flex items-center justify-between gap-4">
                      <span className="line-clamp-1">{item.title}</span>
                      <span className="text-xs uppercase tracking-wide text-white/60">
                        {formatDate(item.publishedOn)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-auto relative mx-auto mt-16 w-full max-w-4xl transition-all duration-500 ease-out",
            isCompressed ? "sticky top-24 z-40" : ""
          )}
        >
          <div
            className={cn(
              "rounded-[32px] border border-white/20 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,41,80,0.18)] backdrop-blur-xl transition-all duration-500",
              isCompressed ? "flex items-center justify-between gap-6 p-4" : "space-y-6"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary shadow-inner shadow-primary/20 transition-transform duration-500">
                <Search className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                  Knowledge Center
                </p>
                {!isCompressed && (
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    Search across news, explainers, and deep dives
                  </h2>
                )}
              </div>
            </div>

            {!isCompressed && (
              <div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={searchTerm}
                    onChange={(event) => handleSearchChange(event.target.value)}
                    placeholder="Search by title, topic, or author"
                    className="h-14 rounded-full border border-muted bg-white pl-12 text-base shadow-inner shadow-primary/10"
                  />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  {resultLabel} — Filters update in real time as you type.
                </p>
              </div>
            )}

            {isCompressed && (
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-xs text-primary">
                  {resultLabel}
                </Badge>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                  onClick={() => setIsSearchOverlayOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sticky top-24 z-30 border-b border-border/40 bg-background/85 backdrop-blur-lg">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Refine by format
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {filterButtons.map((button) => (
              <Button
                key={button.key}
                variant={activeTab === button.key ? "default" : "outline"}
                className={cn(
                  "rounded-full border-transparent px-6 py-2 text-sm transition-all duration-300",
                  activeTab === button.key
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-background hover:border-primary/40 hover:text-primary"
                )}
                onClick={() => setActiveTab(button.key)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => {
              const { pill, accent } = getTypeStyles(resource.type);

              return (
                <Card
                  key={resource.slug}
                  className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-6 shadow-[0_24px_60px_rgba(15,40,80,0.15)] transition duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_40px_90px_rgba(12,40,90,0.25)]"
                >
                  <div className={cn("pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100", `bg-gradient-to-br ${accent}`)} />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className={cn("inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]", pill)}>
                        {resource.type === "news" ? "News" : "Blog"}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {formatDate(resource.publishedOn)}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {resource.title}
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {resource.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                          {resource.category}
                        </span>
                        <span>{resource.readTime}</span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                    </div>
                    <Link
                      to={`/resources/${resource.type}/${resource.slug}`}
                      className="absolute inset-0"
                      aria-label={`Open ${resource.title}`}
                    />
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="mt-20 text-center">
              <p className="text-lg text-muted-foreground">
                Nothing matched your filters yet. Try a different keyword or explore another format.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary/5 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.12),transparent_55%)]" />
        <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-primary/20 bg-background/90 p-10 text-center shadow-[0_32px_80px_rgba(30,58,120,0.18)]">
            <Sparkles className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-6 text-3xl font-semibold">Stay ahead of every compliance move</h2>
            <p className="mt-4 text-muted-foreground">
              Join 4,000+ professionals receiving our weekly regulatory signal report. No spam — just precise insights you can action immediately.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="h-12 w-full rounded-full border border-primary/20 bg-background/60 shadow-inner shadow-primary/10 sm:max-w-md"
              />
              <Button className="h-12 rounded-full px-8 text-base shadow-lg shadow-primary/40">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isSearchOverlayOpen} onOpenChange={setIsSearchOverlayOpen}>
        <DialogContent className="max-w-xl rounded-3xl border border-primary/20 bg-background/95 p-8 shadow-2xl">
          <DialogHeader>
            <DialogTitle>Search the knowledge center</DialogTitle>
            <DialogDescription>
              Results update instantly. Try searching for a product category, regulation, or author name.
            </DialogDescription>
          </DialogHeader>
          <div className="relative mt-6">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Start typing to filter the latest updates"
              className="h-14 rounded-full border border-muted bg-background pl-12 text-base shadow-inner shadow-primary/10"
              autoFocus
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;
