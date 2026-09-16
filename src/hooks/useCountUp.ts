"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export function useCountUp(targetValue: number, duration: number = 2) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const controls = animate(0, targetValue, {
      duration,
      onUpdate: (value) => {
        element.textContent = Math.floor(value).toString();
      },
    });

    return () => controls.stop();
  }, [targetValue, duration]);

  return ref;
}
