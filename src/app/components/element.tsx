import React from 'react'
import Image from 'next/image';
import image1 from '../public/image 1.png';
import image2 from '../public/image 2.png';
import image3 from '../public/image 3.png';
import image4 from '../public/image 4.png';
import image5 from '../public/Image 5 (1).png';



const Element = () => {
  return (
   
    <section >
        <div className='grid grid-cols-5 px-16 py-12 ml-10 gap-10 bg-white'>
         <Image src={image1} alt='facebook' />
         <Image src={image2} alt='google' />
         <Image src={image3} alt='cocacola' />
         <Image src={image4} alt='LinkedInn' className='mt-2' />
         <Image src={image5} alt='samsung' />


         </div>
    </section>
  )
}

export default Element
