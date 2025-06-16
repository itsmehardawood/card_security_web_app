'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DiagonalHeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Diagonal Background Sections */}
      <div className="absolute inset-0">
        {/* Upper Gradient Section */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 28%, 0 80%)'
          }}
        >
          {/* Base animated gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-orange-400 opacity-70"
            style={{
              animation: 'gradientShift 12s ease-in-out infinite',
              filter: 'blur(1px)'
            }}
          />
          
          {/* Secondary color layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-blue-300 via-purple-500 to-pink-500 opacity-50"
            style={{
              animation: 'gradientShift2 15s ease-in-out infinite reverse',
              filter: 'blur(2px)'
            }}
          />
          
          {/* Tertiary flowing layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 opacity-40"
            style={{
              animation: 'gradientFlow 18s ease-in-out infinite',
              filter: 'blur(3px)'
            }}
          />
          
          {/* Smooth overlay blend */}
          <div 
            className="absolute inset-0 bg-gradient-to-bl from-red-600 via-blue- to-yellow-400 opacity-30"
            style={{
              animation: 'gradientPulse 10s ease-in-out infinite',
              filter: 'blur(1.5px)'
            }}
          />
        </div>
        
        {/* Lower White Section */}
        <div 
          className="absolute inset-0 bg-white"
          style={{
            clipPath: 'polygon(0 80%, 100% 60%, 100% 100%, 0 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mx-10">
            
            {/* Left Content Section */}
            <div className="space-y-6 text-center lg:text-left pt-0 lg:pt-20 md:pt-10 ">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[78px] font-extrabold text-gray-900 drop-shadow-lg leading-tight max-w-full lg:max-w-[85%]">
                Financial infrastructure to grow your revenue
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-gray-900 leading-relaxed drop-shadow-md max-w-full sm:max-w-2xl lg:max-w-lg mx-auto lg:mx-0">
                Experience innovation like never before with our cutting-edge solutions. 
                Build, scale, and succeed with technology that adapts to your vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link href="/payments" className=" hidden lg:block md:block group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base">
                  <span className="relative z-10">Get Started</span>
                </Link>
                
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-800 lg:border-white text-black font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-8  hidden lg:block lg:justify-end mt-8 lg:mt-0">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-full">
                <Image 
                  src="/images/heroimg.png" 
                  width={900} 
                  height={800} 
                  alt="hero img"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .absolute.inset-0:first-child > div:first-child {
            clip-path: polygon(0 0, 100% 0, 100% 70%, 0 85%) !important;
          }
          .absolute.inset-0:first-child > div:last-child {
            clip-path: polygon(0 85%, 100% 70%, 100% 100%, 0 100%) !important;
          }
        }
        
        @media (max-width: 768px) {
          .absolute.inset-0:first-child > div:first-child {
            clip-path: polygon(0 0, 100% 0, 100% 75%, 0 90%) !important;
          }
          .absolute.inset-0:first-child > div:last-child {
            clip-path: polygon(0 90%, 100% 75%, 100% 100%, 0 100%) !important;
          }
        }
        
        @keyframes gradientPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes gradientShift {
          0%, 100% {
            opacity: 0.7;
            filter: blur(1px) hue-rotate(0deg);
          }
          25% {
            opacity: 0.5;
            filter: blur(2px) hue-rotate(90deg);
          }
          50% {
            opacity: 0.8;
            filter: blur(1.5px) hue-rotate(180deg);
          }
          75% {
            opacity: 0.6;
            filter: blur(2.5px) hue-rotate(270deg);
          }
        }
        
        @keyframes gradientShift2 {
          0%, 100% {
            opacity: 0.5;
            filter: blur(2px) hue-rotate(0deg) saturate(1.2);
          }
          33% {
            opacity: 0.7;
            filter: blur(1px) hue-rotate(120deg) saturate(1.5);
          }
          66% {
            opacity: 0.4;
            filter: blur(3px) hue-rotate(240deg) saturate(0.8);
          }
        }
        
        @keyframes gradientFlow {
          0%, 100% {
            opacity: 0.4;
            filter: blur(3px) hue-rotate(0deg) brightness(1);
          }
          20% {
            opacity: 0.6;
            filter: blur(2px) hue-rotate(72deg) brightness(1.2);
          }
          40% {
            opacity: 0.3;
            filter: blur(4px) hue-rotate(144deg) brightness(0.9);
          }
          60% {
            opacity: 0.7;
            filter: blur(1.5px) hue-rotate(216deg) brightness(1.1);
          }
          80% {
            opacity: 0.5;
            filter: blur(2.5px) hue-rotate(288deg) brightness(1.3);
          }
        }
      `}</style>
    </div>
  );
};

export default DiagonalHeroSection;