"use client";

import { useState, FormEvent } from "react";
import { Check, X, Mail, User, Building, Globe } from "lucide-react";
import Button from "./Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.website.trim()) {
      newErrors.website = "Website is required";
    } else if (!/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid website URL (include http:// or https://)";
    }
    
    if (!formData.consent) {
      newErrors.consent = "Consent is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // Send form data to Google Apps Script
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbynm8wtcaIUgwIzWFBV5Y2LW4pGlKvmRl_-sjgD5eQASBxvDQHyKBY6U5VbmXVatEVs/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        consent: false,
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="bg-stone py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="label-text mb-4">Contact</p>
            <h2 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Get your free visibility audit.
            </h2>
            <p className="font-montserrat text-ink-navy text-lg leading-relaxed">
              Share your website. We review your search visibility, AI visibility and digital foundations, then send a short report with clear priorities. We reply within one business day.
            </p>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-cream rounded-[16px] p-8 border border-stone">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 font-montserrat text-ink-navy text-sm font-500 mb-2">
                  <User size={16} className="text-steel-silver" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-[12px] border ${
                    errors.name ? "border-red-500" : "border-stone"
                  } bg-cream text-ink-navy placeholder-steel-silver/50 font-montserrat text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 transition-colors`}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="font-montserrat text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 font-montserrat text-ink-navy text-sm font-500 mb-2">
                  <Mail size={16} className="text-steel-silver" />
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-[12px] border ${
                    errors.email ? "border-red-500" : "border-stone"
                  } bg-cream text-ink-navy placeholder-steel-silver/50 font-montserrat text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 transition-colors`}
                  placeholder="your.name@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="font-montserrat text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="flex items-center gap-2 font-montserrat text-ink-navy text-sm font-500 mb-2">
                  <Building size={16} className="text-steel-silver" />
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-[12px] border ${
                    errors.company ? "border-red-500" : "border-stone"
                  } bg-cream text-ink-navy placeholder-steel-silver/50 font-montserrat text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 transition-colors`}
                  placeholder="Your company name"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="font-montserrat text-red-500 text-sm mt-1">
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="flex items-center gap-2 font-montserrat text-ink-navy text-sm font-500 mb-2">
                  <Globe size={16} className="text-steel-silver" />
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-[12px] border ${
                    errors.website ? "border-red-500" : "border-stone"
                  } bg-cream text-ink-navy placeholder-steel-silver/50 font-montserrat text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 transition-colors`}
                  placeholder="https://yourcompany.com"
                  aria-invalid={!!errors.website}
                  aria-describedby={errors.website ? "website-error" : undefined}
                />
                {errors.website && (
                  <p id="website-error" className="font-montserrat text-red-500 text-sm mt-1">
                    {errors.website}
                  </p>
                )}
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded-[4px] border-2 border-ink-navy text-ink-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 transition-colors"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : "consent-description"}
                  />
                  <div>
                    <p className="font-montserrat text-ink-navy text-sm leading-relaxed" id="consent-description">
                      I consent to Vella Growth storing and processing my personal data in accordance with the Privacy Policy to receive communications about the free visibility audit.
                    </p>
                    {errors.consent && (
                      <p id="consent-error" className="font-montserrat text-red-500 text-sm mt-1">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                fullWidth
                className="flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <Check size={20} className="text-cream" />
                    Request Received
                  </>
                ) : (
                  "Request Your Audit"
                )}
              </Button>

              {/* Status Message */}
              {submitStatus === "success" && (
                <p className="font-montserrat text-champagne text-sm text-center">
                  Thank you! We&apos;ll be in touch within one business day.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="font-montserrat text-red-500 text-sm text-center">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
