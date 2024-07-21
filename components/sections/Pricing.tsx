import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="md:px-10 bg-white px-3 py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Choose a plan that fits your needs with flexible pricing options.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { btnText, features, inverse, popular, monthlyPrice, title },
              index
            ) => (
              <div
                key={index}
                className={cn(
                  "p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] max-w-sm w-full",
                  inverse && "bordeer-black bg-black text-white"
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
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Most Popular
                      </span>
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
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
