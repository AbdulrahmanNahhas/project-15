"use client";

import {
  Hero,
  Reviews,
  Campaigns,
  Companies,
  Projects,
  Stories,
  Video,
  Posts,
  CTA,
  Features,
} from "@/modules/marketing/ui/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Companies />
      <Features />
      <Campaigns />
      <Projects />
      {/* <Stories autoplay={false} testimonials={testimonials} /> */}
      <Posts />
      <Reviews />
      <CTA />
      {/*<Connect />*/}
      {/*<Perks />*/}
      {/*<CTA />*/}
    </>
  );
}
