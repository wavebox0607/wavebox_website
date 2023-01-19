import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../../assets/images/work/work1.jpg'
import img2 from '../../../../assets/images/work/work2.jpg'
import img3 from '../../../../assets/images/work/work3.jpg'
import img4 from '../../../../assets/images/work/work4.jpg'
import img5 from '../../../../assets/images/work/work5.jpg'



// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Work = () => {

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
      bottom: 0px !important;
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
        <div className='bg-black text-white xl:py-20 py-10 relative'>
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
                breakpoints= {{
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
                <SwiperSlide>
                    <div className='relative group'>
                        <img src={img1} alt="" className='h-[560px] w-full' />
                        <div className='absolute top-0 bottom-0 left-0 w-full bg-black bg-opacity-25 group-hover:bg-opacity-50 duration-500 z-[1]'></div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center text-white z-[2] w-full'>
                            <div className='group-hover:-translate-y-10 duration-500 flex flex-col items-center mb-1'>
                                <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1'>Architecture</h1>
                                <h1 className='text-2xl font-bold group-hover:text-3xl duration-500'>PANDIUM</h1>
                            </div>
                            <p className='font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-500 uppercase'>View Project</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1 text-center'>WHERE EVERYONE IS <br/>FAMILY</h1>
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
                                <h1 className='font-medium tracking-[2px] uppercase text-sm group-hover:text-lg duration-500 mb-1 text-center'>MAKE THE CUSTOMER HERO<br/> OF OUR STORY</h1>
                                <h1 className='text-2xl font-bold group-hover:text-3xl duration-500'>ALIF'S ENGINEERING</h1>
                            </div>
                            <p className='font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-500 uppercase'>View Project</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Work