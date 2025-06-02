import type React from "react";

interface IOSTextSelectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextSelection({
  children,
  className = "",
}: IOSTextSelectionProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className={`text-white text-2xl font-light px-1 py-1 rounded-sm leading-none ${className}`}>
        {children}
      </span>
    </div>
  );
}
