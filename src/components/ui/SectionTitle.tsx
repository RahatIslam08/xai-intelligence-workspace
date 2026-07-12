import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", className)} {...props}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}