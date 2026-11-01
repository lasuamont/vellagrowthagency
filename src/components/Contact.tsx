"use client";

import { useState, FormEvent } from "react";
import { Check, Mail, MessageSquare, User } from "lucide-react";
import Button from "./Button";
import { insertLead } from "@/lib/supabase/leads";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await insertLead({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      if (error) {
        throw error;
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
              Let&apos;s look at your visibility.
            </h2>
            <p className="font-montserrat text-ink-navy text-lg leading-relaxed mb-8">
              Tell us what you&apos;re working on and how we can help. We&apos;ll get back to you within one business day.
            </p>

            <div className="bg-cream rounded-[16px] p-6 border border-stone">
              <p className="font-montserrat text-bronze text-sm font-500 uppercase tracking-wider mb-2">
                Response Time
              </p>
              <p className="font-montserrat text-ink-navy text-lg">
                We reply within one business day.
              </p>
            </div>
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
                  autoComplete="name"
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
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={`w-full px-4 py-3 rounded-[12px] border ${
                    errors.email ? "border-red-500" : "border-stone"
                  } bg-cream text-ink-navy placeholder-steel-silver/50 font-montserrat text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 transition-colors`}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="font-montserrat text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 font-montserrat text-ink-navy text-sm font-500 mb-2">
                  <MessageSquare size={16} className="text-steel-silver" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-[12px] border ${
                    errors.message ? "border-red-500" : "border-stone"
                  } bg-cream text-ink-navy placeholder-steel-silver/50 font-montserrat text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 transition-colors resize-y`}
                  placeholder="How can we help?"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="font-montserrat text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
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
                    Message Sent
                  </>
                ) : (
                  "Send Message"
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
