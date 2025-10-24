import { createContext, useContext, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const FadeInStaggerContext = createContext(false);

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const FadeIn = ({ children, ...props }: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  useGSAP(() => {
    if (!elementRef.current || isInStaggerGroup) return;

    const element = elementRef.current;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 24,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=200px",
          once: true,
        },
      }
    );
  }, { dependencies: [isInStaggerGroup], scope: elementRef });

  return (
    <div ref={elementRef} {...props}>
      {children}
    </div>
  );
};

interface FadeInStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  faster?: boolean;
}

export const FadeInStagger = ({
  faster = false,
  children,
  ...props
}: FadeInStaggerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const childElements = Array.from(container.children) as HTMLElement[];

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.fromTo(
      childElements,
      {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 24,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: faster ? 0.12 : 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=200px",
          once: true,
        },
      }
    );
  }, { dependencies: [faster], scope: containerRef });

  return (
    <FadeInStaggerContext.Provider value={true}>
      <div ref={containerRef} {...props}>
        {children}
      </div>
    </FadeInStaggerContext.Provider>
  );
};
