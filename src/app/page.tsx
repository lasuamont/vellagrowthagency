import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyVella from "@/components/WhyVella";
import Results from "@/components/Results";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <WhyVella />
      <Results />
      <Contact />
    </main>
  );
}
