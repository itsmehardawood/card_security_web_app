'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUpPage() {
    const router = useRouter();
  
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+1',

  });

  const countryCodes = [
    { code: '+1', country: '🇺🇸 US', flag: '🇺🇸' },
    { code: '+1', country: '🇨🇦 CA', flag: '🇨🇦' },
    { code: '+44', country: '🇬🇧 UK', flag: '🇬🇧' },
    { code: '+91', country: '🇮🇳 IN', flag: '🇮🇳' },
    { code: '+86', country: '🇨🇳 CN', flag: '🇨🇳' },
    { code: '+81', country: '🇯🇵 JP', flag: '🇯🇵' },
    { code: '+49', country: '🇩🇪 DE', flag: '🇩🇪' },
    { code: '+33', country: '🇫🇷 FR', flag: '🇫🇷' },
    { code: '+92', country: '🇵🇰 PK', flag: '🇵🇰' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      businessLicense: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowOtpForm(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Here you would verify the OTP
    router.push("/dashboard")
    alert('Account created successfully!');
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Navbar */}
      <nav className="relative z-20 bg-white  border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl pl-8 font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Card Security
              </Link>
            </div>
      
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      {/* Animated Diagonal Gradient Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 h-[450px] bg-gradient-to-r from-pink-600 to-yellow-600 transform -skew-y-12 origin-bottom-right overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Wavy animation */}
          <div className="absolute w-[200%] h-full animate-wave">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="absolute w-full h-full"
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                className="fill-current text-white/20"
              ></path>
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                className="fill-current text-white/30"
              ></path>
              <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                className="fill-current text-white/40"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row rounded-lg overflow-hidden relative z-10">
        {/* Left Section: Stripe logo and descriptive text */}
        <div className="hidden md:block md:w-1/2 p-8 md:p-16  flex-col">
          {/* Content Blocks */}
          <div className="space-y-5 md:space-y-12">
            <div>
              <h3 className="text-md font-semibold text-gray-900 mb-2">Get started quickly</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base w-[80%]">
                Integrate with developer-friendly APIs or choose low-code or pre-built solutions.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-900 mb-2">Support any business model</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base w-[80%]">
                Ecommerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-900 mb-2">Join millions of businesses</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base w-[80%]">
                Stripe is trusted by ambitious startups and enterprises of every size.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Forms */}
        <div className="md:w-1/2 bg-white text-black py-15 px-5 my-5 flex flex-col rounded-xl h-[500px] justify-center shadow-2xl items-center">
          <div className="w-full max-w-md">
            {!showOtpForm ? (
              // Signup Form
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
                  Create your account
                </h2>

                <div className="space-y-5">
                  {/* Full Name Input */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      autoComplete="name"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone Number with Country Code */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone number
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        {countryCodes.map((country, index) => (
                          <option key={index} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

          

                       {/* Create Account Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-base transition-colors"
                  >
                    Sign up
                  </button>
                </div>

                {/* Already have an account link */}
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                      Sign in
                    </Link>
                  </p>
                </div>
              </>
            ) : (
              // OTP Form
              <>
                <div className="text-center mb-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify your phone</h2>
                  <p className="text-sm text-gray-600">
                    We have sent a 6-digit code to {formData.countryCode} {formData.phone}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2 text-center">
                      Enter verification code
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={otp}
                      onChange={handleOtpChange}
                      maxLength={6}
                      required
                      className="block w-full px-3 py-3 text-center text-2xl font-mono border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 tracking-widest"
                      placeholder="000000"
                    />
                  </div>

                  <button
                    onClick={handleOtpSubmit}
                    disabled={otp.length !== 6}
                    className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-base transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Verify and create account
                  </button>
                </div>

                <div className="text-center mt-6 space-y-2">
                  <p className="text-sm text-gray-600">
                    Did not receive the code?{' '}
                    <button className="font-medium text-blue-600 hover:text-blue-500">
                      Resend
                    </button>
                  </p>
                  <button 
                    onClick={() => setShowOtpForm(false)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    ← Back to signup
                  </button>
                </div>
              </>
            )}
          </div>
          </div>
        </div>
      </div>

      {/* Add the animation styles */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-25%) translateY(-10px);
          }
          100% {
            transform: translateX(-50%) translateY(0);
          }
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.8;
            transform: scale(0.8);
          }
          100% {
            opacity: 0.9;
            transform: scale(1.2);
          }
        }
        
        .animate-wave {
          animation: wave 60s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}