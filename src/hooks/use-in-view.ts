import * as React from "react";

export function useInView(options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}) {
  const [isInView, setIsInView] = React.useState(false);
  const elementRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (options?.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options?.triggerOnce === false) {
            setIsInView(false);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? "0px 0px -40px 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return [elementRef, isInView] as const;
}
