import { Hero } from "@/components/sections/hero";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AppsShowcase />
      <Features />
      <CTA />
    </>
  );
}
