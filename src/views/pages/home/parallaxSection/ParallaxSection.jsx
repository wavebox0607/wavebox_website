import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax'
// import ParallaxImage from './ParallaxImage'
import img1 from '../../../../assets/images/parallax.jpg'

const ParallaxSection = () => {

  return (
    <div className='relative w-full h-[100vh]'>
      <ParallaxProvider>
        <ParallaxBanner className='aspect-[2/1] h-[100vh] w-full'>
          <ParallaxBannerLayer image={img1} speed={-20}  />
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  )
}

export default ParallaxSection