import React from 'react'
import { NavLink } from 'react-router-dom'

const Thoughts = () => {
    return (
        <div className='bg-black py-20 text-white'>
            <div className='py-24 relative group'>
                <div className='bg-[#090909] absolute top-0 w-full group-hover:w-0 group-hover:right-0 right-0 duration-1000 bottom-0 z-[1] '></div>
                <div className='flex flex-col xl:flex-row xl:justify-between text-center gap-y-5 items-center xl:max-w-[1200px] px-5 xl:px-0 mx-auto relative z-[2]'>
                    <div>
                        <p className='xl:text-5xl text-4xl font-semibold xl:leading-[60px]'>SHARE YOUR <br className='xl:block hidden' /> THOUGHTS</p>
                    </div>
                    <NavLink to="/contact"><div>
                        <p className='font-medium group-hover:underline underline-offset-4'>Feel Free To Contact Us!</p>
                    </div></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Thoughts