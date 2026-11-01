import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "How to Help More Travellers Discover Your Business Online | Vella Growth",
  description:
    "Learn how destination management companies and concierge travel businesses can become easier to find, understand and trust when potential clients search online.",
  alternates: {
    canonical: "https://vellagrowth.com/blog/be-found-by-more-travellers",
  },
  openGraph: {
    title: "How to Help More Travellers Discover Your Business Online",
    description:
      "Practical ways to help the right travellers and partners find your business before they know your name.",
    url: "https://vellagrowth.com/blog/be-found-by-more-travellers",
    images: [
      {
        url: "https://vellagrowth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vella Growth — helping travel businesses get discovered online",
      },
    ],
  },
};

const sectionClass =
  "border border-stone rounded-[16px] p-8 md:p-10 space-y-4 font-montserrat text-ink-navy text-base leading-relaxed";

export default function DiscoverabilityArticle() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="bg-gradient-to-br from-ink-navy to-midnight pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="label-text text-champagne mb-4">Growth</p>
          <h1 className="font-cormorant font-500 text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            How to Help More Travellers Discover Your Business Online
          </h1>
          <p className="font-montserrat text-cream/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-9">
            Your next customer may not know your name yet. Here is how to make
            your business easier to find, understand and trust when they start
            planning.
          </p>
          <Button
            variant="secondary"
            size="lg"
            href="/#contact"
            className="!bg-cream !text-ink-navy !border-cream hover:!bg-stone"
          >
            Discuss Your Online Visibility
          </Button>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <article className="space-y-10">
          <section className="bg-stone rounded-[16px] p-8 md:p-10 space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
            <p className="text-bronze text-xs uppercase tracking-[0.2em] font-600">
              The opportunity
            </p>
            <p>
              Imagine someone planning a private trip to Barcelona. They might
              search for a local company that can organise a tailored
              experience, a specialist who knows the region, or a concierge
              team that can take care of the details. They may be ready to
              spend money, but they have never heard of your business.
            </p>
            <p>
              This is how many new customer relationships begin: not with a
              search for your company name, but with a search for a place, an
              experience or a solution.
            </p>
            <p>
              Being easy to discover at that moment gives you a chance to enter
              the conversation. It does not guarantee a booking, but it means
              a potential customer can consider you instead of only seeing the
              businesses they already know.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              1. Be visible before people know your name
            </h2>
            <p>
              People often begin with a need rather than a company. A family
              might look for a private food tour in Sicily. An event planner
              might need a local partner in Lisbon. A traveller might want a
              concierge service in a destination they have never visited.
            </p>
            <p>
              These searches are valuable because they reveal what the person
              is trying to do. Your website should help them recognise that
              your business can provide the answer.
            </p>
            <p>
              Start by listing the real reasons someone would hire you:
              arranging local experiences, managing an itinerary, organising
              transport, supporting a corporate group, or providing
              destination-specific expertise. Then consider the places and
              situations in which each service is relevant.
            </p>
            <p>
              The goal is not to appear in front of everyone. It is to become
              visible to people whose plans match what you actually offer.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              2. Explain what you do in your customer&apos;s language
            </h2>
            <p>
              Your team may use industry terms every day. Your potential
              customer may not. They might not know the difference between a
              destination management company, an incoming operator and a
              concierge provider. They simply want to know who can help them
              plan and deliver the trip they have in mind.
            </p>
            <p>
              Make the first description of each service straightforward.
              Explain who it is for, what you organise, where you operate and
              what the customer can expect. Use the names of destinations,
              experiences and services that people would naturally use when
              describing what they need.
            </p>
            <p>
              For example, a page called <span className="font-600">Private experiences in Tuscany</span> can be more
              useful to a visitor than a broad page filled with internal
              descriptions of your service categories—provided that private
              experiences in Tuscany are genuinely something your business
              offers.
            </p>
            <p>
              Give important services and destinations enough space to be
              understood. One general page cannot always explain every
              experience, audience and location clearly.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              3. Answer the questions customers ask before contacting you
            </h2>
            <p>
              A potential customer may be interested but still have practical
              questions. Can you arrange a multi-day itinerary? Do you work
              with families or corporate groups? Which areas do you cover? How
              does the planning process work? What information do you need to
              prepare a proposal?
            </p>
            <p>
              When your website answers these questions clearly, visitors can
              decide whether your business is the right fit before they send
              an enquiry.
            </p>
            <p>
              Useful pages do not need to be long or complicated. A clear
              explanation of how a service works, a realistic example of the
              type of experience you arrange, or a short set of frequently
              asked questions can make a real difference to someone comparing
              several providers.
            </p>
            <p>
              Avoid writing articles simply to fill a blog. Choose questions
              your customers genuinely ask and answer them with information
              that reflects your team's knowledge of the destination and the
              service.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              4. Turn a search result into a reason to trust you
            </h2>
            <p>
              Being discovered is only the first step. Once someone reaches
              your website, they need to understand why they should contact
              you rather than another provider.
            </p>
            <p>
              Show the details that help a customer feel confident: the
              destinations you know well, the kind of clients you work with,
              examples of experiences you have delivered, genuine testimonials
              and the people behind the business. Be specific about what makes
              your approach different.
            </p>
            <p>
              Make practical information easy to find too. Your contact
              details, service areas and next step should not be hidden. A
              visitor should be able to move from learning about an experience
              to asking a question without having to search around the site.
            </p>
            <p>
              Think about the experience on a phone as well as on a computer.
              Someone may discover your business while travelling, researching
              on the move or sharing options with other people. Pages should
              be readable, load reliably and make the next step clear.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              5. Make it easy for the right visitor to become an enquiry
            </h2>
            <p>
              More website visits are not automatically better. A large number
              of people looking for something you do not provide is unlikely
              to help your business. What matters is attracting visitors who
              are a good match and giving them a clear way to take the next
              step.
            </p>
            <p>
              For each important service, ask yourself: is it clear who this
              is for? Does the page explain the value? Is there a relevant
              example or proof point? Can the visitor easily ask for more
              information?
            </p>
            <p>
              Your enquiry form should request enough information to begin a
              useful conversation, without making the first step feel like
              paperwork. You can always learn more about the customer's plans
              in the follow-up.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              6. Measure the opportunities, not just the visits
            </h2>
            <p>
              It is tempting to judge progress by whether website traffic goes
              up. That number can be useful, but it does not tell the whole
              story.
            </p>
            <p>
              Look at which pages bring people to your website, which
              destinations and services attract attention, and whether those
              visits lead to relevant enquiries. Ask new customers how they
              first found you. Over time, these details help you understand
              what is creating genuine business opportunities.
            </p>
            <p>
              Some visitors will contact you straight away. Others may compare
              providers, discuss options with colleagues or return when their
              plans become clearer. Online discovery is often one part of a
              longer decision, especially for high-value or carefully planned
              travel.
            </p>
          </section>

          <section className="bg-stone rounded-[16px] p-8 md:p-10">
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-5">
              A simple check for your website
            </h2>
            <p className="font-montserrat text-ink-navy text-base leading-relaxed mb-5">
              Open your website as if you were a potential customer who has
              never heard of your company. Can you quickly answer these
              questions?
            </p>
            <ul className="list-disc pl-6 space-y-2 font-montserrat text-ink-navy text-base leading-relaxed">
              <li>What does this business help me organise?</li>
              <li>Which destinations and types of experience does it cover?</li>
              <li>Is it a good fit for the trip or group I have in mind?</li>
              <li>What makes this company a credible choice?</li>
              <li>What should I do next if I am interested?</li>
            </ul>
            <p className="font-montserrat text-ink-navy text-base leading-relaxed mt-5">
              If the answers are difficult to find, a potential customer may
              leave before you have a chance to speak with them.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              Online discovery is a long-term business asset
            </h2>
            <p>
              Helping more of the right people find your business is not a
              one-time change. It comes from making your services clear,
              publishing genuinely useful information, keeping important
              details accurate and improving the experience visitors have on
              your website.
            </p>
            <p>
              It also takes time. Search engines decide which pages to show,
              and no agency can honestly guarantee a first-place position or a
              fixed number of enquiries. The right approach is to build a
              stronger presence steadily and measure whether it is attracting
              the customers your business wants to serve.
            </p>
            <p>
              This is also why useful information matters more than writing
              pages just to include popular phrases. Google&apos;s own guidance
              encourages clear, helpful information created for people. You
              can read its{" "}
              <a
                href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-bronze"
              >
                Search Central starter guide
              </a>{" "}
              for a practical overview.
            </p>
          </section>

          <section className="bg-ink-navy rounded-[16px] p-8 md:p-12 text-center">
            <p className="label-text text-champagne mb-4">Be easier to discover</p>
            <h2 className="font-cormorant font-500 text-cream text-3xl md:text-4xl mb-5">
              Is your website reaching the customers you want to work with?
            </h2>
            <p className="font-montserrat text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto mb-9">
              We help destination management companies and concierge travel
              businesses make their services easier to find, understand and
              trust online. Let&apos;s look at what potential customers see
              when they search for the experiences and destinations you offer.
            </p>
            <Button
              variant="secondary"
              size="lg"
              href="/#contact"
              className="!bg-cream !text-ink-navy !border-cream hover:!bg-stone"
            >
              Discuss Your Online Visibility
            </Button>
          </section>

          <section className="border-t border-stone pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-montserrat text-bronze text-sm">
                  Published: November 2026
                </span>
                <span className="font-montserrat text-bronze text-sm">
                  Category: Growth
                </span>
              </div>
              <Link
                href="/blog"
                className="font-montserrat text-ink-navy hover:text-champagne transition-colors text-sm underline"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
