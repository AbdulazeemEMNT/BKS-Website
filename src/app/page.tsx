import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TargetAudience } from "@/components/TargetAudience";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TargetAudience />
      <Programs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
