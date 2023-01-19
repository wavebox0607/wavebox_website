import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const Why = () => {
    return (
        <div className='bg-black px-5 xl:px-0'>
            <div className='bg-[#090909] xl:max-w-[1200px] mx-auto p-10 -mt-20 relative z-[1]'>
                <h1 className='text-white  md:text-5xl text-3xl font-bold'>Why Choose Us?</h1>
                <div className='text-[#717171] font-bold mt-10'>
                    <p className='mb-5'>If you are looking for a website developer firm who can handle online marketing from design through development and into ongoing promotion, we will the best selection to be your partner.
                    </p>

                    <p className='mb-5'>
                        • Industry leading customized web design.<br />
                        • Excellent product quality within competitive price.<br />
                        • Unparalleled after sales service.<br />
                    </p>

                    <p className='font-semibold'>
                        We don’t just want to build a Website / Mobile App / Software that you’re happy with today, we want to help you manage, measure and develop.
                    </p>
                </div>

                <div className="flex items-center gap-5 px-10 py-3 border rounded-full w-max mt-8 hover:scale-x-105 duration-700">
                    <IoIosArrowDroprightCircle className="text-white text-3xl" />
                    <p className="tracking-[4px] text-white font-semibold text-xs">LEARN MORE</p>
                </div>
            </div>
        </div>
    )
}

export default Why