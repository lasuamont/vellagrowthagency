"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Why Vella", href: "/#why-vella" },
    { label: "Results", href: "/#results" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  // Section links ("/#services") scroll smoothly on the home page; from any
  // other page, and for page links like "/blog", let the link navigate.
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsMobileMenuOpen(false);
    if (!isHome || !href.startsWith("/#")) return;
    const section = document.querySelector(href.slice(1));
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? "bg-cream/95 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-ink-navy hover:text-champagne transition-colors duration-200 font-montserrat text-sm font-500 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
            >
              Book a Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ink-navy hover:text-champagne transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-stone">
            <nav className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-ink-navy hover:text-champagne transition-colors duration-200 font-montserrat text-base font-500 tracking-wide py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="primary"
                size="md"
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="mt-4"
              >
                Book a Free Audit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
