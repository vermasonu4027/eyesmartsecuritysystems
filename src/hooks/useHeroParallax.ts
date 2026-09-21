"use client";

import type { PointerEvent, RefObject } from "react";
import {
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const SPRING = { stiffness: 80, damping: 20, mass: 0.5 };

export function useHeroParallax(ref: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "12%"]
  );

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);

  const bgX = useTransform(sx, (v) => v * 10);
  const bgY = useTransform(sy, (v) => v * 10);
  const cardX = useTransform(sx, (v) => v * -5);
  const cardY = useTransform(sy, (v) => v * -5);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    py.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return { bgScrollY, bgX, bgY, cardX, cardY, onPointerMove, onPointerLeave };
}
