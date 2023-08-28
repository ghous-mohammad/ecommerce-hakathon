import CTAtext from '@/components/ui/CTAtext'
import Slider from '@/components/ui/Slider'
import React from 'react'
import Pic1 from '/public/hero/homeproducts/p1.png'
import Pic2 from '/public/hero/homeproducts/p2.png'
import Pic3 from '/public/hero/homeproducts/p3.png'

export default function Products() {
  return (
    <>
    <div className='text-center pt-12'>

    <CTAtext mtext="PRODUCTS" stext="Check What We Have" />

    </div>

<div className='flex '>
  {/* pic 1 */}
  <div className="flex-1 font-semibold text-slate-700   text-sm">
    <Slider  imageurl={Pic1} alttext='Flex Sweatpant' price={"$175"} title='Flex Sweatpant' />

  </div>
  {/* pic 2 */}
     <div className="flex-1 font-semibold text-slate-700 text-sm">
    <Slider imageurl={Pic2} alttext='Muscle Tank' price={"$75"} title='Muscle Tank' />
    
  </div >
  {/* pic 3 */}
    <div className="flex-1 font-semibold text-slate-700 text-sm">
    <Slider imageurl={Pic3} alttext='Imperial ALpaca Hoodie' price={"$525"} title='Imperial ALpaca Hoodie' />
    
    </div>
  </div>    
    </>
  )
}
