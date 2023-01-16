import React from 'react'
import img1 from '../../../../assets/images/team/team1.jpg'
import img2 from '../../../../assets/images/team/team2.jpg'


const TeamTwo = () => {
    return (
        <div className='bg-black py-20 text-white'>
            <div className='py-24 relative'>
                <div className='xl:max-w-[1200px] px-5 xl:px-0 mx-auto relative '>
                    <div className='flex gap-3 items-center'>
                        <div className='flex items-center'>
                            <p className='bg-gray-300 h-1 w-1 rounded-full'></p>
                            <p className='bg-gray-900 h-[2px] w-10 rounded-full'></p>
                        </div>
                        <h1 className='uppercase text-[#AAAAAA] text-sm font-semibold'>Our Team</h1>
                    </div>
                    <div>
                        <h1 className='xl:text-5xl text-4xl font-semibold mt-5 leading-[50px] mb-20'>The best team ever!</h1>
                    </div>

                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 w-full relative'>
                        <div className='group'>
                            <div className='xl:h-[700px] h-[400px] overflow-hidden'>
                                <img src={img1} alt="" className='h-full w-full group-hover:scale-100 scale-105 group-hover:blur-[2px] duration-700' />
                            </div>
                            <div className='lg:group-hover:ml-4 duration-700'>
                                <h1 className='font-bold mt-4'>HASINA PARVIN</h1>
                                <p className='font-semibold text-[#717171]'>Head Of Business Development</p>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='xl:h-[700px] h-[400px] overflow-hidden'>
                                <img src={img2} alt="" className='h-full w-full group-hover:scale-100 scale-105 group-hover:blur-[2px] duration-700' />
                            </div>
                            <div className='group-hover:ml-4 duration-700'>
                                <h1 className='font-bold mt-4'>HASIB AHMED</h1>
                                <p className='font-semibold text-[#717171]'>FOUNDER & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamTwo