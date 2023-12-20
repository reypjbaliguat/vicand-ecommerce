import PromotionHeader from "@/components/headers/PromotionHeader";
import LandingPageHero from "@/components/layouts/LandingPageHero";
import LandingPageNav from "@/components/navs/LandingPageNav";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <PromotionHeader />
      <LandingPageNav />
      <LandingPageHero />
    </main>
  );
}
