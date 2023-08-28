import Header from '@/components/layout/Header'
import Wrapper from '@/components/shared/Wrapper'
import Hero from '@/views/Hero'
import Information from '@/views/Information'
import Products from '@/views/Products'
import Promotion from '@/views/Promotion'
import React from 'react'

export default function page() {
  return (<>
<Wrapper>
   <Hero />
   <Promotion />
  <Products />
  <Information />
</Wrapper>
  </>
  )
}
