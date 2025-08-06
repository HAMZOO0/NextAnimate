import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "../components/ui/moving-border";

export function HeroSection() {
   return (
      <div className="h-auto md:h-[40rem] w-full bg-black rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
         <div className="px-6 sm:px-12 text-center z-10 max-w-4xl">
            <Spotlight />
            <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
               Master The Art Of <span className="text-indigo-600">Music</span>
            </h1>

            <p className="  text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
               Unlock your true musical potential with expert-led courses, real-world practice, and community support.
            </p>

            <div className="mt-6">
               <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
               >
                  Explore Courses
               </Button>
            </div>
         </div>
      </div>
   );
}
