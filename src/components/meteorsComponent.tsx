import React from "react";
import { Meteors } from "./ui/meteors";

export function MeteorsComponent() {
   return (
      <div className="flex justify-center items-center py-20 px-4 bg-black">
         <div className="relative w-full max-w-3xl">
            {/* Background glow effect */}
            <div className="absolute inset-0 h-full w-full scale-[0.85] transform rounded-3xl bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl opacity-30" />

            {/* Main container */}
            <div className="relative z-10 flex flex-col gap-6 rounded-3xl border border-gray-800 bg-gray-900 px-8 py-12 shadow-2xl">
               <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Contact Us </h1>

               <p className="text-base text-gray-400 text-center max-w-xl mx-auto">
                  Have a question, suggestion, or just want to say hi? Fill out the form below and we'll get back to
                  you!
               </p>

               {/* Contact Form */}
               <form className="flex flex-col gap-4 mt-4">
                  <input
                     type="text"
                     placeholder="Your Name"
                     className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                     type="email"
                     placeholder="Your Email"
                     className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                     rows={4}
                     placeholder="Your Message"
                     className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                  <button
                     type="submit"
                     className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 px-6 rounded-lg mt-2"
                  >
                     Send Message
                  </button>
               </form>

               {/* Meteor Animation */}
               <Meteors number={30} />
            </div>
         </div>
      </div>
   );
}
