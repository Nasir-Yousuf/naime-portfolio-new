"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([^\d]*?)(\d+(?:\.\d+)?)([^\d]*)$/);
    if (!match) return;

    const prefix = match[1] || "";
    const rawNum = match[2];
    const suffix = match[3] || "";
    const isDecimal = rawNum.includes(".");
    const targetNumber = parseFloat(rawNum);

    if (isNaN(targetNumber)) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? (easeOut * targetNumber).toFixed(1)
        : Math.floor(easeOut * targetNumber);

      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
