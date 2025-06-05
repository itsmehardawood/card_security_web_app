'use client'
import React, { useState } from 'react';
import { Check, AlertTriangle, Calendar, CreditCard } from 'lucide-react';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'standard',
      name: 'Standard',
      price: 29,
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '50,000 API calls/month',
        'Basic support',
        'Standard features access',
        'Email notifications'
      ],
      buttonText: 'Choose Standard',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 79,
      period: '/month',
      description: 'Most popular choice',
      features: [
        '100 API calls/month',
        'Priority support (24/7)',
        'All Standard features',
        'Advanced analytics dashboard',
        'Custom reporting'
      ],
      buttonText: 'Choose Premium',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Tailored API call limits',
        'Dedicated account manager',
        'Custom features development',
        'Service Level Agreement (SLA)',
        'Advanced security & compliance'
      ],
      buttonText: 'Request Custom Quote',
      buttonStyle: 'bg-gray-700 hover:bg-gray-800 text-white',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Wavy Background Animation */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 via-purple-100 via-blue-100 to-teal-100"></div>
        
        {/* Wavy layers */}
        <div className="absolute inset-0 animate-wave-1 bg-gradient-to-r from-pink-400/30 to-purple-400/30"></div>
        <div className="absolute inset-0 animate-wave-2 bg-gradient-to-r from-blue-400/40 to-cyan-400/40"></div>
        <div className="absolute inset-0 animate-wave-3 bg-gradient-to-r from-purple-400/25 to-pink-400/25"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the subscription tier that best fits your API usage and business needs.
          </p>
          
          {/* New Users Badge */}
          <div className="inline-flex items-center mt-6 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <span className="mr-2">🎉</span>
            New users get 5 free API calls to start!
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-purple-500 transform scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                     Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className={`text-5xl font-bold ${plan.popular ? 'text-purple-600' : 'text-blue-600'}`}>
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 text-lg">{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold text-gray-700">{plan.price}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`h-5 w-5 ${plan.popular ? 'text-purple-500' : 'text-green-500'} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle} shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Overage Billing Details */}
        <div className="bg-orange-50/95 backdrop-blur-xl border border-orange-200 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Overage Billing Details</h3>
              <p className="text-orange-700">
                API calls exceeding your chosen plan's monthly limit will incur additional charges. The current overage rate is{' '}
                <span className="font-semibold">$0.10 - $0.20 per extra API call</span>. These charges will be automatically added to your next monthly bill.
              </p>
            </div>
          </div>
        </div>

        {/* Current Subscription */}
        <div className="bg-blue-50/95 backdrop-blur-xl border border-blue-200 rounded-xl">
          <div className="p-6">
            <div className="flex items-start">
              <CreditCard className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Your Current Subscription</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-blue-700 mb-2">
                      Your current plan: <span className="font-semibold">Standard (or Premium/Enterprise)</span>
                    </p>
                    <p className="text-blue-700 mb-2">
                      Current API calls this month: <span className="font-semibold">XX / YY (Your Plan Limit)</span>
                    </p>
                    <p className="text-blue-700">
                      API call usage is calculated over one calendar month.
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="text-blue-700">
                        Your next recurring bill date: <span className="font-semibold">July 15, 2025</span>
                      </p>
                      <p className="text-sm text-blue-600 mt-1">(Based on your sign-up date)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Can I upgrade or downgrade anytime?</h4>
                <p className="text-gray-600">Yes, you can change your plan at any time. Changes take effect on your next billing cycle.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">What happens if I exceed my API limit?</h4>
                <p className="text-gray-600">You'll be charged overage fees as outlined above. We'll send you notifications as you approach your limit.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
                <p className="text-gray-600">New users get 5 free API calls to test our service before choosing a plan.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">How is billing calculated?</h4>
                <p className="text-gray-600">Billing is monthly based on your plan plus any overage charges for additional API calls.</p>
            
              </div>
            </div>
          </div>
        </div>
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
  );
};

export default PricingPage;