import React from 'react'
import img1 from "../../../../assets/images/project/Adis.jpg";
import { BiRightArrowAlt } from 'react-icons/bi';


const Adis = () => {
    return (
        <div className='mx-auto relative'>
            <div className='relative h-[100vh] grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-y-5'>
                <div className='lg:col-span-3 xl:col-span-2'>
                    <img src={img1} alt="" className='h-full min-w-full' />
                </div>
                <div className='lg:col-span-2 xl:col-span-1 flex flex-col justify-center h-full gap-y-10 lg:px-20 px-5'>
                    <div className='flex flex-col gap-3'>
                        <p>June 9, 2021</p>
                        <p className='text-[40px] font-bold'>Adis Bd</p>
                        <p className='text-[17px] font-medium'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it...</p>
                    </div>

                    <div className='grid grid-cols-3 gap-8'>
                        <div className='border-t pt-3 border-gray-600'>
                            <h1 className='text-[17px] font-bold'>Strategy</h1>
                            <p className='text-gray-300'>Brand Strategy, UX Strategy</p>
                        </div>
                        <div className='border-t pt-3 border-gray-600'>
                            <h1 className='text-[17px] font-bold'>Design</h1>
                            <p className='text-gray-300'>UI/UX Design, Art Direction</p>
                        </div>
                        <div className='border-t pt-3 border-gray-600'>
                            <h1 className='text-[17px] font-bold'>Client</h1>
                            <p className='text-gray-300'>Adis BD</p>
                        </div>
                    </div>

                    <a href="https://www.adis.com.bd/" target="_blank" rel="noopener noreferrer" className='focus:outline-none'><div className='pb-10 flex items-center gap-2 group lg:cursor-pointer '>
                        <p className='text-[17px] font-bold group-hover:text-red-800 duration-1000'>View Project</p>
                        <div className='overflow-hidden w-max flex items-end relative'>
                            <BiRightArrowAlt className='text-white text-2xl group-hover:translate-x-8 duration-500' />
                            <BiRightArrowAlt className='text-white text-2xl -translate-x-10 group-hover:translate-x-0 group-hover:text-red-800 duration-1000 absolute' />
                        </div>
                    </div></a>
                </div>
            </div>

        </div>
    )
}

export default Adis