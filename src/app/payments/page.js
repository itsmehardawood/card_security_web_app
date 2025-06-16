"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function PricingPage() {

  return (
    <>
    <Navbar/>

      <div className="min-h-screen text-black bg-white px-4 sm:px-6 py-8 sm:py-12 relative overflow-x-hidden">
        {/* Animated Gradient Background - Horizontal Strip Overlay moved upward */}
        <div className="tilted-outer-div absolute top-1/8 left-1/2 -translate-x-1/2 w-[120vw] h-[300px] z-0 overflow-hidden">
          <div className="animated-gradient-bg"></div>
          <style jsx>{`
            .tilted-outer-div {
              transform: rotate(-7deg);
              transform-origin: top center;
            }

            .animated-gradient-bg {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                45deg,
                #ff0000,
                /* red */ #ffa500,
                /* orange */ #800080,
                /* purple */ #00bfff,
                /* skyblue */ #ff0000 /* red again for loop */
              );
              background-size: 400% 400%;
              animation: gradientWave 30s ease-in-out infinite;
              opacity: 0.9;
            }

            @keyframes gradientWave {
              0% {
                background-position: 0% 50%;
                transform: translateY(0px);
              }
              25% {
                background-position: 50% 55%;
                transform: translateY(-6px);
              }
              50% {
                background-position: 100% 50%;
                transform: translateY(6px);
              }
              75% {
                background-position: 50% 45%;
                transform: translateY(-4px);
              }
              100% {
                background-position: 0% 50%;
                transform: translateY(0px);
              }
            }

            .animated-gradient-bg::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.1) 50%,
                transparent 100%
              );
              animation: wave 20s ease-in-out infinite;
            }

            @keyframes wave {
              0%,
              100% {
                transform: translateX(-100%);
              }
              50% {
                transform: translateX(100%);
              }
            }
          `}</style>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 w-full sm:w-3/4 lg:w-1/2 text-start">
            Pricing for businesses of all sizes
          </h1>

          <div className="flex flex-col gap-6">
            {/* Standard & Premium Plans */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Standard Plan */}
              <div className="shadow-lg rounded-2xl p-6 sm:p-8 flex-1 border border-gray-200 backdrop-blur-md bg-white/80">
                <h2 className="text-xl font-semibold mb-4">Standard</h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Simple and transparent pricing—only pay for what you use.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>✅ No setup fees</li>
                  <li>✅ No hidden fees</li>
                  <li>✅ Per-product pricing</li>
                  <li>✅ Leading features included</li>
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                    Get started
                  </button>
                  <Link
                    href="#"
                    className="text-indigo-600 font-medium hover:underline text-sm sm:text-base"
                  >
                    Details by product ↓
                  </Link>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="shadow-lg rounded-2xl p-6 sm:p-8 flex-1 border border-gray-200 backdrop-blur-md bg-white/80">
                <h2 className="text-xl font-semibold mb-4">Premium</h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Advanced and transparent pricing—only pay for what you use.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>✅ 100 API calls/month</li>
                  <li>✅ Priority support (24/7)</li>
                  <li>✅ All Standard features</li>
                  <li>✅ Advanced analytics dashboard</li>
                  <li>✅ Custom reporting</li>
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                    Get started
                  </button>
                  <Link
                    href="#"
                    className="text-indigo-600 font-medium hover:underline text-sm sm:text-base"
                  >
                    Details by product ↓
                  </Link>
                </div>
              </div>
            </div>

            {/* Custom Plan */}
            <div className="flex w-full justify-center lg:justify-start">
              <div className="bg-[#0F172A]/90 text-white shadow-lg rounded-2xl p-6 sm:p-8 flex-1 border border-gray-200 backdrop-blur-md">
                <h2 className="text-xl font-semibold mb-4">Custom</h2>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Pricing customized based on your volume, scale, and business
                  needs.
                </p>
                <ul className="space-y-2 text-white/90 text-sm sm:text-base">
                  <li>✅ IC+ pricing</li>
                  <li>✅ Automatic discounts</li>
                  <li>✅ Global and country-specific rates</li>
                  <li>✅ In-depth reporting</li>
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm sm:text-base">
                    Contact sales
                  </button>
                  <Link
                    href="#"
                    className="text-white underline text-sm sm:text-base"
                  >
                    Learn more ↓
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Included Features Section */}
          <section className="mt-16 sm:mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-indigo-600 font-semibold text-sm mb-2">
                Included features
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                What is included with standard pricing
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base">
                Get access to industry-leading features, along with
                per-transaction payments pricing:
              </p>

              <ul className="space-y-2 mb-6 text-gray-700 text-sm sm:text-base">
                <li>✅ Built-in fraud prevention¹</li>
                <li>✅ Tools to optimize your checkout</li>
                <li>✅ Payments optimizations to boost revenue</li>
                <li>✅ Embedded payments for platforms & marketplaces¹</li>
                <li>✅ More...</li>
              </ul>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                Get started →
              </button>
            </div>

            {/* Card Payments Box */}
            <div className="w-full lg:w-auto lg:min-w-[320px] p-6 bg-white/80 shadow-md rounded-xl backdrop-blur-md">
              <h4 className="text-sm text-gray-500 mb-2">Card payments</h4>
              <p className="text-lg font-semibold text-gray-900 mb-1">
                2.9% + 30¢
              </p>
              <p className="text-gray-500 text-sm mb-4">
                per successful transaction for domestic cards
              </p>

              <div className="text-sm text-gray-700 mb-2">Payment methods</div>
              <div className="flex flex-wrap gap-2  text-xs sm:text-sm items-center">
                <span className="bg-gray-100 px-2 py-1 rounded inline-flex items-center gap-1">
                  <img
                    src="https://img.icons8.com/color/24/visa.png"
                    alt="Visa"
                    className="w-4 h-4"
                  />
                  Visa
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded inline-flex items-center gap-1">
                  <img
                    src="https://img.icons8.com/color/24/mastercard-logo.png"
                    alt="Mastercard"
                    className="w-4 h-4"
                  />
                  Mastercard
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded inline-flex items-center gap-1">
                  <img
                    src="https://img.icons8.com/color/24/amex.png"
                    alt="American Express"
                    className="w-4 h-4"
                  />
                  American Express
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded inline-flex items-center gap-1">
                  <img
                    src="https://img.icons8.com/ios-filled/24/000000/apple-pay.png"
                    alt="Apple Pay"
                    className="w-4 h-4"
                  />
                  Apple Pay
                </span>
              </div>

              <Link
                href="#"
                className="text-indigo-600 text-sm mt-3 block hover:underline"
              >
                Payment method pricing →
              </Link>
            </div>
          </section>

          {/* Features Grid Section */}
          <section className="mt-16 sm:mt-24">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Core features for secure online payments:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 text-gray-700">
              <FeatureCard
                title="📷 Smart Card Scanning"
                features={[
                  "OCR-based card detection",
                  "Instant number recognition",
                  "Expiration & CVV capture",
                  "Real-time validation",
                ]}
              />
              <FeatureCard
                title="🛡 AI Fraud Detection"
                features={[
                  "Machine learning analysis",
                  "Anomaly detection",
                  "Device fingerprinting",
                  "No user friction",
                ]}
              />
              <FeatureCard
                title="🔐 End-to-End Encryption"
                features={[
                  "TLS 1.3 security layer",
                  "Tokenized card data",
                  "Encrypted transmission",
                  "Zero data retention",
                ]}
              />
              <FeatureCard
                title="⚡ Fast & Seamless Checkout"
                features={[
                  "Auto-filled payment fields",
                  "Card type recognition",
                  "Responsive UI",
                  "Optimized UX flow",
                ]}
              />
              <FeatureCard
                title="📊 Real-Time Monitoring"
                features={[
                  "Live transaction logs",
                  "Suspicious behavior alerts",
                  "Analytics dashboard",
                  "Custom event tracking",
                ]}
              />
              <FeatureCard
                title="🧪 Developer Friendly"
                features={[
                  "RESTful API access",
                  "SDKs for all platforms",
                  "Built-in sandbox mode",
                  "Webhooks for events",
                ]}
              />
              <FeatureCard
                title="✅ Compliance Ready"
                features={[
                  "PCI-DSS certified flow",
                  "3D Secure support",
                  "GDPR-ready architecture",
                  "Audit-friendly logging",
                ]}
              />
              <FeatureCard
                title="🔄 Seamless Integrations"
                features={[
                  "Stripe, PayPal, Square support",
                  "One-click embed",
                  "Cross-platform compatibility",
                  "Easy onboarding",
                ]}
              />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 sm:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <FAQItem
                question="How does pricing work?"
                answer="Our pricing is simple and transparent. You only pay for successful transactions with no setup fees, monthly fees, or hidden costs. Standard plan is 2.9% + 30¢ per transaction for domestic cards."
              />
              
              <FAQItem
                question="What's included in the Standard plan?"
                answer="The Standard plan includes fraud prevention, checkout optimization tools, payment method support for all major cards and digital wallets, basic analytics, and email support. Perfect for small to medium businesses."
              />
              
              <FAQItem
                question="When should I consider the Premium plan?"
                answer="Premium is ideal for growing businesses that need priority support, advanced analytics, custom reporting, and higher API limits. It includes everything in Standard plus 24/7 support and advanced dashboard features."
              />
              
              <FAQItem
                question="What makes Custom pricing different?"
                answer="Custom pricing is designed for high-volume businesses with specific needs. It includes volume discounts, dedicated account management, custom integrations, and specialized features. Contact our sales team for a personalized quote."
              />
              
              <FAQItem
                question="Are there any setup or monthly fees?"
                answer="No! We don't charge setup fees, monthly fees, or any hidden costs. You only pay for successful transactions. This makes it easy to get started and scale as your business grows."
              />
              
              <FAQItem
                question="What payment methods do you support?"
                answer="We support all major credit and debit cards (Visa, Mastercard, American Express), digital wallets (Apple Pay, Google Pay), bank transfers, and many local payment methods depending on your region."
              />
              
              <FAQItem
                question="How secure is your platform?"
                answer="Security is our top priority. We're PCI-DSS Level 1 certified, use end-to-end encryption, and employ advanced AI-powered fraud detection. Your customers' data is never stored on our servers after processing."
              />
              
              <FAQItem
                question="Can I switch plans anytime?"
                answer="Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll only be charged the new rate for transactions processed after the change."
              />
            </div>
          </section>


        </div>
      </div>
    </>
  );
}

// Reusable feature block component
function FeatureCard({ title, features }) {
  return (
    <div className="bg-white/75 backdrop-blur-md p-4 rounded-lg shadow-sm border border-white/30">
      <h4 className="font-semibold text-lg sm:text-xl mb-2">{title}</h4>
      <ul className="list-disc list-inside text-sm space-y-1">
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 shadow-sm">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-gray-900 pr-4">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}