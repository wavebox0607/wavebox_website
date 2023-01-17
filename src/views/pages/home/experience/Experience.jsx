import React from 'react'
import img1 from '../../../../assets/images/experience.jpg'

const Experience = () => {
    return (
        <div className='bg-black w-full flex justify-end'>
            <div className='pb-24 pt-60 container text-white'>
                <div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-5'>
                    <div className='col-span-1 grid grid-cols-1 gap-y-5 xl:gap-y-16'>
                        <h1 className='xl:justify-self-end justify-self-center xl:-mr-14 relative z-[1] text-5xl font-bold'>Hello we are, <br /> WAVE BOX</h1>
                        <p className='px-5 xl:px-0 xl:max-w-[400px] w-full text-gray-400 font-semibold xl:justify-self-start justify-self-center'>WAVEBOX relies on Web & Mobile App Development, Software Development and providing Digital footprint for it’s fast growing portfolio. Founded by a group of visionary IT enthusiasts. WAVEBOX aims to create value for their clients by catering the IT and web based solutions.</p>
                        <div className='flex items-center justify-center xl:justify-start gap-5 font-bold'>
                            <p className='text-[100px]'>3</p>
                            <p className='text-xl'>YEARS OF<br /> EXPERIENCE</p>
                        </div>
                    </div>
                    <div className='col-span-2 bg-gray-600 w-full h-full flex justify-center items-center'>
                        <img src={img1} alt="" className='xl:h-[350px] h-[280px] w-full px-20' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience