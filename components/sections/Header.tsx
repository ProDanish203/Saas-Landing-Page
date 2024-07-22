import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../helpers";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="center py-3 bg-black text-white text-sm gap-x-3">
        <p className="max-md:hidden text-white/60 ">
          Streamline your workflow with our tools
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-2 md:px-10">
        <div className="">
          <div className="flex items-center justify-between">
            <Image
              src="/images/logo.png"
              alt="LOGO"
              width={200}
              height={200}
              className="object-contain w-16"
            />
            <Menu className="size-7 cursor-pointer mr-4 md:hidden" />

            <nav className="hidden md:flex items-center gap-6 text-black/60">
              <Link href="">About</Link>
              <Link href="">Features</Link>
              <Link href="">Customers</Link>
              <Link href="">Updates</Link>
              <Link href="">Help</Link>
              <Button text="Get for free" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
