import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarLinks from './SidebarLinks'
import { SheetClose } from '@/components/ui/sheet'

export default function SidebarContent({ user,mobile }: SiderbarProps) {
  return (
    <nav className="flex flex-col gap-4">
      <Link href={"/"} className={`${mobile ? 'mb-0 gap-1 px-4 cursor-pointer items-center' :'mb-12 cursor-pointer items-center gap-2'} `}>
        <Image
          src={'/icons/logo.svg'}
          width={34}
          height={34}
          alt="Horizon Logo"
          className={`${mobile ? '': 'size-[24px] max-xl:size-14' }`}
        />
        <h1 className={`${mobile ? 'text-26 font-ibm-plex-serif font-bold text-black-1': 'sidebar-logo'}`}>Horizon</h1>
      </Link>
      {mobile && (
        <div className='mobilenav-sheet'>
          <SheetClose className='flex h-full flex-col gap-6 pt-16 text-white'>
            <SidebarLinks mobile={true}/>
          </SheetClose>
        </div>
      )}
      <SidebarLinks/>
      USER
    </nav>
  )
}
