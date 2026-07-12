import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--brand)] text-white shadow-lg shadow-indigo-500/20 hover:opacity-90",

    secondary:
      "bg-[var(--surface)] border border-[var(--border)] text-white hover:bg-[var(--surface-light)]",

    ghost:
      "bg-transparent text-[var(--text-primary)] hover:bg-white/5",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius)] px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--background)]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}