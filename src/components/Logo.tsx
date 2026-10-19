"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "primary" | "mark" | "app";
}

export default function Logo({ className = "", variant = "primary" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="Vella Growth Home">
      {variant !== "mark" && (
        <span className="font-montserrat font-600 text-ink-navy text-lg tracking-wide">
          VELLA
        </span>
      )}
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* V Shape - Silver Gradient */}
        <svg
          className="w-full h-full"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 4L16 28L26 4"
            stroke="url(#vella-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Champagne Dot */}
          <circle cx="20" cy="10" r="2" fill="#C2AC92" />
          <defs>
            <linearGradient id="vella-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#152029" />
              <stop offset="100%" stopColor="#898C91" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {variant === "primary" && (
        <span className="font-montserrat font-400 text-ink-navy text-lg tracking-wide">
          GROWTH
        </span>
      )}
    </Link>
  );
}
