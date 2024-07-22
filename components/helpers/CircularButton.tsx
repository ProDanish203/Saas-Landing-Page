"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const CircularButton = () => {
  const text = "Get Started Now • Get Started Now • ";
  const characters = text.split("");
  const controls = useAnimationControls();
  const [scrollY, setScrollY] = useState(0);
  const [isClockwise, setIsClockwise] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(10);
  const lastDirectionChange = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const now = Date.now();

      if (currentScrollY > scrollY && !isClockwise) {
        setIsClockwise(true);
        setAnimationDuration(2);
        lastDirectionChange.current = now;
      } else if (currentScrollY < scrollY && isClockwise) {
        setIsClockwise(false);
        setAnimationDuration(2);
        lastDirectionChange.current = now;
      } else if (now - lastDirectionChange.current > 500) {
        setAnimationDuration(20);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, isClockwise]);

  useEffect(() => {
    controls.start({
      rotate: isClockwise ? 360 : -360,
      transition: {
        duration: animationDuration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [isClockwise, animationDuration, controls]);

  return (
    <div className="fixed bottom-4 left-4 w-[120px] h-[120px] md:w-[140px] md:h-[140px] z-20">
      <motion.div className="absolute w-full h-full" animate={controls}>
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute w-full h-full text-xs md:text-sm text-center font-bold uppercase bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
            style={{
              transformOrigin: "center",
              transform: `rotate(${(i * 360) / characters.length}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>
      <button className="absolute top-[20px] left-[20px] w-[80px] h-[80px] md:top-[25px] md:left-[25px] md:w-[90px] md:h-[90px] rounded-full bg-[#183EC2] hover:bg-[#0d2680] text-white border-none text-xs md:text-sm cursor-pointer z-10 transition-colors duration-300 tracking-tighter">
        Get Started
      </button>
    </div>
  );
};
