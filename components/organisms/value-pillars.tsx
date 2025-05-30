import { SectionTitle } from "@/components/atoms/section-title";
import { FeatureCard } from "@/components/molecules/feature-card";
import {
  CheckCircle2,
  Target,
  Zap,
  Clock,
  Users,
  TrendingUp,
  BookOpen,
  AlertCircle,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CTAButton } from "../atoms/cta-button";
import { Route } from "@/constants";

export function ValuePillars() {
  const pillars = [
    {
      icon: CheckCircle2,
      title: "Treinamento prático",
      description:
        "Corta a curva de aprendizado e acelera o retorno do investimento.",
    },
    {
      icon: Clock,
      title: "25 anos de experiência comercial",
      description:
        "Você evita erros que travam a maioria e foca só no que gera resultado.",
    },
    {
      icon: Target,
      title: "Eu vivo de vendas — não de palco",
      description: "Seu time aprende com quem já bateu meta real sob pressão.",
    },
    {
      icon: BookOpen,
      title: "Nada de teoria que não vira venda",
      description:
        "Conteúdo direto, aplicado no dia seguinte. Resultado rápido no caixa.",
    },
    {
      icon: TrendingUp,
      title: "Sua equipe já vende durante o treinamento",
      description:
        "Negócios fechados ainda na imersão. O ROI começa ali mesmo.",
    },
    {
      icon: Users,
      title: "Treino como se fosse meu time",
      description:
        "Entro na operação, ajusto o time e aumento conversão de verdade.",
    },
    {
      icon: Zap,
      title: "Vai além da sala de aula",
      description:
        "30 dias de acompanhamento com correção de rota e reforço tático.",
    },
    {
      icon: AlertCircle,
      title: "Zero fórmula mágica, zero blá-blá-blá",
      description: "Corto o que não funciona. Só fica o que gera venda.",
    },
    {
      icon: ThumbsUp,
      title: "Se não vender mais, não me chame de novo",
      description:
        "Eu assumo o risco. Se não der retorno, você não perde mais nada.",
    },
  ];

  return (
    <section className="w-full py-14 sm:py-24 bg-gradient-to-b from-background to-background/80 text-foreground">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 animate-slide-in-right">
            Por que com o Ale é diferente?
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-16 animate-fade-in-up">
            Porque aqui o foco é resultado real, não palestra bonita.
            <span className="font-semibold text-foreground">
              {" "}
              O que funciona fica, o resto a gente corta.
            </span>
          </p>

          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/IMG_2996.jpg"
              alt="Ale em ação"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FeatureCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                className="h-full bg-card border border-border hover:border-primary transition-colors duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-14">
          <div className="sm:pt-4">
            <CTAButton
              text="✅ Quero um Treinamento que Faz Vender"
              variant="primary"
              size="sm"
              withIcon
              url={Route.Trigger}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
