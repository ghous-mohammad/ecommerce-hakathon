import React, {FC} from 'react'

const Wrapper:FC<{ children: React.ReactNode }>= ({children}) => {
  return (
    // 
    <div className='max-w-7xl mx-[1rem]  md:mx-[8rem]'>{children}</div>
  )
}

export default Wrapper