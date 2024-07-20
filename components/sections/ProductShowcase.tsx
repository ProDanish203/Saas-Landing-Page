import Image from "next/image";
import React from "react";

export const ProductShowcase = () => {
  return (
    <section className="md:px-10 px-3 bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-24">
      <div>
        <div className="max-w-[540px] mx-auto">
          <div className="center">
            <div className="badge-btn">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-text mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/product.png"
            alt="product"
            width={1000}
            height={1000}
            className="mt-10 "
          />
          {/* <Image
            src="/images/pyramid.png"
            alt="product"
            width={220}
            height={220}
            className=""
          /> */}
          {/* <Image
            src="/images/torus.png"
            alt="product"
            width={220}
            height={220}
            className=""
          /> */}
        </div>
      </div>
    </section>
  );
};
