export const metadata = {
  title: "WEFI Institute - Empowering Education, Enriching Futures",
  description: "WEFI Institute is a premier educational hub offering comprehensive learning solutions, skill development programs, and academic excellence.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Programs from "@/components/programs";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Programs />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
