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
    description: "Understand the current website, search visibility and opportunities.",
    step: "01",
  },
  {
    icon: <Hammer size={24} className="text-champagne" />,
    title: "Build",
    description: "Improve the digital foundations and implement a focused strategy.",
    step: "02",
  },
  {
    icon: <TrendingUp size={24} className="text-champagne" />,
    title: "Grow",
    description: "Measure enquiries and business outcomes, then improve what works.",
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
              A growth partner that understands the travel trade.
            </h2>
            <p className="font-montserrat text-ink-navy text-lg leading-relaxed mb-8">
              Vella focuses exclusively on travel companies. We understand the unique challenges and opportunities that DMCs and concierge travel businesses face. This specialist knowledge means we can deliver more effective, targeted solutions.
            </p>
            <p className="font-montserrat text-ink-navy text-lg leading-relaxed mb-10">
              Unlike generic digital agencies, we speak the language of travel professionals. We understand destinations, itineraries, travel partners and bookings. This industry-specific expertise allows us to create strategies that truly resonate with your target audience.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              See How We Work
            </Button>
          </div>

          {/* Right - Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
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

        {/* Agency Introduction */}
        <div className="mt-20 bg-ink-navy rounded-[16px] p-10 md:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="label-text text-champagne mb-6">Our Approach</p>
            <p className="font-montserrat text-cream text-lg md:text-xl leading-relaxed mb-8">
              At Vella, we believe that digital growth should be simple, measurable and built around your specific business needs. We work collaboratively with our clients, taking the time to understand their unique challenges and opportunities. Our approach combines industry expertise with proven digital strategies to deliver real, sustainable growth.
            </p>
            <p className="font-montserrat text-cream text-lg md:text-xl leading-relaxed">
              We focus on practical improvements that deliver measurable business outcomes. Whether it is increasing your search visibility, optimizing your booking journey, or ensuring your information is AI-ready, we help you achieve more qualified enquiries and direct bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
