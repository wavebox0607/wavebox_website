import React from 'react'
import img1 from '../../../../assets/images/ourServices/color-01.svg'
import img2 from '../../../../assets/images/ourServices/color-02.svg'
import img3 from '../../../../assets/images/ourServices/color-03.svg'
import img4 from '../../../../assets/images/ourServices/color-04.svg'



const OurServices = () => {

    const styleCss = `

    `
    return (
        <div className='bg-black text-white py-20'>
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
                    <h1 className='text-5xl font-semibold mt-5 leading-[50px] mb-20'>IT Service Provider</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <div className='group h-full w-full text-center p-10'>
                        <img src={img1} alt="" className='h-20 mx-auto mb-5' />
                        <h1 className='mb-8 text-2xl font-bold'>WEBSITE <br />DEVELOPMENT</h1>
                        <p className='font-semibold text-[#717171]'>WAVE BOX delivering the best web development services to craft bespoke websites, web-tools, etc.</p>
                    </div>
                    <div className='group h-full w-full text-center p-10 bg-[#090909]'>
                        <img src={img2} alt="" className='h-20 mx-auto mb-5' />
                        <h1 className='mb-8 text-2xl font-bold'>UI/UXDESIGN</h1>
                        <p className='font-semibold text-[#717171]'>WAVE BOX delivering the best web development services to craft bespoke websites, web-tools, etc.</p>
                    </div>
                    <div className='group h-full w-full text-center p-10'>
                        <img src={img3} alt="" className='h-20 mx-auto mb-5' />
                        <h1 className='mb-8 text-2xl font-bold'>WEB APPLICATION</h1>
                        <p className='font-semibold text-[#717171]'>WAVE BOX delivering the best web development services to craft bespoke websites, web-tools, etc.</p>
                    </div>
                    <div className='group h-full w-full text-center p-10 bg-[#090909]'>
                        <img src={img4} alt="" className='h-20 mx-auto mb-5' />
                        <h1 className='mb-8 text-2xl font-bold'>MOBILE APP<br />DEVELOPMENT</h1>
                        <p className='font-semibold text-[#717171]'>WAVE BOX delivering the best web development services to craft bespoke websites, web-tools, etc.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OurServices