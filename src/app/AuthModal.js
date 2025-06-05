'use client'
import { useState } from 'react'

export default function AuthModal() {
  const [currentView, setCurrentView] = useState('login')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessLicense: null
  })

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
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
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
              onClick={() => setCurrentView('signup')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                currentView === 'signup' || currentView === 'business'
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
          <div className='text-black' >
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@example.com or +1234567890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder=""
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        {/* Sign Up Form */}
        {currentView === 'signup' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
              Create Your Account
            </h2>
            
            {/* Account Type Selection */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setCurrentView('signup')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'signup'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setCurrentView('business')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'business'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Business
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@example.com or +1234567890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Sign Up as Individual
              </button>
            </div>
          </div>
        )}

        {/* Business Sign Up Form */}
        {currentView === 'business' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
              Create Your Account
            </h2>
            
            {/* Account Type Selection */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setCurrentView('signup')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'signup'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setCurrentView('business')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'business'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Business
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@example.com or +1234567890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
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