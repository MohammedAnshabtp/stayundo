import Hero from "../components/marketplace/Hero";
import Benefits from "../components/marketplace/Benefits";
import Categories from "../components/marketplace/Categories";
import Package from "../components/marketplace/Package";
import MovingBanner from "../components/marketplace/MovingBanner";

export default function MarketplacePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Categories />
      <Package />
      <MovingBanner />
    </>
  );
}
