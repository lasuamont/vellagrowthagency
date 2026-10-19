import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Vella Growth",
  description: "Vella Growth cookie policy - how we use cookies and similar technologies on our website.",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-cream py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-cream rounded-[16px] p-8 md:p-12 border border-stone">
          <h1 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl mb-8">
            Cookie Policy
          </h1>
          
          <p className="font-montserrat text-ink-navy text-base leading-relaxed mb-6">
            This Cookie Policy explains how Vella Growth uses cookies and similar technologies when you visit our website.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                1. What are Cookies
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They allow the website to recognize your device and remember certain information about your visit.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                2. How We Use Cookies
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                We use cookies to help our website function properly, to understand how visitors use our website, and to improve the user experience. We may use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until they expire or you delete them).
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                3. Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-montserrat font-600 text-ink-navy text-lg">
                    Essential Cookies
                  </h3>
                  <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences or filling in forms.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat font-600 text-ink-navy text-lg">
                    Analytical/Performance Cookies
                  </h3>
                  <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                4. Your Cookie Choices
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                5. Changes to This Policy
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-8 mb-4">
                6. Contact Us
              </h2>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                If you have any questions about this Cookie Policy, please contact us through our contact form.
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
