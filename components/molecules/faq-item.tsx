import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItemProps {
  question: string
  answer: string
  value: string
}

export function FAQItem({ question, answer, value }: FAQItemProps) {
  return (
    <AccordionItem value={value} className="border-b border-muted">
      <AccordionTrigger className="text-left font-semibold py-4">{question}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground pb-4">{answer}</AccordionContent>
    </AccordionItem>
  )
}
