import { forwardRef } from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "../../lib/utils";
import type { InputProps } from "./input.types";

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      className,
      label,
      helperText,
      error,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={id}
            className={cn(
              [
                "flex h-14 w-full rounded-2xl",
                "border border-gray-200",
                "bg-white px-4",
                "text-gray-900",
                "shadow-sm",
                "transition-all duration-300",
                "outline-none",

                "placeholder:text-gray-400",

                "focus:border-indigo-500",
                "focus:ring-4",
                "focus:ring-indigo-500/10",

                "disabled:cursor-not-allowed",
                "disabled:opacity-50",

                error &&
                  "border-red-400 focus:border-red-500 focus:ring-red-500/10",
              ],
              className
            )}
            {...props}
          />

          {error && (
            <AlertCircle className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500" />
          )}
        </div>

        {error ? (
          <span className="text-sm text-red-500">
            {error}
          </span>
        ) : helperText ? (
          <span className="text-sm text-gray-500">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";