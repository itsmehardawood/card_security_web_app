import React from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const PricingSection = () => {
const plans = [
  {
    name: 'STANDARD',
    subtitle: 'FOR STARTERS',
    price: '$49.99',
    period: 'PER MONTH',
    apiScans: '60 API SCANS',
    gradient: 'from-purple-500 to-purple-700',
    bgGradient: 'from-purple-100 to-purple-50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    features: [
      { text: 'Front-side card scan', included: true },
      { text: 'Back-side scan', included: false },
      { text: 'AI fraud detection', included: true },
      { text: 'CardNest protection', included: true },
      { text: 'ML data accuracy', included: true },
      { text: 'PCI/DSS security', included: true },
      { text: 'API integration', included: true },
      { text: '24/7 fraud watch', included: false },
      { text: '$0.50/extra scan', included: true }
    ]
  },
  {
    name: 'PREMIUM',
    subtitle: 'RECOMMENDED',
    price: '$79.99',
    period: 'PER MONTH',
    apiScans: '100 API SCANS',
    gradient: 'from-cyan-400 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
    popular: true,
    features: [
      { text: 'Front-side card scan', included: true },
      { text: 'Back-side scan', included: true },
      { text: 'AI fraud detection', included: true },
      { text: 'CardNest protection', included: true },
      { text: 'ML data accuracy', included: true },
      { text: 'PCI/DSS security', included: true },
      { text: 'API integration', included: true },
      { text: '24/7 fraud watch', included: false },
      { text: '$0.50/extra scan', included: true }
    ]
  },
  {
    name: 'CUSTOM',
    subtitle: 'CONTACT SUPPORT',
    price: 'SALES',
    period: 'CUSTOM PRICING',
    apiScans: 'UNLIMITED*',
    gradient: 'from-pink-500 to-purple-600',
    bgGradient: 'from-pink-50 to-purple-50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    features: [
      { text: 'Front-side card scan', included: true },
      { text: 'Back-side scan', included: true },
      { text: 'AI fraud detection', included: true },
      { text: 'CardNest protection', included: true },
      { text: 'ML data accuracy', included: true },
      { text: 'PCI/DSS security', included: true },
      { text: 'API integration', included: true },
      { text: '24/7 fraud watch', included: true },
      { text: 'Custom pricing/options', included: true }
    ]
  }
];


  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">CardNest Plans</h2>
          <p className="text-gray-400 text-lg">Protect your transactions with AI-powered card fraud detection</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
              {/* Popular badge */}
              {/* {plan.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )} */}
              
              {/* Header with gradient */}
               <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white relative overflow-hidden`}>
                {/* Transparent decorative circles using rgba */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}></div>
                <div className="absolute top-8 right-8 w-6 h-6 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.08)'}}></div>
                <div className="absolute bottom-4 left-8 w-4 h-4 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.06)'}}></div>
                <div className="absolute bottom-8 right-4 w-8 h-8 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.12)'}}></div>
                
                <div className="relative z-10 w-full flex-col flex justify-center items-center">
                  <h3 className="text-3xl font-bold text-center">{plan.name}</h3>
                  {/* <h3 className="text-md text-gray-200 mb-2 text-center">{plan.subtitle}</h3> */}
                  <p className="text-sm text-gray-300 mb-4 text-center">{plan.period}</p>

                  <div className="bg-white/30 flex flex-col items-center justify-center rounded-full h-25 w-25 mb-2">
                    <span className="text-2xl font-bold text-center text-white">{plan.price}</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                      {plan.apiScans}
                    </span>
                  </div>
                </div>
                
                {/* Wavy bottom border */}
                <div className="absolute bottom-0 left-0 w-full">
                  <svg viewBox="0 0 400 40" className="w-full h-8" preserveAspectRatio="none">
                    <path 
                      d="M0,20 Q100,0 200,20 T400,20 L400,40 L0,40 Z" 
                      className={`fill-current ${plan.bgGradient.includes('purple') ? 'text-purple-50' : 
                        plan.bgGradient.includes('cyan') ? 'text-cyan-50' : 'text-pink-50'}`}
                    />
                  </svg>
                </div>
              </div>
              
              {/* Features */}
              <div className={`bg-gradient-to-br ${plan.bgGradient} p-8 relative`}>
                {/* Light wavy overlay at the bottom - behind content */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                  <svg viewBox="0 0 400 60" className="w-full h-12" preserveAspectRatio="none">
                    <path 
                      d="M0,30 Q100,10 200,30 T400,30 L400,60 L0,60 Z" 
                      className="fill-current text-white opacity-60"
                    />
                  </svg>
                </div>
                
                {/* Content with higher z-index to stay above the wave */}
                <div className="relative z-10">
                  <ul className="space-y-2 mb-5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm leading-relaxed ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/payments" className={`w-full ${plan.buttonColor} text-white block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5`}>
                    {plan.name === 'CUSTOM' ? 'CONTACT SALES →' : 'GET STARTED →'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Custom plan limits determined by sales team. All plans include $0.50 per additional scan after monthly limit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;