"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export const AnimatedText = motion.div;
export const AnimatedButton = motion(Button);

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const zoomInVariants = {
  hidden: { scale: 1.1 },
  visible: { scale: 1 },
};

export const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <motion.span ref={ref} className="text-teal-500 font-bold text-4xl">
      {displayValue}
    </motion.span>
  );
};
