import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ProjectDetails from '../../portfolio/project/ProjectDetails';
import { useState } from 'react';
import { useEffect } from 'react'
import { portfolio } from '../../portfolio/PortfolioData';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';


const Work = () => {

    let [isOpen, setIsOpen] = useState(false)
    let [modal, setModal] = useState(false)
    let [id, setId] = useState(0)
    // console.log(id,"id");

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

    let menu = ['']

    const pagination = {
        el: '.swiper-pagination-work',
        clickable: true,
        bulletElement: `swiper-pagination-bullet`,

        renderBullet: function (index, className) {

            return '<span class="' + className + '">' + (menu) + "</span>";
        },
    };

    const styleCss = `

    .swiper-pagination-work {
      position: absolute;
      bottom: 80px !important;
      left: 50% !important;
      transform: translateX(-50%);
      width: auto !important;
      margin: 0;
      display: flex;
      z-index: 1;
      gap: 5px;
  }
  
  .swiper-pagination-work .swiper-pagination-bullet {
      border-radius: 0%;
      width: 15px;
      height: 2px;
      opacity: 1;
      background: gray;
  
  }
  
  .swiper-pagination-work .swiper-pagination-bullet-active {
      width: 25px;
      height: 2px;
      border-radius: 0px;
      transition-duration: 500ms;
      background: white;

  }
    `
    return (
        <div className='bg-black text-white md:py-32 py-28 relative'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] mx-auto px-5 xl:px-0 relative'>
                <div className='flex gap-3 items-center'>
                    <div className='flex items-center'>
                        <p className='bg-gray-300 h-1 w-1 rounded-full'></p>
                        <p className='bg-gray-900 h-[2px] w-10 rounded-full'></p>
                    </div>
                    <h1 className='uppercase text-sm font-semibold text-[#AAAAAA]'>OUR WORK</h1>
                </div>

                <div>
                    <h1 className=' md:text-5xl text-3xl font-semibold mt-5 leading-[50px] mb-20'>Creative Portfolio Designs</h1>
                </div>
            </div>

            <div>
                <div className='swiper-pagination-work'></div>
            </div>

            <Swiper
                slidesPerView={3}
                loop={true}
                spaceBetween={30}
                pagination={pagination}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    portfolio.slice(4, 10).map((items) =>
                        <SwiperSlide key={items?.id} >
                            <div onClick={() => { setIsOpen(!isOpen); setId(items?.id) }} className='relative group lg:cursor-pointer'>
                                <img src={items?.image} alt="" className='h-[560px] w-full' />
                                <div className='absolute top-0 bottom-0 left-0 w-full bg-black bg-opacity-25 group-hover:bg-opacity-50 duration-500 z-[1]'></div>
                                <div className='absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center text-white z-[2] w-full'>
                                    <div className='group-hover:-translate-y-10 duration-500 flex flex-col items-center mb-1 text-center'>
                                        <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1'>{items?.design}</h1>
                                        <h1 className='text-2xl font-bold group-hover:text-3xl duration-500 uppercase'>{items?.title}</h1>
                                    </div>
                                    <p className='font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-500 uppercase'>View Project</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                {/* <SwiperSlide>
                    <div className='relative group'>
                        <img src={img2} alt="" className='h-[560px] w-full' />
                        <div className='absolute top-0 bottom-0 left-0 w-full bg-black bg-opacity-25 group-hover:bg-opacity-50 duration-500 z-[1]'></div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center text-white z-[2] w-full'>
                            <div className='group-hover:-translate-y-10 duration-500 flex flex-col items-center mb-1'>
                                <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1'>e-Commerce</h1>
                                <h1 className='text-2xl font-bold group-hover:text-3xl duration-500'>HATER SODAI</h1>
                            </div>
                            <p className='font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-500 uppercase'>View Project</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative group'>
                        <img src={img3} alt="" className='h-[560px] w-full' />
                        <div className='absolute top-0 bottom-0 left-0 w-full bg-black bg-opacity-25 group-hover:bg-opacity-50 duration-500 z-[1]'></div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center text-white z-[2] w-full'>
                            <div className='group-hover:-translate-y-10 duration-500 flex flex-col items-center mb-1'>
                                <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1'>HEALTH IS WEALTH</h1>
                                <h1 className='text-2xl font-bold group-hover:text-3xl duration-500'>EXTRA MILE</h1>
                            </div>
                            <p className='font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-500 uppercase'>View Project</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative group'>
                        <img src={img4} alt="" className='h-[560px] w-full' />
                        <div className='absolute top-0 bottom-0 left-0 w-full bg-black bg-opacity-25 group-hover:bg-opacity-50 duration-500 z-[1]'></div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center text-white z-[2] w-full'>
                            <div className='group-hover:-translate-y-10 duration-500 flex flex-col items-center mb-1'>
                                <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1 text-center'>WHERE EVERYONE IS <br />FAMILY</h1>
                                <h1 className='text-2xl font-bold group-hover:text-3xl duration-500'>GUARDIAN CARE</h1>
                            </div>
                            <p className='font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-500 uppercase'>View Project</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative group'>
                        <img src={img5} alt="" className='h-[560px] w-full' />
                        <div className='absolute top-0 bottom-0 left-0 w-full bg-black bg-opacity-25 group-hover:bg-opacity-50 duration-500 z-[1]'></div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center text-white z-[2] w-full'>
                            <div className='group-hover:-translate-y-10 duration-500 flex flex-col items-center mb-1'>
                                <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1 text-center'>MAKE THE CUSTOMER HERO<br /> OF OUR STORY</h1>
                                <h1 className='text-2xl font-bold group-hover:text-3xl duration-500'>ALIF'S ENGINEERING</h1>
                            </div>
                            <p className='font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-500 uppercase'>View Project</p>
                        </div>
                    </div>
                </SwiperSlide> */}


            </Swiper>

            <NavLink to="/portfolio"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-5 px-10 py-3 border rounded-full w-max mt-8 hover:scale-x-105 duration-700">
                <IoIosArrowDroprightCircle className="text-white text-3xl" />
                <p className="tracking-[4px] text-white font-semibold text-xs">ALL WORK</p>
            </div></NavLink>

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
                                    {/* <ProjectDetails item={portfolio[id]} /> */}
                                    {portfolio.map(item =>
                                        <div>
                                            {item.id === id && <ProjectDetails item={item} />}
                                        </div>
                                    )}
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

export default Work