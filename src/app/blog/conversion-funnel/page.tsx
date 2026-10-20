import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import FunnelDiagram from "@/components/FunnelDiagram";
import { funnelStages } from "@/data/funnel";

export const metadata: Metadata = {
  title: "From LinkedIn to Qualified Leads: How Our Conversion Funnel Turns Prospects into Clients | Vella Growth",
  description: "Discover our five-stage conversion funnel strategy: LinkedIn post → Blog article → Live public webinar → Booking of a free demo. Learn how Vella Growth attracts, educates, and converts prospects into qualified leads.",
  openGraph: {
    title: "From LinkedIn to Qualified Leads: How Our Conversion Funnel Turns Prospects into Clients",
    description: "Discover our five-stage conversion funnel strategy for travel marketing agencies.",
    url: "https://vellagrowth.com/blog/conversion-funnel",
    images: [
      {
        url: "https://vellagrowth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vella Growth Conversion Funnel",
      },
    ],
  },
};

export default function ConversionFunnelArticle() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-ink-navy to-midnight py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="label-text text-champagne mb-4">Strategy</p>
          <h1 className="font-cormorant font-500 text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            From LinkedIn to Qualified Leads: How Our Conversion Funnel Turns Prospects into Clients
          </h1>
          <p className="font-montserrat text-cream/80 text-lg md:text-xl leading-relaxed mb-8">
            A complete guide to our five-stage approach for attracting and converting travel industry prospects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="md">
              Register for Webinar
            </Button>
            <Button variant="primary" size="md" href="#contact">
              Book a Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <article className="space-y-12">
          {/* Introduction */}
          <section className="bg-stone rounded-[16px] p-8 md:p-10">
            <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-6">
              Why Our Agency Needs a Structured Approach
            </h2>
            <div className="space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
              <p>
                At Vella Growth, we understand that attracting and converting prospects in the competitive travel marketing space requires more than just great services—it requires a strategic, structured approach. The travel industry, particularly for destination management companies and concierge travel businesses, is built on relationships and trust. Potential clients need to understand our value before they&apos;re ready to engage.
              </p>
              <p>
                That&apos;s why we&apos;ve developed a comprehensive conversion funnel designed specifically for our agency. This funnel doesn&apos;t just guide prospects through our services; it builds trust at each stage, demonstrates our expertise, and helps us identify qualified leads who are genuinely interested in growing their travel businesses.
              </p>
              <p>
                In this article, we&apos;ll walk you through each stage of our conversion funnel, explain our objectives, and share how we plan to measure success. Whether you&apos;re a DMC owner looking for marketing support or a digital manager seeking specialized expertise, understanding our approach will help you see how we can work together to achieve your growth goals.
              </p>
            </div>
          </section>

          {/* Stage 1 */}
          <section className="border border-stone rounded-[16px] p-8 md:p-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-champagne/20 flex items-center justify-center">
                <span className="font-cormorant font-500 text-champagne text-2xl">1</span>
              </div>
              <div>
                <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-4">
                  Stage 1 — Attract Through LinkedIn
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
              <p>
                LinkedIn has become the premier platform for B2B marketing, especially in specialized industries like travel. For our agency, LinkedIn offers an unparalleled opportunity to reach decision-makers at DMCs and concierge travel companies who are actively seeking solutions to grow their businesses.
              </p>
              <p>
                We share useful, relevant content that addresses the specific challenges faced by travel professionals. This includes insights on destination marketing trends, practical tips for improving online visibility, and thought leadership on emerging opportunities in travel technology. By consistently delivering value through our LinkedIn posts, we aim to position Vella Growth as a trusted resource in the travel marketing space.
              </p>
              <p>
                Each post is carefully crafted to encourage engagement and, most importantly, to drive clicks through to our website. We use compelling headlines, relevant hashtags, and clear calls-to-action that direct interested prospects to our blog articles, where they can learn more about our approach and expertise.
              </p>
              <p>
                The beauty of LinkedIn is its ability to reach a highly targeted audience. We can connect directly with owners, managing directors, and marketing managers at travel companies who understand the industry but may lack the time or specialist knowledge to manage their digital growth effectively.
              </p>
            </div>
            <div className="mt-6 p-4 bg-cream/50 rounded-[12px] border border-stone/50">
              <p className="font-montserrat text-bronze text-sm font-500 uppercase tracking-wider mb-2">
                Stage Objective
              </p>
              <p className="font-montserrat text-ink-navy font-600">
                Conversion: Impression → click to blog | Target: 1–2% | Position: TOFU (Attract)
              </p>
            </div>
          </section>

          {/* Stage 2 */}
          <section className="border border-stone rounded-[16px] p-8 md:p-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-bronze/20 flex items-center justify-center">
                <span className="font-cormorant font-500 text-bronze text-2xl">2</span>
              </div>
              <div>
                <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-4">
                  Stage 2 — Educate Through Our Blog
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
              <p>
                Once prospects arrive at our website from LinkedIn, our blog articles serve as the next crucial touchpoint in the conversion journey. These aren&apos;t just informational pieces—they&apos;re strategic assets designed to address the specific problems and opportunities that travel companies face.
              </p>
              <p>
                Our blog content dives deep into topics that matter to DMCs and concierge travel businesses. We explain how digitalisation can streamline booking journeys, how SEO can increase visibility for destination searches, and how GEO (Generative Engine Optimization) can help travel companies appear in AI-powered search results.
              </p>
              <p>
                Each article demonstrates our deep understanding of the travel industry and our specialized knowledge in digital marketing. We don&apos;t just explain concepts; we provide actionable insights that prospects can apply to their own businesses. This approach not only builds credibility but also showcases the value we can provide.
              </p>
              <p>
                At the end of each relevant article, we include clear calls-to-action inviting readers to register for our live public webinars. These webinars represent the next step in the journey, where prospects can engage more deeply with our expertise and learn practical strategies they can implement immediately.
              </p>
            </div>
            <div className="mt-6 p-4 bg-cream/50 rounded-[12px] border border-stone/50">
              <p className="font-montserrat text-bronze text-sm font-500 uppercase tracking-wider mb-2">
                Stage Objective
              </p>
              <p className="font-montserrat text-ink-navy font-600">
                Conversion: Blog visit → webinar registration | Target: 2–4% | Position: TOFU → Lead
              </p>
            </div>
          </section>

          {/* Stage 3 */}
          <section className="border border-stone rounded-[16px] p-8 md:p-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-steel-silver/20 flex items-center justify-center">
                <span className="font-cormorant font-500 text-steel-silver text-2xl">3</span>
              </div>
              <div>
                <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-4">
                  Stage 3 — Convert Interest into Webinar Registrations
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
              <p>
                Our live public webinars represent a significant investment in our prospects&apos; time—and ours. That&apos;s why we&apos;re committed to promoting them effectively and ensuring that registrants understand the value they&apos;ll receive by attending.
              </p>
              <p>
                We promote our webinars through multiple channels: LinkedIn posts, email communications to our subscriber list, and prominent placement on our website. Each promotion clearly communicates what attendees can expect to learn, whether it&apos;s practical SEO techniques for travel companies, strategies for improving direct bookings, or insights into the latest trends in destination marketing.
              </p>
              <p>
                The registration process is simple and straightforward, with a clear form that collects essential information without creating unnecessary friction. We want to make it as easy as possible for interested prospects to take the next step in their journey with us.
              </p>
              <p>
                Once registered, prospects receive confirmation details and reminders to ensure they don&apos;t miss the live session. This stage is critical because it represents the transition from passive content consumption to active engagement with our agency.
              </p>
            </div>
            <div className="mt-6 p-4 bg-cream/50 rounded-[12px] border border-stone/50">
              <p className="font-montserrat text-bronze text-sm font-500 uppercase tracking-wider mb-2">
                Stage Objective
              </p>
              <p className="font-montserrat text-ink-navy font-600">
                Conversion: Registrant → live attendee | Target: 35–45% | Position: MOFU (MQL)
              </p>
            </div>
          </section>

          {/* Stage 4 */}
          <section className="border border-stone rounded-[16px] p-8 md:p-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-ink-navy/10 flex items-center justify-center">
                <span className="font-cormorant font-500 text-ink-navy text-2xl">4</span>
              </div>
              <div>
                <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-4">
                  Stage 4 — Build Trust Through a Live Public Webinar
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
              <p>
                There&apos;s something powerful about live interaction. Our public webinars give us the opportunity to connect with prospects in real-time, share our knowledge directly, and demonstrate our expertise in a way that builds genuine trust.
              </p>
              <p>
                During these sessions, we don&apos;t just present information—we share practical knowledge that attendees can apply to their businesses immediately. Whether we&apos;re walking through a case study, demonstrating a specific technique, or answering questions live, our goal is to provide value that exceeds expectations.
              </p>
              <p>
                We structure our webinars to be interactive, with opportunities for Q&A and discussion. This format allows us to address specific concerns, clarify complex concepts, and show how our approach can be tailored to different types of travel businesses.
              </p>
              <p>
                Most importantly, our webinars include a clear call-to-action encouraging attendees to book a free demo with us. This is where interested prospects can take the next step from learning about our expertise to experiencing it firsthand through a personalized consultation.
              </p>
            </div>
            <div className="mt-6 p-4 bg-cream/50 rounded-[12px] border border-stone/50">
              <p className="font-montserrat text-bronze text-sm font-500 uppercase tracking-wider mb-2">
                Stage Objective
              </p>
              <p className="font-montserrat text-ink-navy font-600">
                Conversion: Attendee → free demo booked | Target: 10–20% | Position: MOFU → SQL
              </p>
            </div>
          </section>

          {/* Stage 5 */}
          <section className="border border-stone rounded-[16px] p-8 md:p-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-champagne/20 flex items-center justify-center">
                <span className="font-cormorant font-500 text-champagne text-2xl">5</span>
              </div>
              <div>
                <h2 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mb-4">
                  Stage 5 — Qualify Prospects Through a Free Demo
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-montserrat text-ink-navy text-base leading-relaxed">
              <p>
                The free demo represents the final stage in our conversion funnel, where we have the opportunity to work directly with prospects and determine if we&apos;re a good fit for each other. This isn&apos;t a sales pitch—it&apos;s a collaborative conversation.
              </p>
              <p>
                During the demo, we take the time to understand each prospect&apos;s unique situation, challenges, and goals. We ask questions about their current digital presence, their target audience, and their business objectives. This allows us to tailor our approach and demonstrate solutions that are directly relevant to their needs.
              </p>
              <p>
                We walk prospects through how we would approach their specific challenges, whether that involves improving their search visibility, optimizing their booking journey, or making their content more accessible to AI assistants. The goal is to show, not just tell, how we can help them achieve their growth objectives.
              </p>
              <p>
                This stage is also crucial for us, as it helps us identify which prospects are genuinely qualified and likely to benefit most from our services. By the end of the demo, both parties should have a clear understanding of whether we&apos;re a good match and what the next steps would be.
              </p>
              <p>
                For prospects who decide to move forward, this stage represents the beginning of a productive partnership. For those who aren&apos;t quite ready, we provide valuable insights they can use regardless, maintaining the trust we&apos;ve built throughout the funnel.
              </p>
            </div>
            <div className="mt-6 p-4 bg-cream/50 rounded-[12px] border border-stone/50">
              <p className="font-montserrat text-bronze text-sm font-500 uppercase tracking-wider mb-2">
                Stage Objective
              </p>
              <p className="font-montserrat text-ink-navy font-600">
                Conversion: Demo booked → demo attended | Target: 70–80% | Position: BOFU (Opportunity)
              </p>
            </div>
          </section>

          {/* Funnel Diagram Section */}
          <section className="bg-ink-navy rounded-[16px] p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="label-text text-champagne mb-4">Our Conversion Funnel</p>
              <h2 className="font-cormorant font-500 text-cream text-3xl md:text-4xl">
                Visualizing the Journey from Prospect to Client
              </h2>
              <p className="font-montserrat text-cream/80 text-lg mt-4">
                Here&apos;s how our five-stage funnel works together to attract, educate, and convert prospects
              </p>
            </div>
            <FunnelDiagram />
          </section>

          {/* Conversion Objectives */}
          <section className="bg-stone/50 rounded-[16px] p-8 md:p-12">
            <h2 className="font-cormorant font-500 text-ink-navy text-3xl md:text-4xl text-center mb-8">
              Our Conversion Objectives
            </h2>
            <p className="font-montserrat text-ink-navy text-lg text-center mb-10 max-w-3xl mx-auto">
              These target benchmarks represent our goals for each stage of the funnel. They are aspirational targets based on industry standards and our experience, not guaranteed results. Actual performance may vary based on numerous factors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {funnelStages.map((stage) => (
                <div
                  key={stage.id}
                  className="bg-cream rounded-[12px] p-6 border border-stone hover:shadow-soft transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ink-navy/10 flex items-center justify-center">
                      <span className="font-cormorant font-500 text-ink-navy">{stage.id}</span>
                    </div>
                    <div>
                      <h3 className="font-cormorant font-500 text-ink-navy text-lg">{stage.stage}</h3>
                      <p className="font-montserrat text-bronze text-sm">{stage.funnelPosition}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-montserrat text-ink-navy text-sm">
                      <span className="font-600">Conversion:</span> {stage.conversion}
                    </p>
                    <p className="font-montserrat text-ink-navy text-sm">
                      <span className="font-600">Objective:</span> {stage.objective}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How We Measure Success */}
          <section className="border border-stone rounded-[16px] p-8 md:p-12">
            <h2 className="font-cormorant font-500 text-ink-navy text-3xl md:text-4xl text-center mb-8">
              How We Will Measure Success
            </h2>
            <div className="space-y-6 font-montserrat text-ink-navy text-base leading-relaxed max-w-3xl mx-auto">
              <p>
                Tracking our progress through the conversion funnel is essential for understanding what&apos;s working and where we can improve. We&apos;ve established clear metrics for each stage that allow us to measure the effectiveness of our efforts.
              </p>
              <p>
                At the top of the funnel, we&apos;ll track LinkedIn impressions and click-through rates to our blog articles. This helps us understand which content resonates most with our target audience and drives the most engagement.
              </p>
              <p>
                For our blog content, we&apos;ll monitor page visits, time spent on page, and most importantly, the conversion rate from blog reader to webinar registrant. This metric tells us how effectively our content is educating prospects and encouraging them to take the next step.
              </p>
              <p>
                Webinar performance will be measured through registration numbers, attendance rates, and engagement during the live sessions. We&apos;ll track how many registrants actually attend and how engaged they are during the presentation.
              </p>
              <p>
                The transition from webinar attendee to demo booking is a critical metric, as it indicates how well we&apos;re converting interest into action. We&apos;ll carefully track this conversion rate and look for opportunities to improve it.
              </p>
              <p>
                Finally, we&apos;ll monitor demo attendance rates to ensure that prospects who book a consultation actually show up. This helps us understand the quality of our leads and the effectiveness of our qualification process.
              </p>
              <p>
                By tracking these metrics across all stages, we can identify bottlenecks, optimize our approach, and continuously improve our conversion rates over time.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-ink-navy rounded-[16px] p-8 md:p-12 text-center">
            <h2 className="font-cormorant font-500 text-cream text-3xl md:text-4xl mb-6">
              Ready to Experience Our Funnel Firsthand?
            </h2>
            <p className="font-montserrat text-cream/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Our conversion funnel isn&apos;t just a theoretical model—it&apos;s a proven approach we use to attract, educate, and convert prospects into qualified leads. We&apos;ve designed each stage to build trust, demonstrate expertise, and provide genuine value to travel industry professionals.
            </p>
            <p className="font-montserrat text-cream/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you&apos;re ready to register for our next webinar, book a free demo, or simply learn more about our services, we&apos;re here to help. Take the first step in your journey with Vella Growth today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Register for Webinar
              </Button>
              <Button variant="primary" size="lg" href="#contact">
                Book a Free Demo
              </Button>
            </div>
          </section>

          {/* Article Meta */}
          <section className="border-t border-stone pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-montserrat text-bronze text-sm">
                  Published: October 2026
                </span>
                <span className="font-montserrat text-bronze text-sm">
                  Category: Strategy
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
