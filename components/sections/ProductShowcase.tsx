"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const transalteY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productRef}
      className="md:px-10 px-3 bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="center">
            <div className="badge-btn">Boost your productivity</div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mt-5"
          >
            A more effective way to track progress
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-description mt-5"
          >
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </motion.p>
        </div>

        <div className="relative lg:max-w-7xl lg:mx-auto">
          <Image
            src="/images/product.png"
            alt="product"
            width={3000}
            height={3000}
            className="max-lg:mt-10 "
          />
          <motion.img
            src="/images/pyramid.png"
            alt="product"
            width={1000}
            height={1000}
            loading="lazy"
            className="max-md:hidden absolute w-[170px] lg:w-[250px] -right-16 -top-20"
            style={{
              translateY: transalteY,
            }}
          />
          <motion.img
            src="/images/torus.png"
            alt="product"
            width={1000}
            height={1000}
            loading="lazy"
            className="max-md:hidden w-[170px] lg:w-[250px] absolute bottom-24 -left-16 lg:bottom-36"
            style={{
              translateY: transalteY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
