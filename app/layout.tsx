import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { IntroLoader } from "@/components/shared";
import { CircularButton, CustomCursor } from "@/components/helpers";
import AnimatedCursor from "react-animated-cursor";
import NextTopLoader from "nextjs-toploader";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saas Landing Page",
  description:
    "A simple, clean, animated, and responsive landing page for your SaaS business. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Deployed with Vercel. Developed by Danish Siddiqui. ",
  authors: [{ name: "Danish Siddiqui" }],
  keywords: [
    "next.js",
    "typescript",
    "tailwindcss",
    "framer-motion",
    "saas",
    "landing page",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          dmSans.className,
          "antialiased bg-[#EAEEFE] h-screen overflow-x-hidden relative"
        )}
      >
        <SmoothScrollProvider>
          <IntroLoader />
          {/* <CustomCursor /> */}
          <CircularButton />
          {/* <AnimatedCursor
            innerSize={10}
            outerSize={12}
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            color="1, 13, 62"
          /> */}

          {/* <NextTopLoader
            color="#ff4800"
            initialPosition={0.7}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
            <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          /> */}

          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
