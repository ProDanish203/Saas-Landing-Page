import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="md:px-10 px-3 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="">
        <div className="md:grid md:grid-cols-2 place-items-center">
          <div className="">
            <div className="badge-btn">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transaprent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#0101D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="flex items-center gap-x-1 mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text flex gap-x-1 items-center hover:gap-x-2 transition-all duration-100">
                <span>Learn more</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="max-md:mt-20 md:h-[658px] relative">
            <Image
              src="/images/cog.png"
              alt="cog"
              width={1000}
              height={1000}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-20 lg:-left-64 xl:-left-80"
            />
            <div className="size-80 absolute -top-4 -left-32 lg:-left-[420px] max-md:hidden">
              <Image
                src="/images/cylinder.png"
                alt="cylinder img"
                width={220}
                height={220}
                className="absolute"
              />
            </div>

            <div className="size-64 absolute -bottom-24 left-20 xl:left-40 max-lg:hidden">
              <Image
                src="/images/half-torus.png"
                alt="cylinder img"
                width={220}
                height={220}
                className="absolute w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
