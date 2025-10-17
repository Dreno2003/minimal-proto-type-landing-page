"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if the current screen is mobile based on a breakpoint.
 * @param breakpoint - Tailwind's default breakpoint (in px), default = 768px
 * @returns boolean (true if screen width <= breakpoint)
 */
export function useMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Run on mount
    checkScreenSize();

    // Listen for resize
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
}
