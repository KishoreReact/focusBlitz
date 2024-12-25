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
  <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 leading-tight drop-shadow-lg">
    𝗘𝗺𝗽𝗼𝘄𝗲𝗿𝗶𝗻𝗴 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗧𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗧𝗶𝗼𝗻
  </h1>
  <ul className="mt-6 ">
    <li className="text-lg md:text-xl text-gray-800 transform transition duration-300 ease-in-out hover:bg-indigo-600 hover:scale-105 p-4 rounded-lg">
      <div className="flex items-start">
        <span className="mr-3 text-indigo-500 font-bold text-2xl">&#10003;</span>
        <span className="font-semibold text-purple-600">Tailored Solutions for Every Business:</span>
      </div>
      <p className="text-sm text-white mt-2 ml-8">
        Whether you are a startup or a large enterprise, our solutions are crafted to meet your unique business requirements.
      </p>
    </li>
    <li className="text-lg md:text-xl text-gray-800 transform transition duration-300 ease-in-out hover:bg-purple-600 hover:scale-105 p-4 rounded-lg">
      <div className="flex items-start">
        <span className="mr-3 text-purple-500 font-bold text-2xl">&#10003;</span>
        <span className="font-semibold text-indigo-600">Future-Ready Technology:</span>
      </div>
      <p className="text-sm text-white mt-2 ml-8">
        Stay ahead of the curve with our cutting-edge tools and technologies designed to drive innovation and efficiency.
      </p>
    </li>
    <li className="text-lg md:text-xl text-gray-800 transform transition duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 p-4 rounded-lg">
      <div className="flex items-start">
        <span className="mr-3 text-pink-500 font-bold text-2xl">&#10003;</span>
        <span className="font-semibold text-purple-600">Seamless User Experience:</span>
      </div>
      <p className="text-sm text-white mt-2 ml-8">
        Delivering intuitive and user-friendly interfaces that ensure seamless interactions for your customers.
      </p>
    </li>
    <li className="text-lg md:text-xl text-gray-800 transform transition duration-300 ease-in-out hover:bg-indigo-600 hover:scale-105 p-4 rounded-lg">
      <div className="flex items-start">
        <span className="mr-3 text-indigo-500 font-bold text-2xl">&#10003;</span>
        <span className="font-semibold text-purple-600">End-to-End Support:</span>
      </div>
      <p className="text-sm text-white mt-2 ml-8">
        From ideation to execution, we provide complete support at every stage of your digital transformation journey.
      </p>
    </li>
  </ul>
</div>



      </div>
    </section>
  );
}

export default Home
