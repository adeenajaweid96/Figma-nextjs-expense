import React from 'react'
// import logo from '../public/'

const Footer = () => {
  return (
   <section>
    <div className="grid grid-cols-4 mt-12 mb-14">
        <div className='mx-24'>
        <div className='text-white flex items-center justify-center w-12 h-12 font-bold bg-orange-500 rounded-full'>X
        </div>       
        <h1 className='text-292830 font-bold ml-14 -mt-9'>pense</h1>

        </div>
        <div>
            <h1 className='font-medium text-xl mb-3'>LINKS</h1>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Pricing</li>
              <li>Features</li>
              <li>Blog</li>
            </ul>
        </div>
        <div>
          <h1 className='font-medium text-xl mb-3'>LEGAL</h1>
          <ul>
<li>Terms of use</li>
<li>Terms of conditions</li>
<li>Privacy policy</li> 
<li>Cookie policy</li></ul>
</div>
<div>
  <h1 className='font-medium text-xl mb-3'>NEWSLETTER</h1>
  <p className='text-gray-400'>Over 25000 people have subscribed</p>
  <input type="email" placeholder='Enter your email' className='border-2 h-18 w-60 p-2 rounded-xl mt-6 ' /><br/>
  <button className='bg-orange-500 p-2 rounded text-white mt-5 transition duration-700 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-white hover:border-2 hover:border-orange-500'>Subscribe</button>

</div>
    </div>
    
   </section>
  )
}

export default Footer
