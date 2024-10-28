import React from 'react'
import Image from 'next/image';
import image from '../public/Illustration.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 mb-14'>
      <div className='ml-20 mt-10'>
        <h2 className='text-gray-700 text-6xl  font-bold ml-32 mt-10 leading-tight'>Track your<br/> Expenses to<br/> Save Money</h2>
        <p className='text-gray-400 font-medium ml-32 mt-5 text-lg'>Helps you to Organize your income and expenses</p>
        <button className=' flex bg-orange-500 text-white  px-5 py-3 mt-5 ml-32 h-12 w-40 font-semibold transition duration-700 ease-in-out rounded-md hover:text-orange-500 hover:font-semibold hover:bg-white hover:border-2 hover:border-orange-500'>Try Free Demo</button>
      </div>
      <div>
<Image src={image} alt='Hero-image' width={500} height={400} className='ml-10'/>
      </div>
    </div>
  )
}

export default Hero
