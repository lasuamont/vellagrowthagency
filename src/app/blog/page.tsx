import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Insights | Vella Growth",
  description: "Explore our latest insights on travel marketing, SEO, GEO, and digital growth strategies.",
};

interface ArticleCard {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
}

const articles: ArticleCard[] = [
  {
    id: "conversion-funnel",
    title: "From LinkedIn to Qualified Leads: How Our Conversion Funnel Turns Prospects into Clients",
    excerpt: "Discover our five-stage conversion funnel strategy: LinkedIn post → Blog article → Live public webinar → Booking of a free demo. Learn how we attract, educate, and convert prospects into qualified leads.",
    date: "October 2026",
    category: "Strategy",
    href: "/blog/conversion-funnel",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream pt-36 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label-text mb-4">Blog</p>
          <h1 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Vella Growth Insights
          </h1>
          <p className="font-montserrat text-ink-navy text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Explore our latest thinking on travel marketing, digital growth, and strategies tailored for destination management companies and concierge travel businesses.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="block group"
            >
              <div className="bg-stone rounded-[16px] overflow-hidden hover:shadow-soft transition-shadow duration-300 h-full flex flex-col">
                {/* Placeholder for article image */}
                <div className="h-48 bg-gradient-to-br from-ink-navy to-midnight flex items-center justify-center">
                  <span className="font-cormorant font-500 text-cream text-xl">
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-montserrat text-bronze text-xs uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="font-montserrat text-steel-silver text-xs">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="font-cormorant font-500 text-ink-navy text-xl md:text-2xl leading-tight mb-3 group-hover:text-champagne transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-montserrat text-ink-navy/80 text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <Button variant="tertiary" size="sm">
                    Read Article
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button variant="secondary" size="lg" href="/#insights">
            Back to Insights
          </Button>
        </div>
      </div>
    </main>
  );
}
