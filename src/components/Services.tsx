import { Compass, Globe, Network } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
}

const services: ServiceItem[] = [
  {
    icon: <Network size={28} className="text-champagne" />,
    title: "Digitalisation",
    description: "Your website, booking journey and CRM working together, so no enquiry gets lost in an inbox.",
    label: "Website and CRM",
  },
  {
    icon: <Globe size={28} className="text-champagne" />,
    title: "SEO",
    description: "Rank on Google when clients search for your destinations. Impact typically shows within 3 to 6 months.",
    label: "Google",
  },
  {
    icon: <Compass size={28} className="text-champagne" />,
    title: "GEO",
    description: "Travellers now ask ChatGPT and Gemini who to book with. We make your company clear for AI assistants to find and mention.",
    label: "AI assistants",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="label-text mb-4">What We Do</p>
          <h2 className="font-cormorant font-500 text-ink-navy text-4xl md:text-5xl lg:text-6xl leading-tight">
            Three services. One travel specialist.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-stone rounded-[16px] p-8 hover:shadow-soft transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ink-navy flex items-center justify-center group-hover:bg-midnight transition-colors">
                  {service.icon}
                </div>
                <div>
                  <p className="label-text">{service.label}</p>
                  <h3 className="font-cormorant font-500 text-ink-navy text-2xl md:text-3xl mt-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="font-montserrat text-ink-navy text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
