"use client";

import { Search, Hammer, TrendingUp } from "lucide-react";
import Button from "./Button";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <Search size={24} className="text-champagne" />,
    title: "Audit",
    description: "Find where you lose visibility and enquiries.",
    step: "01",
  },
  {
    icon: <Hammer size={24} className="text-champagne" />,
    title: "Build",
    description: "Fix the foundations that matter most first.",
    step: "02",
  },
  {
    icon: <TrendingUp size={24} className="text-champagne" />,
    title: "Grow",
    description: "Report on enquiries, not vanity metrics, and improve what works.",
    step: "03",
  },
];

export default function WhyVella() {
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="why-vella" className="bg-stone py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="label-text mb-4">Why Vella</p>
            <h2 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              We only work with travel companies.
            </h2>
            <p className="font-montserrat text-ink-navy text-lg leading-relaxed mb-10">
              We know how DMCs sell: through partners, itineraries and trust. One team handles your website, search and AI visibility, so you stop juggling suppliers.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Book a Free Audit
            </Button>
          </div>

          {/* Right - Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-cream rounded-[16px] p-8 border border-stone"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-ink-navy flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <p className="label-text text-center">{step.step}</p>
                  </div>
                  <div>
                    <h3 className="font-cormorant font-500 text-ink-navy text-2xl mb-3">
                      {step.title}
                    </h3>
                    <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
