"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ElementType } from "react";

type FadeInProps = {
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "ref">;

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function FadeIn({
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
  ...rest
}: FadeInProps) {
  const Tag = motion.create(as as ElementType);
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
