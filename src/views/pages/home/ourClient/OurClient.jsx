import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../../assets/images/logo/Logo-1.jpg'
import img2 from '../../../../assets/images/logo/Logo-2.jpg'
import img3 from '../../../../assets/images/logo/Logo-3.jpg'
import img4 from '../../../../assets/images/logo/Logo-4.jpg'
import img5 from '../../../../assets/images/logo/Logo-5.jpg'
import img6 from '../../../../assets/images/logo/Logo-6.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const OurClient = () => {

    let menu = ['']

    const pagination = {
        el: '.swiper-pagination-client',
        clickable: true,
        bulletElement: `swiper-pagination-bullet`,

        renderBullet: function (index, className) {

            return '<span class="' + className + '">' + (menu) + "</span>";
        },
    };

    const styleCss = `

    .swiper-pagination-client {
      position: absolute;
      bottom: -30px !important;
      left: 50% !important;
      transform: translateX(-50%);
      width: auto !important;
      margin: 0;
      display: flex;
      z-index: 1;
      gap: 5px;
  }
  
  .swiper-pagination-client .swiper-pagination-bullet {
      border-radius: 50%;
      width: 5px;
      height: 5px;
      opacity: 1;
      background: gray;
  
  }
  
  .swiper-pagination-client .swiper-pagination-bullet-active {
      width: 5px;
      height: 5px;
      border-radius: 25px;
      transition-duration: 500ms;
      background: white;

  }
    `
    return (
        <div className='bg-black text-white py-20'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] px-5 xl:px-0 mx-auto relative'>
                <div className='flex gap-3 items-center'>
                    <div className='flex items-center'>
                        <p className='bg-gray-300 h-1 w-1 rounded-full'></p>
                        <p className='bg-gray-900 h-[2px] w-10 rounded-full'></p>
                    </div>
                    <h1 className='uppercase text-[#AAAAAA] text-sm font-semibold'>Our Clients</h1>
                </div>

                <div>
                    <h1 className='xl:text-5xl text-4xl font-semibold mt-5 leading-[50px] mb-20'>Your successful, our<br className='xl:block hidden' /> reputation</h1>
                </div>

                <div>
                    <div className='swiper-pagination-client'></div>
                </div>

                <Swiper
                    // slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={pagination}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper flex justify-between"
                    breakpoints= {{
                        300: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView:3,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                      }}
                >
                    <SwiperSlide><img src={img6} alt="" className='h-48 w-full' /></SwiperSlide>
                    <SwiperSlide><img src={img1} alt="" className='h-48 w-full' /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" className='h-48 w-full' /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" className='h-48 w-full' /></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" className='h-48 w-full' /></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" className='h-48 w-full' /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default OurClient