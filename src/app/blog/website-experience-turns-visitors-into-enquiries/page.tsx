import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Does Your Website Make It Easy to Choose You? | Vella Growth",
  description:
    "Discover how a clear, reassuring and easy-to-use website can help destination management companies and concierge travel businesses turn visitor interest into enquiries.",
  alternates: {
    canonical:
      "https://vellagrowth.com/blog/website-experience-turns-visitors-into-enquiries",
  },
  openGraph: {
    title: "Does Your Website Make It Easy to Choose You?",
    description:
      "A practical guide to making your travel business website clearer, easier to use and more effective at turning interest into enquiries.",
    url: "https://vellagrowth.com/blog/website-experience-turns-visitors-into-enquiries",
    images: [
      {
        url: "https://vellagrowth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vella Growth — creating better website experiences for travel businesses",
      },
    ],
  },
};

const articleSection =
  "border border-stone rounded-[16px] p-8 md:p-10 space-y-4 font-montserrat text-ink-navy text-base leading-relaxed";

export default function WebsiteExperienceArticle() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="bg-gradient-to-br from-ink-navy to-midnight pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="label-text text-champagne mb-4">Customer Experience</p>
          <h1 className="font-cormorant font-500 text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Does Your Website Make It Easy to Choose You?
          </h1>
          <p className="font-montserrat text-cream/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-9">
            A potential customer has found your business. Can they quickly
            understand what you offer, feel confident in your service and take
            the next step?
          </p>
          <Button
            variant="secondary"
            size="lg"
            href="/#contact"
            className="!bg-cream !text-ink-navy !border-cream hover:!bg-stone"
          >
            Talk About Your Website
          </Button>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <article className="space-y-10">
          <section className="bg-stone rounded-[16px] p-8 md:p-10 space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
            <p className="text-bronze text-xs uppercase tracking-[0.2em] font-600">
              The first conversation
            </p>
            <p>
              Imagine a travel advisor looking for a reliable local partner in
              Greece. They open your website, look around for a few seconds and
              try to answer three questions: Do you offer what I need? Do you
              understand this destination? Can I trust you with my client?
            </p>
            <p>
              Your website is often the first conversation someone has with
              your business. Before they speak to your team, the words,
              photographs, page layout and enquiry process are already
              shaping their impression.
            </p>
            <p>
              A beautiful website can attract attention, but appearance alone
              does not make it easy to choose a company. Visitors also need
              clarity, reassurance and a straightforward path to contact you.
              When those things work together, your website can do more than
              introduce your business: it can help move a potential customer
              towards a real conversation.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              1. Make it immediately clear what your business offers
            </h2>
            <p>
              Visitors should not have to study your website to understand what
              you do. A destination management company, for example, might
              arrange tailor-made itineraries, local experiences, group
              logistics or services for travel advisors. A concierge business
              might specialise in private stays, dining, transport or
              personal assistance.
            </p>
            <p>
              Put the most important information where people can see it
              easily. Explain who you help, what you arrange and where you
              operate. Use straightforward language instead of relying on
              internal industry descriptions that a new customer may not
              recognise.
            </p>
            <p>
              Think of your homepage as a clear introduction, not a company
              history. A visitor should be able to tell whether they are in the
              right place before they need to read several paragraphs.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              2. Help visitors find what they came for
            </h2>
            <p>
              Different visitors arrive with different questions. A travel
              advisor may want to know which destinations you cover. A
              corporate planner may be looking for group arrangements. A
              private traveller may be interested in one particular kind of
              experience.
            </p>
            <p>
              Your menu and page structure should reflect those needs. Group
              information in a way that makes sense to a customer: by
              destination, type of service or type of traveller, for example.
              Avoid making visitors guess what a broad menu label contains.
            </p>
            <p>
              Important information should be easy to reach from more than one
              place. A visitor reading about a destination experience should
              not have to return to the homepage just to find out how to ask
              about it.
            </p>
            <p>
              A simple test is to ask someone unfamiliar with your company to
              find a particular service or destination. Watch where they
              hesitate. Their confusion can reveal more than an internal team
              discussion about whether the menu looks intuitive.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              3. Let the design guide people towards the next step
            </h2>
            <p>
              Good design is not only about colours, typography and attractive
              photographs. It also helps visitors understand what matters and
              what they can do next.
            </p>
            <p>
              Give each page a clear priority. A strong heading explains what
              the page is about. Supporting text answers the most important
              questions. A visible button invites the visitor to take a
              relevant next step, such as asking for a proposal, discussing an
              itinerary or contacting your team.
            </p>
            <p>
              When every element competes for attention, the visitor has to
              work harder to decide where to look. Too many competing buttons,
              pop-ups, animations or unrelated messages can interrupt the
              journey instead of helping it.
            </p>
            <p>
              Keep the visual style consistent across the website so that
              visitors feel they are moving through one reliable business,
              rather than several unrelated pages.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              4. Use photographs to show the experience you actually deliver
            </h2>
            <p>
              In travel, people are often choosing something they cannot
              experience before they book: a destination, a local partner, a
              private experience or the way a trip will be managed. Your
              imagery helps them picture what working with you could look
              like.
            </p>
            <p>
              Choose photographs that support the service being described.
              If you arrange private culinary experiences, show the setting,
              the food and the kind of interaction guests can expect. If your
              strength is destination expertise, show the places and details
              that make your knowledge tangible.
            </p>
            <p>
              Whenever possible, use genuine images from your work and
              destinations. Keep them high quality, but make sure they load
              well and do not make the page difficult to use. Beautiful images
              should support the message, not hide it.
            </p>
            <p>
              Most importantly, make sure the impression created by your
              website matches the experience your team can genuinely deliver.
              Trust is easier to build when the promise and the reality are
              consistent.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              5. Make the website comfortable to use on a phone
            </h2>
            <p>
              A potential customer may discover your business while travelling,
              between meetings or while sharing options with colleagues. They
              may be using a phone rather than sitting at a desk.
            </p>
            <p>
              On a smaller screen, visitors should still be able to read
              comfortably, understand the page, open the menu and use the
              buttons without pinching, zooming or accidentally selecting the
              wrong thing. Important information should not disappear or
              become difficult to reach.
            </p>
            <p>
              Check the complete journey on a real phone: open the homepage,
              find a service, read the details and try to contact the business.
              Pay attention to image loading, text size, spacing and whether
              the next action is obvious.
            </p>
            <p>
              Making a website easier to use for people with different access
              needs also benefits visitors more broadly. The World Wide Web
              Consortium&apos;s{" "}
              <a
                href="https://www.w3.org/TR/WCAG22/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-bronze"
              >
                Web Content Accessibility Guidelines
              </a>{" "}
              cover areas such as readable content, keyboard access and
              interaction across devices.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              6. Remove unnecessary effort from the enquiry process
            </h2>
            <p>
              Someone can be interested in your service and still give up if
              contacting you feels like hard work. A long form, unclear
              questions or a button that does not explain what happens next
              can turn a promising visit into a missed conversation.
            </p>
            <p>
              For an initial enquiry, ask only for the information your team
              genuinely needs to start a useful discussion. You may need a
              name, an email address and a short description of what the
              visitor is looking for. More detailed questions can be asked
              later, once you are speaking with them.
            </p>
            <p>
              Make field labels clear, explain what is required and show
              helpful messages if something is missing. After someone submits
              the form, confirm that it has been received and explain what
              they can expect next. If you promise to reply within a certain
              time, make sure your team can meet that promise.
            </p>
            <p>
              Research by the Baymard Institute into online checkout
              experiences highlights how unnecessary form fields can increase
              the effort people feel they must make. A travel enquiry is not
              the same as an online checkout, but the practical lesson is
              relevant: do not ask a potential customer to complete more than
              is needed for the next step.
            </p>
            <p>
              You can explore Baymard&apos;s{" "}
              <a
                href="https://baymard.com/research-articles/checkout-flow-average-form-fields"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-bronze"
              >
                research on reducing unnecessary form fields
              </a>{" "}
              for more detail.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              7. Give visitors reasons to feel confident
            </h2>
            <p>
              Choosing a travel partner can involve money, reputation and
              responsibility for someone else&apos;s experience. Visitors
              need more than attractive visuals before they feel ready to
              make contact.
            </p>
            <p>
              Show evidence that helps them understand who they may be working
              with. This could include genuine client feedback, examples of
              previous work, destination knowledge, relevant partnerships,
              team introductions or clear explanations of how you manage a
              project.
            </p>
            <p>
              Be specific. A short testimonial that explains what you helped a
              client organise can be more useful than a generic statement
              saying your service is excellent. Examples should be accurate
              and shared with permission.
            </p>
            <p>
              Also make basic details easy to find: where you are based, which
              destinations you serve, how to contact you and what happens
              after an enquiry. Small uncertainties can make a visitor pause.
            </p>
          </section>

          <section className="bg-stone rounded-[16px] p-8 md:p-10">
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-5">
              A five-minute website test
            </h2>
            <p className="font-montserrat text-ink-navy text-base leading-relaxed mb-5">
              Ask someone who does not know your business to open your website
              on a phone. Without explaining anything, ask them to:
            </p>
            <ol className="list-decimal pl-6 space-y-2 font-montserrat text-ink-navy text-base leading-relaxed">
              <li>Explain what your company offers.</li>
              <li>Find a service or destination that interests them.</li>
              <li>Tell you what makes the business feel credible.</li>
              <li>Find out how to ask a question or request a proposal.</li>
              <li>Complete the first step of the enquiry process.</li>
            </ol>
            <p className="font-montserrat text-ink-navy text-base leading-relaxed mt-5">
              Do not guide them while they do it. Notice where they hesitate,
              what they overlook and what they ask you to explain. Those
              moments are useful clues about what your customers may be
              experiencing too.
            </p>
          </section>

          <section className={articleSection}>
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl">
              A better website helps good businesses get considered
            </h2>
            <p>
              Your website cannot replace the quality of your service, your
              relationships or the expertise of your team. But it can make
              those strengths easier for a potential customer to recognise.
            </p>
            <p>
              When visitors understand what you offer, find relevant
              information, see reasons to trust you and can contact you
              comfortably, they have a much clearer path from interest to
              enquiry.
            </p>
            <p>
              Improving that experience is not about adding more effects or
              following every design trend. It is about removing confusion and
              making it easier for the right customer to choose the next step.
            </p>
          </section>

          <section className="bg-ink-navy rounded-[16px] p-8 md:p-12 text-center">
            <p className="label-text text-champagne mb-4">Make every visit count</p>
            <h2 className="font-cormorant font-500 text-cream text-3xl md:text-4xl mb-5">
              Does your website make the value of your business easy to see?
            </h2>
            <p className="font-montserrat text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto mb-9">
              We help destination management companies and concierge travel
              businesses create clearer online experiences that make it easier
              for potential customers to understand their services, build
              confidence and get in touch.
            </p>
            <Button
              variant="secondary"
              size="lg"
              href="/#contact"
              className="!bg-cream !text-ink-navy !border-cream hover:!bg-stone"
            >
              Talk About Your Website
            </Button>
          </section>

          <section className="border-t border-stone pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-montserrat text-bronze text-sm">
                  Published: November 2026
                </span>
                <span className="font-montserrat text-bronze text-sm">
                  Category: Customer Experience
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
