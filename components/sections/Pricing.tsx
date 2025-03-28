"use client";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="md:px-10 bg-white px-3 py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-description mt-5"
          >
            Choose a plan that fits your needs with flexible pricing options.
          </motion.p>
        </div>

        <div className="mt-10 flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { btnText, features, inverse, popular, monthlyPrice, title },
              index
            ) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{
                  delay: index * 0.4,
                  duration: 0.5,
                  type: "keyframes",
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={index}
                className={cn(
                  "card",
                  inverse && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={cn(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPosition: "-100%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          repeatType: "loop",
                          ease: "linear",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={cn(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black"
                  )}
                >
                  {btnText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <Check className="size-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
