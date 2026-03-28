"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export default function MarqueeText({ text, speed = 20, className = "", reverse = false }: MarqueeTextProps) {
  const repeatedText = Array(6).fill(text).join(" · ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="inline-block"
      >
        <span className="inline-block pr-8">{repeatedText}</span>
        <span className="inline-block pr-8">{repeatedText}</span>
      </motion.div>
    </div>
  );
}
