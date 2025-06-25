'use client';

import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
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
};

function FAQs() {
  const faqData = [
    {
      question: "How does pricing work?",
      answer:
        "Our pricing is simple and transparent. You only pay for successful transactions with no setup fees, monthly fees, or hidden costs. Standard plan is 2.9% + 30¢ per transaction for domestic cards.",
    },
    {
      question: "What's included in the Standard plan?",
      answer:
        "The Standard plan includes fraud prevention, checkout optimization tools, payment method support for all major cards and digital wallets, basic analytics, and email support. Perfect for small to medium businesses.",
    },
    {
      question: "When should I consider the Premium plan?",
      answer:
        "Premium is ideal for growing businesses that need priority support, advanced analytics, custom reporting, and higher API limits. It includes everything in Standard plus 24/7 support and advanced dashboard features.",
    },
    {
      question: "What makes Custom pricing different?",
      answer:
        "Custom pricing is designed for high-volume businesses with specific needs. It includes volume discounts, dedicated account management, custom integrations, and specialized features. Contact our sales team for a personalized quote.",
    },
    {
      question: "Are there any setup or monthly fees?",
      answer:
        "No! We don't charge setup fees, monthly fees, or any hidden costs. You only pay for successful transactions. This makes it easy to get started and scale as your business grows.",
    },
    {
      question: "What payment methods do you support?",
      answer:
        "We support all major credit and debit cards (Visa, Mastercard, American Express), digital wallets (Apple Pay, Google Pay), bank transfers, and many local payment methods depending on your region.",
    },
    {
      question: "How secure is your platform?",
      answer:
        "Security is our top priority. We're PCI-DSS Level 1 certified, use end-to-end encryption, and employ advanced AI-powered fraud detection. Your customers' data is never stored on our servers after processing.",
    },
    {
      question: "Can I switch plans anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll only be charged the new rate for transactions processed after the change.",
    },
  ];

  return (
    <section className="my-5 sm:my-5">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to know about our pricing and plans
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQs;
