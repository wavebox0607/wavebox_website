import React, { useEffect, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import Footer from '../common/Footer'
import Experience from './experience/Experience'
import News from './news/News'
import OurClient from './ourClient/OurClient'
import OurServices from './ourServices/OurServices'
import ParallaxSection from './parallaxSection/ParallaxSection'
// import ParallaxSection from './parallaxSection/ParallaxImage'
import SliderMain from './Slider/SliderMain'
// import Team from './team/Team'
import TeamTwo from './team/TeamTwo'
import Testimonial from './testimonial/Testimonial'
import Thoughts from './thoughts/Thoughts'
import Why from './why/Why'
import Work from './work/Work'

const Home = () => {

  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
      }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 0.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {/* <SliderMain /> */}
        <Experience />
        <OurServices />
        <ParallaxSection />
        <Why />
        <Work />
        <Testimonial />
        <News />
        <TeamTwo />
        <OurClient />
        <Thoughts />
        {/* <Team /> */}
        <Footer />

      </div>
    </div>
  )
}

export default Home