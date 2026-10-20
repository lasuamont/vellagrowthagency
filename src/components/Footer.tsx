"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { LinkIcon } from "lucide-react";

export default function Footer() {
  const isHome = usePathname() === "/";

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) return;
    const section = document.querySelector(href.slice(1));
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Why Vella", href: "/#why-vella" },
    { label: "Results", href: "/#results" },
    { label: "Insights", href: "/#insights" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-ink-navy py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo variant="primary" className="mb-6" />
            <p className="font-montserrat text-cream text-sm leading-relaxed">
              Vella Growth helps destination management companies and concierge travel businesses get found in search and AI answers, turn visibility into qualified enquiries, and grow direct bookings.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block font-montserrat text-cream/80 hover:text-champagne transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <nav className="space-y-3">
              <Link href="/#services" className="block font-montserrat text-cream/80 hover:text-champagne transition-colors duration-200 text-sm">
                Digitalisation
              </Link>
              <Link href="/#services" className="block font-montserrat text-cream/80 hover:text-champagne transition-colors duration-200 text-sm">
                SEO
              </Link>
              <Link href="/#services" className="block font-montserrat text-cream/80 hover:text-champagne transition-colors duration-200 text-sm">
                GEO
              </Link>
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="md:col-span-1">
            <h4 className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <nav className="space-y-3 mb-6">
              <Link href="/privacy" className="block font-montserrat text-cream/80 hover:text-champagne transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="block font-montserrat text-cream/80 hover:text-champagne transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </nav>
            
            <h4 className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-champagne/20 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkIcon size={18} className="text-cream" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel-silver/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-montserrat text-cream/60 text-sm">
              &copy; 2026 Vella Growth. All rights reserved.
            </p>
            <p className="font-montserrat text-cream/60 text-sm">
              Designed for travel professionals. Based in the US.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
