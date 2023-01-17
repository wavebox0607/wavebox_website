import React from 'react'
import { BsHeartFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa';

const Follow = () => {
    return (
        <div className='bg-white text-black'>
            <div className='xl:max-w-[1200px] px-5 mx-auto pt-20 pb-24'>
                <div className='text-center mb-5'>
                    <h1 className='text-lg font-medium text-gray-700 tracking-wider'>Say Hello To <span className='tracking-widest font-bold'>WAVE BOX</span> !</h1>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className=''>
                        <div className='text-center pt-5 border-t border-black ml-10'>
                            <h1 className='text-lg font-bold text-gray-700 tracking-widest'>Share Your Thoughts !</h1>
                        </div>
                        <div>
                            <input type="text" placeholder='Name' className='border-b-2 border-gray-700 outline-none placeholder:text-black placeholder:font-semibold pb-2 w-full mb-10 placeholder:text-sm' />
                            <input type="email" placeholder='Email Address' className='border-b-2 border-gray-700 outline-none placeholder:text-black placeholder:font-semibold pb-2 w-full mb-10 placeholder:text-sm' />
                            <input type="text" placeholder='Subject' className='border-b-2 border-gray-700 outline-none placeholder:text-black placeholder:font-semibold pb-2 w-full mb-10 placeholder:text-sm' />
                            <textarea type="text" placeholder='Message' className='h-40 border-b-2 border-gray-700 outline-none placeholder:text-black placeholder:font-semibold pb-2 w-full mb-5 placeholder:text-sm' />
                        </div>
                        <div className='-ml-10 flex justify-end items-center gap-1 group w-full'>
                            <button className='text-2xl font-medium group-hover:text-[#930D21] group-hover:translate-x-0 translate-x-4 duration-300'>Send</button>
                            <BsHeartFill className='text-xl font-semibold group-hover:opacity-100 group-hover:text-[#930D21] opacity-0 duration-300 group-hover:translate-x-0 -translate-x-6'/>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center pt-5 border-t border-black mr-10'>
                            <h1 className='text-lg font-bold text-gray-700 tracking-widest'>Follow Us !</h1>
                        </div>
                        <div className='flex justify-center items-center gap-5 h-full'>
                            <div className='bg-[#3B5998] rounded-full w-8 h-8 flex justify-center items-center'>
                                <FaFacebookF className='text-xl text-white'/>
                            </div>
                            <div className='bg-[#EA2C59] rounded-full w-8 h-8 flex justify-center items-center'>
                                <AiOutlineInstagram className='text-xl text-white'/>
                            </div>
                            <div className='bg-[#007BB6] rounded-full w-8 h-8 flex justify-center items-center'>
                                <RiLinkedinFill className='text-xl text-white'/>
                            </div>
                            <div className='bg-[#A82400] rounded-full w-8 h-8 flex justify-center items-center'>
                                <FaYoutube className='text-xl text-white'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow