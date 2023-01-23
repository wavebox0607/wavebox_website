import React, { useState, Fragment } from "react";
// import Slider from "react-slick";
import img1 from '../../../../assets/images/slider/slider1.jpg'
import img2 from '../../../../assets/images/slider/rong.jpg'
import img3 from '../../../../assets/images/slider/adis.jpg'
import img4 from '../../../../assets/images/slider/Imran.jpg'
import img5 from '../../../../assets/images/slider/innokids.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Controller, EffectCreative, EffectFade } from 'swiper';

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
// import { Parallax } from "react-parallax";
import { Dialog, Transition } from '@headlessui/react'
import Adis from "./Adis";
import Imran from "./Imran";
import InnoKids from "./InnoKIds";
import Rong from "./Rong";


const SliderMain = () => {

    let [isOpen, setIsOpen] = useState(false)
    let [title, setTitle] = useState('')
    let [modal, setModal] = useState(false)

    setTimeout(() => {
        if (isOpen === true) {
            setModal(true)
        }
        else {
            setModal(false)
        }
    }, 200);

    let menu = ['']

    const pagination = {
        el: '.swiper-pagination-five',
        clickable: true,
        bulletElement: `swiper-pagination-bullet`,

        renderBullet: function (index, className) {

            return '<span class="' + className + '">' + (menu) + "</span>";
        },
    };

    const prevEl = 'slider-prev'
    const nextEl = 'slider-next'


    const styleCss = `

    .swiper-pagination-five {
      position: absolute;
      bottom: 20px !important;
      left: 50% !important;
      transform: translateX(-50%);
      width: auto !important;
      margin: 0;
      display: flex;
      z-index: 1000;
      gap: 5px;
  }
  
  .swiper-pagination-five .swiper-pagination-bullet {
      border-radius: 50%;
      width: 12px;
      height: 12px;
      opacity: 1;
      background:  green;
  
  }
  
  .swiper-pagination-five .swiper-pagination-bullet-active {
      width: 12px;
      height: 12px;
      border-radius: 25px;
      transition-duration: 500ms;
      background: red;

  }
    `
    return (
        <div className="w-full relative z-0">
            <style>{styleCss}</style>
            {/* <div>
                <div className='swiper-pagination-five'></div>
            </div> */}

            <div className='flex gap-2 cursor-pointer absolute right-20 bottom-5 z-10'>
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

                speed={1000}
                effect={"fade"}
                loop={true}
                spaceBetween={30}
                pagination={pagination}

                autoplay={{
                    delay: 2000
                }}
                modules={[Pagination, Autoplay, Navigation, Controller, EffectCreative, EffectFade]}
                className="mySwiper relative">

                <SwiperSlide>
                    <div className="relative">
                        <img src={img1} alt="" className="md:h-[100vh] min-h-[400px] w-full" />
                        {/* <Parallax className='absolute left-0 right-0 h-[100vh] top-0' bgImage={img1} bgImageAlt="image" strength={300}>
                        </Parallax> */}
                        <div className="absolute z-[2] lg:left-20 xl:left-60 left-5 top-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3 md:mb-8 mb-3">
                                <p className="w-12 h-[2px] bg-gray-700"></p>
                                <p className="text-gray-400 text-sm font-semibold tracking-widest">PASSION MEETS PROFESSION</p>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl sm:text-6xl font-bold">Welcome To WAVE BOX</h1>
                            </div>
                            {/* <div onClick={() => { setIsOpen(!isOpen); setTitle('wavebox') }} className="flex items-center lg:cursor-pointer gap-5 px-10 py-3 border rounded-full w-max mt-8 hover:scale-x-105 duration-700">
                                <IoIosArrowDroprightCircle className="text-white text-3xl" />
                                <p className="tracking-[4px] text-white font-semibold text-xs">VIEW CASE</p>
                            </div> */}
                        </div>
                        <p className="bg-black absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-50"></p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src={img2} alt="" className="md:h-[100vh] min-h-[400px] w-full" />
                        {/* <Parallax className='absolute left-0 right-0 h-[100vh] top-0' bgImage={img2} bgImageAlt="image" strength={300}>
                        </Parallax> */}
                        <div className="absolute z-[2] lg:left-20 xl:left-60 left-5 top-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3 md:mb-8 mb-3">
                                <p className="w-12 h-[2px] bg-gray-700"></p>
                                <p className="text-white text-sm font-semibold tracking-widest uppercase">E-Commerce Website</p>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl sm:text-6xl font-bold">Bishworang</h1>
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold md:mt-8 mt-3">Wave Box- June 19th 2022</p>
                            </div>
                            <div onClick={() => { setIsOpen(!isOpen); setTitle('rong') }} className="flex items-center lg:cursor-pointer gap-5 px-10 py-3 border rounded-full w-max mt-8 hover:scale-x-105 duration-700">
                                <IoIosArrowDroprightCircle className="text-white text-3xl" />
                                <p className="tracking-[4px] text-white font-semibold text-xs">VIEW CASE</p>
                            </div>
                        </div>
                        <p className="bg-black absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-50"></p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src={img3} alt="" className="md:h-[100vh] min-h-[400px] w-full" />
                        {/* <Parallax className='absolute left-0 right-0 h-[100vh] top-0' bgImage={img2} bgImageAlt="image" strength={300}>
                        </Parallax> */}
                        <div className="absolute z-[2] lg:left-20 xl:left-60 left-5 top-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3 md:mb-8 mb-3">
                                <p className="w-12 h-[2px] bg-gray-700"></p>
                                <p className="text-white text-sm font-semibold tracking-widest uppercase">E-Commerce Website</p>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl sm:text-6xl font-bold">Adis BD</h1>
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold md:mt-8 mt-3">Wave Box- October 19th 2017</p>
                            </div>
                            <div onClick={() => { setIsOpen(!isOpen); setTitle('adis') }} className="flex items-center lg:cursor-pointer gap-5 px-10 py-3 border rounded-full w-max mt-8 hover:scale-x-105 duration-700">
                                <IoIosArrowDroprightCircle className="text-white text-3xl" />
                                <p className="tracking-[4px] text-white font-semibold text-xs">VIEW CASE</p>
                            </div>
                        </div>
                        <p className="bg-black absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-50"></p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src={img4} alt="" className="md:h-[100vh] min-h-[400px] w-full" />
                        {/* <Parallax className='absolute left-0 right-0 h-[100vh] top-0' bgImage={img3} bgImageAlt="image" strength={300}>
                        </Parallax> */}
                        <div className="absolute z-[2] lg:left-20 xl:left-60 left-5 top-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3 md:mb-8 mb-3">
                                <p className="w-12 h-[2px] bg-gray-700"></p>
                                <p className="text-white text-sm font-semibold tracking-widest uppercase">Portfolio Website</p>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl sm:text-6xl font-bold">Imran Shakha</h1>
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold md:mt-8 mt-3">Wave Box- September 26th 2017</p>
                            </div>
                            <div onClick={() => { setIsOpen(!isOpen); setTitle('imran') }} className="flex items-center lg:cursor-pointer gap-5 px-10 py-3 border rounded-full w-max mt-8 hover:scale-x-105 duration-700">
                                <IoIosArrowDroprightCircle className="text-white text-3xl" />
                                <p className="tracking-[4px] text-white font-semibold text-xs">VIEW CASE</p>
                            </div>
                        </div>
                        <p className="bg-black absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-50"></p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src={img5} alt="" className="md:h-[100vh] min-h-[400px] w-full" />
                        {/* <Parallax className='absolute left-0 right-0 h-[100vh] top-0' bgImage={img4} bgImageAlt="image" strength={300}>
                        </Parallax> */}
                        <div className="absolute z-[2] lg:left-20 xl:left-60 left-5 top-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3 md:mb-8 mb-3">
                                <p className="w-12 h-[2px] bg-gray-700"></p>
                                <p className="text-white text-sm font-semibold tracking-widest uppercase">Organizational Website</p>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl sm:text-6xl font-bold">InnoKids</h1>
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold md:mt-8 mt-3">Wave Box- October 19th 2017</p>
                            </div>
                            <div onClick={() => { setIsOpen(!isOpen); setTitle('inno') }} className="flex items-center lg:cursor-pointer gap-5 px-10 py-3 border rounded-full w-max mt-8 hover:scale-x-105 duration-700">
                                <IoIosArrowDroprightCircle className="text-white text-3xl" />
                                <p className="tracking-[4px] text-white font-semibold text-xs">VIEW CASE</p>
                            </div>
                        </div>
                        <p className="bg-black absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-50"></p>
                    </div>
                </SwiperSlide>

            </Swiper>

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
                                    {title === 'adis' && <Adis />}
                                    {title === 'imran' && <Imran />}
                                    {title === 'rong' && <Rong />}
                                    {title === 'inno' && <InnoKids />}
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

export default SliderMain



