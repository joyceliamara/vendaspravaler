import { HeroSection } from "@/components/organisms/hero-section";
import { SocialProofBar } from "@/components/organisms/social-proof-bar";
import { ValuePillars } from "@/components/organisms/value-pillars";
import { CustomerIssues } from "@/components/organisms/customer-issues";
import { FooterCTADouble } from "@/components/organisms/footer-cta-double";
import { MentorStory } from "@/components/organisms/mentor-story";
import { TransformationShowcase } from "@/components/organisms/transformation-showcase";
import { WhyActNow } from "@/components/organisms/why-act-now";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendas Pra Valer | Treinamento de Equipe de Vendas e Consultoria",
  description:
    "Transforme sua equipe de vendas com treinamento de vendas online e presencial. Ideal para times de vendas, empresas de vendas e consultores de vendas, nossa empresa de vendas oferece a estratégia para sua equipe comercial converter 50% ou mais.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <HeroSection />
      <SocialProofBar />
      <MentorStory />
      <CustomerIssues />
      <ValuePillars />
      {/* <TestimonialCarousel /> */}
      <TransformationShowcase />
      <WhyActNow />
      <FooterCTADouble />
    </main>
  );
}
