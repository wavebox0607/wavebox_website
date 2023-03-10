import React from 'react'
import img1 from '../../../../assets/images/ourServices/color-01.svg'
import img2 from '../../../../assets/images/ourServices/color-02.svg'
import img3 from '../../../../assets/images/ourServices/color-03.svg'
import img4 from '../../../../assets/images/ourServices/color-04.svg'
import { NavLink } from 'react-router-dom';



const OurServices = () => {

    const styleCss = `

    `
    return (
        <div className='bg-black text-white md:py-20 py-10'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] px-5 xl:px-0 mx-auto relative'>
                <div className='flex gap-3 items-center'>
                    <div className='flex items-center'>
                        <p className='bg-gray-300 h-1 w-1 rounded-full'></p>
                        <p className='bg-gray-900 h-[2px] w-10 rounded-full'></p>
                    </div>
                    <h1 className='uppercase text-[#AAAAAA] text-sm font-semibold'>OUR SERVICES</h1>
                </div>

                <div>
                    <h1 className=' md:text-5xl text-3xl font-semibold mt-5 leading-[50px] mb-20'>IT Service Provider</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <NavLink to="/website-development">
                    <div className='group h-full w-full text-center p-10 cursor-pointer'>
                        <img src={img1} alt="" className='h-20 mx-auto mb-5' />
                        <h1 className='mb-8 text-2xl font-bold'>WEBSITE <br />DEVELOPMENT</h1>
                        <p className='font-semibold text-[#717171]'>We Build any kind of custom website for your organization.</p>
                    </div>
                    </NavLink>
                    <NavLink to="/web-application-development">
                    <div className='group h-full w-full text-center p-10 bg-[#090909] cursor-pointer'>
                        <img src={img2} alt="" className='h-20 mx-auto mb-5 ' />
                        <h1 className='mb-8 text-2xl font-bold'>WEB APPLICATION</h1>
                        <p className='font-semibold text-[#717171]'>Run your busness fast & hassle-free! Develop a software from WAVE BOX.</p>
                    </div>
                    </NavLink>
                    <NavLink to="/mobile-app-development">
                    <div className='group h-full w-full text-center p-10 cursor-pointer'>
                        <img src={img3} alt="" className='h-20 mx-auto mb-5 ' />
                        <h1 className='mb-8 text-2xl font-bold'>MOBILE APP<br />DEVELOPMENT</h1>
                        <p className='font-semibold text-[#717171]'>Give your customer a better experience by developing a mobile app form WAVE BOX.</p>
                    </div>
                    </NavLink>
                    <NavLink to="/social-media-marketing">
                    <div  className='group h-full w-full text-center p-10 bg-[#090909] cursor-pointer'>
                        <img src={img4} alt="" className='h-20 mx-auto mb-5 ' />
                        <h1 className='mb-8 text-2xl font-bold'>Social Media<br />Marketing</h1>
                        <p className='font-semibold text-[#717171]'>randing your business digitally with WAVE BOX.</p>
                    </div>
                    </NavLink>

                </div>

            </div>
        </div>
    )
}

export default OurServices