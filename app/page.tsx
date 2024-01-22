import PromotionHeader from "@/components/layouts/AnouncementBar";
import FeaturedCategory from "@/components/layouts/FeaturedCategory";
import FollowUsOnInstagram from "@/components/layouts/FollowUsOnInstagram";
import InstagramDescription from "@/components/layouts/InstagramDescription";
import LandingPageHero from "@/components/layouts/LandingPageHero";
import LatestBlogs from "@/components/layouts/LatestBlogs";
import LogoBanner from "@/components/layouts/LogoBanner";
import MoreWithVicand from "@/components/layouts/MoreWithVicand";
import NewArrival from "@/components/layouts/NewArrival";
import PerfectAesthetic from "@/components/layouts/PerfectAesthetic";
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
      <PerfectAesthetic type="women" />
      <Testimonial />
      <PerfectAesthetic type="men" />
      <LatestBlogs />
      <FollowUsOnInstagram />
      <InstagramDescription />
    </main>
  );
}
