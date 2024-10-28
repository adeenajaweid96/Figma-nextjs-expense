import React from 'react'
import { FaLaptopFile } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { BsFillUsbPlugFill } from "react-icons/bs";



const Section2 = () => {
  return (
   <section className='mb-20'>
    <div className="grid grid-cols-2">
        <div className='ml-40'>
            <h1 className='font-bold text-6xl mt-6 text-gray-800 leading-tight '>The Product we<br/>
             work with.</h1>
        </div>
        <div className='ml-12'>
            <p className='text-gray-500 mt-14 '>
             Tellus lacus morbi sagittis lacus in.<br/>
             Amet nisl at mauris enim aumsan<br/>
              nisi, tincidunt vel. Enim ipsum, at<br/>
               quis ullamcorper eget ut.</p>
        </div>
    </div> 
    <div className="grid grid-cols-3 ml-48 mt-20">
      <div className='bg-white w-64 h-60 shadow-2xl ' >
         <FaLaptopFile className='text-orange-300  text-2xl mt-10 ml-32'/> 
         <h1 className='text-black flex justify-center text-xl mt-8 font-medium'>Cross Plateform</h1>
         <p className='text-gray-400 text-center mt-2'>Elit esse cillum dolore eu fugiat nulla  pariatur</p>

      </div>
      <div className='bg-white w-64 h-60 shadow-2xl '>
      <CiCloudOn className='text-pink-400  text-2xl mt-10 ml-28'/>
      <h1 className='text-black flex justify-center text-xl mt-8 font-medium'>Cloud Server</h1>
      <p className='text-gray-400 text-center mt-2'>Elit esse cillum dolore eu fugiat nulla  pariatur</p>


      </div>
      <div className='bg-white w-64 h-60  shadow-2xl '>
      <BsFillUsbPlugFill className='text-blue-800  text-2xl mt-10 ml-28'/>
      <h1 className='text-black flex justify-center text-xl mt-8 font-medium'>Pure Javascript</h1>
      <p className='text-gray-400 text-center mt-2'>Elit esse cillum dolore eu fugiat nulla  pariatur</p>


      </div>
    </div>
   </section>
  )
}

export default Section2
