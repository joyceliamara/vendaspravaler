import { CTAButton } from "@/components/atoms/cta-button"
import { CountdownTimer } from "@/components/molecules/countdown-timer"
import { Clock } from "lucide-react"

interface CountdownBarProps {
  endDate: Date
}

export function CountdownBar({ endDate }: CountdownBarProps) {
  return (
    <section className="w-full py-8 bg-primary/10 border-y border-primary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-xl font-bold">Oferta por tempo limitado</h3>
          </div>

          <CountdownTimer endDate={endDate} />

          <CTAButton text="Garantir minha vaga" variant="primary" />
        </div>
      </div>
    </section>
  )
}
