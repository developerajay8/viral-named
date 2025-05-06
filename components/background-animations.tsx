"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  const [lines, setLines] = useState<{ id: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    const numberOfLines = 20;
    const newLines = Array.from({ length: numberOfLines }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="floating-lines">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="floating-line"
          style={{
            left: `${line.left}%`,
            animationDelay: `${line.delay}s`
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ 
            y: '-100vh',
            opacity: [0, 0.5, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
              delay: line.delay
            }
          }}
        />
      ))}
    </div>
  );
}