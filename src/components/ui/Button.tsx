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
      "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50",

    secondary:
      "bg-white/5 backdrop-blur border border-white/10 text-white hover:bg-white/10",

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