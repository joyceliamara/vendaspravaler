"use client";

import { SectionTitle } from "@/components/atoms/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButton } from "../atoms/cta-button";
import { Route } from "@/constants";
import { LazyVimeoVideo } from "../atoms/video";

const testimonials = [
  {
    name: "Rafael Liberto",
    role: "Empresário",
    videoId: "1090288753",
    poster: "/thambs/Rafael.jpg",
    quote:
      "É diferente de outros, que você tem um resultado assim assado só que é um fogo momentâneo. A minha experiência foi quase inexplicável. Vale muito a pena. É um processo muito valioso, só que a gente tem que se permitir e jogar de cabeça no processo.",
  },
  {
    name: "Patricia American",
    role: "Gestora Comercial",
    videoId: "1090289245",
    poster: "/thambs/Patricia.jpg",
    quote:
      "Não sabia exatamente o que era, mas sabia que seria uma transformação poderosa, a experiência foi bem transformadora, me surpreendeu positivamente, ele lida com técnicas, dinâmicas bem diferentes do convencional, diferente do que estamos acostumados. Valeu muito a experiência, nunca tinha feito um treinamento tão longo, foi uma vivência bem diferente, valeu tudo o que a gente investiu.",
  },
  {
    name: "Andrecy Sarges",
    role: "Diretor Comercial",
    videoId: "1090288326",
    poster: "/thambs/Andrecy.jpg",
    quote:
      "Esse programa que o Ale veio fazer é muito surreal, na verdade é muito diferente do que eu já participei. O Ale veio para resolver o problema, ele não está para agradar para passar a mão na cabeça. Ele faz a gente enxergar aquilo que muitas vezes a gente não consegue ver.",
  },
  {
    name: "Olívia Choi",
    role: "CEO",
    videoId: "1090290188",
    poster: "/thambs/Olivia.jpg",
    quote:
      'A maior dificuldade que eu tinha com a equipe comercial, era fazer com que eles não trabalhassem mais do jeito antigo, que era um jeito meio selvagem. A gente vinha de uma forma que eu achei que estávamos caminhando certo, só que tem muita coisa que vamos melhorar.',
  },
  {
    name: "Lucas Lopes",
    role: "Gerente de Vendas",
    videoId: "1090289768",
    poster: "/thambs/Lucas.jpg",
    quote:
      "O treinamento foi uma experiência excepcional, foi muito louco porque a gente chegou sem saber como seria compartilhado. Achei que seria de uma forma que todo mundo faz que ia ensinar, dar exemplo, só que foi de uma forma totalmente diferente, ultrapassou as minhas expectativas.",
  },
  {
    name: "Sally Dias",
    role: "Empresária",
    videoId: "1090289456",
    poster: "/thambs/Sally.jpg",
    quote:
      "O ticket médio de vendas era 20, 25 mil, a gente se sentiu mais seguro, mais preparado, a gente conseguiu realmente entender as necessidades do cliente e fez a venda sair tranquilamente e foi R$180.000,00. Já fiz muito curso de vendas, muito treinamento e eu esperava algo a mais, foi surpreendente pra mim as técnicas aplicadas porque realmente me fez ficar desconfortável entrar no desconforto e saber a importância disso. Mudou muito, falando em números quase 100%.",
  },
];

export function TestimonialCarousel() {
  return (
    <section className="w-full py-14 sm:py-24 bg-dark-deeper">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="O que os empresários estão dizendo"
          subtitle="Depoimentos reais de quem já transformou sua equipe comercial"
          highlightWords={["empresários"]}
        />

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="h-full bg-dark-deeper border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    {/* VÍDEO */}
                    <div><div className="mb-4">
                      <LazyVimeoVideo
                        title="coloca o titulo aqui"
                        vimeoId={testimonial.videoId}
                        thumbnailUrl={testimonial.poster}
                      />
                    </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-2xl">
                            {testimonial.name}
                          </h4>
                        </div>

                        <p className="text-muted-foreground flex-grow mb-6">
                          {testimonial.quote}
                        </p>
                      </div></div>
                    <div className="flex sm:flex-row justify-center items-end relative z-10 pt-6 w-full">
                      <CTAButton
                        type="submit"
                        text="✅ Quero Agendar uma Reunião"
                        variant="primary"
                        size="lg"
                        withIcon
                        url={Route.Trigger}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
