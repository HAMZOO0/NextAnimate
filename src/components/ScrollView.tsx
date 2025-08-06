"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const content = [
   {
      title: "Collaborative Editing",
      description:
         "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share bideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Collaborative Editing
         </div>
      ),
   },
   {
      title: "Real time changes",
      description:
         "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
         <div className="flex h-full w-full items-center justify-center text-white">
            <img
               src="https://plus.unsplash.com/premium_photo-1754254828698-12c96f89d7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               width={300}
               height={300}
               className="h-full w-full object-cover"
               alt="linear board demo"
            />
         </div>
      ),
   },
   {
      title: "Version control",
      description:
         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
         </div>
      ),
   },
   {
      title: "Running out of content",
      description:
         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
         </div>
      ),
   },
];
export function StickyScrollReveal() {
   return (
      <div className="w-full py-4">
         <StickyScroll content={content} />
      </div>
   );
}
