import React from 'react'
// import Link from 'next/link';

const Navbar = () => {
  return (
      <header className='flex justify-between px-10 py-8'>
            <div className=' ml-32'>
        <div className='text-white flex items-center justify-center w-12 h-12 font-bold bg-orange-500 rounded-full'>X
        </div>       
        <h1 className='text-292830 font-bold ml-14 -mt-9'>pense</h1>

        </div>
        <nav >
            <ul className='flex gap-10 font-medium mt-4 text-grey '>
<li>Home</li>
<li>About us</li>
<li>Pricing</li>
<li>Features</li>
<button className="flex text-orange-500 border-solid border-2 border-orange-500 px-2 py-2 -mt-3 font-semibold transition duration-700 ease-linear rounded-md hover:bg-orange-500 hover:font-semibold hover:text-white">Request a demo</button>

     </ul>

        </nav>
      </header>
  )
}

export default Navbar
