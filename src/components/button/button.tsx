import { cva } from "class-variance-authority";
import {
  Loader2,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react";

import { cn } from "../../lib/utils";
import type { ButtonProps } from "./button.types";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center",
    "overflow-hidden",
    "rounded-[1.25rem]",
    "font-semibold",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-indigo-300/60 focus-visible:ring-offset-white",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500",
          "text-white",
          "shadow-[0_18px_44px_-20px_rgba(99,102,241,0.8)]",
          "hover:shadow-[0_20px_60px_-24px_rgba(99,102,241,0.75)]",
          "hover:-translate-y-0.5",
        ],

        secondary: [
          "bg-white",
          "text-slate-900",
          "border border-slate-200",
          "shadow-[0_14px_40px_-16px_rgba(15,23,42,0.12)]",
          "hover:bg-slate-50",
          "hover:-translate-y-0.5",
        ],

        ghost: [
          "bg-white/80",
          "text-indigo-600",
          "border border-indigo-100",
          "shadow-none",
          "hover:bg-white",
        ],

        destructive: [
          "bg-gradient-to-r from-rose-50 to-red-50",
          "text-rose-600",
          "border border-rose-100",
          "shadow-[0_12px_30px_-16px_rgba(239,68,68,0.28)]",
          "hover:bg-rose-100",
        ],
      },

      size: {
        sm: "h-11 px-5 text-sm gap-2",
        md: "h-14 px-8 text-base gap-2.5",
        lg: "h-16 px-10 text-lg gap-3",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const icons = {
  primary: Sparkles,
  secondary: ShieldCheck,
  ghost: MoreHorizontal,
  destructive: Trash2,
};

export function Button({
  className,
  variant = "primary",
  size,
  loading,
  children,
  ...props
}: ButtonProps) {
  const Icon = icons[variant];

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={loading}
      {...props}
    >
      <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Carregando...
        </>
      ) : (
        <>
          <Icon className="h-5 w-5" />
          {children}
        </>
      )}
    </button>
  );
}