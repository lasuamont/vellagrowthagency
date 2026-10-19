"use client";

import Link from "next/link";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      href,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      font-montserrat font-500 uppercase tracking-wider
      transition-colors duration-200 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${fullWidth ? "w-full" : "inline-block"}
    `;

    const variants = {
      primary: `
        bg-ink-navy text-cream
        hover:bg-midnight
        border-2 border-ink-navy
        ${size === "sm" ? "px-4 py-2 text-xs" : size === "md" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base"}
        rounded-[12px]
      `,
      secondary: `
        bg-transparent text-ink-navy
        hover:bg-cream
        border-2 border-ink-navy
        ${size === "sm" ? "px-4 py-2 text-xs" : size === "md" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base"}
        rounded-[12px]
      `,
      tertiary: `
        bg-transparent text-ink-navy
        hover:text-champagne
        border-none
        ${size === "sm" ? "px-2 py-1 text-xs" : size === "md" ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"}
        underline hover:no-underline
      `,
    };

    const component = (
      <button
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );

    if (href) {
      return (
        <Link href={href} className={className}>
          {component}
        </Link>
      );
    }

    return component;
  }
);

Button.displayName = "Button";

export default Button;
