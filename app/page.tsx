import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import LeadForm from "@/components/LeadForm";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Working from "@/components/Working";
import Edge from "@/components/Edge";
import CAT from "@/components/CAT";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Companies /> 
      <Edge />
      <CAT />
      <Working />
      <FAQs />
      <Testimonials />
      <LeadForm />
    </main>
  );
}
