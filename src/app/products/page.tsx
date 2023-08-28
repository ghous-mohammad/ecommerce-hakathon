import React from 'react'
import fetchData from '../../../sanity/fetchData'
import ProductCard from '@/components/shared/ProductCard';
import { urlForImage } from '../../../sanity/lib/image';
import Link from "next/link"
import Wrapper from '@/components/shared/Wrapper';

export default async function page() {
    const Data = await fetchData();
  
    return (


    <>
    {
      <Wrapper>

        <div className='grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(4,auto)]'>
       { Data.map((products:any,index:number)=>
      
      <div key={products.id} >
        <Link href={`/products/${products.slug.current}`}>

      
       <ProductCard title={products.title} price={products.price} clothcategory={products.clothcategory}  imageurl={urlForImage(products.image).url()}
       />
       </Link>
          </div>
        
        
        
        
        
        )}
        </div>
        </Wrapper>
    }
    
    </>
  )



 
  
}
