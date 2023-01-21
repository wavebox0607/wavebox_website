import React, { useState, createRef, Fragment, useEffect } from "react";
import Slider from 'react-slick';
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Dialog, Transition } from '@headlessui/react'
import ServiceDetails from "./ServiceDetails";
import { services } from "./Services"
// import ScrollToTop from "../../components/utils/ScrollToTop";


const OurService = () => {

    const [id, setId] = useState(0)
    const [allId, setAllId] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (isOpen === true) {
                setModal(true)
            }
            else {
                setModal(false)
                setAllId(0)
            }
        }, 200);

    }, [isOpen])

    if (id) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'unset';
    }




    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // const result = services.filter(i => i?.id !== allId)
    // console.log(result, "result");
    // console.log(allId, "allId");

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
        <div className="App hello">

            <div className={`relative overflow-hidden`}>
                <style>{styleCss}</style>
                {/* for small images */}
                {/* selected image show  */}
                <div className='relative z-[1] w-full'>
                    <div className='h-[100vh] w-full relative'>
                        <img src={services[0]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 0 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <img src={services[1]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 1 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <img src={services[2]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 2 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <img src={services[3]?.image[0]} alt="" className={`h-full lg:opacity-100 opacity-0 ${id === 3 ? 'left-0 w-full z-[2] duration-[1000ms]' : 'right-0 w-0 duration-[1500ms]'} top-0 absolute`} />
                        <div className='absolute top-0 left-0 z-[100] w-full'>

                            <Slider {...settings} ref={customeSlider} className='text-white'>
                                {
                                    services.map((item, index) =>
                                        <div key={index} onMouseEnter={() => setId(index)} onClick={() => setAllId(item?.id)} className="lg:bg-transparent bg-black border-r border border-white h-[100vh] relative">
                                            <div className="absolute bottom-10 left-5 flex flex-col gap-5 z-[3] ">
                                                <p className="text-[100px] font-bold">0{item?.id}</p>
                                                <div>
                                                    <p className="text-[20px] font-semibold">{item?.title}</p>
                                                    <p className="text-[16px] ">{item?.description.slice(0, 40)}</p>
                                                </div>
                                                <p onClick={() => setIsOpen(!isOpen)} className="text-[20px] px-5 rounded-md py-1 bg-green-500 w-max lg:cursor-pointer">Details</p>
                                            </div>
                                            <img src={item?.image[0]} alt="" className={`lg:h-[100vh] h-[50vh] left-0 w-full z-[2] top-0 absolute lg:opacity-0`} />

                                            {/* <p className="bg-black md:absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-50"></p> */}
                                            {/* <p className="bg-black absolute top-0 left-0 bottom-0 right-0 z-[1] bg-opacity-20"></p> */}
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
            </div>


            <Transition show={isOpen} as={Fragment}  >

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
                        <div className="fixed inset-0 overflow-y-auto" >
                            {/* Container to center the panel */}
                            <div className="flex min-h-full items-center justify-center">
                                {/* The actual dialog panel  */}
                                <div onClick={() => setIsOpen(!isOpen)} className="fixed top-10 right-10 lg:cursor-pointer z-[3] bg-black text-white rounded-full w-10 h-10 flex justify-center items-center"><AiOutlineClose className="text-3xl" /></div>
                                <Dialog.Panel className={`mx-auto h-[100vh] min-w-full rounded bg-black text-white overflow-y-auto`}>
                                    <div id="section-1" className="grid grid-cols-4 py-10 px-10 xl:py-20 xl:px-40 gap-10 h-full w-full" >
                                        <div className="xl:col-span-3 col-span-4">
                                            <ServiceDetails item={services[id]} />
                                        </div>
                                        <div className='xl:col-span-1 col-span-4'>
                                            <div className='grid grid-cols-3 xl:grid-cols-1 gap-x-5'>
                                                {
                                                    services.map((item, index) =>
                                                        <div key={item?.id} className="" onClick={handleClickScroll}>
                                                            {item?.id === allId ? <div className="hidden"></div> : <div onClick={() => { setId(index); setAllId(item?.id); }} className="mb-10 lg:cursor-pointer">
                                                                <img src={item?.image[0]} alt="" className='min-w-full h-auto' />
                                                                <h1 className='xl:text-lg text-sm font-bold mt-3'>{item?.title}</h1>
                                                            </div>
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

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

export default OurService





