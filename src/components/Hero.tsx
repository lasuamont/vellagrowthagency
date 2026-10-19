"use client";

import Button from "./Button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink-navy/60 via-ink-navy/40 to-ink-navy/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Label */}
          <p className="label-text mb-6">Destination Growth, Made Simple</p>

          {/* Headline */}
          <h1 className="font-cormorant font-500 text-cream text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-tight lg:leading-tight mb-8">
            Grow where travellers look.
          </h1>

          {/* Subtitle */}
          <p className="font-montserrat text-cream text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
            We help DMCs and concierge travel companies get found in search and AI answers, turn visibility into qualified enquiries, and grow direct bookings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Book a Free Visibility Audit
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("#services")}
            >
              See How We Work
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-ink-navy/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="label-text text-cream">
            Serving: Destination Management Companies &middot; Concierge Travel &middot; Destination Specialists
          </p>
        </div>
      </div>
    </section>
  );
}
