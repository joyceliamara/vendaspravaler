import { HeroSection } from "@/components/organisms/hero-section";
import { SocialProofBar } from "@/components/organisms/social-proof-bar";
import { ValuePillars } from "@/components/organisms/value-pillars";
import { AboutMentor } from "@/components/organisms/about-mentor";
import { FooterCTADouble } from "@/components/organisms/footer-cta-double";
import { MentorStory } from "@/components/organisms/mentor-story";
import { TransformationShowcase } from "@/components/organisms/transformation-showcase";
import { TestimonialCarousel } from "@/components/organisms/testimonial-carousel";
import { WhyActNow } from "@/components/WhyActNow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendas Pra Valer | Transforme sua Equipe Comercial em 5 Dias",
  description:
    "Aprenda a única estratégia de vendas que toda empresa PME precisa para fazer sua equipe comercial ter uma conversão de 50% ou mais com clientes em potencial.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection />
      <SocialProofBar />
      <MentorStory />
      <AboutMentor />
      <ValuePillars />
      <TestimonialCarousel />
      <TransformationShowcase />
      <WhyActNow />
      <FooterCTADouble />
    </main>
  );
}
