import React from 'react'
import Image from 'next/image';
import image from '../public/Illustrator.png'
import img1 from '../public/Image.png';
import img2 from '../public/sec-2.png'


const Section1 = () => {
    return (
        <>
            {/* ---------section1 */}
            <section>
                <div className='grid grid-cols-2'>
                    <div className='mt-20 ml-40 mb-20'>
                        <p className='text-gray-400 text-xs'>ALWAYS ONLINE</p>
                        <h2 className='font-bold text-6xl mt-6 text-gray-800 leading-tight'>Real-time<br />
                            support<br /> with cloud</h2>
                        <p className='text-gray-400 mt-4    '>Tellus lacus morbi sagittis lacus in. Amet nisl at<br />
                            mauris enim accumsan nisi, tincidunt vel. Enim<br /> ipsum, amet quis ullamcorper eget ut.</p>
                        <p className='text-orange-500 mt-3 '>Learn More</p>
                    </div>
                    <div className='mt-16'>
                        <Image src={image} width={500} height={500} alt='section1' />
                    </div>
                </div>
            </section>
            {/* -------------------section2 */}

            <section>
                <div className='grid grid-cols-2'>

                    <div className='mt-16 ml-32'>
                        <Image src={img2} width={500} height={500} alt='section1' />
                    </div>

                    <div className='mt-20 ml-32 mb-20'>
                        <p className='text-gray-400 text-xs'>FREE SOME COST</p>
                        <h2 className='font-bold text-6xl mt-6 text-gray-800 leading-tight'>Save cost<br />
                            for you and<br /> family</h2>
                        <p className='text-gray-400 mt-4    '>Tellus lacus morbi sagittis lacus in. Amet nisl at <br/>
                        mauris enim accumsan nisi, tincidunt vel. Enim<br/>
                         ipsum, amet quis ullamcorper eget ut.</p>
                        <p className='text-orange-500 mt-3 '>Learn More</p>
                    </div>
                </div>
            </section>


            {/* -------------section3 */}
            <section>
                <div className='grid grid-cols-2'>
                    <div className='mt-20 ml-40 mb-20'>
                        <p className='text-gray-400 text-xs'>USE ANYTIME</p>
                        <h2 className='font-bold text-6xl mt-6 text-gray-800 leading-tight'>Use anytime <br />
                            when you<br /> need</h2>
                        <p className='text-gray-400 mt-4    '>Tellus lacus morbi sagittis lacus in. Amet nisl at<br />
                            mauris enim accumsan nisi, tincidunt vel. Enim<br /> ipsum, amet quis ullamcorper eget ut.</p>
                        <p className='text-orange-500 mt-3 '>Learn More</p>
                    </div>
                    <div className='mt-16'>
                        <Image src={img1} width={500} height={400} alt='section1' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1
