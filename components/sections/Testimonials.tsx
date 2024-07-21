import { testimonialsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TestmionialColumn = ({
  testimonials,
  className,
}: {
  testimonials: typeof testimonialsData;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mt-5 flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]",
        className
      )}
    >
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
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
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
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            Hear from our satisfied users about their experiences.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestmionialColumn testimonials={firstCol} />
          <TestmionialColumn testimonials={secondCol} className="max-md:hidden"/>
          <TestmionialColumn testimonials={thirdCol} className="max-lg:hidden"/>
        </div>
      </div>
    </section>
  );
};
