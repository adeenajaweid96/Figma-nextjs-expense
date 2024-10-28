import React from 'react';
import Image from 'next/image';
import image1 from '../public/Banner.png';

const Images = () => {
  return (
    <div>
      <Image src={image1} alt='banner'/>
    </div>
  )
}

export default Images
