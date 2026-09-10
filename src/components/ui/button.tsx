import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xs font-sans text-xs font-semibold uppercase tracking-btn transition-[color,background-color,border-color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        outline:
          "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-navy ring-offset-white",
        gold: "border-2 border-gold bg-gold text-navy hover:bg-gold-deep hover:border-gold-deep ring-offset-white",
        navy: "border-2 border-navy bg-navy text-white hover:bg-navy-mid hover:border-navy-mid ring-offset-white",
        cream: "border-2 border-cream bg-cream text-navy hover:bg-cream-dark ring-offset-navy",
        ghost: "text-gold hover:text-gold-deep ring-offset-navy",
        ghostInk: "text-muted hover:text-navy ring-offset-white",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-8",
        lg: "h-14 px-10",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
