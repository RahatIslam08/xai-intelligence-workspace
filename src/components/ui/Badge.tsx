import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: "brand" | "data" | "intelligence" | "automation";
};

export default function Badge({
  children,
  variant = "brand",
  className,
  ...props
}: BadgeProps) {
  const variants = {
    brand:
      "bg-[var(--brand)]/15 text-[var(--brand)] border border-[var(--brand)]/20",

    data:
      "bg-[var(--data)]/15 text-[var(--data)] border border-[var(--data)]/20",

    intelligence:
      "bg-[var(--intelligence)]/15 text-[var(--intelligence)] border border-[var(--intelligence)]/20",

    automation:
      "bg-[var(--automation)]/15 text-[var(--automation)] border border-[var(--automation)]/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}