import * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "fade-up" | "fade" | "scale";
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  as: Component = "div",
  style,
  ...props
}: RevealProps) {
  const [ref, inView] = useInView({ threshold, rootMargin, triggerOnce: true });

  const variantClass =
    variant === "fade" ? "reveal-fade" : variant === "scale" ? "reveal-scale" : "reveal-init";

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Component
      ref={ref as unknown as React.Ref<HTMLElement>}
      className={cn(variantClass, inView && "reveal-visible", className)}
      style={{ ...delayStyle, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
