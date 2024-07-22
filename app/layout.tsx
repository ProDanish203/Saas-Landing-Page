import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { IntroLoader } from "@/components/shared";
import { CircularButton, CustomCursor } from "@/components/helpers";
// import AnimatedCursor from "react-animated-cursor";
// import NextTopLoader from "nextjs-toploader";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovative SaaS Solution | Your Company Name",
  description:
    "Transform your business with our cutting-edge SaaS platform. Boost productivity, streamline workflows, and drive growth. Start your free trial today!",
  authors: [{ name: "Danish Siddiqui" }],
  keywords: [
    "SaaS",
    "software as a service",
    "cloud software",
    "business solution",
    "productivity tool",
    "next.js",
    "typescript",
    "tailwindcss",
    "framer-motion",
    "landing page",
  ],
  creator: "Danish Siddiqui",
  publisher: "Danish Siddiqui",
  metadataBase: new URL("https://saas-landing-page-lake.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    title: "Innovative SaaS Solution | Danish Siddiqui",
    description:
      "Transform your business with our cutting-edge SaaS platform. Boost productivity, streamline workflows, and drive growth.",
    url: "https://saas-landing-page-lake.vercel.app/",
    siteName: "Saas Landing Page",
    images: [
      {
        url: "https://saas-landing-page-lake.vercel.app/images/pyramid.png",
        width: 1200,
        height: 630,
        alt: "SaaS Platform | Danish Siddiqui",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative SaaS Solution | Your Company Name",
    description:
      "Transform your business with our cutting-edge SaaS platform. Boost productivity, streamline workflows, and drive growth.",
    creator: "@danish_siddiqui",
    images: ["https://saas-landing-page-lake.vercel.app/images/pyramid.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  applicationName: "Saas Landing Page",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#010D3E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
