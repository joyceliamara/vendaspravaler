import { SectionTitle } from "@/components/atoms/section-title";
import { CTAButton } from "@/components/atoms/cta-button";
import { AlertCircle } from "lucide-react";
import { Route } from "@/constants";

export function CustomerIssues() {
  const problems = [
    {
      title: "Vendedores sem comprometimento",
      description:
        "Você paga salário pra gente que não veste a camisa — e ainda carrega o time nas costas.",
      showMobile: true,
    },
    {
      title: "Baixíssima taxa de conversão",
      description:
        "Você gasta com propaganda, marketing e perde dinheiro em cada lead mal aproveitado.",
      showMobile: true,
    },
    {
      title: "Pouco faturamento perto do que se poderia",
      description:
        "Você mantém uma estrutura cara demais pra um resultado medíocre.",
      showMobile: true,
    },
    {
      title: "Meta de vendas não cumprida mais um mês",
      description:
        "A empresa entra no vermelho enquanto a equipe acha tudo normal.",
      showMobile: false,
    },
    {
      title: "Falta de uma estratégia e ações claras da equipe",
      description:
        "Sem direção, sua equipe patina e você continua apagando incêndio todo dia.",
      showMobile: false,
    },
    {
      title: "Falta de engajamento da equipe",
      description:
        "Você corre atrás do resultado sozinho — e isso tá te levando à exaustão.",
      showMobile: false,
    },
  ];

  const leftColumn = problems.slice(0, 3);
  const rightColumn = problems.slice(3);

  return (
    <section className="w-full py-14 sm:py-24 bg-dark-deeper">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <SectionTitle
              title="Seu time comercial está vendendo muito menos do que poderia?"
              align="center"
              highlightWords={["vendendo"]}
            />

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Você não está sozinho. A maioria dos líderes sabe que seus
              vendedores têm potencial, mas não sabem como destravar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {leftColumn.map((problem, index) => (
                <div
                  key={index}
                  // Adicione a classe 'hidden' se showMobile for false e 'md:flex' para mostrar no desktop
                  className={`flex items-start space-x-4 p-6 bg-dark rounded-xl hover:bg-dark/80 transition-colors ${problem.showMobile ? "" : "hidden md:flex"}`}
                >
                  <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {rightColumn.map((problem, index) => (
                <div
                  key={index}
                  // Adicione a classe 'hidden' se showMobile for false e 'md:flex' para mostrar no desktop
                  className={`flex items-start space-x-4 p-6 bg-dark rounded-xl hover:bg-dark/80 transition-colors ${problem.showMobile ? "" : "hidden md:flex"}`}
                >
                  <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:pt-8 text-center">
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
    </section>
  );
}