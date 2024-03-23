"use client"
import { motion } from 'framer-motion';
import './style.css'; // Upewnij się, że ścieżka do tego pliku CSS jest poprawna.

export default function HeroSection() {
  const textAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [1, 2, 2, 1, 1],
      opacity: [0, 1, 1, 1, 0]
    },
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }
  };

  return (
    <div id="root">
      <motion.h1
        className="text"
        initial={textAnimation.initial}
        animate={textAnimation.animate}
        transition={textAnimation.transition}
      >
        Rozwijamy się dla CIEBIE!
      </motion.h1>
    </div>
  );
}
