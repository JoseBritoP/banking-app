import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import SidebarContent from './SidebarContent'

export default function MobileNav({user}:MobileNavProps) {
  return (
    <section className='w-full max-w-[264px]'>
     <Sheet>
      <SheetTrigger asChild>
        <Image src={'/icons/hamburger.svg'} alt='Hamburger menu' width={30} height={30} className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent side='left' className='border-none bg-white'>
        <SidebarContent user={user} mobile={true}/>
      </SheetContent>
    </Sheet> 
    </section>
  )
}

