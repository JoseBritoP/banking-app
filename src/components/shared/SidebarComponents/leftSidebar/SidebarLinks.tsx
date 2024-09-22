"use client"

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarLinks({mobile}:{mobile?:boolean }) {
  // TODO:FIX Image src
  const pathname = usePathname()
  return (
    <div className={mobile ? 'w-full space-y-2' : 'space-y-2'}>
      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return (
          <div key={item.label}>
            { mobile === true ? 
              (<SheetClose asChild key={item.route}>
                <Link
                  className={cn("mobilenav-sheet_close w-full border-2 hover:bg-gray-300/30",{'bg-bank-gradient':isActive} )}
                  href={item.route}
                  key={item.label}
                  >
                    <Image 
                      src={item.imgURL} alt={item.label} width={30} height={30}
                      className={cn({'brightness-[3] invert-0':isActive})}
                    />
                  <p className={cn('text-16 font-semibold text-black-2',{
                    'text-white':isActive
                  })}>{item.label}</p>
                </Link>
              </SheetClose>)
              : 
              ( <Link
                className={cn("sidebar-link border-2 hover:bg-gray-300/30",{'bg-bank-gradient':isActive} )}
                href={item.route}
                key={item.label}
                >
                <div className='relative size-8'>
                  <Image 
                    src={item.imgURL} alt={item.label} fill
                    className={cn({'brightness-[3] invert-0':isActive})}
                  />
                </div>
                <p className={cn('sidebar-label',{
                  '!text-white':isActive
                })}>{item.label}</p>
              </Link>) 
            }
          </div>
        );
      })}
    </div>
  );
}
