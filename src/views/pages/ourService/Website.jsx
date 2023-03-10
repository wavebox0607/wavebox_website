import React, { useEffect, useRef } from 'react'
import img1 from '../../../assets/images/WebServices/Website/01.jpg'
import img2 from '../../../assets/images/WebServices/Website/02.jpg'
import img3 from '../../../assets/images/WebServices/Website/03.jpg'
import img4 from '../../../assets/images/WebServices/Website/04.jpg'
import img5 from '../../../assets/images/WebServices/Web_App/1.jpg'
import img6 from '../../../assets/images/WebServices/Mobile_App/mobile_app1.jpg'
import img7 from '../../../assets/images/WebServices/Social_Media/1.jpg'
import Pricing from './Pricing'
import Footer from '../common/Footer'
import { NavLink } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'

const Website = () => {


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
                    <div id="section-1" className="grid grid-cols-4 py-10 px-5 xl:py-20 xl:px-40 gap-x-10 h-full w-full" >
                        <div className="xl:col-span-3 col-span-4 h-full w-full">
                            <div className='grid grid-cols-2 md:gap-5 gap-2 sm:h-[600px] h-[350px] w-full'>
                                <div className='h-auto w-full'>
                                    <img src={img1} alt="" className='h-full min-w-full' />
                                </div>
                                <div className='h-auto w-full'>
                                    <img src={img2} alt="" className='h-full min-w-full' />
                                </div>
                                <div className='h-auto w-full'>
                                    <img src={img3} alt="" className='h-full min-w-full' />
                                </div>
                                <div className='h-auto w-full'>
                                    <img src={img4} alt="" className='h-full min-w-full' />
                                </div>
                            </div>
                            <div className='mt-8 mb-20'>
                                <div>
                                    <h1 className='md:text-5xl text-3xl font-bold'>Website Development</h1>
                                    <p className='h-[2px] w-28 bg-white mt-5'></p>
                                </div>
                                <div className='font-medium md:text-sm text-xs mt-10'>
                                    <div>
                                        <p className='md:text-base text-sm md:font-bold font-medium'>WAVE BOX delivering the best web development services to craft bespoke websites, web-tools, etc. to global businesses and startups with 100% project delivery and we are specialized in Personal, Organizations & E-Commerce websites.</p><br />
                                        <p>
                                            Living in the digital world, A website is the online portfolio of a company. Nowadays, people are busy and
                                            smart. They have no time to go to the store. They search the internet to find out about a product or service
                                            before making a purchase. They can learn about the brand, features, price, size, colour through their
                                            website. A website not only provides credibility but also helps to give a positive impression that your
                                            company is bigger and more successful.<br /><br />
                                            Ultimately A website is important because it helps build credibility as a business, is also important for your
                                            business to promote your brand and to generate more leads and optimize conversion rate & consequently
                                            growing business.
                                        </p><br />
                                        <p>I. Organizational Website</p>
                                        <p>ii. E-commerce Website</p>
                                        <p>iii. Personal Portfolio Website</p>
                                        <p>iv. Blog wWebsite</p>
                                        <p>v. Business Website</p>
                                        <p>vi. Online Community Website</p>
                                        <p>vii. Membership Website</p>
                                        <p>viii. Online Courses Website</p>
                                        <p>ix. Online Marketplace Website</p>
                                        <p>x. Dropshipping Website</p>
                                        <p>xi. Affiliate Website</p>
                                        <p>xii. Micro Job Website</p>
                                        <p>xiii. Job Board Website</p>
                                        <p>xiv. Directory Listing Website</p>
                                        <p>xv. Travel Website</p>
                                        <p>xvi. Fashion / Lifestyle Website</p>
                                        <p>xvii. Social Network Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:col-span-1 hidden xl:block'>
                            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-x-5 gap-y-5'>
                                <NavLink to='/web-application-development'><div>
                                    <img src={img5} alt="" />
                                    <h1 className='sm:text-sm text-xs font-bold mt-3'>Web Application Development</h1>
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
                    <Pricing />
                    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-x-5 gap-y-5 px-5 py-10 xl:hidden'>
                        <NavLink to='/web-application-development'><div>
                            <img src={img5} alt="" />
                            <h1 className='sm:text-sm text-xs font-bold mt-3'>Web Application Development</h1>
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
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default Website