import Image from "next/image";
import React from "react";

export const ProductShowcase = () => {
  return (
    <section className="md:px-10 px-3 bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="center">
            <div className="badge-btn">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="relative lg:max-w-7xl lg:mx-auto">
          <Image
            src="/images/product.png"
            alt="product"
            width={3000}
            height={3000}
            className="max-lg:mt-10 "
          />
          <Image
            src="/images/pyramid.png"
            alt="product"
            width={1000}
            height={1000}
            className="max-md:hidden absolute w-[170px] lg:w-[250px] -right-16 -top-20"
          />
          <Image
            src="/images/torus.png"
            alt="product"
            width={1000}
            height={1000}
            className="max-md:hidden w-[170px] lg:w-[250px] absolute bottom-24 -left-16 lg:bottom-36"
          />
        </div>
      </div>
    </section>
  );
};
