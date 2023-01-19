import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../../assets/images/client/client1.jpg'
import img2 from '../../../../assets/images/client/client2.png'
import img3 from '../../../../assets/images/client/client3.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Testimonial = () => {

    let menu = ['']

    const pagination = {
        el: '.swiper-pagination-testimonial',
        clickable: true,
        bulletElement: `swiper-pagination-bullet`,

        renderBullet: function (index, className) {

            return '<span class="' + className + '">' + (menu) + "</span>";
        },
    };

    const styleCss = `

    .swiper-pagination-testimonial {
      position: absolute;
      bottom: 60px !important;
      left: 50% !important;
      transform: translateX(-50%);
      width: auto !important;
      margin: 0;
      display: flex;
      z-index: 1;
      gap: 5px;
  }
  
  .swiper-pagination-testimonial .swiper-pagination-bullet {
      border-radius: 0%;
      width: 15px;
      height: 2px;
      opacity: 1;
      background: gray;
  
  }
  
  .swiper-pagination-testimonial .swiper-pagination-bullet-active {
      width: 25px;
      height: 2px;
      border-radius: 0px;
      transition-duration: 500ms;
      background: white;

  }
    `

    return (
        <div className='bg-black pb-20 pt-28'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] mx-auto relative bg-[#090909] xl:h-96'>
                <div className='grid grid-cols-2 lg:grid-cols-3 text-white py-5 lg:py-0'>
                    <div className='col-span-1'>
                        <h1 className=' md:text-4xl text-3xl font-bold ml-5 xl:ml-10 xl:-mt-10'>We Love Being <br />Appreciated.</h1>
                    </div>
                    <div className='col-span-2 relative xl:p-20 p-5'>
                        <div>
                            <div className='swiper-pagination-testimonial'></div>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            // spaceBetween={30}
                            pagination={pagination}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='relative group'>
                                    <p className='text-lg text-[#B3B3B3] font-medium italic'>Fantastic work! I am just impressed by their service quality and working strategy. I hired them for the development of my online store and they have satisfied me to the full by delivering the exceptional solution.</p>
                                    <div className='flex items-center gap-4 mt-10'>
                                        <img src={img1} alt="" className='h-20 rounded-full' />
                                        <p className='font-bold text-lg uppercase tracking-widest'>- Adis</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative group'>
                                    <p className='text-lg text-[#B3B3B3] font-medium italic'>WAVE BOX offered us the right guidance when we required a business website to promote our business. Before hiring them, we had a discussion with their development team and they guided us on how to convert our idea into a sophisticated and professional business website. Thanks a ton WAVE BOX. </p>
                                    <div className='flex items-center gap-4 mt-10'>
                                        <img src={img2} alt="" className='h-20 rounded-full' />
                                        <p className='font-bold text-lg uppercase tracking-widest'>- Guardian Care </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative group'>
                                    <p className='text-lg text-[#B3B3B3] font-medium italic'>Working with WAVE BOX team was a pleasant experience while making my personal portfolio website. Two things in particular about their service is exceptional.</p>
                                    <div className='flex items-center gap-4 mt-10'>
                                        <img src={img3} alt="" className='h-20 rounded-full' />
                                        <p className='font-bold text-lg uppercase tracking-widest'>- Athoi Rahman </p>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial