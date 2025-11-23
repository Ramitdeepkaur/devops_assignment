import React from 'react'
import Background from './Background'
import { useState,useId } from 'react'
const Input = (
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currency="usd"
) => {
  const amountid=useId();
  return (
  
    <div className='z-10'>
          <Background/>
      <div className='mt-16 mb-16 mx-auto max-w-md p-3 bg-zinc-100/50'>
      <div className='bg-slate-100'>
         <div className='w-1/2'>
            <label htmlFor={amountid} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input type='number' id={amountid} placeholder='Amount' value={amount} onChange={(e)=>{
                onAmountChange && onAmountChange(Number(e.target.value))
            }} className='text-black border-none text-semibold '/>
         </div>
         <div className='w-1/2 flex-col justify-end text-right'>
            <p>Currency Type</p>
            <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange()}>
                {currencyOptions.map((currency)=>{
                    <option key={currency} value={currency}
                    >{currency}</option>
                })}

            </select>
         </div>
      </div>
      
      </div>
    </div>
  )
}

export default Input
