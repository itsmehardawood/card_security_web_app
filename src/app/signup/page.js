'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUpPage() {
    const router = useRouter();
  
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [Success, setSuccess] = useState('')
  const [otpError, setOtpError] = useState('');
  const [userInfo, setUserInfo] = useState(null); // To store user info from signup response
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+92', // Default to Pakistan since your example uses +92

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
    // Clear error when user starts typing
    if (error) setError('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const response = await fetch('https://cardsecuritysystem-ufuq7.ondigitalocean.app/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        country_code: formData.countryCode,
        phone_no: formData.phone,
      }),
    });

    const data = await response.json();

    if (response.ok && data.status) {
      // Success - store user data from the nested user object
      setUserInfo(data.user);
      setShowOtpForm(true);
      console.log('Signup successful:', data);
    } else {
      // Handle API errors
      setError(data.message || 'Registration failed. Please try again.');
    }
  } catch (err) {
    console.error('Signup error:', err);
    setError('Network error. Please check your connection and try again.');
  } finally {
    setLoading(false);
  }
};

const handleOtpSubmit = async (e) => {
  e.preventDefault();
  if (!userInfo) {
    setOtpError('User information not found. Please try signing up again.');
    return;
  }

  setLoading(true);
  setOtpError('');

  try {
    const response = await fetch('https://cardsecuritysystem-ufuq7.ondigitalocean.app/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,  // Get email from signup API response
        otp: otp,
      }),
    });

    const data = await response.json();

    if (response.ok && data.status) {
      setSuccess('Account created successfully!')
      router.push("/dashboard");
    } else {
      setOtpError(data.message || 'Invalid OTP. Please try again.');
    }
  } catch (err) {
    console.error('OTP verification error:', err);
    setOtpError('Network error. Please try again.');
  } finally {
    setLoading(false);
  }
};

const handleResendOtp = async () => {
  if (!userInfo) return;
  
  setLoading(true);
  setOtpError('');

  try {
    const response = await fetch('https://cardsecuritysystem-ufuq7.ondigitalocean.app/api/reset-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        country_code: userInfo.country_code,  // Get country code from user data
        email: userInfo.email,  // Get email from user data
      }),
    });

    const data = await response.json();
    
    if (response.ok && data.status) {
      alert('OTP resent successfully!');
      console.log('Resend otp', data);
    } else {
      setOtpError(data.message || 'Failed to resend OTP.');
    }
  } catch (err) {
    console.error('Resend OTP error:', err);
    setOtpError('Network error. Please try again.');
  } finally {
    setLoading(false);
  }
};
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
    // Clear error when user starts typing
    if (otpError) setOtpError('');
  };

 return (
    <div className="min-h-screen bg-gray-50 transform relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed bottom-0 left-0 w-full h-[350px] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-fill"
        >
          <source src="/videos/fliped_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0"></div> {/* Optional overlay */}
      </div>

      {/* Navbar */}
      <nav className="relative z-20 bg-white/90 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex justify-between items-center h-25">
            <div className="flex items-center">
              <Link href="/" className="text-2xl pl-8 font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <video autoPlay loop muted playsInline width="70">
      <source src="/videos/cardnest.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video> 
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl w-full flex flex-col md:flex-row rounded-lg overflow-hidden relative z-10">
          {/* Left Section: Stripe logo and descriptive text */}
          <div className="hidden md:block md:w-1/2 p-8 md:p-16 flex-col">
            {/* Content Blocks */}
            <div className=" text-black space-y-5 md:space-y-12">
              <div>
                <h3 className="text-sm font-semibold  mb-2 drop-shadow-lg">Get started quickly</h3>
                <p className=" leading-relaxed  text-[10px] md:text-[13px] w-[80%] drop-shadow-md">
                  Integrate with developer-friendly APIs or choose low-code or pre-built solutions.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold  mb-2 drop-shadow-lg">Support any business model</h3>
                <p className=" leading-relaxed  text-[10px]  md:text-[13px] w-[80%] drop-shadow-md">
                  Ecommerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold  mb-2 drop-shadow-lg">Join millions of businesses</h3>
                <p className=" leading-relaxed text-[10px]  md:text-[13px] w-[80%] drop-shadow-md">
                  Stripe is trusted by ambitious startups and enterprises of every size.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Forms */}
          <div className="md:w-1/2 bg-white/95  text-black py-15 px-5 my-5 flex flex-col rounded-xl h-[500px] justify-center shadow-xl items-center">
            <div className="w-full max-w-md">
              {!showOtpForm ? (
                // Signup Form
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
                    Create your account
                  </h2>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  {/* success Message  */}

                   {Success && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
                      {Success}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        disabled={loading}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-100"
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
                        disabled={loading}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-100"
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
                          disabled={loading}
                          className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
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
                          disabled={loading}
                          className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-100"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    {/* Create Account Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-base transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Creating Account...' : 'Sign up'}
                    </button>
                  </form>

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

                  {/* OTP Error Message */}
                  {otpError && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                      {otpError}
                    </div>
                  )}

                     {Success && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
                      {Success}
                    </div>
                  )}

                  <form onSubmit={handleOtpSubmit} className="space-y-6">
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
                        disabled={loading}
                        className="block w-full px-3 py-3 text-center text-2xl font-mono border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 tracking-widest disabled:bg-gray-100"
                        placeholder="000000"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={otp.length !== 6 || loading}
                      className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-base transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Verifying...' : 'Verify and create account'}
                    </button>
                  </form>

                  <div className="text-center mt-6 space-y-2">
                    <p className="text-sm text-gray-600">
                      Did not receive the code?{' '}
                      <button 
                        onClick={handleResendOtp}
                        disabled={loading}
                        className="font-medium text-blue-600 hover:text-blue-500 disabled:text-gray-400"
                      >
                        {loading ? 'Sending...' : 'Resend'}
                      </button>
                    </p>
                    <button 
                      onClick={() => {
                        setShowOtpForm(false);
                        setOtpError('');
                        setOtp('');
                      }}
                      disabled={loading}
                      className="text-sm text-gray-500 hover:text-gray-700 disabled:text-gray-300"
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

      {/* Copyright Footer - Overlays on background */}
      <footer className="fixed bottom-4 left-0 right-0 z-30">
        <div className="text-center">
          <p className="text-xs text-white/80 drop-shadow-lg">
            © 2025 Card Security. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}