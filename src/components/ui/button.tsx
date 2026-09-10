import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-wide transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 active:scale-[0.98]",
  {
    variants: {
      variant: {
        gold: "bg-gold text-navy-deep hover:bg-gold-deep ring-offset-navy",
        outline:
          "border border-gold/50 bg-transparent text-gold hover:bg-gold/10 ring-offset-navy",
        cream: "bg-cream text-navy hover:bg-cream-dark ring-offset-cream",
        navy: "bg-navy text-cream hover:bg-navy-mid ring-offset-cream",
        ghost: "text-cream/80 hover:text-gold ring-offset-navy",
        ghostInk: "text-navy/70 hover:text-navy ring-offset-cream",
      },
      size: {
        sm: "h-10 px-3.5",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "gold",
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
