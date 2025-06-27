import React from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { plans } from '../lib/plans';

const PricingSection = ({ isDark = false }) => {
  return (
    <div className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-4 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-3`}>
            Subscriptions Plans
          </h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-400'} text-base`}>
            Protect your transactions with AI-powered card fraud detection
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
                         
              {/* Header with gradient */}
               <div className={`bg-gradient-to-br ${plan.gradient} p-6 text-white relative overflow-hidden`}>
                {/* Transparent decorative circles using rgba */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}></div>
                <div className="absolute top-6 right-6 w-4 h-4 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.08)'}}></div>
                <div className="absolute bottom-3 left-6 w-3 h-3 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.06)'}}></div>
                <div className="absolute bottom-6 right-3 w-6 h-6 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.12)'}}></div>
                
                <div className="relative z-10 w-full flex-col flex justify-center items-center">
                  <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                  <p className="text-xs text-gray-300 mb-3 text-center">{plan.period}</p>

                  <div className="bg-white/30 flex flex-col items-center justify-center rounded-full h-20 w-20 mb-2">
                    <span className="text-xl font-bold text-center text-white">{plan.price}</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                      {plan.apiScans}
                    </span>
                  </div>
                </div>
                
                {/* Wavy bottom border */}
                <div className="absolute bottom-0 left-0 w-full">
                  <svg viewBox="0 0 400 40" className="w-full h-6" preserveAspectRatio="none">
                    <path 
                      d="M0,20 Q100,0 200,20 T400,20 L400,40 L0,40 Z" 
                      className={`fill-current ${plan.bgGradient.includes('purple') ? 'text-purple-50' : 
                        plan.bgGradient.includes('cyan') ? 'text-cyan-50' : 'text-pink-50'}`}
                    />
                  </svg>
                </div>
              </div>
              
              {/* Features */}
              <div className={`bg-gradient-to-br ${plan.bgGradient} p-6 relative`}>
                {/* Light wavy overlay at the bottom - behind content */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                  <svg viewBox="0 0 400 60" className="w-full h-8" preserveAspectRatio="none">
                    <path 
                      d="M0,30 Q100,10 200,30 T400,30 L400,60 L0,60 Z" 
                      className={`fill-current ${isDark ? 'text-blue-800 opacity-40' : 'text-white opacity-60'}`}
                    />
                  </svg>
                </div>
                
                {/* Content with higher z-index to stay above the wave */}
                <div className="relative z-10">
                  <ul className="space-y-1.5 mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-xs leading-relaxed ${
                          feature.included 
                            ? (isDark ? 'text-gray-900' : 'text-gray-700')
                            : (isDark ? 'text-gray-400' : 'text-gray-400')
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/payments/${plan.id}`} className={`w-full ${plan.buttonColor} text-white block text-center py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5`}>
                    {plan.name === 'CUSTOM' ? 'CONTACT SALES →' : 'SUBSCRIBE NOW →'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="text-center mt-8">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
            * Custom plan limits determined by sales team. All plans include $0.50 per additional scan after monthly limit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;