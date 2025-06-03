// components/SocialProofBar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CTAButton } from "../atoms/cta-button";
import { Route } from "@/constants";

const clients = [
  {
    name: "Giovanna Baby",
    logo: "https://vectorseek.com/wp-content/uploads/2024/01/Giovanna-Baby-Logo-Vector.svg-.png",
  },
  {
    name: "AVON",
    logo: "https://gkpb.com.br/wp-content/uploads/2021/01/novo-logo-avon-png.png",
  },
  {
    name: "SODEXO",
    logo: "https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Americas/BR/Media/Images/Logos---Icons-100-x-100/Sodexo_Logotype_Blue.png?h=220&w=970",
  },
  {
    name: "SEBRAE",
    logo: "https://www.sebrae.com.br/Sebrae/Portal%20Sebrae/resources/images/icons/portal/sb-icon__logo-sebrae-white.svg",
  },
  {
    name: "Le Kasa",
    logo: "https://acdn-us.mitiendanube.com/stores/004/525/681/themes/common/logo-619214983-1748266593-b4a8096adb67d58b72978afec2ac90cf1748266593.png?0",
  },
  {
    name: "Coplacana",
    logo: "https://www.coplacana.com.br/wp-content/uploads/2018/07/meta.png",
  },
  {
    name: "Produtos Nero",
    logo: "https://produtosnero.com.br/novo/wp-content/uploads/2021/03/3d_nero.png",
  },
  {
    name: "UNINOVE",
    logo: "https://seeklogo.com/images/U/uninove-logo-856EF2E711-seeklogo.com.png",
  },
  {
    name: "UNIFISA",
    logo: "https://sabetudo.net/wp-content/uploads/2011/01/Unifisa-Trabalhe-Conosco-300x216.jpg",
  },
  {
    name: "ProAuto",
    logo: "https://img1.wsimg.com/isteam/ip/c85938d7-61a6-4e76-a682-4136eec84ca6/ProAuto%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
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
                key={`first-${index}`} // Chave única para o React
                className="flex-shrink-0 flex justify-center items-center opacity-70 hover:opacity-100 transition-all duration-300 gradient-bg p-4 rounded-lg h-40 w-40"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="w-auto object-contain"
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
                />
              </div>
            ))}
          </div>
        </div>
        <CTAButton
          text="✅ Quero um Treinamento que Faz Vender"
          variant="primary"
          size="lg"
          withIcon
          url={Route.Trigger}
        />
      </div>
    </section>
  );
}