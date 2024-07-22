"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const LogoTicker = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref} className="bg-white md:py-14 py-10">
      <div className="container mx-auto">
        <motion.div
          // style={{
          //   x: x1,
          // }}
          className="center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
        >
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex gap-14 flex-none pr-14"
          >
            <Image
              src="/images/logos/logo1.png"
              alt="logo 1"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo2.png"
              alt="logo 2"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo3.png"
              alt="logo 3"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo4.png"
              alt="logo 4"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo5.png"
              alt="logo 5"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo6.png"
              alt="logo 6"
              width={400}
              height={400}
              className="ticker-img"
            />

            {/* Duplicate images */}
            <Image
              src="/images/logos/logo1.png"
              alt="logo 1"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo2.png"
              alt="logo 2"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo3.png"
              alt="logo 3"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo4.png"
              alt="logo 4"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo5.png"
              alt="logo 5"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo6.png"
              alt="logo 6"
              width={400}
              height={400}
              className="ticker-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
