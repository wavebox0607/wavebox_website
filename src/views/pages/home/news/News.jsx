import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../../assets/images/service/service.jpeg'
import img2 from '../../../../assets/images/service/portfolio.jpeg'
import img3 from '../../../../assets/images/service/content.jpeg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const News = () => {

    let menu = ['']

    const pagination = {
        el: '.swiper-pagination-news',
        clickable: true,
        bulletElement: `swiper-pagination-bullet`,

        renderBullet: function (index, className) {

            return '<span class="' + className + '">' + (menu) + "</span>";
        },
    };

    const styleCss = `

    .swiper-pagination-news {
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
  
  .swiper-pagination-news .swiper-pagination-bullet {
      border-radius: 0%;
      width: 15px;
      height: 2px;
      opacity: 1;
      background: gray;
  
  }
  
  .swiper-pagination-news .swiper-pagination-bullet-active {
      width: 25px;
      height: 2px;
      border-radius: 0px;
      transition-duration: 500ms;
      background: white;

  }
    `
    return (
        <div className='bg-black text-white xl:py-20'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] px-5 xl:px-0 mx-auto relative'>
                <div className='flex gap-3 items-center'>
                    <div className='flex items-center'>
                        <p className='bg-gray-300 h-1 w-1 rounded-full'></p>
                        <p className='bg-gray-900 h-[2px] w-10 rounded-full'></p>
                    </div>
                    <h1 className='uppercase text-sm font-semibold text-[#AAAAAA]'>LATEST NEWS</h1>
                </div>

                <div>
                    <h1 className='md:text-5xl text-3xl font-semibold mt-5 leading-[50px] mb-20'>Posts & Forums</h1>
                </div>

                <div>
                    <div className='swiper-pagination-news'></div>
                </div>

                <Swiper
                    // slidesPerView={2}
                    loop={true}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 1000,
                    //     disableOnInteraction: false,
                    // }}
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
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                      }}
                >
                    <SwiperSlide>
                        <div>
                            <img src={img1} alt="" className='h-[560px] w-full' />
                            <div className='bg-[#090909] text-white h-full w-[90%] float-right p-10 relative z-[1] -mt-16'>
                                <h1 className='font-semibold mb-2'>Service</h1>
                                <h1 className='text-2xl font-bold mb-4'>Our Valuable Services</h1>
                                <p className='font-medium'>Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img2} alt="" className='h-[560px] w-full' />
                            <div className='bg-[#090909] text-white h-full w-[90%] float-right p-10 relative z-[1] -mt-16'>
                                <h1 className='font-semibold mb-2'>Awareness</h1>
                                <h1 className='text-2xl font-bold mb-4'>Importance of Portfolio Website</h1>
                                <p className='font-medium'>Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img3} alt="" className='h-[560px] w-full' />
                            <div className='bg-[#090909] text-white h-full w-[90%] float-right p-10 relative z-[1] -mt-16'>
                                <h1 className='font-semibold mb-2'>Service</h1>
                                <h1 className='text-2xl font-bold mb-4'>Our Promotional Services</h1>
                                <p className='font-medium'>Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default News