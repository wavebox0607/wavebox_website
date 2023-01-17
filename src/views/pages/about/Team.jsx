import React from 'react'
import img1 from '../../../assets/images/team/team2.jpg'
import img2 from '../../../assets/images/team/team3.jpeg'
import img3 from '../../../assets/images/team/team4.jpg'
// import img3 from '../../../assets/images/team/team4.jpg'
// import img3 from '../../../assets/images/team/team4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const Team = () => {

    const styleCss = `
    @import url('https://fonts.googleapis.com/css2?family=Alatsi&display=swap');
    .text-shadow {
        text-shadow: 2px 7px 5px rgba(0,0,0,0.3);
      }
    
    h1 {
        font-family: 'Alatsi', sans-serif;
    }
      
    `
    return (
        <div className='bg-white text-black'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] mx-auto pt-20 pb-24'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className="col-span-2">
                        <Swiper
                            effect={"coverflow"}
                            loop={true}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"3"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            // pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper rounded-xl overflow-hidden "
                        >
                            <SwiperSlide>
                                <img src={img1} alt="img" className='rounded-xl h-80 overflow-hidden border-4 border-black' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} alt="img" className='rounded-xl h-80 overflow-hidden border-4 border-black' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} alt="img" className='rounded-xl h-80 overflow-hidden border-4 border-black' />
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    <div className='flex justify-center flex-col items-end'>
                        <p className='font-bold text-lg text-shadow float-right'>MEET OUR</p>
                        <h1 className='font-medium text-7xl text-[#930D21] mt-3 tracking-widest'>TEAM</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team

const team = [
    {
        image: img1,
        name: 'Hasib Ahmed Soyad',
        title: 'Founder & CEO'
    },
]