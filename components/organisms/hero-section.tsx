"use client";

import { CTAButton } from "@/components/atoms/cta-button";
import TextSelection from "../atoms/text-selection";
import React, { useState } from "react";
import { Route } from "@/constants";
import Image from "next/image";
import aleMobile from "@/public/AleMobile.jpg";

export function HeroSection() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("dados", name, phone, email);
  };
  return (
    <section className="bg-hero-mobile md:bg-hero bg-cover bg-no-repeat  w-full h-full min-h-[83vh] flex flex-col items-center relative overflow-hidden pb-10 md:pb-16 z-50">
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

            {/* <form onSubmit={handleSubmit}>
              <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col justify-center space-y-4 bg-blend-luminosity">
                <div className="pb-3 border-b border-gray-600">
                  <span className="text-center text-xl w-full block text-white">
                    Preencha o formulário para a nossa equipe entrar em contato:
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="bg-background/60"
                    required
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    required
                  />
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Digite seu telefone"
                    required
                  />
                </div>
              </div>
            </form> */}
            <div className="flex sm:flex-row justify-start relative z-10 pt-6">
              <CTAButton
                type="submit"
                text="✅ Quero um Treinamento que Faz Vender"
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
