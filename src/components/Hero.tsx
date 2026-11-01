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
    <section className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-ink-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.02] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/vella-hero.webp')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-navy/95 via-ink-navy/80 to-ink-navy/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-ink-navy/15 to-ink-navy/25"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-4xl">
          <p className="label-text mb-6 text-champagne">
            Destination Growth, Made Simple
          </p>

          <h1 className="mb-8 max-w-[920px] font-cormorant text-5xl font-500 leading-[0.98] text-cream sm:text-6xl md:text-7xl lg:text-[5.8rem]">
            Grow where travellers look.
          </h1>

          <p className="mb-10 max-w-2xl font-montserrat text-lg leading-relaxed text-cream/90 md:text-xl lg:text-2xl">
            We help DMCs and concierge travel companies get found in search and
            AI answers, turn visibility into qualified enquiries, and grow
            direct bookings.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="!border-champagne !bg-champagne !text-ink-navy hover:!bg-cream"
            >
              Book a Free Visibility Audit
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="!border-cream/70 !bg-transparent !text-cream hover:!bg-cream/10"
            >
              See How We Work
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-5xl border-t border-cream/20 pt-7 md:mt-20">
          <p className="mb-5 font-montserrat text-[10px] font-600 uppercase tracking-[0.28em] text-champagne">
            How we help travel businesses grow
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
            <div className="flex items-center gap-3 sm:pr-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 bg-cream/5 text-champagne">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="10.8" cy="10.8" r="6.5" />
                  <path d="m15.7 15.7 4.2 4.2" />
                </svg>
              </span>
              <div>
                <p className="font-montserrat text-sm font-600 text-cream md:text-base">Get discovered</p>
                <p className="mt-1 font-montserrat text-xs leading-relaxed text-cream/65">Reach travellers looking for what you offer</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-cream/15 sm:border-l sm:px-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 bg-cream/5 text-champagne">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-3.5 2V11.5A7.5 7.5 0 0 1 11 4h1.5A7.5 7.5 0 0 1 20 11.5Z" />
                </svg>
              </span>
              <div>
                <p className="font-montserrat text-sm font-600 text-cream md:text-base">Create enquiries</p>
                <p className="mt-1 font-montserrat text-xs leading-relaxed text-cream/65">Turn interest into real conversations</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-cream/15 sm:border-l sm:pl-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 bg-cream/5 text-champagne">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 17 9 11l4 4 8-9" />
                  <path d="M15 6h6v6" />
                </svg>
              </span>
              <div>
                <p className="font-montserrat text-sm font-600 text-cream md:text-base">Grow bookings</p>
                <p className="mt-1 font-montserrat text-xs leading-relaxed text-cream/65">Build a stronger direct pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-t from-ink-navy/55 to-transparent" />
    </section>
  );
}
