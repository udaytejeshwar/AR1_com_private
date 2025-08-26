import React from 'react';
import logo from '../assets/Logo.png';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="ArkRidge Industries Logo" 
            className="h-20 sm:h-24 md:h-28 w-auto mx-auto filter brightness-0 invert"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our website is currently undergoing scheduled maintenance to improve your experience. 
          We'll be back online shortly.
        </p>

        <div className="mb-12">
          <p className="text-base sm:text-lg text-gray-400">
            We appreciate your patience
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12 border border-white/20 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a 
                    href="mailto:info@arkridgeindustries.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    info@arkridgeindustries.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a 
                    href="tel:+916309185996" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    +91 (630) 918-5996
                  </a>
                </div>
              </div>
            </div>

            {/* Address and Hours */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Plot 28, Telecom nagar,<br />
                    Gachibowli, Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Monday - Saturday<br />
                    8:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-gray-300 mb-4">
              For immediate assistance or inquiries about our products and services:
            </p>
            <a 
              href="mailto:info@arkridgeindustries.com?subject=Website%20Inquiry" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us Now
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ArkRidge Industries. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Building the future of precision manufacturing
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
