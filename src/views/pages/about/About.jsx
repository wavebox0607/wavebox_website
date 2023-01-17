import React, { useEffect, useRef } from 'react'
import img1 from '../../../assets/images/bg-about.jpg'
import useWindowSize from '../../hooks/useWindowSize'
import Footer from '../common/Footer'
import Believe from './Believe'
import Follow from './Follow'
import Team from './Team'

const About = () => {

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

  const styleCss = `

     .about-bg {
        background-image: url(${img1});
     }
     .text-shadow-title {
      text-shadow: 0px 4px 10px #000;
    }
    .text-shadow-sub {
      text-shadow: 2px 7px 5px rgba(0,0,0,0.3);
    }
  `

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        <div className='bg-black text-white'>
          <style>{styleCss}</style>
          <div className={`about-bg w-full pb-24 mb-10`}>
            <div className='xl:max-w-[1200px] mx-auto pt-32 xl:pt-60 px-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-10 '>
                <div><h1 className='text-4xl md:text-5xl xl:text-7xl font-bold text-[#930D21] text-shadow-title xl:text-left text-center'>BRAND STORY</h1></div>
                <div></div>
                <div></div>
                <div>
                <p className='w-full text-justify text-[#616161] leading-relaxed font-semibold text-sm'>Wave Box is a Web development and Software Development company. The company was founded in 2019 by Hasib Ahamed Soyad. Wave Box go fully operational in 2020. The initial idea for this company to create money for value Digital product and Services. Wave Box work on web development personal website, business website, E-commerce website. The most notable things about this company is they create excellent content for the website so in google search the website rank higher. Wave Box is unique than others because they use SEO to boost website.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`about-bg w-full`}>
            <div className='xl:max-w-[1200px] mx-auto pt-20 pb-24 px-5'>
              <h1 className='text-4xl md:text-5xl xl:text-7xl font-bold text-[#930D21] text-shadow-title xl:text-left text-center'>ABOUT WAVEBOX</h1>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div></div>
                <div className='mt-20 w-full text-justify text-[#616161] leading-relaxed font-semibold text-sm'>
                  <div className='mb-5 relative font-bold text-3xl text-black w-max'>
                    <h1 className='bg-[#930D21] w-max px-0.5 py-1 z-[2] relative text-shadow-sub'>WHO WE ARE</h1>
                    <p className='absolute top-0 left-0 w-full h-full bg-[#930D21] rotate-6 z-[1]'></p>
                    <p className='absolute top-0 left-0 w-full h-full bg-[#930D21] -rotate-4 z-[1]'></p>
                  </div>
                  <p>WAVEBOX is a Web development company. This company is all about design and develop website. This companies ultimate goal is create money for value website.</p>
                </div>

                <div className='mt-20 w-full text-justify text-[#616161] leading-relaxed font-semibold text-sm'>
                  {/* <h1 className='mb-5 font-bold text-3xl text-black bg-[#930D21] w-max px-3 py-1'>WHAT WE DO</h1> */}
                  <div className='mb-5 relative font-bold text-3xl text-black w-max'>
                    <h1 className='bg-[#930D21] w-max px-0.5 py-1 z-[2] relative text-shadow-sub'>WHAT WE DO</h1>
                    <p className='absolute top-0 left-0 w-full h-full bg-[#930D21] -rotate-6 z-[1]'></p>
                    <p className='absolute top-0 left-0 w-full h-full bg-[#930D21] rotate-4 z-[1]'></p>
                  </div>
                  <p>WAVEBOX is an IT enabled Web Development service providing company in the market since 2019. Wavebox provides two major types of service. One is Web Solution that consists of high quality Web Design & Development, Website Maintenance, Social Networking Platform Development, E-Commerce Solutions, CMS Solutions, e-Procha as E-mail Marketing Service, Managed Web Hosting Service and Domain Registration Service. Other one is create good content for the website for google rank (SEO).
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <Team />
          <Believe />
          <Follow />

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About