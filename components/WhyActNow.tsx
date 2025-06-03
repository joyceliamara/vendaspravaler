import Image from "next/image";
import { Button } from "./ui/button";
import { CTAButton } from "./atoms/cta-button";
import { Route } from "@/constants";

export function WhyActNow() {
  return (
    <section className="w-full py-14 sm:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Toniferreiraphotos-6996.jpg"
              alt="Foto de Toni Ferreira"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Porque devo agir agora?
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Porque cada dia sem ação é mais prejuízo acumulado.
              </p>
              <p className="text-lg text-muted-foreground">
                Porque se nada mudar hoje, o cenário vai se repetir amanhã — e
                no mês que vem também
              </p>
              <p className="text-lg text-muted-foreground">
                Porque se sua equipe fosse performar sozinha, já teria feito.
                Falta direção, não vontade.
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-xl space-y-4">
              <p className="text-xl font-bold text-foreground">
                📈 Agora você tem duas opções:
              </p>
              <p className="text-lg text-muted-foreground">
                Continuar perdendo dinheiro ou começar a ver sua equipe vender
                pra valer.
              </p>
              <p className="text-lg text-muted-foreground">
                👉 Clique no botão abaixo e agende uma conversa comigo ou com
                alguém do meu time. Vamos transformar seu time comercial.
              </p>
            </div>

            <div className="flex justify-center">
              <CTAButton
                text="✅ Quero um Treinamento que Faz Vender"
                variant="primary"
                size="lg"
                withIcon
                url={Route.Trigger}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
