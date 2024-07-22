"use client";
import { testimonialsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

const TestmionialColumn = ({
  testimonials,
  className,
  duration,
}: {
  testimonials: typeof testimonialsData;
  className?: string;
  duration: number;
}) => {
  return (
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className={className}
    >
      <div className={cn("flex flex-col gap-6 ", "")}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {testimonials.map(({ img, name, text, username }, index) => (
              <div key={index} className="card">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={img}
                    alt={username}
                    width={40}
                    height={40}
                    className="size-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const firstCol = testimonialsData.slice(0, 3);
  const secondCol = testimonialsData.slice(3, 6);
  const thirdCol = testimonialsData.slice(6, 9);

  return (
    <section className="md:px-10 px-3 overflow-x-clip bg-white">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="center">
            <div className="badge-btn">Testimonials</div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mt-5"
          >
            What our users say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-description mt-5"
          >
            Hear from our satisfied users about their experiences.
          </motion.p>
        </div>
        <div className="flex justify-center gap-6 mt-5 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)] max-h-[740px] overflow-hidden">
          <TestmionialColumn testimonials={firstCol} duration={20} />
          <TestmionialColumn
            testimonials={secondCol}
            className="max-md:hidden"
            duration={14}
          />
          <TestmionialColumn
            testimonials={thirdCol}
            className="max-lg:hidden"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
};
