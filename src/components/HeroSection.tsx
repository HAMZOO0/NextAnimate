import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "../components/ui/moving-border";

export function HeroSection() {
   return (
      <div className="h-auto md:h-[40rem] w-full bg-black rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
         <div className="px-6 sm:px-12 text-center z-10 max-w-4xl">
            <Spotlight />
            <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
               Manage Your Projects with Ease <span className="text-indigo-600">Client-Focused</span>
            </h1>

            <p className="  text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
               Our platform helps you streamline your workflow, collaborate with clients, and deliver projects on time.
               From task management to client communication, we have everything you need to succeed.
            </p>

            <div className="mt-6">
               <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
               >
                  Explore Features
               </Button>
            </div>
         </div>
      </div>
   );
}
