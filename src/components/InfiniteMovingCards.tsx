"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import testimonials from "../data/testimonial.json";
import { cn } from "../utils/utils";

export function InfiniteMovingCardsComponent() {
   return (
      <>
         <div className="relative h-[50rem] w-full bg-white dark:bg-black">
            <div
               className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
               )}
            />

            {/* Now wrap title + cards vertically */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
               <h2 className="text-3xl text-white text-center  pb-7">Lorem ipsum dolor sit amet.</h2>
               <InfiniteMovingCards items={testimonials.testimonials} direction="right" speed="slow" />
            </div>
         </div>
      </>
   );
}
