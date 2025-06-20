import React from 'react';

const SubscriptionCards = () => {
  const plans = [
    {
      name: "STANDARD",
      subtitle: "FOR STARTERS",
      price: "$49.99",
      period: "MONTHLY",
      scans: "60",
      popular: false,
      features: [
        "Deep Learning Card-at-Present Intelligence detection",
        "Online Credit and Debit Card Fraud Prevention with CardNest Artificial Intelligence scanning and security",
        "PCI/DSS Compliant, providing the best security protocols for data security",
        "24/7 Online credit and Debit Card fraud detector and preventer"
      ]
    },
    {
      name: "PREMIUM",
      subtitle: "RECOMMENDED",
      price: "$79.99",
      period: "MONTHLY",
      scans: "100",
      popular: true,
      features: [
        "Advanced Deep Learning Card-at-Present Intelligence detection",
        "Enterprise-grade Credit and Debit Card Fraud Prevention with CardNest AI",
        "Advanced machine learning models with real-time threat intelligence",
        "Advanced threat detection with behavioral analytics",
        "Priority API integration support with dedicated assistance",
        "Advanced reporting and analytics dashboard"
      ]
    },
    {
      name: "CUSTOM",
      subtitle: "CONTACT SUPPORT",
      price: "SALES",
      period: "",
      scans: "CONTACT SUPPORT",
      popular: false,
      features: [
        "Everything in Premium plan",
        "Custom integration and setup",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom reporting and analytics",
        "Priority technical support"
      ]
    }
  ];

  return (
    <section className="px-4 py-2 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Choose Your Security Plan
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Protect your business with our advanced AI-powered card security solutions. 
            Select the plan that fits your transaction volume and security needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col h-full ${
                plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {/* Card header */}
              <div className={`px-4 sm:px-6 py-4 sm:py-6 text-center ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                  : 'bg-gray-50 text-gray-900'
              }`}>
                <h3 className="text-lg sm:text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.subtitle}
                </p>
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-wide font-semibold block mb-1">PRICE:</span>
                  <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-xs ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                      ({plan.period})
                    </span>
                  )}
                </div>
                <div className="mb-2 sm:mb-3">
                  <span className="text-xs uppercase tracking-wide font-semibold block mb-1">API SCANS/USE:</span>
                  <span className="text-base sm:text-lg font-bold">{plan.scans}</span>
                </div>
                <p className={`text-xs italic ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                 After the API Scans are exhausted before renewal, each API Scan costs $0.50 
                </p>
              </div>

              {/* Features list */}
              <div className="px-4 sm:px-6 py-4 sm:py-6 flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 mt-auto">
                <button className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : plan.name === 'CUSTOM'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {plan.name === 'CUSTOM' ? 'Contact Sales' : 'Get Started'}
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  No setup fees • Cancel anytime
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Need a custom solution? Contact our team for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCards;