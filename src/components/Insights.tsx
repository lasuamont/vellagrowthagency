"use client";

import { useState } from "react";
import Link from "next/link";
import { Lightbulb, BookOpen, HelpCircle } from "lucide-react";
import Button from "./Button";

interface InsightCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
}

const insightCards: InsightCard[] = [
  {
    icon: <Lightbulb size={28} className="text-champagne" />,
    title: "What GEO Means for DMCs",
    description: "Understanding how Generative Engine Optimization can help destination management companies appear in AI-powered search results and recommendations.",
    label: "Featured Topic",
  },
  {
    icon: <BookOpen size={28} className="text-champagne" />,
    title: "Where Direct Enquiries Come From",
    description: "Exploring the key channels and strategies that generate qualified direct enquiries for travel businesses.",
    label: "Industry Insight",
  },
  {
    icon: <HelpCircle size={28} className="text-champagne" />,
    title: "Improving DMC Website Visibility",
    description: "Practical steps to enhance your destination management company's search visibility and attract more qualified traffic.",
    label: "Practical Guide",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is GEO and how does it differ from SEO?",
    answer: "GEO (Generative Engine Optimization) focuses on making your content clear and accessible for AI assistants like ChatGPT and Gemini to understand and potentially reference. While SEO focuses on traditional search engines, GEO ensures your information is AI-ready and can be properly interpreted by large language models.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on your starting point, competition, and the specific services you engage. Typically, SEO improvements may take 3-6 months to show significant impact, while GEO optimizations can be implemented and take effect more quickly. We provide regular reporting to track progress against your benchmarks.",
  },
  {
    question: "What is the free visibility audit?",
    answer: "Our free visibility audit is a comprehensive assessment of your current online presence. We analyze your website, search visibility, and digital foundations to identify opportunities for improvement. The audit includes a detailed report with actionable recommendations tailored to your travel business.",
  },
  {
    question: "Who does Vella work with?",
    answer: "We work exclusively with destination management companies (DMCs) and concierge travel companies. Our specialist focus on the travel sector means we understand your unique challenges and can deliver more targeted, effective solutions than generic digital agencies.",
  },
];

export default function Insights() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="insights" className="bg-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-text mb-4">Insights</p>
          <h2 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Expertise in travel marketing.
          </h2>
          <p className="font-montserrat text-ink-navy text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Explore our insights on travel marketing, SEO, GEO, and digital growth strategies tailored for the travel industry.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-ink-navy to-midnight rounded-[16px] p-8 border border-ink-navy/20">
            <p className="label-text text-champagne mb-4">Featured Article</p>
            <h3 className="font-cormorant font-500 text-cream text-2xl md:text-3xl mb-4">
              From LinkedIn to Qualified Leads: How Our Conversion Funnel Turns Prospects into Clients
            </h3>
            <p className="font-montserrat text-cream/80 text-base leading-relaxed mb-6">
              Discover our five-stage conversion funnel strategy: LinkedIn post → Blog article → Live public webinar → Booking of a free demo. Learn how we attract, educate, and convert prospects into qualified leads.
            </p>
            <Link
              href="/blog/conversion-funnel"
              className="inline-flex items-center gap-2 font-montserrat text-champagne hover:text-cream transition-colors text-sm uppercase tracking-wider"
            >
              Read Article &rarr;
            </Link>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {insightCards.map((card, index) => (
            <div
              key={index}
              className="bg-stone rounded-[16px] p-8 hover:shadow-soft transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ink-navy flex items-center justify-center group-hover:bg-midnight transition-colors">
                  {card.icon}
                </div>
                <div>
                  <p className="label-text">{card.label}</p>
                  <h3 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-2">
                    {card.title}
                  </h3>
                </div>
              </div>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-ink-navy rounded-[16px] p-10 md:p-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-cormorant font-500 text-cream text-3xl md:text-4xl text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-steel-silver/20 pb-6"
                >
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-montserrat font-500 text-cream text-lg">
                      {item.question}
                    </span>
                    <span 
                      className={`font-montserrat text-champagne text-2xl transition-transform duration-200 ${openFAQ === index ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? "max-h-96 mt-4" : "max-h-0"}`}
                  >
                    <p className="font-montserrat text-cream/80 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            Get Started with Vella
          </Button>
        </div>
      </div>
    </section>
  );
}
