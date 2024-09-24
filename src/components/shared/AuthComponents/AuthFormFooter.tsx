import Link from 'next/link'
import React from 'react'

export default function AuthFormFooter({type}:{type:string}) {
  return (
    <footer className='flex justify-center gap-1'>
      <p className='text-14 font-normal text-gray-600'>{type === 'sign-in' ? "Don't have an account?" : "Already have an account?"} </p>
      <Link href={type === 'sign-in' ? '/sign-up' : 'sign-in'} className='form-link'>{type === 'sign-in' ? 'Sign In' : 'Sign Up'}</Link>
    </footer>
  )
}
