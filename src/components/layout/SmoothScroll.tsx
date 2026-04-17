"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      direction: "vertical",
      smoothTouch: false,
      touchMultiplier: 1.5,
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Ensure no conflict with default scroll behavior
    document.documentElement.style.scrollBehavior = "auto";

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
