import { Eye, Mail, Bot } from "lucide-react";

interface ResultCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
}

const resultCards: ResultCard[] = [
  {
    icon: <Mail size={28} className="text-champagne" />,
    title: "Qualified Enquiries",
    description: "Direct enquiries from your own channels, so you rely less on resellers.",
    label: "Lead Generation",
  },
  {
    icon: <Eye size={28} className="text-champagne" />,
    title: "Search Visibility",
    description: "Where you rank for the destinations you sell.",
    label: "Google",
  },
  {
    icon: <Bot size={28} className="text-champagne" />,
    title: "AI Answer Visibility",
    description: "How clearly AI assistants describe and mention you.",
    label: "GEO",
  },
];

export default function Results() {
  return (
    <section id="results" className="bg-midnight py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-text text-champagne mb-4">Results</p>
          <h2 className="font-cormorant font-500 text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            We measure enquiries, not just traffic.
          </h2>
          <p className="font-montserrat text-cream text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Results are measured against your starting point and business goals, with regular reporting.
          </p>
        </div>

        {/* Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resultCards.map((card) => (
            <div
              key={card.title}
              className="bg-stone/10 rounded-[16px] p-8 border border-steel-silver/20 hover:border-champagne/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <p className="label-text text-champagne">{card.label}</p>
                  <h3 className="font-cormorant font-500 text-cream text-2xl md:text-3xl mt-2">
                    {card.title}
                  </h3>
                </div>
              </div>
              <p className="font-montserrat text-cream text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
