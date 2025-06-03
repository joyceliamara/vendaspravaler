// CTAButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  withIcon?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  url: string;
  enablePingAnimation?: boolean; // Nova prop para controlar a animação
}

export function CTAButton({
  text,
  onClick,
  className,
  variant = "primary",
  size = "default",
  fullWidth = false,
  type = "button",
  url,
  enablePingAnimation = true,
}: CTAButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-primary/15 text-primary hover:bg-secondary/80",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg",
    sm: "h-8 px-2 py-1 text-sm",
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        "relative w-full md:w-auto text-base sm:text-base px-4 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide transition-all duration-300 transform hover:scale-105 group",
        className
      )}
    >
      {enablePingAnimation && (
        <>
          <span className="absolute inset-0 z-0 inline-flex h-full w-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite] bg-primary opacity-75 group-hover:animate-none rounded-lg py-5" />
          <span className="absolute inset-0 z-0 inline-flex h-full w-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite_0.2s] bg-primary opacity-60 group-hover:animate-none rounded-lg" />
        </>
      )}

      <Link href={url} target="_blank" className="relative z-10 block">
        {text}
      </Link>
    </Button>
  );
}