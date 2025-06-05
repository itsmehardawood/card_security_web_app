'use client'
import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Gradient */}
<div className="fixed inset-0 z-0">
  {/* Base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-300 via-purple-300 via-blue-300 to-teal-200"></div>
  
  {/* Wavy layers */}
  <div className="absolute inset-0 animate-wave-1 bg-gradient-to-r from-pink-400/30 to-purple-400/30" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}></div>
  <div className="absolute inset-0 animate-wave-2 bg-gradient-to-r from-blue-400/40 to-cyan-400/40" style={{clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)'}}></div>
  <div className="absolute inset-0 animate-wave-3 bg-gradient-to-r from-purple-400/25 to-pink-400/25" style={{clipPath: 'polygon(0 10%, 100% 25%, 100% 75%, 0 90%)'}}></div>
</div>      
      {/* Overlay blobs for extra visual appeal */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full filter blur-3xl animate-blob-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-400/10 to-teal-600/10 rounded-full filter blur-3xl animate-blob-slow"></div>
      </div>

      {/* Header - Keep original styling */}
      <header className="relative z-10 bg-white/90 border-b border-gray-200/50">
        <div className="bg-gray-800 p-2 flex space-x-5">
          <span className="flex space-x-2 items-center text-white">
            <FaPhoneAlt className="text-red-400" /> 
            <h3>971-923434934</h3>
          </span>
          <span className="flex items-center space-x-2 text-white">
            <IoLocation className="text-red-400"/>  
            <span>Sant Building NYC</span>
          </span>
        </div>

        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Card Security
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {["About", "Features", "Benefits", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <Link href="/payments" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                Buy Now
              </Link>
              <Link href="/login" className="border border-blue-950 text-blue-950 py-2 px-4 rounded-lg hover:bg-blue-950 hover:text-white transition duration-200">
                Log in 
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="pt-4 pb-2 space-y-2">
              {["About", "Features", "Benefits", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <Link href="/payments"
                onClick={() => setIsMenuOpen(false)}
                className="w-full block text-left px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Buy Now
              </Link>

              <Link href="/login"
                onClick={() => setIsMenuOpen(false)}
                className=" block text-left px-4 py-3 border text-white border-blue-950 bg-blue-950 rounded-lg  transition duration-200"
              >     
                Log in
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Keep original styling */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug sm:leading-tight">
              Unlock Your Potential with Our Innovative Solution
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
              Discover how our project can revolutionize your workflow and
              deliver unprecedented results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Log in
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Video Section - Updated with transparent background */}
      <section className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            See Our Project in Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg">Video unavailable</p>
                  <p className="text-sm opacity-75">Watch on YouTube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated with transparent background */}
      <section id='features' className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Intuitive Interface
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easy-to-use features designed with user-friendly and advanced
                tools for all.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Blazing Fast Performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized code and advanced caching for speedy and efficient
                operations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Robust Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is 100% secure with advanced encryption and security
                protocols.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Comprehensive Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gain deep insights with powerful customizable reporting and
                analysis.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Seamless Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect effortlessly with your existing tools and workflow.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Cloud-Powered Scalability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Scale without limits with our cloud-based infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Updated with transparent background */}
      <section id='benefits' className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold text-center mb-16">
              Benefits for You
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Save Time & Resources
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Automate tedious tasks and streamline your operations to
                  reduce time and reduce costs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Boost Productivity
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Empower your team with smart features enabling efficiency
                  and collaboration, leading to higher output.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Achieve Better Outcomes
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Make data-driven decisions with advanced analytics improving
                  outcomes that drive your results.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Future-Proof Your Business
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Stay ahead of the curve with a scalable platform designed
                  for tomorrow challenges.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get Started Today!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Updated with transparent background */}
      <section id='about' className="relative z-10 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are passionate innovators dedicated to creating solutions that
              transform the way you work. Our team combines cutting-edge
              technology with deep industry expertise to deliver products that
              exceed expectations and drive real results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience and a commitment to excellence, we are
              here to help you unlock your full potential and achieve your
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with transparent background */}
      <section id='contact' className="relative z-10 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are passionate innovators dedicated to creating solutions that
              transform the way you work. Our team combines cutting-edge
              technology with deep industry expertise to deliver products that
              exceed expectations and drive real results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With years of experience and a commitment to excellence, we are
              here to help you unlock your full potential and achieve your
              goals.
            </p>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-2">
                📍 <strong>Address:</strong> 123 Innovation Drive, Tech City, USA
              </p>
              <p className="text-gray-700 mb-2">
                📞 <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-700 mb-2">
                ✉️ <strong>Email:</strong> contact@yourcompany.com
              </p>
              <p className="text-gray-700">
                🕒 <strong>Business Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Keep original styling */}
      <footer className="relative z-10 bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4">Card Security</div>
          <p className="text-gray-400 mb-8">
            © 2025 Card Security. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
@keyframes wave-1 {
  0%, 100% {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  50% {
    clip-path: polygon(0 5%, 100% 15%, 100% 90%, 0 95%);
  }
}

@keyframes wave-2 {
  0%, 100% {
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);
  }
  50% {
    clip-path: polygon(0 20%, 100% 10%, 100% 95%, 0 80%);
  }
}

@keyframes wave-3 {
  0%, 100% {
    clip-path: polygon(0 10%, 100% 25%, 100% 75%, 0 90%);
  }
  50% {
    clip-path: polygon(0 25%, 100% 10%, 100% 90%, 0 75%);
  }
}

.animate-wave-1 {
  animation: wave-1 8s ease-in-out infinite;
}

.animate-wave-2 {
  animation: wave-2 12s ease-in-out infinite reverse;
}

.animate-wave-3 {
  animation: wave-3 10s ease-in-out infinite;
}
      `}</style>
    </div>
  );
};

export default LandingPage;