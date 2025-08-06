import { NavbarDemo } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BackgroundGradientCard } from "@/components/FeaturedCourses";
import { StickyScrollReveal } from "@/components/ScrollView";
import { InfiniteMovingCardsComponent } from "@/components/InfiniteMovingCards";

export default function Home() {
   return (
      <div className="relative min-h-screen font-sans border-x-gray-700">
         {/* Floating Navbar */}
         <NavbarDemo />
         <HeroSection />
         <BackgroundGradientCard />
         <StickyScrollReveal />
         <InfiniteMovingCardsComponent />
      </div>
   );
}
