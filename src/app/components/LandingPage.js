'use client'
import React, { useState } from "react";

import DiagonalHeroSection from "./HeroSection";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
   <nav className="bg-transparent absolute w-full  top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-white">
            Card App
          </div>

          {/* Desktop Navigation - Only show on large screens */}
          <div className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button - Only show on large screens */}
          <div className="hidden lg:block space-x-5">
            <Link href="/login" className="text-white hover:text-teal-300 transition-colors duration-200 font-medium mr-6">
              Sign In
            </Link>
            <button
              onClick={() => scrollToSection('benefits')}
              className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button - Show on medium and small screens */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-teal-300 focus:outline-none p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Overlay - Show on medium and small screens */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Sidebar */}
            <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <div className="text-xl font-bold text-white">
                  Card App
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-teal-300 p-2 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <div className="flex flex-col p-6 space-y-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Contact
                </button>
                
                {/* Sign In Link */}
                <div className="pt-4 border-t border-gray-700">
                  <Link 
                    href="/login" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                  >
                    Sign In
                  </Link>
                </div>
                
                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      scrollToSection('benefits');
                      setIsMenuOpen(false);
                    }}
                    className="bg-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 w-full text-center shadow-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Animation Background */}
      <div id="hero">
        <DiagonalHeroSection/>
      </div>

      {/* Video Section */}
      <section className="py-16 px-6 bg-white">
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

      {/* Features Section */}
      <section id='features' className="py-16 px-6 bg-gray-50">
       <ProductsSection/>
      </section>

      {/* Benefits Section */}
      <section id='benefits' className="py-16 px-6 bg-white">
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

      {/* About Us Section */}
      <section id='about' className="py-16 px-6 bg-gray-50">
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

      {/* Contact Section */}
      <section id='contact' className="py-16 px-6 bg-white">
      <ContactSection/>
      </section>

      {/* Footer */}
     <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-5">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Card Security
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Protecting your financial data with cutting-edge security technology. 
              Your trust is our commitment to excellence.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {[
                { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", label: "Twitter" },
                { icon: "M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z", label: "GitHub" },
                { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Login', href: '/login' },
                { name: 'Sign Up', href: '/signup' },
                { name: 'Payments', href: '/payments' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Support
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Help Center', href: '#' },
                { name: 'Contact Us', href: '#' },
                { name: 'Security Guide', href: '#' },
                { name: 'FAQ', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 mb-12 backdrop-blur-sm border border-gray-700/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest security updates and features delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Card Security. All rights reserved. Built with security in mind.
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookie Policy', href: '#' },
                { name: 'Security', href: '#' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Security badges */}
          <div className="flex justify-center items-center space-x-6 mt-6 pt-6 border-t border-gray-700/30">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
            </svg>
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default LandingPage;


const ProductsSection = () => {
  const products = [
    {
      name: "Payments",
      description: "Accept payments online, in person, and around the world with a solution built for any business.",
      icon: "💳"
    },
    {
      name: "Billing",
      description: "Build and scale your recurring business model with subscription management and invoicing.",
      icon: "📊"
    },
    {
      name: "Connect",
      description: "Everything platforms need to get sellers paid, with faster onboarding and more conversion.",
      icon: "🔗"
    },
    {
      name: "Payouts",
      description: "Send money to vendors, creators, and service providers with a platform built for scale.",
      icon: "💸"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A fully integrated suite of payments products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring together everything that is required to build websites and apps that accept payments 
            and send payouts globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
              <Link href="/payments" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Explore our products or create an account to start accepting payments today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200">
            Start now
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">
            Contact sales
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Sales</h4>
              <p className="text-gray-600 text-sm mb-2">Ready to start? Talk to our sales team.</p>
              <p className="text-blue-600 font-medium">sales@fintech.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600 text-sm mb-2">Need help? Our support team is here.</p>
              <p className="text-blue-600 font-medium">support@fintech.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Press</h4>
              <p className="text-gray-600 text-sm mb-2">Media inquiries and press resources.</p>
              <p className="text-blue-600 font-medium">press@fintech.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};