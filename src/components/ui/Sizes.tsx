import React from 'react'

export default function Sizes({productsizes}:any) {
  return (
    <div className='hover:bg-white hover:shadow-lg rounded-full flex justify-center items-center w-8 h-8 p-2 text-sm  font-semibold '>{productsizes}</div>
  )
}
