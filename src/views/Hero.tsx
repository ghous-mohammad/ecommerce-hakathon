import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ShoppingCart } from "lucide-react";
import Heroimg from "/public/hero/hero.webp"
import Image from 'next/image';
import Fa from "/public/hero/feuture/Featured2.webp"
import Fb from "/public/hero/feuture/Featured3.webp"
import Fc from "/public/hero/feuture/Featured4.webp"
import Fd from "/public/hero/feuture/Featured1.webp"

export default function Hero() {
  return (
    <section className='flex flex-col justify-between  items-center gap-[2rem] relative  h-[100vh] md:gap-x-[6rem] md:flex-row md:gap-y-0 ' >

{/* left div */}
<div className='flex-1 flex flex-col max-w-screen-md  gap-[1rem]  '>
<Badge variant="default" className='bg-[#E1EDFF] text-[#0000FF] py-2 md:py-3 px-5 w-[80px] md:w-[120px] text-sm md:text-base flex justify-center items-center' >Sale 70%</Badge>

<h1 className="scroll-m-20 text-4xl font-bold \ console.info(first) tracking-wider lg:text-6xl mt-6"> An Industrial Take on   Streetwear </h1>

<p className="leading-7 [&:not(:first-child)]:mt-6">
Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>

    {/* button */}
<Button className='px-5 py-6    md:py-7 mt-5  w-[55%] md:w-[35%]' ><ShoppingCart className='pr-3 w-8 h-8  text-base'/>Start Shopping </Button>

{/* feature */}
<div className='flex  gap-x-[4rem] gap-y-4 mt-[2rem] md:mt-[4rem]  flex-wrap '>
<Image src={Fa} alt="Feature1" />
<Image src={Fb} alt="Feature2" />
<Image src={Fc} alt="Feature3" />
<Image src={Fd} alt="Feature4" />
</div>




</div>



{/* right div */}
<div className='flex-1 hidden lg:block  mt-10'>
    <div className='w-[600px] h-[600px]  rounded-full  bg-[#FFECE3]    '>

<Image src={Heroimg} alt="hero image" className='absolute overflow-clip top-[-5px] w-[650px] h-[650px]' />
    </div>
</div>


    </section>
  )
}