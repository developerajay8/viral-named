"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Growth Campaigns", value: 200 },
  { label: "Leads Generated", value: 800 },
  { label: "Automations Launched", value: 1500 },
];

export default function Local() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Total animation time (2 seconds)
    const steps = 60; // Number of updates
    const interval = duration / steps;
    
    let count = 0;
    const increments = stats.map((stat) => stat.value / steps);

    const timer = setInterval(() => {
      count++;
      setCounters((prev) =>
        prev.map((_, i) => Math.min(stats[i].value, Math.floor(increments[i] * count)))
      );

      if (count >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:block hidden">
    <div className="flex justify-center md:gap-6 gap-5 md:py-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="border border-primary text-primary rounded-lg md:p-6 p-[10px] md:w-48 w-fit text-center shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <p className="md:text-[18px] text-[25px] font-bold text-primary-600">
            {counters[index].toLocaleString()}+
          </p>
          <p className="text-gray-700 text-[16px]">{stat.label}</p>
        </motion.div>
      ))}
    </div>
    </div>
  );
}
