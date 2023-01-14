import React, { useState } from 'react'
import CountUp from 'react-countup';
// import { RiseLoader } from 'react-spinners'
import Header from './common/Header'
import Main from './common/Main'

const Layout = () => {

  const [loader, setLoader] = useState(true)
  const [modal, setModal] = useState(false)
  const [home, setHome] = useState(false)

  setTimeout(() => {
    setLoader(false)
  }, 3000);


  setTimeout(() => {
    if (loader === true) {
      setModal(true)
    }
    else {
      setModal(false)
    }
  }, 500);

  setTimeout(() => {
    if (loader === false) {
      setHome(true)
    }
    else {
      setHome(false)
    }
  }, 0.01);


  if (loader) {
    return <LoaderThree modal={modal} loader={loader} />
  }

  return (
    <div className='relative'>
      <Header />
      <Main />
      <div className={`${home ? 'h-0' : 'h-full'} duration-[1000ms] fixed bg-[black] text-white top-0 w-full left-0 overflow-hidden z-[100]`}></div>
      <div className={`${home ? 'h-0' : 'h-full'} duration-[1000ms] fixed bg-[black] text-white bottom-0 w-full left-0 overflow-hidden z-[100]`}></div>
    </div>
  )
}

export default Layout

const LoaderThree = ({ modal, loader }) => {

  return (
    <div className='relative'>
      <div className={`h-full duration-3000 fixed bg-black text-white top-0 w-full left-0 overflow-hidden z-[100]`}>
        {/* <RiseLoader color="#36d7b7" /> */}
        <h1 className='text-6xl -mt-20 absolute top-1/2 left-1/2 -translate-x-1/2 z-[5] font-bold '>WAVE BOX</h1>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 mt-2 z-[5]'>
          <h1>Loading</h1>
        </div>
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] text-[600px] opacity-[0.03] tracking-widest'>
          <CountUp start={50} end={100} duration={3} />
        </div>
        <div className='h-[2px] w-full absolute top-1/2 left-0 -translate-y-1/2 bg-gray-600 z-[5]'></div>
        <div className={`h-[2px] ${modal ? 'w-full' : 'w-0'} duration-[2500ms] absolute top-1/2 left-0 -translate-y-1/2 bg-white z-[6]`}></div>
      </div>
    </div>
  )
}