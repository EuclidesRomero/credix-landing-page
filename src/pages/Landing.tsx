import { Hero } from "../components/sections/Hero";
import { Problem } from "../components/sections/Problem";
import { Features } from "../components/sections/Features";
import { Products } from "../components/sections/Products";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Benefits } from "../components/sections/Benefits";
import { Pricing } from "../components/sections/Pricing";
import { Faq } from "../components/sections/Faq";
import { FinalCta } from "../components/sections/FinalCta";

export function Landing() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <Products />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}
