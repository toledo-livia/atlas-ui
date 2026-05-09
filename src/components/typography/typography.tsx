import type { ElementType } from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const typographyVariants = cva(
  "text-gray-900 tracking-tight",
  {
    variants: {
      variant: {
        h1: "text-5xl font-bold leading-tight",
        h2: "text-4xl font-bold leading-tight",
        h3: "text-3xl font-semibold leading-snug",

        body:
          "text-base font-normal leading-7 text-gray-600",

        small:
          "text-sm font-normal leading-6 text-gray-500",

        muted:
          "text-sm text-gray-400",

        label:
          "text-sm font-medium uppercase tracking-wide",
      },
    },

    defaultVariants: {
      variant: "body",
    },
  }
);

type TypographyProps = {
  as?: ElementType;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "body"
    | "small"
    | "muted"
    | "label";

  className?: string;
  children: React.ReactNode;
};

export function Typography({
  as: Component = "p",
  variant,
  className,
  children,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        typographyVariants({ variant }),
        className
      )}
    >
      {children}
    </Component>
  );
}