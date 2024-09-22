import React from 'react'
import ProfileSection from './ProfileSection'
import BanksSection from './BanksSection'

export default function RightSidebar({user,transactions,banks}:RightSidebarProps) {
  return (
    <aside className='right-sidebar'>
     <ProfileSection user={user}/>
     <BanksSection banks={banks}/>
    </aside>
  )
}
