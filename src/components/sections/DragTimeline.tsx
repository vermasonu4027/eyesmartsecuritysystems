"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

export function DragTimeline({ steps }: { steps: TimelineStep[] }) {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => setMaxDrag(Math.max(0, track.scrollWidth - viewport.clientWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const next = Math.min(Math.max(index, 0), steps.length - 1);
      const card = track.children[next] as HTMLElement;
      const target = -Math.min(maxDrag, card.offsetLeft);
      setActive(next);
      animate(x, target, { duration: reduce ? 0 : 0.3, ease: "easeOut" });
    },
    [maxDrag, reduce, steps.length, x]
  );

  const syncActiveFromDrag = () => {
    const track = trackRef.current;
    if (!track) return;
    const position = -x.get();
    let nearest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const distance = Math.abs((child as HTMLElement).offsetLeft - position);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(steps.length - 1);
    }
  };

  return (
    <div>
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={`How we work, ${steps.length} steps`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <motion.ol
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.12}
          onDragEnd={syncActiveFromDrag}
          style={{ x }}
          className="flex w-max cursor-grab gap-6 touch-pan-y active:cursor-grabbing"
        >
          {steps.map((step) => (
            <li key={step.number} className="w-[300px] shrink-0 select-none sm:w-[340px]">
              <div className="h-full rounded-lg border border-border bg-background p-6">
                <div
                  aria-hidden
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-bold text-primary"
                >
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>

      {maxDrag > 0 && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Drag to explore, or focus the timeline and use the arrow keys
        </p>
      )}
    </div>
  );
}
