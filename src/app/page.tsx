import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyVella from "@/components/WhyVella";
import Results from "@/components/Results";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Services />
      <WhyVella />
      <Results />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
