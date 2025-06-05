"use client";

import { SectionTitle } from "@/components/atoms/section-title";
import Image from "next/image";
import { CTAButton } from "@/components/atoms/cta-button";
import { Award, BarChart3, CheckCircle, Target, Users } from "lucide-react";
import { Route } from "@/constants";
import dinamicaTreinamentoEquipe from "@/public/dinamica-treinamento-equipe.webp";

const credentials = [
  { icon: Users, text: "15.977+ Clientes" },
  { icon: Target, text: "25 Anos de Experiência" },
  { icon: BarChart3, text: "R$ 63.000.000,00 em Vendas" },
  { icon: CheckCircle, text: "100% Focado em Resultados" },
];

export function MentorStory() {
  return (
    <section className="w-full md:py-24 gradient-bg py-14 sm:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Coluna da Direita - Texto e CTA */}
          <div className="space-y-6 md:space-y-8 sm:flex flex-col items-center justify-center sm:pt-12  ">
            <SectionTitle
              title="Quem é o cara que vive de vendas há 25 anos, já ajudou 15.977 clientes e gerou R$ 63.000.000,00 em faturamento?"
              align="left"
              highlightWords={["vive de vendas"]}
            />
            <div className="space-y-4 md:space-y-6">
              <div className="p-4 md:p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10">
                <h2 className="text-lg md:text-2xl font-medium text-foreground">
                  Sou o Ale, e minha missão é fazer o seu time comercial vender
                  como nunca.
                </h2>
              </div>

              <div className="p-4 md:p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10">
                <h2 className="text-lg md:text-2xl font-medium text-foreground">
                  Treinei vendedores, liderei times, bati metas e gerei milhões
                  em vendas — agora é a sua vez.
                </h2>
              </div>
            </div>
            <div className="pt-4 md:pt-6">
              <CTAButton
                text="✅ Quero Agendar uma Reunião"
                variant="primary"
                size="sm"
                withIcon
                url={Route.Trigger}
              />
            </div>
          </div>
          {/* Coluna da Esquerda - Imagem e Card */}
          <div className="space-y-6 md:space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <Image
                src={dinamicaTreinamentoEquipe}
                width={600}
                height={500}
                alt="Alexsandro Silva - Especialista em Vendas"
                className="w-full h-auto object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
                priority
              />
            </div>

            {/* Card de Credenciais */}
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-primary/20 shadow-xl">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Alexsandro Silva
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Treinador de Vendas, Palestrante e Mentor
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <credential.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-md md:text-md">
                      {credential.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
