import React, { useEffect, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import useWindowSize from '../../hooks/useWindowSize';
import Footer from '../common/Footer'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  // contact email 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wqv2gkc', 'template_tcs25kr', form.current, '_aL2VMizlJzAnT9ii')
    e.target.reset();
    // alert('Message Successfully Send');
    toast("Message Successfully Send", { type: 'success' })
    window.scrollTo(0, 0);

  };

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
        <ToastContainer />
        <div className='bg-black text-white pt-40'>
          <div className='flex items-center gap-10 xl:pl-60 pl-5'>
            <p className='w-24 p-[1px] bg-white'></p>
            <div>
              <p className='font-semibold tracking-[4px]'>Let's Talk</p>
              <h1 className='xl:text-6xl text-4xl mt-3 font-bold'>Contact</h1>
            </div>
          </div>

          {/* message  */}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5 xl:px-0 xl:max-w-[1200px] mx-auto py-10'>
            <div className='bg-[#090909] xl:p-10 p-3'>
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
                  <p className='text-[#B0B0B0] border-dotted border-b border-[#717171]'>7th Floor, House: 02, Road: 10, Nikunjo 2, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* comment  */}
            <div>
              <h1 className='text-4xl font-bold mb-10'>Write A Comment</h1>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-10 placeholder:text-[#B0B0B0] font-semibold text-sm'>
                <div className='flex items-center gap-10 border-b border-dotted border-[#717171] pb-3'>
                  <p>Name?</p>
                  <input className='border-0 outline-none bg-transparent' name="name" type="text" placeholder='Type your name' required />
                </div>
                <div className='flex items-center gap-10 border-b border-dotted border-[#717171] pb-3'>
                  <p>E-mail?</p>
                  <input className='border-0 outline-none bg-transparent' name="email" type="email" placeholder='Type your Email Address' required />
                </div>
                <div className='flex items-center gap-10 border-b border-dotted border-[#717171] pb-3'>
                  <p>Subject</p>
                  <input className='border-0 outline-none bg-transparent' name="subject" type="text" placeholder='Type your Subject' required />
                </div>
                <div className='flex gap-10 border-b border-dotted border-[#717171] pb-3 w-full'>
                  <p className='w-40'>What's up</p>
                  <textarea className='border-0 outline-none bg-transparent w-full h-24' name="message" type="text" placeholder='Tell us about you and the world' required />
                </div>
                <div>
                  <button type='submit' className='text-sm font-medium tracking-[5px] mt-10 border py-4 rounded-md hover:scale-x-105 duration-700 px-10 bg-transparent border-white text-white'>SEND MESSAGE</button>
                </div>
              </form>


            </div>
          </div>
          <div className="relative w-full h-[800px] pt-20">
                <div style={{ width: '100%' }}><iframe title='map' width={"100%"} height={"600"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14598.489486079072!2d90.40631465733277!3d23.83202382170301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c1a344cef1%3A0xd5da975683c0ee09!2sWAVE%20BOX!5e0!3m2!1sen!2sbd!4v1657030266375!5m2!1sen!2sbd?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/farm-gps/">farm gps</a></iframe></div>
          </div>

          <div className='bg-black py-50 text-white'>
            <div className='md:py-24 py-5 relative group'>
              <div className='bg-[#090909] absolute top-0 w-full xl:group-hover:w-0 xl:group-hover:right-0 right-0 duration-1000 bottom-0 z-[1] '></div>
              <div className='flex justify-between items-center xl:max-w-[1200px] px-5 xl:px-0 mx-auto relative z-[2]'>
                <div>
                  <p className='md:text-5xl text-3xl font-semibold leading-[60px]'>NEWS FEED</p>
                </div>
                <div>
                  <p className='font-medium group-hover:underline underline-offset-4 cursor-pointer'>See More News</p>
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