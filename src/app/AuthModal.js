'use client'
import { useState } from 'react'

export default function AuthModal() {
  const [currentView, setCurrentView] = useState('login')
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    email: '',
    countryCode: '+1',
    phone: '',
    businessName: '',
    businessLicense: null
  })

  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'IN' },
    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+61', country: 'AU' },
    { code: '+92', country: 'PK' },
    { code: '+52', country: 'MX' },
    { code: '+55', country: 'BR' },
    { code: '+7', country: 'RU' },
    { code: '+82', country: 'KR' },
    { code: '+39', country: 'IT' },
    { code: '+34', country: 'ES' }
  ]

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen text-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Wavy Background Animation - Same as Landing Page */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 via-purple-100 via-blue-100 to-teal-100"></div>
        
        {/* Wavy layers */}
        <div className="absolute inset-0 animate-wave-1 bg-gradient-to-r from-pink-400/30 to-purple-400/30"></div>
        <div className="absolute inset-0 animate-wave-2 bg-gradient-to-r from-blue-400/40 to-cyan-400/40"></div>
        <div className="absolute inset-0 animate-wave-3 bg-gradient-to-r from-purple-400/25 to-pink-400/25"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome!</h1>
          
          {/* Tab Navigation */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setCurrentView('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                currentView === 'login'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setCurrentView('business')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                currentView === 'business'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Login Form */}
        {currentView === 'login' && (
          <div className='text-black'>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
              Login to Your Account
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                  placeholder="your@example.com or +1234567890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Login
              </button>
            </div>
          </div>
        )}

        {/* Business Sign Up Form */}
        {currentView === 'business' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
              Create Business Account
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code} {item.country}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="1234567890"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business License (Upload)
                </label>
                <div className="flex items-center">
                  <label className="cursor-pointer bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-blue-600 hover:bg-gray-50 transition-colors">
                    Choose File
                    <input
                      type="file"
                      name="businessLicense"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      className="sr-only"
                    />
                  </label>
                  <span className="ml-3 text-sm text-gray-500">
                    {formData.businessLicense ? formData.businessLicense.name : 'No file chosen'}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX, JPG, PNG
                </p>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Sign Up as Business
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CSS Styles */}
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
  )
}