import React from 'react'
import Image from'next/image';
import image from '../public/image 5.png';


const Product = () => {
  return (
   
    <div className='bg-orange-600 h-full pt-28 '>
      <Image src={image} alt='overview'  className='w-3/4  ml-40 -mt-12' />
    </div>

  )
}
export default Product
