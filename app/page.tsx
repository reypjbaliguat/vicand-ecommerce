import PromotionHeader from "@/components/layouts/AnouncementBar";
import LandingPageHero from "@/components/layouts/LandingPageHero";
import USPSection from "@/components/layouts/USPSection";
import LandingPageNav from "@/components/navs/LandingPageNav";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <PromotionHeader />
      <LandingPageNav />
      <LandingPageHero />
      <USPSection />
    </main>
  );
}
