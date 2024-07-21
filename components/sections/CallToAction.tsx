import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="md:px-10 px-3 bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-32  overflow-x-clip overflow-y-clip">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5">Sign up for free today</h2>
          <p className="text-center text-lg tracking-tight text-text mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <div className="flex items-center justify-center gap-2 mt-10">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text flex gap-x-1 items-center hover:gap-x-2 transition-all duration-100">
              <span>Learn more</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="relative w-full">
            <Image
              src="/images/star.png"
              alt="star img"
              width={260}
              height={260}
              className="max-md:hidden absolute -top-[340px] -left-64 lg:-left-[350px] lg:w-[300px] lg:-top-[300px]"
            />
            <Image
              src="/images/spring.png"
              alt="spring img"
              width={260}
              height={260}
              className="max-md:hidden w-[250px] absolute -top-[200px] -right-[200px] lg:w-[300px] lg:-right-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
