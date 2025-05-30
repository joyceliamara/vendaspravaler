import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg gradient-bg border border-dark-accent/10 hover:border-dark-accent/30 transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center mb-4">
        <div className="bg-dark-deeper p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
