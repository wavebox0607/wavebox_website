import React from 'react'
import Home from '../home/Home'
import { Route, Routes } from 'react-router-dom';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import Contact from '../contact/Contact';
import ScrollToTop from '../../components/utils/ScrollToTop';
import OurService from '../ourService/OurService';

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
      </Routes>
    </>
  )
}

export default Main