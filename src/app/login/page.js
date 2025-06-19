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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [otpError, setOtpError] = useState('')
  const [loginData, setLoginData] = useState(null) // Store login response data
  const [formData, setFormData] = useState({
    countryCode: '+1', // Default country code
  })

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
  ]

  const handleCountryCodeChange = (e) => {
    setFormData({
      ...formData,
      countryCode: e.target.value
    })
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    
    if (!isOtpMode) {
      // First step: Send login request to get OTP
      setLoading(true)
      setError('')

      try {
        // Use the working object format
        const requestBody = {
          country_code: formData.countryCode,
          login_input: emailOrPhone
        }

        console.log('Sending request body:', JSON.stringify(requestBody, null, 2))

        const response = await fetch('https://cardsecuritysystem-ufuq7.ondigitalocean.app/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })

        const data = await response.json()
        console.log('Response data:', data)

        if (response.ok && data.status) {
          // Success - OTP sent, show OTP form
          setLoginData(data)
          setIsOtpMode(true)
          console.log('Login OTP sent:', data)
        } else {
          // Handle API errors
          console.error('API Error:', data)
          setError(data.message || `Login failed (${response.status}). Please check your credentials.`)
        }
      } catch (err) {
        console.error('Login error:', err)
        setError('Network error. Please check your connection and try again.')
      } finally {
        setLoading(false)
      }
    } else {
      // Second step: Verify OTP
      handleOtpVerification()
    }
  }

const handleOtpVerification = async () => {
  setLoading(true)
  setOtpError('')

  try {
    // Updated to send email and otp as keys
    const requestBody = {
      email: emailOrPhone,  // Changed from login_input to email
      otp: otp              // Keep otp as is
    }

    const response = await fetch('https://cardsecuritysystem-ufuq7.ondigitalocean.app/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const data = await response.json()

    if (response.ok && data.status) {
      // OTP verified successfully
      console.log('Login successful:', data)
      
      // Store auth token if provided
      if (data.token) {
        if (rememberMe) {
          localStorage.setItem('authToken', data.token)
        } else {
          sessionStorage.setItem('authToken', data.token)
        }
      }
      
      // Store user data if provided
      if (data.user) {
        const storageMethod = rememberMe ? localStorage : sessionStorage
        storageMethod.setItem('userData', JSON.stringify(data.user))
      }

      // Redirect to dashboard
      router.push('/dashboard')
    } else {
      setOtpError(data.message || 'Invalid OTP. Please try again.')
    }
  } catch (err) {
    console.error('OTP verification error:', err)
    setOtpError('Network error. Please try again.')
  } finally {
    setLoading(false)
  }
}

  const handleBack = () => {
    setIsOtpMode(false)
    setOtp('')
    setOtpError('')
    setLoginData(null)
  }

 const handleResendOtp = async () => {
  // Check for loginData instead of userInfo
  if (!loginData) return;
  
  setLoading(true);
  setOtpError('');

  try {
    // Assuming you have a resend OTP endpoint
    const response = await fetch('https://cardsecuritysystem-ufuq7.ondigitalocean.app/api/reset-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: emailOrPhone,
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
    const value = e.target.value.replace(/\D/g, '').slice(0, 6)
    setOtp(value)
    // Clear error when user starts typing
    if (otpError) setOtpError('')
  }

  const handleEmailOrPhoneChange = (e) => {
    setEmailOrPhone(e.target.value)
    // Clear error when user starts typing
    if (error) setError('')
  }

return (
<div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
    {/* Video Background Layer */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[60%] object-fill"
      >
        <source src="/videos/animation.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to ensure text readability */}
    </div>

    {/* Navbar */}
    <nav className="relative z-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
              Card Security
            </Link>
          </div>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-sm sm:max-w-md">
        {/* Main Card */}
        <div className="rounded-xl text-black bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl p-6 sm:p-8 transition-all duration-300 ease-in-out transform">
          <form onSubmit={handleSignIn}>
            {!isOtpMode ? (
              // Login Form
              <>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6 sm:mb-8">
                  Sign in to your account
                </h2>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  {/* Country Code and Email/Phone Input - Single Line Layout */}
                  <div>
                    <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Email or Phone
                    </label>
                    
                    {/* Single line layout for all screen sizes */}
                    <div className="flex">
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleCountryCodeChange}
                        disabled={loading}
                        className="flex-shrink-0 w-16 sm:w-24 px-1 sm:px-2 py-3 border border-gray-300 border-r-0 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 disabled:bg-gray-100 text-xs sm:text-sm"
                      >
                        {countryCodes.map((country, index) => (
                          <option key={index} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        id="emailOrPhone"
                        type="text"
                        value={emailOrPhone}
                        onChange={handleEmailOrPhoneChange}
                        disabled={loading}
                        className="flex-1 min-w-0 px-3 py-3 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 disabled:bg-gray-100 text-sm sm:text-base"
                        placeholder="Enter your email or phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      disabled={loading}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me on this device
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !emailOrPhone.trim()}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? 'Sending OTP...' : 'Sign in'}
                  </button>

                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      New to our App?{' '}
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
                    disabled={loading}
                    className="flex items-center text-blue-600 hover:text-blue-500 text-sm font-medium disabled:text-gray-400"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                </div>

                <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                  Enter verification code
                </h2>
                <p className="text-sm text-gray-600 mb-6 sm:mb-8 break-words">
                  We sent a code to {formData.countryCode} {emailOrPhone}
                </p>

                {/* OTP Error Message */}
                {otpError && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                    {otpError}
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                      Verification code
                    </label>
                    <input
                      id="otp"
                      type="text"
                      value={otp}
                      onChange={handleOtpChange}
                      disabled={loading}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-center text-lg sm:text-xl tracking-widest bg-white/90 disabled:bg-gray-100"
                      placeholder="000000"
                      maxLength="6"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || otp.length !== 6}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? 'Verifying...' : 'Verify'}
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={loading}
                      className="text-sm text-blue-600 hover:text-blue-500 font-medium disabled:text-gray-400"
                    >
                      {loading ? 'Sending...' : 'Resend code'}
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="relative z-10 bg-transparent py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center space-x-4 text-sm text-white/90 drop-shadow-lg">
            <span>© Your Company</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy & terms
            </a>
          </div>
          <div className="text-xs sm:text-sm text-black drop-shadow-lg max-w-lg mx-auto px-4">
            On a shared computer, make sure to sign out when you are done. This helps keep your account secure from other people using your device.
          </div>
        </div>
      </div>
    </footer>
  </div>
)
}