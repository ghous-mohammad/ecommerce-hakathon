import Image from 'next/image'
import React from 'react'
import fetchData from '../../../../sanity/fetchData'

import IProducts from '../../../../sanity/producttypes'
import Wrapper from '@/components/shared/Wrapper'
import { urlForImage } from '../../../../sanity/lib/image'
import Productdetail from "@/views/Productdetail"

export async function generateStaticParams() {
  const data = await fetchData()
  return data.map((item:any)=>({slug:item.slug.current}))
}


export default async function page({params}:{params:{slug:string}}){
  const fechting= await fetchData()
  
  const filterdata:any = fechting.find((items:any)=>items.slug.current==params.slug)

  
  return (
    <>
    <Wrapper>
  
    <Productdetail item={filterdata} />
    
    </Wrapper>
    
    </>
  )
}
