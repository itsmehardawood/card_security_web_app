'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DiagonalHeroSection = () => {
  return (
    <div className="relative h-[710px] bg-white w-full  overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute top-0 left-0 w-full h-[480px] md:h-[600px] xl:h-[600px] lg:h-[600px] z-0 overflow-hidden">
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
      <div className="relative z-10  flex pt-35 pb-10 lg:pt-20 xl:pt-20 md:pt-20 items-start lg:items-start xl:items-start md:items-center justify-center">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Section */}
            <div className="space-y-4 md:text-left lg:text-left pt-0 lg:pt-20 md:pt-10">
              <h1 className="text-[40px] text-gray-900 sm:text-6xl md:text-5xl lg:text-3xl xl:text-[50px] font-extrabold lg:text-gray-900 md:text-gray-900 drop-shadow-lg leading-tight max-w-full xl:max-w-[100%]">
            Online Credit & Debit Card Fraud Prevention Intelligence System Designed to Grow Your Revenue
              </h1>
              
              <p className="lg:text-[16px] text-black sm:text-lg md:text-xl lg:text-gray-900 leading-relaxed drop-shadow-md max-w-full sm:max-w-2xl lg:max-w-lg  lg:mx-0"> Thousands of businesses trust CardNest Security Scan to secure transactions, prevent online fraud, and protect revenue—helping them build safer, smarter, and more profitable operations.              </p>
              
              <div className="flex flex-row  gap-4  lg:justify-start">
                <Link href="/signup" className=" lg:block md:block group relative px-6 sm:px-8 py-1 flex items-center bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base">
                  <span className="relative z-10">Start now  {" >"}</span>
                </Link>
                
              
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
               <video 
  src="/videos/main_video.mp4" 
  style={{ width: '170px', height: 'auto' }}
  className="relative z-10 right-9 left-44 top-4 object-contain"
  autoPlay
  loop
  muted
  playsInline
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

