"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <>
      <motion.div
        className="size-10 z-20 rounded-full bg-red-500 fixed top-0 left-0"
        variants={variants}
        animate="default"
        transition={{ ease: "linear", duration: 0.2 }}
      ></motion.div>
    </>
  );
};
