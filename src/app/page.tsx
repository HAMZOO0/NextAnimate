import { NavbarDemo } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
   return (
      <div className="relative min-h-screen font-sans border-x-gray-700">
         {/* Floating Navbar */}
         <NavbarDemo />
         <HeroSection />
      </div>
   );
}
