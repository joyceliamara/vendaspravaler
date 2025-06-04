import { SectionTitle } from "@/components/atoms/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "../atoms/cta-button";
import { Route } from "@/constants";

export function TransformationShowcase() {
  const beforeAfter = [
    {
      before: "Vendedores desmotivados e sem comprometimento",
      after: "Equipe super engajada e comprometida com resultados",
    },
    {
      before: "Equipe que não bate as metas de vendas mensais",
      after: "Vendedores que superam as metas todos os meses",
    },
    {
      before: "Vendedores que não se conectam com os clientes",
      after: "Profissionais que criam relacionamentos genuínos e duradouros",
    },
    {
      before: "Baixa taxa de conversão de clientes em potencial",
      after: "Conversão acima de 30% para clientes em potencial",
    },
    {
      before: "Processos de vendas inconsistentes e imprevisíveis",
      after: "Sistema de vendas estruturado, replicável e escalável",
    },
    {
      before: "Alta dependência de descontos para fechar negócios",
      after: "Vendas baseadas em valor, sem necessidade de baixar preços",
    },
  ];

  return (
    <section className="w-full py-14 sm:py-24  gradient-bg ">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="A Transformação que Sua Equipe Comercial Vai Ter"
          subtitle="Veja o antes e depois de implementar o Vendas Pra Valer"
          highlightWords={["Transformação"]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4 ">
          <Card className="bg-white border border-destructive/20 sm:max-w-xl sm:ml-32">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center mb-6">
                <div className="bg-destructive/10 p-2 rounded-full mr-3">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl text-black font-bold">
                  ANTES do treinamento
                </h3>
              </div>
              <Image
                alt="homem preocupado"
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BnF2IWZAa64jnI8iDnO9/media/fdb50923-aa0e-4ada-8d40-3d056d342b91.webp"
                width={650}
                height={400}
                className="sm:h-[300px]"
              />
              <ul className="space-y-4">
                {beforeAfter.map((item, index) => (
                  <li key={`before-${index}`} className="flex items-start">
                    <XCircle className="h-5 w-5 text-destructive mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-black">{item.before}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border border-primary/20 max-w-xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-black font-bold">
                  DEPOIS do treinamento
                </h3>
              </div>
              <Image
                alt="mulher animada"
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BnF2IWZAa64jnI8iDnO9/media/c5aa9ab9-af05-442d-99de-d0471919533f.webp"
                width={600}
                height={400}
              />
              <ul className="space-y-4">
                {beforeAfter.map((item, index) => (
                  <li key={`after-${index}`} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-black">{item.after}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center pt-10">
          <CTAButton
            type="submit"
            text="✅ Quero Agendar uma Reunião"
            variant="secondary"
            size="lg"
            className="w-full"
            url={Route.Trigger}
          />
        </div>
      </div>
    </section>
  );
}
