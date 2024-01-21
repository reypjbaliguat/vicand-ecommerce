import PromotionHeader from "@/components/layouts/AnouncementBar";
import FeaturedCategory from "@/components/layouts/FeaturedCategory";
import LandingPageHero from "@/components/layouts/LandingPageHero";
import LogoBanner from "@/components/layouts/LogoBanner";
import MoreWithVicand from "@/components/layouts/MoreWithVicand";
import NewArrival from "@/components/layouts/NewArrival";
import PerfectAestheticWomen from "@/components/layouts/PerfectAestheticWomen";
import Testimonial from "@/components/layouts/Testimonial";
import TopPicks from "@/components/layouts/TopPicks";
import USPSection from "@/components/layouts/USPSection";
import LandingPageNav from "@/components/navs/LandingPageNav";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <PromotionHeader />
      <LandingPageNav />
      <LandingPageHero />
      <USPSection />
      <FeaturedCategory />
      <TopPicks />
      <LogoBanner />
      <MoreWithVicand />
      <NewArrival />
      <PerfectAestheticWomen />
      <Testimonial />
    </main>
  );
}
