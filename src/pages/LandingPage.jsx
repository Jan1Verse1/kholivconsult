import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/hero'
import OurServices from '../components/ourServices'
import ImageComponent from '../components/image'
import Testimonials from '../components/testimonials'
import ContactUs from '../components/contact'
import Footer from '../components/footer'

import Image1 from '../assets/images/Image1.png'


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurServices />
 
      <ImageComponent 
        src={Image1}
        alt="Corporate man smiling"
        className="mb-0"
        objectFit="cover"
        width="100%"
        height="800px"
        rounded={false}
        shadow={false}
        overlay={false}
        overlayOpacity={0}
      />
      <Testimonials />
      <ContactUs />
      <Footer />  
    </>
  )
}

export default LandingPage
