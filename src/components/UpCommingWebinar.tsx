"use client";
import Link from "next/link";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function UpcomingWebinars() {
   const featuredSuccessStories = [
      {
         id: 1,
         title: "Streamlined Onboarding for New Clients",
         description: "How our platform helped a marketing agency reduce client onboarding time by 50%.",
         slug: "streamlined-onboarding",
         isFeatured: true,
      },
      {
         id: 2,
         title: "Improved Project Delivery for a Tech Startup",
         description: "Discover how a tech startup used our tools to deliver projects 20% faster.",
         slug: "improved-project-delivery",
         isFeatured: true,
      },
      {
         id: 3,
         title: "Enhanced Client Communication for a Design Studio",
         description: "Learn how a design studio achieved 90% client satisfaction with our communication features.",
         slug: "enhanced-communication",
         isFeatured: true,
      },
      {
         id: 4,
         title: "Automated Invoicing for a Freelance Network",
         description: "See how a freelance network automated their invoicing process, saving countless hours.",
         slug: "automated-invoicing",
         isFeatured: true,
      },
      {
         id: 5,
         title: "Centralized File Management for a Consulting Firm",
         description: "Explore how a consulting firm centralized their documents, improving collaboration and access.",
         slug: "centralized-file-management",
         isFeatured: true,
      },
      {
         id: 6,
         title: "Real-time Reporting for a Software Development Team",
         description: "Understand how a software team gained real-time insights into project progress and profitability.",
         slug: "real-time-reporting",
         isFeatured: true,
      },
   ];

   return (
      <div className="p-12 bg-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
               <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Success Stories</h2>
               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                  See How Our Clients Succeed
               </p>
            </div>

            <div className="mt-10">
               <HoverEffect
                  items={featuredSuccessStories.map((story) => ({
                     id: story.id,
                     title: story.title,
                     description: story.description,
                     link: `/success-stories/${story.slug}`,
                  }))}
               />
            </div>

            <div className="mt-10 text-center">
               <Link
                  href={"/success-stories"}
                  className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
               >
                  View All Success Stories
               </Link>
            </div>
         </div>
      </div>
   );
}
