"use client";

import { Eye, Mail, Bot, BarChart3 } from "lucide-react";
import Button from "./Button";

interface ResultCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
}

const resultCards: ResultCard[] = [
  {
    icon: <Eye size={28} className="text-champagne" />,
    title: "Organic Search Visibility",
    description: "We track and improve your visibility in traditional search engines for relevant destination and travel queries.",
    label: "Search Performance",
  },
  {
    icon: <Mail size={28} className="text-champagne" />,
    title: "Qualified Enquiries",
    description: "We measure and optimize the number of quality enquiries generated through your digital channels.",
    label: "Lead Generation",
  },
  {
    icon: <Bot size={28} className="text-champagne" />,
    title: "AI Answer Visibility",
    description: "We help ensure your travel services are clear and accessible for AI assistants to understand and reference.",
    label: "GEO Performance",
  },
];

export default function Results() {
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="results" className="bg-midnight py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-text text-champagne mb-4">Results</p>
          <h2 className="font-cormorant font-500 text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Make progress visible.
          </h2>
          <p className="font-montserrat text-cream text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We measure success against your starting point and business objectives. Each client relationship begins with a comprehensive audit to establish clear benchmarks.
          </p>
        </div>

        {/* Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resultCards.map((card, index) => (
            <div
              key={index}
              className="bg-stone/10 rounded-[16px] p-8 border border-steel-silver/20 hover:border-champagne/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <p className="label-text text-champagne">{card.label}</p>
                  <h3 className="font-cormorant font-500 text-cream text-2xl md:text-3xl mt-2">
                    {card.title}
                  </h3>
                </div>
              </div>
              <p className="font-montserrat text-cream text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Measurement Statement */}
        <div className="bg-ink-navy rounded-[16px] p-10 md:p-16 border border-steel-silver/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BarChart3 size={32} className="text-champagne" />
            </div>
            <h3 className="font-cormorant font-500 text-cream text-2xl md:text-3xl mb-6">
              Measurable Growth
            </h3>
            <p className="font-montserrat text-cream text-lg leading-relaxed">
              Results are measured against each client&apos;s unique starting point and business objectives. We track organic search visibility, qualified traffic, enquiries generated through digital channels, visibility in AI-generated answers, and improvements to your website and booking journey.
            </p>
            <p className="font-montserrat text-cream text-lg leading-relaxed mt-6">
              Our approach ensures you can see exactly how our work contributes to your business growth, with clear metrics and regular reporting.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            Discuss Your Visibility
          </Button>
        </div>
      </div>
    </section>
  );
}
