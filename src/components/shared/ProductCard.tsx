import React from 'react'
import Image from "next/image"
import { StaticImageData } from 'next/image';

interface types {
    title :string;
    price: number;
    clothcategory:string;
    imageurl: StaticImageData | any;
 
}

export default function ProductCard({title , price  , clothcategory , imageurl  }:types) {
  return (
    <>
    <div className='pb-12 pt-4 font-sans'>
        <Image src={imageurl} alt={title} width={250} height={270} className='object-cover'/>
        <h5 className='py-1'>{title}</h5>
        <h6 className=' font-semibold text-slate-500 font-san text-sm'>{clothcategory}</h6>
        <h3  className='py-1 text-gray-700 font-semibold'>{`$ ${price}` }</h3>
        
    </div>
    
    </>
  )
}
