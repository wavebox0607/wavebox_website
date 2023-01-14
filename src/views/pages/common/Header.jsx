import React, { useEffect, useState } from 'react'
import logo from '../../../assets/images/logo.png'
import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";

const Header = () => {

    const [open, setOpen] = useState(false)
    let [modal, setModal] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            if (open === true) {
                setModal(true)
            }
            else {
                setModal(false)
            }
        }, 0.001);
    }, [open])


    if (open === true) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'unset';
    }

    const container = {
        hidden: { opacity: 0, scale: 1, x: -50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                delay: 1.2,
                duration: 0.8,
                type: "spring", 
                velocity: 2
            }
        }
    };

    return (
        <div>
            <div className='flex justify-between px-10 py-3 fixed w-full z-[5] top-0'>
                <div>
                    <NavLink to="/"><img src={logo} alt="" className='h-14' /></NavLink>
                </div>
                <div onClick={() => setOpen(!open)}>
                    <HiMenu className='text-4xl text-white lg:cursor-pointer' />
                </div>
                {/* <div onClick={() => setOpen(!open)} className={`flex gap-3 items-center lg:cursor-pointer ${open && 'fixed z-[6] right-10 top-5'}`}>
                    <div className='group relative z-[6] text-white'>
                        <HiOutlineMinus className={`${open && '-rotate-45 mt-3'} text-4xl duration-1000`} />
                        <HiOutlineMinus className={`${open && 'opacity-0'} absolute top-3 text-4xl duration-1000`} />
                        <HiOutlineMinus className={`${open ? 'rotate-45 top-3' : 'top-6'} text-4xl absolute left-0 duration-1000`} />
                    </div>
                    <div className={`${open ? 'mt-3' : 'mt-5'} text-white text-xl relative z-[6`}>
                        <p>Menu</p>
                    </div>
                </div> */}

                {open &&
                    <div className='relative'>
                        <div onClick={() => setOpen(!open)} className="fixed top-10 right-10 lg:cursor-pointer z-[6] bg-black text-white rounded-full w-10 h-10 flex justify-center items-center"><AiOutlineClose className="text-3xl" /></div>
                        <div onClick={() => setOpen(!open)} className='fixed m-0 h-full overflow-y-hidden top-0 left-0 bottom-0 right-0 bg-black text-gray-300 font-medium text-5xl z-[5]  flex flex-col justify-center gap-y-5 pl-40 '>

                            <NavLink to="/"><motion.p className="hover:text-white w-max" variants={container} initial="hidden" animate="visible">Home</motion.p></NavLink>
                            <NavLink to="/about"><motion.p className="hover:text-white w-max" variants={container} initial="hidden" animate="visible">About Us</motion.p></NavLink>
                            <NavLink to="/portfolio"><motion.p className="hover:text-white w-max" variants={container} initial="hidden" animate="visible">Our Work</motion.p></NavLink>
                            <NavLink to="/services"><motion.p className="hover:text-white w-max" variants={container} initial="hidden" animate="visible">What We Offer</motion.p></NavLink>
                            <NavLink to="/contact"><motion.p className="hover:text-white w-max" variants={container} initial="hidden" animate="visible">Contact</motion.p></NavLink>


                        </div>
                        <div className={`fixed top-0 left-0 w-full bg-gray-700 bg-opacity-40 z-[50] duration-[1500ms] ${modal ? 'h-0' : 'h-full'}`}></div>
                        <div className={`fixed bottom-0 right-0 w-full bg-gray-700 bg-opacity-40 z-[50] duration-[1500ms] ${modal ? 'h-0' : 'h-full'}`}></div>
                        <div className={`fixed top-0 left-0 w-full bg-black z-[60] duration-[500ms] ${modal ? 'h-0' : 'h-full'}`}></div>
                        <div className={`fixed bottom-0 right-0 w-full bg-black z-[60] duration-[500ms] ${modal ? 'h-0' : 'h-full'}`}></div>
                    </div>
                }


            </div>

        </div>
    )
}

export default Header