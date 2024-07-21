import {
  Header,
  Hero,
  LogoTicker,
  Pricing,
  ProductShowcase,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
    </main>
  );
}
