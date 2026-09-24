"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, type MotionValue } from "framer-motion";

type HeroVideo = { webm: string; mp4?: string };

const HERO_VIDEO = { webm: "/videos/eye-smart-security-systems-with-watermark.webm" } as HeroVideo | null;

interface HeroBackgroundProps {
  scrollY: MotionValue<string>;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const subscribeNoop = () => () => {};

function canPlayVideo() {
  if (!HERO_VIDEO) return false;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !(
    connection?.saveData === true ||
    window.matchMedia("(prefers-reduced-data: reduce)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function HeroBackground({ scrollY, x, y }: HeroBackgroundProps) {
  const allowVideo = useSyncExternalStore(subscribeNoop, canPlayVideo, () => false);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y: scrollY }} className="absolute inset-x-0 -top-[15%] bottom-0">
        <motion.div style={{ x, y }} className="absolute -inset-[4%]">
          <div className="hero-mesh absolute inset-0" />
          <div className="camera-grid absolute inset-0" />
          {allowVideo && HERO_VIDEO && (
            <video
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onCanPlay={() => setVideoReady(true)}
            >
              <source src={HERO_VIDEO.webm} type="video/webm" />
              {HERO_VIDEO.mp4 && <source src={HERO_VIDEO.mp4} type="video/mp4" />}
            </video>
          )}
        </motion.div>
      </motion.div>

      {videoReady && <div className="absolute inset-0 bg-slate-950/60" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(2_6_23/0.7)_100%)]" />

      <div className="absolute left-6 top-6 hidden h-6 w-6 border-l-2 border-t-2 border-white/30 sm:block" />
      <div className="absolute right-6 top-6 hidden h-6 w-6 border-r-2 border-t-2 border-white/30 sm:block" />
      <div className="absolute bottom-10 left-6 hidden h-6 w-6 border-b-2 border-l-2 border-white/30 sm:block" />
      <div className="absolute bottom-10 right-6 hidden h-6 w-6 border-b-2 border-r-2 border-white/30 sm:block" />
    </div>
  );
}
