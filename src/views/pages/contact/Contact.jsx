import React, { useEffect, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import Footer from '../common/Footer'

const Contact = () => {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
      }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 0.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        <div className='bg-black text-white pt-40'>
          <div className='flex items-center gap-10 pl-60'>
            <p className='w-24 p-[1px] bg-white'></p>
            <div>
              <p className='font-semibold tracking-[4px]'>Let's Talk</p>
              <h1 className='text-6xl mt-3 font-bold'>Contact</h1>
            </div>
          </div>

          {/* message  */}

          <div className='grid grid-cols-2 gap-10 xl:max-w-[1200px] mx-auto py-10'>
            <div className='bg-[#090909] p-10'>
              <h1 className='text-4xl font-bold pb-5'>Start a new project?</h1>
              <p className='font-semibold text-[#B0B0B0]'>If you have any quarries please send us a mail, A WAVE BOX representative will contact you shortly after receiving your request or you can also call our support number.</p>
              <div className='flex flex-col gap-5 mt-5'>
                <div className='flex items-center gap-10 text-sm font-bold'>
                  <p>PHONE</p>
                  <p className='text-[#B0B0B0] border-dotted border-b border-[#717171]'>+88 01677515579</p>
                </div>
                <div className='flex items-center gap-10 text-sm font-bold'>
                  <p>E-MAIL</p>
                  <p className='text-[#B0B0B0] border-dotted border-b border-[#717171]'>assist@wavebox.net</p>
                </div>
                <div className='flex flex-col gap-1 text-sm font-bold'>
                  <p>ADDRESS</p>
                  <p className='text-[#B0B0B0] border-dotted border-b border-[#717171] w-max'>7th Floor, House: 02, Road: 10, Nikunjo 2, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* comment  */}
            <div>
              <h1 className='text-4xl font-bold mb-10'>Write A Comment</h1>

              <div className='flex flex-col gap-10 placeholder:text-[#B0B0B0] font-semibold text-sm'>
                <div className='flex items-center gap-10 border-b border-dotted border-[#717171] pb-3'>
                  <p>Name?</p>
                  <input className='border-0 outline-none bg-transparent' type="text" placeholder='Type your name' />
                </div>
                <div className='flex items-center gap-10 border-b border-dotted border-[#717171] pb-3'>
                  <p>E-mail?</p>
                  <input className='border-0 outline-none bg-transparent' type="text" placeholder='Type your Email Address' />
                </div>
                <div className='flex gap-10 border-b border-dotted border-[#717171] pb-3 w-full'>
                  <p className='w-40'>What's up</p>
                  <textarea className='border-0 outline-none bg-transparent w-full h-24' type="text" placeholder='Tell us about you and the world' />
                </div>
              </div>

              <div>
                <button className='text-sm font-medium tracking-[5px] mt-10 border py-4 rounded-md hover:scale-x-105 duration-700 px-10 bg-transparent border-white text-white'>SEND MESSAGE</button>
              </div>
            </div>
          </div>


          <div className='bg-black py-20 text-white'>
            <div className='py-24 relative group'>
              <div className='bg-[#090909] absolute top-0 w-full group-hover:w-0 group-hover:right-0 right-0 duration-1000 bottom-0 z-[1] '></div>
              <div className='flex justify-between items-center xl:max-w-[1200px] mx-auto relative z-[2]'>
                <div>
                  <p className='text-5xl font-semibold leading-[60px]'>NEWS FEED</p>
                </div>
                <div>
                  <p className='font-medium group-hover:underline underline-offset-4'>See More News</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact