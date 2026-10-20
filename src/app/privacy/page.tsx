import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vella Growth",
  description: "Vella Growth privacy policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream pt-36 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-cream rounded-[16px] p-8 md:p-12 border border-stone">
          <h1 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl mb-8">
            Privacy Policy
          </h1>
          
          <p className="font-montserrat text-ink-navy text-base leading-relaxed mb-6">
            This Privacy Policy describes how Vella Growth collects, uses, and discloses your personal information when you visit our website or use our services.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                We collect information you provide directly to us, such as when you fill out our contact form, request a visibility audit, or communicate with us via email. This information may include your name, email address, company name, website URL, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services; to respond to your inquiries; to send you technical notices, updates, and support messages; and to communicate with you about our services.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                3. Sharing of Information
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                We do not share your personal information with third parties except as described in this Privacy Policy or with your consent. We may share information with service providers who perform services on our behalf, but they are only authorized to use your information as necessary to perform their functions.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                4. Security
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                5. Your Choices
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                You may update or correct your account information at any time by contacting us. You may also opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                6. Contact Us
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our contact form.
              </p>
            </section>
          </div>

          <p className="font-montserrat text-bronze text-sm mt-12 pt-8 border-t border-stone">
            Last updated: October 2026
          </p>
        </div>
      </div>
    </main>
  );
}
