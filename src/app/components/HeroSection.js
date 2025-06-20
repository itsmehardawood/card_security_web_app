'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DiagonalHeroSection = () => {
  return (
    <div className="relative  bg-white w-full min-h-screen  overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute top-0 left-0 w-full h-[420px] md:h-[600px] xl:h-[] lg:h-[600px] z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill"
        >
          <source src="/videos/animation.mp4" type="video/mp4" />
        </video>

        {/* Optional overlay to control video visibility */}
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      {/* Content Container - Now properly centered */}
      <div className="relative z-10 min-h-screen flex pt-44 lg:pt-20 xl:pt-20 md:pt-20 justify-center">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Section */}
            <div className="space-y-4 md:text-left lg:text-left pt-0 lg:pt-20 md:pt-10">
              <h1 className="text-[50px] text-gray-900 sm:text-6xl md:text-5xl lg:text-5xl xl:text-[73px] font-extrabold lg:text-gray-900 md:text-gray-900 drop-shadow-lg leading-tight max-w-full xl:max-w-[100%]">
                Financial infrastructure to grow your revenue
              </h1>
              
              <p className="lg:text-[16px] text-black sm:text-lg md:text-xl lg:text-gray-900 leading-relaxed drop-shadow-md max-w-full sm:max-w-2xl lg:max-w-lg  lg:mx-0">
            Join the million of companies that use Card App to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
              </p>
              
              <div className="flex flex-row  gap-4  lg:justify-start">
                <Link href="/payments" className=" lg:block md:block group relative px-6 sm:px-8 py-1 flex items-center bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base">
                  <span className="relative z-10">Start now  {" >"}</span>
                </Link>
                
                <button className="px-6 sm:px-8 py-2 sm:py-1 border-2 border-gray-800 lg:border-white text-black font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-8 hidden lg:block lg:justify-end mt-8 lg:mt-0">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-full relative">
                
                {/* Background image */}
                <Image 
                  src="/images/image.png" 
                  width={900} 
                  height={800} 
                  alt="background decoration"
                  className="absolute top-2 right left-64 w-full h-auto object-contain opacity-90 z-0"
                />
                
                {/* Main hero image */}
                <Image 
                  src="/images/heroimg.png" 
                  width={900} 
                  height={800} 
                  alt="hero img"
                  className="relative z-10 w-full h-auto opacity-95 right-9 top-4 object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagonalHeroSection;