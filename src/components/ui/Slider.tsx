    import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface frame{
    imageurl :StaticImageData;
     alttext :string ;
     title:string; 
      price:number | string ;

}
    
    export default function Slider({imageurl , alttext , title , price}:frame) {
      return (
       <>
<section>
<div className='mt-12 hover:scale-110  delay-75 duration-500'>

    <Image src={imageurl} alt={alttext} />
    <h6 className='pt-2 pb-1'>{title}</h6>
    <h6>{price}</h6>

</div>
</section>

       </>
      )
    }
    