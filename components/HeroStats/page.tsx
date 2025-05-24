"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { ImageStats } from "../ImageStats/page";

const stats = [
  { label: "Expert Team", value: 20, suffix: "+" },
  { label: "Trusted by Clients", value: 400, suffix: "+" },
  { label: "Projects Delivered", value: 850, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

const duration = 2000; // animation duration in ms

const HeroStats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [counts, setCounts] = useState(stats.map(() => 0));
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0, y: 0 });

      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        const updatedCounts = stats.map((stat) =>
          Math.floor(stat.value * progress)
        );

        setCounts(updatedCounts);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCounts(stats.map((stat) => stat.value));
          animationFrameRef.current && cancelAnimationFrame(animationFrameRef.current);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        animationFrameRef.current && cancelAnimationFrame(animationFrameRef.current);
      };
    }
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white dark:bg-background py-10 px-6 md:px-20 lg:px-32"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-900 dark:text-foreground">
            Proven bookkeeping & accounting solutions with a commitment to excellence. Experience top-notch service and a results-driven approach tailored for your business success.
          </h3>
          <p className="mt-4 text-gray-600 dark:text-muted-foreground text-sm md:text-base">
            We streamline your financial operations with precision-driven solutions tailored for startups and enterprises, ensuring efficiency, accuracy, and growth.
          </p>

          {/* Stats Section */}
          <div className="mt-8 dark:bg-card bg-white text-black dark:text-card-foreground grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center px-10 py-6 backdrop-blur-[10px] bg-gradient-to-tr from-white/15 to-white/5 rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold">
                  {counts[i]}
                  {stat.suffix}
                </div>
                <p className="text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 w-full h-auto rounded-2xl overflow-hidden"
        >
          <ImageStats imgSrc={'/images/heroStats/stats.avif'} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroStats;
