import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="bg-white md:py-14 py-10">
      <div className="container mx-auto">
        <div className="center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src="/images/logos/logo1.png"
              alt="logo 1"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo2.png"
              alt="logo 2"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo3.png"
              alt="logo 3"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo4.png"
              alt="logo 4"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo5.png"
              alt="logo 5"
              width={400}
              height={400}
              className="ticker-img"
            />
            <Image
              src="/images/logos/logo6.png"
              alt="logo 6"
              width={400}
              height={400}
              className="ticker-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
