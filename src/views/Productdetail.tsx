"use client"
import React, {FC} from 'react'
import IProducts from '../../sanity/producttypes'
import { urlForImage } from '../../sanity/lib/image'
import Image from "next/image"
import Sizes from '@/components/ui/Sizes'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from "lucide-react";
import { useAuth } from '@clerk/nextjs'
import { SignInButton } from '@clerk/clerk-react'







const Productdetail:FC<{ item: IProducts }>= ({item}) => {

  const {userId}:any = useAuth()
  const {isSignedIn} = useAuth();
  
  const [state, setState] = useState(1);

  const decrease = () => {

    if (state == 0) return;
    setState(state - 1);

  };
  const increase = () => {
    setState(state + 1);
  };
 
console.log(userId)

async function handdleaddtocart() {
  try {
    const res = await fetch("/api/cart" , {
      method: 'POST' , 
      body: JSON.stringify({
       user_id:userId,
        product_id: item._id,
        product_title: item.title,
        image_url: urlForImage(item.image).url(),
        product_price: item.price * state ,
        product_quantity : state
      })
    }) 

  } catch (error) {
    
  }
}





  
  return (
    <>
 <section className='flex flex-col md:flex-row'>

      {/* right container */}
      <div className='flex gap-x-5'>
{/* small image */}
     <div className="w-[50px] h-[50px] md:w- md:w-[100px] md:h-[100px]" >
      
      <Image src={urlForImage(item.image).url()} alt={item.title} width={200 }  height={200}/>
      
     </div>
    {/* large image */}
    <div className='w-11/12' > 
    <Image src={urlForImage(item.image).url()} alt={item.title} width={600} height={1000}
    className='object-cover'  />
    </div>
  



      </div>

      {/* left container */}
      <div>
<p className=''>{item.title}</p>
<p>{item.clothcategory}</p>

<p>select size</p>

{/* sizes */}
<div className='bg-gray flex gap-x-2'>

{

  item.size?.map((data)=>
  <>
  <div className=' '>

 < Sizes productsizes={data} />
  </div>
  {/* <div className='flex justify-center items-center'>{data}</div> */}
  </>
  )

}

  </div>



  {/* quantity */}
    <div>
    <p>Quantity</p>

<button className='' onClick={decrease}>-</button>{state}<button className='' onClick={increase}>+</button>

    </div>


{/* button */}


    <div className=''>
      {isSignedIn ?

        
      <Button onClick={handdleaddtocart } className='px-18 py-6  md:py-7 mt-5  w-72 ' ><ShoppingCart className='pr-3 w-8 h-8  text-base'/>Add to Cart</Button>
       :
       <SignInButton>
       <Button className='px-18 py-6  md:py-7 mt-5  w-72 '>Sign in</Button>
       </SignInButton>
     
     
     }

    </div>


      </div>
       
      </section>
    
    </>
  )}

export default Productdetail