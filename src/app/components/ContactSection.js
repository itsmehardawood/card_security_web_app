import React from 'react'


const ContactSection = () => {
  return (
    <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Explore our products or create an account to start accepting payments
          today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200">
            Start now
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">
            Contact sales
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Get in touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Sales</h4>
              <p className="text-gray-600 text-sm mb-2">
                Ready to start? Talk to our sales team.
              </p>
              <p className="text-blue-600 font-medium">sales@fintech.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600 text-sm mb-2">
                Need help? Our support team is here.
              </p>
              <p className="text-blue-600 font-medium">support@fintech.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Press</h4>
              <p className="text-gray-600 text-sm mb-2">
                Media inquiries and press resources.
              </p>
              <p className="text-blue-600 font-medium">press@fintech.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactSection
