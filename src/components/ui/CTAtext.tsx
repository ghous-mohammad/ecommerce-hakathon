import React from 'react'
interface fields{
    mtext:string ;
    stext:string;

}

export default function CTAtext({mtext,stext}:fields) {
  return (
    <>
   
<h3 className="text-xs text-[rgb(0,0,255)] tracking-widest opacity-80 font-bold">{mtext}</h3>
<h2 className='font-bold text-3xl mt-3'>{stext}</h2>
    </>
  )
}
