import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'
import WhyChooseUs from './why-choose-us/WhyChooseUs'
import StatsSection from './StatsSection/StatsSection'

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/Btech.jpg'},
        {image: '/images/certificates/ReactJS.jpg'},
        {image: '/images/certificates/btech1.png'},
        
        
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <WhyChooseUs/>
            <MyProjects />
            {/* <Techs /> */}
            <StatsSection/>
            <CertificateSlider certificates={certificates} />
            <Contact />
        </>
    )
}

export default HomePage