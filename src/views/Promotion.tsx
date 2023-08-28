import React from 'react'
import Ea from "/public/hero/promotion/event1.webp"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Eb from "/public/hero/promotion/event2.webp"
import  EC from "public/hero/promotion/event3.webp"
import CTAtext from '@/components/ui/CTAtext'

export default function Promotion() {
  return (
    <section className=' mt-10 py-16'>
{/* banner top text */}
<div className='text-center '>


<CTAtext mtext="PROMOTIONS" stext='Our Promotions Events' />
</div>

{/* banner */}
<div className='flex gap-x-7 pt-7 '>

{/* bacnnerleft */}
<div className='space-y-7 flex-1'>

    {/* top banner */}
    {/* event 1  */}
    <div className='bg-[#D6D6D8] flex  justify-between'>
        {/* text */}
        <div className='self-center text-left pl-6'>
        <h3 className='font-bold text-3xl'>GET UP TO <span className='font-extrabold'>60%</span></h3>
        <p className=''>For the summer season</p>
        </div>

        {/* image */}
        <div>
       <Image src={Ea} alt="event1" />
        </div>

    </div>

    {/* event 2 */}
    {/* bottom banner */}
    <div className='bg-black text-white py-[3rem] px-[2rem] text-center'>
        <h3 className='font-extrabold text-4xl '>GET 30% Off</h3>
        <p className='font-semibold mt-3'>USE PROMO CODE </p>
        <Button variant="secondary" className='tracking-[.25rem] py-[0.5rem] px-[2.5rem] hover:bg-[#746f6f] bg-[#474747] text-white font-bold mt-[5px] ' >DINEWEEKENDSALE</Button>
    </div>
</div>


{/* right banner */}
<div className=' flex justify-between gap-x-7 '>


    {/* left card */}

    <div className="flex-1 bg-[#EFE1C7] p-x-4 flex flex-col justify-between">
        <div>
            
        <h4 className='pl-5 pt-5'>Flex Sweatshirt</h4>
        <h5 className='pl-5'><s>$100.00</s>  <span className='font-bold'>$75.00</span></h5>
        </div>
        {/* image */}
        <div>

        <Image src={Eb} alt="event 2" />
        </div>
    </div>

    {/* right banner */}

    <div className=' bg-[#D7D7D9] flex flex-col justify-between'>
        <div>

    <h4 className='pt-5 pl-5'>Flex Push Button Bomber</h4>
        <h5 className='pl-5'><s>$225.00</s> <span className='font-bold'>$190.00</span></h5>
        </div>
        {/* image */}
        <div>

        <Image src={EC} alt="event 3" />
        </div>
    </div>



</div>


</div>
    


    </section>
  )
}
