"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

export function NavbarDemo() {
   return (
      <div className="relative w-full flex items-center justify-center">
         <Navbar className="top-2" />
         {/* <p className="text-black dark:text-white">The Navbar will show on top of the page</p> */}
      </div>
   );
}

function Navbar({ className }: { className?: string }) {
   const [active, setActive] = useState<string | null>(null);
   return (
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
         <Menu setActive={setActive}>
            <Link href={"/"}>
               <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Features">
               <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/courses">All Features</HoveredLink>
                  <HoveredLink href="/features/task-management">Task Management</HoveredLink>
                  <HoveredLink href="/features/client-communication">Client Communication</HoveredLink>
                  <HoveredLink href="/features/file-sharing">File Sharing</HoveredLink>
                  <HoveredLink href="/features/time-tracking">Time Tracking</HoveredLink>
                  <HoveredLink href="/features/invoicing">Invoicing</HoveredLink>
                  <HoveredLink href="/features/reporting">Reporting</HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact-us"}>
               <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Link>
         </Menu>
      </div>
   );
}
