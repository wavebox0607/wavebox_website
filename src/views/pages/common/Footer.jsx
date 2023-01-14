import React from 'react'

const Footer = () => {

  let date =  new Date().getFullYear();

  return (
    <div className='bg-[#090909] text-white pt-40 pb-20 relative h-full w-full'>
      <div className='grid grid-cols-4 xl:max-w-[1200px] mx-auto border-b-[.5px] pb-10 border-gray-700'>
        <div></div>
        <div>
          <div className='relative pb-5'>
            <h1 className='font-medium'>NAVIGATION</h1>
            <p className='absolute top-7 left-0 h-[2px] w-4 bg-white'></p>
          </div>
          <div className='text-[#717171] font-semibold flex flex-col gap-1'>
            <p>Portfolio</p>
            <p>News</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <div className='relative pb-5'>
            <h1 className='font-medium'>CONTACT</h1>
            <p className='absolute top-7 left-0 h-[2px] w-4 bg-white'></p>
          </div>
          <div className='text-[#717171] font-semibold flex flex-col gap-2'>
            <p><span className='text-white'>M</span> : +88 01677515579</p>
            <p><span className='text-white'>P</span> : +88 01979733619</p>
            <p><span className='text-white'>E</span> : assist@wavebox.net</p>
          </div>
        </div>

        <div>
          <div className='relative pb-5'>
            <h1 className='font-medium'>OFFICE ADDRESS</h1>
            <p className='absolute top-7 left-0 h-[2px] w-4 bg-white'></p>
          </div>
          <div className='text-[#717171] font-semibold flex flex-col gap-1'>
            <p>7th Floor, House: 02, Road: 10,</p>
            <p>Nikunja 2</p>
            <p>Dhaka-1229</p>
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
      <div className='xl:max-w-[1200px] text-[#717171] font-semibold mx-auto pt-5'>
        <p>{date} © Wave Box</p>
      </div>
    </div>
  )
}

export default Footer