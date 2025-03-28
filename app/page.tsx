import {
  CallToAction,
  Footer,
  Header,
  Hero,
  LogoTicker,
  Pricing,
  ProductShowcase,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
