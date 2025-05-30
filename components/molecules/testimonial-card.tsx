import { cn } from "@/lib/utils"
import Image from "next/image"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  avatarUrl?: string
  className?: string
}

export function TestimonialCard({ quote, author, role, avatarUrl, className }: TestimonialCardProps) {
  return (
    <div className={cn("p-6 rounded-lg gradient-bg border border-dark-accent/10 relative", className)}>
      <QuoteIcon className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
      <p className="text-muted-foreground mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        {avatarUrl && (
          <div className="mr-4 relative">
            <Image src={avatarUrl || "/placeholder.svg"} alt={author} width={48} height={48} className="rounded-full" />
            <div className="absolute inset-0 rounded-full border border-primary/30 glow"></div>
          </div>
        )}
        <div>
          <h4 className="font-bold">{author}</h4>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  )
}
