import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-scroll"
import MobileSocialLinks from './MobileSocialLinks';
import ParticlesBackground from '../../ParticlesBackground';

const Home = () => {
  return (
    <section name="Home" className="relative w-full md:h-screen h-unset" style={{ backgroundColor: "#0B0F1A" }}>
      <div className="mx-auto flex items-center justify-center h-full px-4 py-16 md:py-0 relative">
        {/* Image */}
        <img
          src="/images/home/homerobo.png"
          alt="My profile"
          className="w-full md:w-auto"
        />
        {/* Overlapping Text */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 md:px-12 w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            𝗘𝗺𝗽𝗼𝘄𝗲𝗿𝗶𝗻𝗴 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗧𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Transform any design to match your needs effortlessly. It’s a highly customizable template built for flexibility and ease of use.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Home
