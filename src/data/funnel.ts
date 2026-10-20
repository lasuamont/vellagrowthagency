export interface FunnelStage {
  id: number;
  stage: string;
  description: string;
  conversion: string;
  objective: string;
  funnelPosition: string;
  color: string;
}

export const funnelStages: FunnelStage[] = [
  {
    id: 1,
    stage: "LinkedIn post",
    description: "Share useful, relevant content to reach potential clients",
    conversion: "Impression → click to blog",
    objective: "1–2%",
    funnelPosition: "TOFU (Attract)",
    color: "#C2AC92",
  },
  {
    id: 2,
    stage: "Blog post",
    description: "Address prospects' problems, demonstrate knowledge, encourage webinar registration",
    conversion: "Blog visit → webinar registration",
    objective: "2–4%",
    funnelPosition: "TOFU → Lead",
    color: "#7D6A50",
  },
  {
    id: 3,
    stage: "Webinar registration",
    description: "Promote webinar and communicate value to prospects",
    conversion: "Registrant → live attendee",
    objective: "35–45%",
    funnelPosition: "MOFU (MQL)",
    color: "#898C91",
  },
  {
    id: 4,
    stage: "Live webinar",
    description: "Share practical knowledge, demonstrate expertise, encourage demo booking",
    conversion: "Attendee → free demo booked",
    objective: "10–20%",
    funnelPosition: "MOFU → SQL",
    color: "#152029",
  },
  {
    id: 5,
    stage: "Free demo",
    description: "Understand needs, demonstrate solutions, identify potential clients",
    conversion: "Demo booked → demo attended",
    objective: "70–80%",
    funnelPosition: "BOFU (Opportunity)",
    color: "#121B22",
  },
];

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export const articleSections: ArticleSection[] = [
  {
    id: "intro",
    title: "Why Our Agency Needs a Structured Approach",
    content: `
      At Vella Growth, we understand that attracting and converting prospects in the competitive travel marketing space requires more than just great services—it requires a strategic, structured approach. The travel industry, particularly for destination management companies and concierge travel businesses, is built on relationships and trust. Potential clients need to understand our value before they're ready to engage.
      
      That's why we've developed a comprehensive conversion funnel designed specifically for our agency. This funnel doesn't just guide prospects through our services; it builds trust at each stage, demonstrates our expertise, and helps us identify qualified leads who are genuinely interested in growing their travel businesses.
      
      In this article, we'll walk you through each stage of our conversion funnel, explain our objectives, and share how we plan to measure success. Whether you're a DMC owner looking for marketing support or a digital manager seeking specialized expertise, understanding our approach will help you see how we can work together to achieve your growth goals.
    `,
  },
  {
    id: "stage1",
    title: "Stage 1 — Attract Through LinkedIn",
    content: `
      LinkedIn has become the premier platform for B2B marketing, especially in specialized industries like travel. For our agency, LinkedIn offers an unparalleled opportunity to reach decision-makers at DMCs and concierge travel companies who are actively seeking solutions to grow their businesses.
      
      We will share useful, relevant content that addresses the specific challenges faced by travel professionals. This includes insights on destination marketing trends, practical tips for improving online visibility, and thought leadership on emerging opportunities in travel technology. By consistently delivering value through our LinkedIn posts, we aim to position Vella Growth as a trusted resource in the travel marketing space.
      
      Each post will be carefully crafted to encourage engagement and, most importantly, to drive clicks through to our website. We'll use compelling headlines, relevant hashtags, and clear calls-to-action that direct interested prospects to our blog articles, where they can learn more about our approach and expertise.
      
      The beauty of LinkedIn is its ability to reach a highly targeted audience. We can connect directly with owners, managing directors, and marketing managers at travel companies who understand the industry but may lack the time or specialist knowledge to manage their digital growth effectively.
    `,
  },
  {
    id: "stage2",
    title: "Stage 2 — Educate Through Our Blog",
    content: `
      Once prospects arrive at our website from LinkedIn, our blog articles serve as the next crucial touchpoint in the conversion journey. These aren't just informational pieces—they're strategic assets designed to address the specific problems and opportunities that travel companies face.
      
      Our blog content will dive deep into topics that matter to DMCs and concierge travel businesses. We'll explain how digitalisation can streamline booking journeys, how SEO can increase visibility for destination searches, and how GEO (Generative Engine Optimization) can help travel companies appear in AI-powered search results.
      
      Each article will demonstrate our deep understanding of the travel industry and our specialized knowledge in digital marketing. We won't just explain concepts; we'll provide actionable insights that prospects can apply to their own businesses. This approach not only builds credibility but also showcases the value we can provide.
      
      At the end of each relevant article, we'll include clear calls-to-action inviting readers to register for our live public webinars. These webinars represent the next step in the journey, where prospects can engage more deeply with our expertise and learn practical strategies they can implement immediately.
    `,
  },
  {
    id: "stage3",
    title: "Stage 3 — Convert Interest into Webinar Registrations",
    content: `
      Our live public webinars represent a significant investment in our prospects' time—and ours. That's why we're committed to promoting them effectively and ensuring that registrants understand the value they'll receive by attending.
      
      We'll promote our webinars through multiple channels: LinkedIn posts, email communications to our subscriber list, and prominent placement on our website. Each promotion will clearly communicate what attendees can expect to learn, whether it's practical SEO techniques for travel companies, strategies for improving direct bookings, or insights into the latest trends in destination marketing.
      
      The registration process will be simple and straightforward, with a clear form that collects essential information without creating unnecessary friction. We want to make it as easy as possible for interested prospects to take the next step in their journey with us.
      
      Once registered, prospects will receive confirmation details and reminders to ensure they don't miss the live session. This stage is critical because it represents the transition from passive content consumption to active engagement with our agency.
    `,
  },
  {
    id: "stage4",
    title: "Stage 4 — Build Trust Through a Live Public Webinar",
    content: `
      There's something powerful about live interaction. Our public webinars give us the opportunity to connect with prospects in real-time, share our knowledge directly, and demonstrate our expertise in a way that builds genuine trust.
      
      During these sessions, we won't just present information—we'll share practical knowledge that attendees can apply to their businesses immediately. Whether we're walking through a case study, demonstrating a specific technique, or answering questions live, our goal is to provide value that exceeds expectations.
      
      We'll structure our webinars to be interactive, with opportunities for Q&A and discussion. This format allows us to address specific concerns, clarify complex concepts, and show how our approach can be tailored to different types of travel businesses.
      
      Most importantly, our webinars will include a clear call-to-action encouraging attendees to book a free demo with us. This is where interested prospects can take the next step from learning about our expertise to experiencing it firsthand through a personalized consultation.
    `,
  },
  {
    id: "stage5",
    title: "Stage 5 — Qualify Prospects Through a Free Demo",
    content: `
      The free demo represents the final stage in our conversion funnel, where we have the opportunity to work directly with prospects and determine if we're a good fit for each other. This isn't a sales pitch—it's a collaborative conversation.
      
      During the demo, we'll take the time to understand each prospect's unique situation, challenges, and goals. We'll ask questions about their current digital presence, their target audience, and their business objectives. This allows us to tailor our approach and demonstrate solutions that are directly relevant to their needs.
      
      We'll walk prospects through how we would approach their specific challenges, whether that involves improving their search visibility, optimizing their booking journey, or making their content more accessible to AI assistants. The goal is to show, not just tell, how we can help them achieve their growth objectives.
      
      This stage is also crucial for us, as it helps us identify which prospects are genuinely qualified and likely to benefit most from our services. By the end of the demo, both parties should have a clear understanding of whether we're a good match and what the next steps would be.
      
      For prospects who decide to move forward, this stage represents the beginning of a productive partnership. For those who aren't quite ready, we'll provide valuable insights they can use regardless, maintaining the trust we've built throughout the funnel.
    `,
  },
];
