import PromotionHeader from "@/components/headers/PromotionHeader";
import LandingPageNav from "@/components/navs/LandingPageNav";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <PromotionHeader />
      <LandingPageNav />
      <h1 className="text-3xl">Testing</h1>
    </main>
  );
}
