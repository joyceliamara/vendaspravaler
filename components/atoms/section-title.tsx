import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  highlightWords?: string[];
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  highlightWords = [],
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Highlight specific words in the title
  let highlightedTitle = title;
  highlightWords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlightedTitle = highlightedTitle.replace(
      regex,
      '<span class="gradient-text">$1</span>'
    );
  });

  return (
    <div
      className={cn("mb-8 leading-none", alignmentClasses[align], className)}
    >
      <h2
        className="text-2xl md:text-1xl lg:text-4xl font-bold tracking-tight"
        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
