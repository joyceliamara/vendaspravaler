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
}: CTAButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
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
        "w-full md:w-auto text-base sm:text-lg px-4 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide transition-all duration-300 transform hover:scale-105",
        className
      )}
    >
      <Link href={url} target="_blank">
        {text}
      </Link>
    </Button>
  );
}
