import React from 'react'
import img1 from '../../../../assets/images/team/team1.jpg'
import img2 from '../../../../assets/images/team/team2.jpg'


const Team = () => {



    const styleCss = `

    `
    return (
        <div className='bg-black text-white py-20'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] mx-auto relative'>
                <div className='flex gap-3 items-center'>
                    <div className='flex items-center'>
                        <p className='bg-gray-300 h-1 w-1 rounded-full'></p>
                        <p className='bg-gray-900 h-[2px] w-10 rounded-full'></p>
                    </div>
                    <h1 className='uppercase text-[#AAAAAA] text-sm font-semibold'>Our Team</h1>
                </div>

                <div>
                    <h1 className='text-5xl font-semibold mt-5 leading-[50px] mb-20'>The best team ever!</h1>
                </div>

                <div className='grid grid-cols-1 gap-10 relative'>
                    <div className='group h-full'>
                        <div className='w-full h-full'>
                            <img src={img1} alt="" className='h-full w-full group-hover:scale-100 scale-105 group-hover:blur-[2px] duration-700' />
                        </div>
                        <div className='group-hover:ml-4 duration-700'>
                            <h1 className='font-bold mt-4'>HASINA PARVIN</h1>
                            <p className='font-semibold text-[#717171]'>Head Of Business Development</p>
                        </div>
                    </div>
                    <div className='group h-full'>
                        <div className=''>
                            <img src={img2} alt="" className='h-auto min-w-full group-hover:scale-100 scale-105 group-hover:blur-[2px] duration-700' />
                        </div>
                        <div className='group-hover:ml-4 duration-700'>
                            <h1 className='font-bold mt-4'>HASIB AHMED</h1>
                            <p className='font-semibold text-[#717171]'>FOUNDER & CEO</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team