"use client";

import { useRef } from "react";
import Image from "next/image";
import { CTAButton } from "../atoms/cta-button";
import { Route } from "@/constants";
import giovannaBabyLogo from "@/public/logos/giovanna-baby-logo.webp";
import avonLogo from "@/public/logos/avon-logo.webp";
import sodexoLogo from "@/public/logos/sodexo-logo.webp";
import sebraeLogo from "@/public/logos/sebrae-logo.png";
import leCasaLogo from "@/public/logos/lecasa-logo.webp";
import coplacanaLogo from "@/public/logos/coplacana-logo.webp";
import uninoveLogo from "@/public/logos/uninove-logo.webp";
import unifisaLogo from "@/public/logos/unifisa-logo.webp";
import proAutoLogo from "@/public/logos/proauto-logo.webp";
import neroLogo from "@/public/logos/nero-logo.webp";

const clients = [
  {
    name: "Giovanna Baby",
    logo: giovannaBabyLogo,
  },
  {
    name: "AVON",
    logo: avonLogo,
  },
  {
    name: "SODEXO",
    logo: sodexoLogo,
  },
  {
    name: "SEBRAE",
    logo: sebraeLogo,
  },
  {
    name: "Le Kasa",
    logo: leCasaLogo,
  },
  {
    name: "Coplacana",
    logo: coplacanaLogo,
  },
  {
    name: "Produtos Nero",
    logo: neroLogo,
  },
  {
    name: "UNINOVE",
    logo: uninoveLogo,
  },
  {
    name: "UNIFISA",
    logo: unifisaLogo,
  },
  {
    name: "ProAuto",
    logo: proAutoLogo,
  },
];

export function SocialProofBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-dark-deeper border-y border-muted/20 py-14 sm:py-20">
      <div className="container flex flex-col justify-center items-center px-4 md:px-6">
        <div className="text-center mb-6 max-w-2xl pb-10">
          <p className="text-muted-foreground text-4xl font-semibold">
            Essas empresas aumentaram a partir de{" "}
            <span className="text-destructive">30% a conversão</span> do seu
            time
          </p>
        </div>

        <div className="relative w-full overflow-hidden pb-14">
          <div
            ref={containerRef}
            className="flex items-center space-x-12 animate-marquee-fast sm:animate-marquee w-max flex-nowrap"
          >
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex justify-center items-center opacity-70 hover:opacity-100 transition-all duration-300 gradient-bg p-4 rounded-lg h-40 w-40"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex justify-center items-center opacity-70 hover:opacity-100 transition-all duration-300 gradient-bg p-4 rounded-lg h-40 w-40"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <CTAButton
          text="✅ Quero Agendar uma Reunião"
          variant="primary"
          size="lg"
          withIcon
          url={Route.Trigger}
        />
      </div>
    </section>
  );
}
