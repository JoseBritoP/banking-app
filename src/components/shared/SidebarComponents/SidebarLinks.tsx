"use client"

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarLinks() {
  // TODO:FIX Image src
  const pathname = usePathname()
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return (
          <Link
            className={cn("sidebar-link",{'bg-bank-gradient':isActive})}
            href={item.route}
            key={item.label}
          >
            <div className="relative size-6">
              <Image 
                src={item.imgURL} alt={item.label} fill
                className={cn({'brightness-[3] invert-0':isActive})}
              />
            </div>
            <p className={cn('sidebar-label',{
              '!text-white':isActive
            })}>{item.label}</p>
          </Link>
        );
      })}
    </>
  );
}
