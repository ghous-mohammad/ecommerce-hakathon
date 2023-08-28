import React, { cache } from 'react'
import { client } from './lib/client';

interface IProducts {
    _id:string;
    title:string;
    description:string;
    price:number;
    clothcategory:string;
    maincategory:string


}

export default async function fetchData() {     
    const data = await client.fetch(`*[_type=="products"]` , {
      cache:"no-store"
    }, { next: { revalidate: 1000 } })
  
   
    
  return data as []
  
  
}
