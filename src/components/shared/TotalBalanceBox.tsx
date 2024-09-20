import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function TotalBalanceBox({accounts=[],totalBanks,totalCurrentBalance}:TotalBalanceBoxProps) {
  return (
    <section>
      <div className='total-balance-chart'>

      </div>

      <div className='flex flex-col gap-6'>
        <h2>Bank Accounts: {totalBanks} </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total Current Balance</p>
          <p className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance}/>

            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
      
    </section>
  )
}
