import React from 'react'

const Thoughts = () => {
    return (
        <div className='bg-black py-20 text-white'>
            <div className='py-24 relative group'>
                <div className='bg-[#090909] absolute top-0 w-full group-hover:w-0 group-hover:right-0 right-0 duration-1000 bottom-0 z-[1] '></div>
                <div className='flex justify-between items-center xl:max-w-[1200px] mx-auto relative z-[2]'>
                    <div>
                        <p className='text-5xl font-semibold leading-[60px]'>SHARE YOUR <br /> THOUGHTS</p>
                    </div>
                    <div>
                        <p className='font-medium group-hover:underline underline-offset-4'>Feel Free To Contact Us!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thoughts