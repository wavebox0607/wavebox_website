import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Controller, EffectCreative, EffectFade, Mousewheel, Scrollbar } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

// import "./styles.css";
import { IoIosArrowDroprightCircle, IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import { portfolio } from './PortfolioData.js';
import { BsDot } from "react-icons/bs";
import ProjectDetails from "./project/ProjectDetails.jsx";
import Footer from "../common/Footer.jsx";

const Portfolio = () => {

    let [isOpen, setIsOpen] = useState(false)
    let [modal, setModal] = useState(false)
    let [id, setId] = useState(0)
    const [open, setOpen] = useState(true)

    // console.log(isOpen, "isOpen");

    useEffect(() => {
        setTimeout(() => {
            if (isOpen === true) {
                setModal(true)
            }
            else {
                setModal(false)
            }
        }, 200);



    }, [isOpen])

    if (open === true) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'unset';
    }


    const pagination = {
        el: '.swiper-pagination-portfolio',
        clickable: true,
        bulletElement: `swiper-pagination-bullet`,

        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };


    const prevEl = 'portfolio-prev'
    const nextEl = 'portfolio-next'


    const styleCss = `

    .swiper-pagination-portfolio {
      position: fixed;
      font-size: 14px;
      padding: 90px 5px;
      color: white;
      font-weight: 600;
      left: auto !important;
      top: 0px !important;
      right: 0px !important;
      bottom: 0px !important;
      width: fit-content !important;
      margin: 0;
      display: flex;
      flex-direction: column ;
      justify-content: space-between;
      z-index: 3;
      background: rgba(0, 0, 0, 0.5);
      cursor: pointer;
      
  }
  
  .swiper-pagination-portfolio .swiper-pagination-bullet {
      opacity: 1;
      width: 0px;
      height: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition-duration: 500ms;
      padding: 0 5px;
      
  }
  .swiper-pagination-portfolio .swiper-pagination-bullet:nth-child(-n + 9)::before {
    content: '0';
  }
  
  .swiper-pagination-portfolio .swiper-pagination-bullet-active {
      width: 0px;
      height: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition-duration: 500ms;
  }
    `
    return (
        <div className="App">
            <div className="overflow-hidden relative">
                <style>{styleCss}</style>

                <div className='flex gap-2 cursor-pointer absolute md:right-20 right-8 bottom-5 z-10'>
                    <div className={`${prevEl} hover:border h-10 w-10 rounded-full flex justify-center items-center`}>
                        <IoIosArrowBack className='text-xl text-white' />
                    </div>
                    <div className={`${nextEl} hover:border h-10 w-10 rounded-full flex justify-center items-center`}>
                        <IoIosArrowForward className='text-xl text-white' />
                    </div>
                </div>

                <Swiper
                    navigation={{
                        prevEl: `.${prevEl}`,
                        nextEl: `.${nextEl}`,
                    }}
                    mousewheel={true}
                    speed={1000}
                    loop={true}
                    pagination={pagination}
                    // scrollbar={scrollbar}


                    autoplay={{
                        delay: 2000
                    }}
                    modules={[Pagination, Autoplay, Navigation, Controller, EffectCreative, EffectFade, Mousewheel, Scrollbar]}
                    className="mySwiper relative ">
                    <div>
                        <div className='swiper-pagination-portfolio'></div>
                    </div>
                    {
                        portfolio.map((items, index) =>
                            <SwiperSlide key={items?.id}>
                                <div className="relative text-white h-[100vh] bg-black">
                                    <img src={items?.image} alt="" className="md:h-[100vh] h-[50vh] w-full" />
                                    <div className="md:absolute z-[2] md:left-10 lg:left-[20%] md:top-1/2 md:-translate-y-1/2 md:max-w-[700px] pl-5 pr-8 md:mt-0 h-full md:h-max bg-gradient-to-t from-black to-[#19181C] md:bg-gradient-to-t md:from-transparent md:to-transparent w-full pt-10 relative ">
                                        <div className="flex items-center gap-3 mb-3">
                                            <p className="text-gray-100 text-sm font-semibold tracking-widest">{items?.design}{items?.design && <BsDot className='text-red-700 inline' />}{items?.date}</p>
                                        </div>
                                        <div>
                                            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold">{items?.title}</h1>
                                        </div>
                                        <div className="text-gray-300 py-5">
                                            <p className="md:text-lg text-sm font-medium">{items?.description.slice(0,100)}{items?.description?.length > 100 && '...'}</p>
                                        </div>
                                        <div onClick={() => { setIsOpen(!isOpen); setId(index) }} className="flex items-center lg:cursor-pointer gap-2 sm:gap-5 md:px-10 px-4 py-3 border rounded-full w-max hover:scale-x-105 duration-700">
                                            <IoIosArrowDroprightCircle className="text-white text-3xl" />
                                            <p className="sm:tracking-[4px] text-white font-semibold text-xs uppercase">Show Project</p>
                                        </div>
                                    </div>
                                    <p className="bg-black md:absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-50"></p>
                                    <p className="bg-black absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-20"></p>
                                    <p className="bg-gradient-to-t from-[#19181C] to-transparent absolute md:hidden block top-1/2 left-0 -translate-y-[90%] right-0 z-[2] h-20"></p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>


            </div>
            <Footer />

            {/* <div>
                <div className='swiper-scrollbar-portfolio'></div>
            </div> */}
            <Transition show={isOpen} as={Fragment} >

                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className={`relative z-50 `}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-out duration-1000"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        {/* The backdrop, rendered as a fixed sibling to the panel container */}
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    {/* Full-screen scrollable container */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-700"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="ease-out duration-1000"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <div className="fixed inset-0 overflow-y-auto">
                            {/* Container to center the panel */}
                            <div className="flex min-h-full items-center justify-center">
                                {/* The actual dialog panel  */}
                                <div onClick={() => setIsOpen(!isOpen)} className="fixed top-10 right-10 lg:cursor-pointer z-[3] bg-black text-white rounded-full w-10 h-10 flex justify-center items-center"><AiOutlineClose className="text-3xl" /></div>
                                <Dialog.Panel className={`mx-auto h-[100vh] min-w-full rounded bg-black text-white overflow-y-auto`}>
                                    <ProjectDetails item={portfolio[id]} />
                                </Dialog.Panel>
                                <div className={`absolute top-0 left-0 h-full bg-black z-[60] duration-[2000ms] ${modal ? 'w-0' : 'w-full'}`}></div>
                                <div className={`absolute top-0 right-0 h-full bg-black z-[60] duration-[2000ms] ${modal ? 'w-0' : 'w-full'}`}></div>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div>
    )
}

export default Portfolio



