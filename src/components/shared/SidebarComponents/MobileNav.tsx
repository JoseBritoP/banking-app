import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import hambuger from '@/public/icons/hamburger.svg'
import Image from 'next/image'
import SidebarContent from './SidebarContent'

export default function MobileNav({user}:MobileNavProps) {
  return (
    <section className='w-full max-w-[264px]'>
     <Sheet>
      <SheetTrigger asChild>
        <Image src={hambuger} alt='Hamburger menu' width={30} height={30} className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent side='left' className='border-none bg-white'>
        <SidebarContent user={user} mobile={true}/>
      </SheetContent>
    </Sheet> 
    </section>
  )
}

