import React from 'react'
import img1 from '../../../assets/images/team/Soyad.jpg'
import img2 from '../../../assets/images/team/Deepa.jpg'
import img3 from '../../../assets/images/team/Lina.jpeg'
import img4 from '../../../assets/images/team/Ashik.jpg'
import img5 from '../../../assets/images/team/Rayhan.jpg'
// import img3 from '../../../assets/images/team/team4.jpg'
// import img3 from '../../../assets/images/team/team4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

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

    const prev = 'team_Prev'
    const next = 'team_Next'

    return (
        <div className='bg-white text-black'>
            <style>{styleCss}</style>
            <div className='xl:max-w-[1200px] mx-auto pt-20 pb-24'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className="col-span-2 w-full order-last md:order-first relative">
                        <div className='absolute inset-0 flex items-center z-[3]'>
                            <div className='flex justify-between w-full items-center'>
                                <div className={`${prev}`}>
                                    <IoMdArrowDropleft className='text-4xl text-[#930D21] font-serif font-bold' />
                                </div>
                                <div className={`${next} xl:mr-5`}>
                                    <IoMdArrowDropright className=' text-4xl text-[#930D21] font-serif font-bold' />
                                </div>

                            </div>
                        </div>
                        <Swiper
                            effect={"coverflow"}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: `.${prev}`,
                                nextEl: `.${next}`,
                            }}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"3"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            // pagination={true}
                            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                            className="mySwiper w-full">
                            {
                                team?.map((team, id) =>
                                    <SwiperSlide className='' key={id}>
                                        <img src={team?.image} alt="img" className='rounded-xl overflow-hidden border-4 border-black h-60 lg:h-80' />
                                        <div className='text-center mt-3 bg-white'>
                                            <h1 className="text-gray-700 uppercase font-bold text-lg text-shadow">{team?.name}</h1>
                                            <p className="text-[#930D21] uppercase font-bold text-shadow">{team?.title}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            }


                        </Swiper>
                    </div>

                    <div className='flex justify-center flex-col items-center xl:items-end'>
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
    {
        image: img2,
        name: 'Hasina Parvin Deepa',
        title: 'Director Sales & Marketing'
    },
    {
        image: img3,
        name: 'Tamanna Parvin Lina',
        title: 'Director of Finance'
    },
    {
        image: img4,
        name: 'Ashiqur Rahman',
        title: 'Product Designer'
    },
    {
        image: img5,
        name: 'Rayhan Sheikh',
        title: 'Frontend Developer'
    },
]