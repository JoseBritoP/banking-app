import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import plusSVG from '@/public/icons/plus.svg'

export default function BanksSection({banks}:BanksSectionProps) {
  return (
    <section className='banks'>
    <div className='flex w-full justify-between'>
      <h2 className='header-2'>My Banks</h2>
      <Link href={''} className='flex gap-2'>
        <Image src={plusSVG} width={20} height={20} alt='plus'/>
        <h2 className='text-14 font-semibold text-gray-600'>Add Bank</h2>
      </Link>
    </div>
    {banks?.length > 0 && (
      <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
        <div className='relative z-10'>
          Bank CARD 1
        </div>
        {banks[1] && (
          <div className='absolute right-0 top-8 z-0 w-[90%]'>
            Bank Card 2
          </div>
        )}
      </div>
    )}
  </section>
  )
}
