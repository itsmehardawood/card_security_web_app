"use client";
import React, { useState } from "react";

import DiagonalHeroSection from "./HeroSection";
import Link from "next/link";
import ContactSection from "./ContactSection";
import PricingSection from "./SubscriptionsCard";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent absolute w-full p-3 lg:pt-2  top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-white">  
 <video autoPlay loop muted playsInline width="70">
      <source src="/videos/cardnest.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>            </div>

          {/* Desktop Navigation - Only show on large screens */}
          <div className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Home
            </button>

              <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              About
            </button>


              <button
              onClick={() => scrollToSection("benefits")}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Benefits
            </button>


                <button
              onClick={() => scrollToSection("pricing")}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Features
            </button>
          
          

         

            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button - Only show on large screens */}
          <div className="hidden lg:block space-x-5">
            <Link
              href="/login"
              className="text-white hover:text-teal-300 transition-colors duration-200 font-medium mr-6"
            >
              Sign In
            </Link>
            <Link
href= "/signup"
              className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
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
            <div
              className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <div className="text-xl font-bold text-white">Card App</div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-teal-300 p-2 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <div className="flex flex-col p-6 space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  About
                </button>

                  <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-white hover:text-teal-300 hover:bg-gray-800 transition-all duration-200 font-medium py-4 px-4 rounded-lg"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
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
                  <Link
                    href="/signup"
                    className="bg-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 w-full text-center shadow-lg"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

import { Menu, X, ArrowRight, Check, Star, Users, Shield, Zap } from 'lucide-react';

const LandingPage = () => {


  const sectionsData = {
    // modular: {
    //   title: "Modular solutions",
    //   heading: "A fully integrated suite of payments products",
    //   description: "We bring together everything that is required to build websites and apps that accept payments and send payouts globally.",
    //   media: ''
    // },
    payments: {
      title: "Payments",
      heading: "Accept and optimize payments, globally",
      description: "Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.",
      seeAlso: "Tax for automating tax registration, collection, and filing Radar for AI-powered fraud protection Terminal for custom in-person payments",
      media: null
    },
    billing: {
      title: "Billing",
      heading: "Capture recurring revenue",
      description: "Manage flat rate, usage-based, and hybrid pricing models, minimize churn, and automate finance operations.",
      seeAlso: "Invoicing for invoice creation, collection, and tracking Usage-based billing for metering, billing, and consumption insights Sigma for custom revenue reports—no SQL required",
      media: null
    },
    connect: {
      title: "Benefits",
      heading: "Set up multiparty payments and payouts",
      description: "Integrate payments into your platform or marketplace for end-to-end payments experiences.",
      seeAlso: "Terminal for custom in-person payments Instant Payouts for fast payments to users Payment Elements for customizable UIs",
      media: null
    },
    issuing: {
      title: "Issuing",
      heading: "Build a fintech offering with banking-as-a-service",
      description: "Launch, manage, and scale a commercial card program without any setup fees.",
      seeAlso: "Treasury for financial accounts Capital for offering fast, flexible financing Connect for powering platform payments",
      media: null,
      darkMode: true
    }
  };






  // Component to render section content
  const SectionContent = ({ data, isDark = false }) => {
    return (
      <div className={`flex flex-col lg:flex-row max-w-6xl mx-auto justify-center py-10 lg:py-10 px-4 sm:px-6`}>
        <div className="w-full text-center lg:text-left space-y-6">
          <h3 className={`${isDark ? 'text-blue-400' : 'text-blue-500'} font-bold text-lg`}>
            {data.title}
          </h3>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          } leading-tight`}>
            {data.heading}
          </h2>
          <p className={`text-base sm:text-lg ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl`}>
            {data.description}
          </p>
          {data.seeAlso && (
            <div className="space-y-3">
              <p className={`font-bold text-sm sm:text-base ${isDark ? 'text-white' : 'text-black'}`}>
                See also
              </p>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-700'
              } text-sm sm:text-base max-w-3xl`}>
                {data.seeAlso}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <DiagonalHeroSection />
      </section>

        {/* About Us Section */}
      <section id="about" className="py-10 mb-5 lg:py-10 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">About Us</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
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

       {/* Connect Section */}
      <section id="benefits" className="bg-white">
        <SectionContent data={sectionsData.connect} />
      </section>

         {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* Modular Solutions Section
      <section className="py-10 lg:py-10 bg-white">
        <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center lg:text-left space-y-6">
            <h3 className="text-blue-500 font-bold text-lg">{sectionsData.modular.title}</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              {sectionsData.modular.heading}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl">
              {sectionsData.modular.description}
            </p>
          </div>
        

        </div>
      
       
      </section> */}

   
      {/* Billing Section */}
      <section className="bg-slate-950">
        <SectionContent data={sectionsData.billing}  isDark={true} />
      </section>

         {/* Payments Section */}
      <section id="features" className="bg-white">
        <SectionContent data={sectionsData.payments} />
      </section>


     

      {/* Issuing Section with Dark Background */}
      <section className="bg-slate-950">
        <SectionContent data={sectionsData.issuing} isDark={true} />
      </section>

   

    

      {/* Contact Section */}
      <section id="contact" className="py-5 lg:py-5 px-6 bg-gray-50">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 animate-pulse"></div>

        <div className="container mx-auto px-6 py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                {/* logo footer */}

                   <div className="text-xl sm:text-2xl font-bold text-white">  
 <video autoPlay loop muted playsInline width="50">
      <source src="/videos/cardnest.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>            </div>




                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Card Nest
                </div>
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed">
                Protecting your financial data with cutting-edge security
                technology. Your trust is our commitment to excellence.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {[
                  {
                    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    label: "Twitter",
                  },
                  {
                    icon: "M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
                    label: "GitHub",
                  },
                  {
                    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    aria-label={social.label}
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                  { name: "Home", href: "#hero" },
                  { name: "Features", href: "#features" },
                  { name: "Benefits", href: "#benefits" },
                  { name: "Pricing", href: "#pricing" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                        →
                      </span>
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
                  { name: "Help Center", href: "#" },
                  { name: "Contact Us", href: "#contact" },
                  { name: "Security Guide", href: "#" },
                  { name: "FAQ", href: "#" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                        →
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 CardNest. All rights reserved. Built with security in mind.
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                {[
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "Cookie Policy", href: "#" },
                  { name: "Security", href: "#" },
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
                <Check className="w-4 h-4 text-green-500" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Zap className="w-4 h-4 text-purple-500" />
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
