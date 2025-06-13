'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [isOtpMode, setIsOtpMode] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSignIn = (e) => {
    e.preventDefault()
    if (!isOtpMode) {
      // Switch to OTP mode
      setIsOtpMode(true)
    } else {
      // Handle OTP verification
      console.log('Verifying OTP:', otp)
      // Add your OTP verification logic here
    }
  }

  const handleBack = () => {
    setIsOtpMode(false)
    setOtp('')
  }

  const handleRedirect=()=>{

    router.push('/dashboard')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Diagonal Top Section with Animation */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-r from-pink-600 to-yellow-600 bg-blue-600 low transform -skew-y-12 origin-top-left overflow-hidden">
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

      <div className="relative z-10 w-full max-w-md px-6 mt-16">
        {/* Logo */}
        <div className="text-center mb-8 bg-white shadow-2xl py-4 rounded-3xl">
   
          <h1 className="text-gray-800 text-3xl font-bold mt-4">Log in</h1>
        

        {/* Main Card */}
        <div className=" rounded-xl text-black  p-8 transition-all duration-300 ease-in-out transform ">
          <form onSubmit={handleSignIn}>
            {!isOtpMode ? (
              // Login Form
              <>
                <h2 className="text-2xl font-medium text-gray-900 mb-8">
                  Sign in to your account
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Email or Phone
                    </label>
                    <input
                      id="emailOrPhone"
                      type="text"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email or phone number"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me on this device
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Sign in
                  </button>

                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      New to our App? {' '}
                      <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                        Create account
                      </Link>
                    </span>
                  </div>
                </div>
              </>
            ) : (
              // OTP Form
              <>
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center text-blue-600 hover:text-blue-500 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                </div>

                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  Enter verification code
                </h2>
                <p className="text-sm text-gray-600 mb-8">
                  We sent a code to your register number 
                </p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                      Verification code
                    </label>
                    <input
                      id="otp"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-center text-xl tracking-widest"
                      placeholder="000000"
                      maxLength="6"
                      required
                    />
                  </div>

                  <button 
                  onClick={handleRedirect}
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Verify
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                    >
                      Resend code
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <span>© Your Company</span>
            <span>•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy & terms
            </a>
          </div>
          
          {!isOtpMode && (
            <div className="mt-4 text-xs text-gray-500 max-w-sm mx-auto">
              <p className="flex items-start">
                <svg className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                If you use two-step authentication, keep your backup codes in a secure place. 
                They can help you recover access to your account if you get locked out.
              </p>
            </div>
          )}
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
  )
}



