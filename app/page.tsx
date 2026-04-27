import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import LeadForm from "@/components/LeadForm";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Companies />
      <Programs />
      <Testimonials />
      <CTA />
      <LeadForm />
    </>
  );
}
