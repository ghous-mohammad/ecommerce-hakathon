import React from 'react'
import fetchData from '../../../../sanity/fetchData'
import IProducts  from "../../../../sanity/producttypes"
import ProductCard from '@/components/shared/ProductCard';
import { urlForImage } from '../../../../sanity/lib/image';
import Link from 'next/link';
import Wrapper from '@/components/shared/Wrapper';
 
export async function generateStaticParams(){
  const data = await fetchData()

  return data.map((item:any)=>({slug: item.maincategory}))

}

export default async  function page({params}:{params:{slug:string}}) {
  const datafetch = await fetchData()

  const filterdata = datafetch.filter((product:IProducts)=>product.maincategory==params.slug);


  return (
    <>
    
   { filterdata.length == 0 ? <div className='block text-xl text-center font-sans'>no product found</div> :<Wrapper> <div className='grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(4,auto)]'>

    {
        filterdata.map((product:any)=>
        
        <div key={product._id} >
          
            <Link href={`/products/${product.slug.current}`}>

            <ProductCard  title={product.title} price={product.price} imageurl={urlForImage(product.image).url()} clothcategory={product.clothcategory} />
            </Link>
            
            </div>
        
        )
    }
   </div></Wrapper> }
    
    </>
  )


  


  
}
