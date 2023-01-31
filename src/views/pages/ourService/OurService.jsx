import React, { useState, createRef, useEffect } from "react";
import Slider from 'react-slick';
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import { services } from "./Services"
import useWindowSize from "../../hooks/useWindowSize";
import { useRef } from "react";
import Footer from "../common/Footer";
import { NavLink } from "react-router-dom";
// import ScrollToTop from "../../components/utils/ScrollToTop";


const OurService = () => {

    const [id, setId] = useState(0)

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

    //creating the ref
    const customeSlider = createRef();
    // const customeSliderTwo = createRef();

    // slider navigation button 
    const gotoNext = () => {
        customeSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }

    // slider settings for image
    const settings = {
        // infinite: true,
        // slidesToShow: 4,
        // slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1
                }
            }
        ],
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };


    const styleCss = `
    .icon-color:hover {
        color:red;
        }
        .active-img {
        border:  1px solid red;
     
    }
     
    .arrow-slick-color {
        color:red;
    }
    `
    return (
        <div ref={app} className="App">

            <div ref={scrollContainer} className={`relative`}>
                <style>{styleCss}</style>
                {/* for small images */}
                {/* selected image show  */}
                <div className='relative z-[1] w-full'>
                    <div className='h-[100vh] w-full relative'>
                        <p className='absolute top-0 left-0 z-[3] w-full h-full bg-black bg-opacity-20'></p>
                        <img src={services[0]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 0 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <img src={services[1]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 1 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <img src={services[2]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 2 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <img src={services[3]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 3 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <div className='absolute top-0 left-0 z-[100] w-full'>

                            <Slider {...settings} ref={customeSlider} className='text-white'>
                                {
                                    services.map((item, index) =>
                                        <div key={index} onMouseEnter={() => setId(index)} className="lg:bg-transparent bg-black border-r border border-white h-[100vh] relative">
                                            <div className="absolute bottom-10 left-5 flex flex-col gap-5 z-[3] ">
                                                <p className="text-[100px] font-bold">0{item?.id}</p>
                                                <div>
                                                    <p className="text-[20px] font-semibold">{item?.title}</p>
                                                    <p className="text-[16px] ">{item?.description.slice(0, 40)}</p>
                                                </div>
                                                <NavLink to={item?.url}><p className="text-[20px] px-5 rounded-md py-1 bg-green-500 w-max lg:cursor-pointer">Details</p></NavLink>
                                            </div>
                                            <div className="relative">
                                                <img src={item?.image[0]} alt="" className={`lg:h-[100vh] h-[50vh] w-full z-[2] lg:opacity-0`} />
                                                <p className='absolute top-0 left-0 z-[300] w-full h-full bg-black bg-opacity-20 lg:hidden'></p>
                                            </div>
                                            <p className="bg-gradient-to-t from-[#19181C] to-transparent absolute lg:hidden block top-1/2 left-0 -translate-y-[95%] right-0 z-[2] h-20"></p>
                                        </div>
                                    )
                                }
                            </Slider>


                            {services.length > 4 && <div className='opacity-0 group-hover:opacity-100 duration-500'>
                                <BsFillArrowDownSquareFill className='absolute -rotate-90 right-0 top-[50%] -translate-y-[50%] z-10 text-3xl arrow-slick-color' onClick={() => gotoNext()} />
                                <BsFillArrowUpSquareFill className='absolute -rotate-90 left-0 z-10 text-3xl top-[50%] -translate-y-[50%] arrow-slick-color' onClick={() => gotoPrev()} />
                            </div>}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default OurService





