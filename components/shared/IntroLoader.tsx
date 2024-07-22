"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const IntroLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      style={{
        height: isLoading ? "100vh" : "auto",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center  bg-white z-[10000] "
            variants={{
              exit: { translateY: "-100vh" },
            }}
            exit="exit"
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            initial="live"
          >
            <div className="flex items-center gap-x-6">
              <div className="loader">
                <svg viewBox="0 0 80 80">
                  <circle r="32" cy="40" cx="40" id="test"></circle>
                </svg>
              </div>

              <div className="loader triangle">
                <svg viewBox="0 0 86 80">
                  <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
              </div>

              <div className="loader">
                <svg viewBox="0 0 80 80">
                  <rect height="64" width="64" y="8" x="8"></rect>
                </svg>
              </div>
            </div>

            <div className="absolute top-[100%] w-full ">
              {/* Exit Animation */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"full"}
                width={"full"}
                className="w-full"
                viewBox="0 0 1536 300"
              >
                <motion.path
                  className="fill-white"
                  d={`M0 0 L0 0 Q ${1536 / 2} 300 1536 0`}
                  variants={{
                    initial: {
                      d: `M0 0 L0 0 Q ${1536 / 2} 300 1536 0`,
                      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
                    },
                    exit: {
                      d: `M0 0 L0 0 Q ${1536 / 2} 0 1536 0`,
                      transition: {
                        duration: 0.7,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.3,
                      },
                    },
                  }}
                  initial="initial"
                  exit={"exit"}
                  style={{ transition: "all 0.7s ease-out" }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
