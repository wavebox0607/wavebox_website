import React from 'react'
import Home from '../home/Home'
import { Route, Routes } from 'react-router-dom';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import Contact from '../contact/Contact';
import ScrollToTop from '../../components/utils/ScrollToTop';
import OurService from '../ourService/OurService';
import Website from '../ourService/Website';
import WebApplication from '../ourService/WebApplication';
import MobileApp from '../ourService/MobileApp';
import SocialMedia from '../ourService/SocialMedia';

const Main = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/website-development" element={<Website/>} />
        <Route path="/web-application-development" element={<WebApplication/>} />
        <Route path="/mobile-app-development" element={<MobileApp/>} />
        <Route path="/social-media-marketing" element={<SocialMedia/>} />
      </Routes>
    </>
  )
}

export default Main