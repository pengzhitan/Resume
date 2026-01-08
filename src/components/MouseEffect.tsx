import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: "2px solid #00f0ff",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(0, 240, 255, 0.1)",
      border: "1px solid #00f0ff",
      mixBlendMode: "screen" as any
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    }
  }

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999] hidden md:block">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      />
      {/* Inner Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(0,240,255,1)]"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50
        }}
      />
    </div>
  );
};
