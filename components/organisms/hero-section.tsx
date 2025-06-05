"use client";

import { CTAButton } from "@/components/atoms/cta-button";
import TextSelection from "../atoms/text-selection";
import React from "react";
import { Route } from "@/constants";
import Image from "next/image";
import aleMobile from "@/public/ale-background-mobile.webp";
import aleDesktop from "@/public/background-ale-mobile.webp";

export function HeroSection() {
  return (
    <section className="w-full h-full min-h-[83vh] flex flex-col items-center relative overflow-hidden pb-10 md:pb-16 z-50">
      <Image
        src={aleDesktop} 
        alt="Background Alexsandro Silva"
        fill
        priority 
        className="object-cover hidden md:block"
        sizes="(max-width: 768px) 100vw, 50vw" 
      />
      <Image
        src={aleMobile} 
        alt="Background Alexsandro Silva Mobile"
        fill
        priority 
        className="object-cover md:hidden"
        sizes="100vw"
      />
      <div className="fixed w-full flex justify-center bg-destructive text-white text-center py-2 z-50">
        <span className=" font-semibold text-sm px-10 sm:px-5 text-center leading-none">
          Apenas 20 vagas, mais de 2.000 acessos por dia nesse site!
        </span>
      </div>
      <div className="container px-4 md:px-6 relative z-10 mt-52 md:mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-start">
          <div className="space-y-8 relative z-20">
            <div className="inline-flex items-center py-1 text-sm">
              <span className="text-muted-foreground">Alexsandro Silva</span>
            </div>

            <h1 className=" flex flex-col gap-3 text-xl sm:text-9xl md:text-5xl lg:text-4xl tracking-tight relative z-10">
              <span>
                93% dos empresários estão gastando para vender com time
                comercial sem performance:
                <span className="text-destructive">
                  &nbsp;Com treinamento do time comercial, conseguimos aumentar
                  em 30% a taxa de conversão.
                </span>
              </span>
              <TextSelection className="text-lg">
                Se sua equipe não vender mais você não precisa me pagar.
              </TextSelection>
            </h1>

            <div className="flex sm:flex-row justify-start relative z-10 pt-6">
              <CTAButton
                type="submit"
                text="✅ Quero Agendar uma Reunião"
                variant="primary"
                size="lg"
                withIcon
                url={Route.Trigger}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
