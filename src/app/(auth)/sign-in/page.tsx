import AuthForm from '@/components/shared/AuthComponents/AuthForm'
import React from 'react'

export default function SignInPage() {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-in'/>
    </section>
  )
}
