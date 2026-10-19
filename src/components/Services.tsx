"use client";

import { Compass, Globe, Network } from "lucide-react";
import Button from "./Button";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
}

const services: ServiceItem[] = [
  {
    icon: <Network size={28} className="text-champagne" />,
    title: "Digitalisation",
    description: "Help websites, booking journeys and CRM systems work together more effectively. Focus on practical improvements that make the customer journey easier to manage.",
    label: "Modern Foundations",
  },
  {
    icon: <Globe size={28} className="text-champagne" />,
    title: "SEO",
    description: "Help travel companies become more visible when potential clients search for destinations, experiences and relevant travel services.",
    label: "Search Visibility",
  },
  {
    icon: <Compass size={28} className="text-champagne" />,
    title: "GEO",
    description: "Help travel companies make their online information clearer and easier for AI assistants such as ChatGPT and Gemini to understand and potentially reference.",
    label: "AI Recommendations",
  },
];

export default function Services() {
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="bg-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="label-text mb-4">What We Do</p>
          <h2 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Digital growth, built around travel.
          </h2>
          <p className="font-montserrat text-ink-navy text-lg leading-relaxed">
            We focus on three key areas to help travel companies thrive in the digital landscape.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone rounded-[16px] p-8 hover:shadow-soft transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ink-navy flex items-center justify-center group-hover:bg-midnight transition-colors">
                  {service.icon}
                </div>
                <div>
                  <p className="label-text">{service.label}</p>
                  <h3 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed mb-6">
                {service.description}
              </p>
              <Button variant="tertiary" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
