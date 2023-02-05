import React from 'react'
import img1 from '../../../assets/images/WebServices/Web_App/1.jpg'
import img2 from '../../../assets/images/WebServices/Web_App/2.jpg'
import img3 from '../../../assets/images/WebServices/Web_App/3.jpg'
import img4 from '../../../assets/images/WebServices/Web_App/4.jpg'
import img5 from '../../../assets/images/WebServices/Website/01.jpg'
import img6 from '../../../assets/images/WebServices/Mobile_App/mobile_app1.jpg'
import img7 from '../../../assets/images/WebServices/Social_Media/1.jpg'
import Footer from '../common/Footer'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize'


const WebApplication = () => {

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
            <div ref={scrollContainer}>
                <div className='pt-14 bg-black text-white'>
                    <div id="section-1" className="grid grid-cols-4 py-10 px-5 xl:py-20 xl:px-40 gap-10 h-full w-full" >
                        <div className="xl:col-span-3 col-span-4 h-full w-full">
                            <div className='grid grid-cols-2 md:gap-5 gap-2 sm:h-[600px] h-[350px] w-full'>
                                <div className='sm:h-[325px] h-auto w-full'>
                                    <img src={img1} alt="" className='h-full min-w-full' />
                                </div>
                                <div className='sm:h-[325px] h-auto w-full'>
                                    <img src={img2} alt="" className='h-full min-w-full' />
                                </div>
                                <div className='sm:h-[325px] h-auto w-full'>
                                    <img src={img3} alt="" className='h-full min-w-full' />
                                </div>
                                <div className='sm:h-[325px] h-auto w-full'>
                                    <img src={img4} alt="" className='h-full min-w-full' />
                                </div>
                            </div>
                            <div className='sm:mt-24 mt-8 mb-20'>
                                <div>
                                    <h1 className='md:text-5xl text-3xl font-bold'>Web Application Development</h1>
                                    <p className='h-[2px] w-28 bg-white mt-5'></p>
                                </div>
                                <div className='font-medium md:text-sm text-xs mt-10'>
                                    <div>
                                        <p className='md:text-base text-sm md:font-bold font-medium'>WAVE BOX offer top backend development services for web applications. Our master-coders provide custom REST API services and solutions to make the web apps interactive and user-friendly. We hold years of expertise in building on-site as well as cloud-based backend app solutions web and IoT applications.  Whereas the powerful backend we develop will scale up your app when needed, performs faster and offers seamless 3rd party integration with optimum data storage security.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='xl:col-span-1 col-span-4'>
                            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-x-5 gap-y-5'>
                                <NavLink to='/website-development'><div>
                                    <img src={img5} alt="" />
                                    <h1 className='sm:text-sm text-xs font-bold mt-3'>Website Development</h1>
                                </div></NavLink>
                                <NavLink to='/mobile-app-development'><div>
                                    <img src={img6} alt="" />
                                    <h1 className='sm:text-sm text-xs font-bold mt-3'>Mobile App Development</h1>
                                </div></NavLink>
                                <NavLink to='/social-media-marketing'><div>
                                    <img src={img7} alt="" />
                                    <h1 className='sm:text-sm text-xs font-bold mt-3'>Social Media Marketing</h1>
                                </div></NavLink>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default WebApplication