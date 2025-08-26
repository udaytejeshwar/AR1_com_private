import React from 'react';
import { Mail, Phone, MapPin, Clock, Wrench } from 'lucide-react';
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

        {/* Construction Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
            <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Website Under 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Construction
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We're working hard to bring you an enhanced digital experience. 
          Our new website will showcase our precision engineering capabilities and advanced manufacturing solutions.
        </p>

        <div className="mb-12">
          <p className="text-base sm:text-lg text-gray-400 mb-4">
            Expected completion: Coming Soon
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Clock className="w-5 h-5 mr-2" />
            <span>We appreciate your patience</span>
          </div>
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
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
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
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
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
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Plot 28, Telecom nagar,<br />
                    Gachibowli, Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
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

          {/* Company Description */}
          <div className="border-t border-white/20 pt-8">
            <h3 className="text-xl font-semibold mb-4">About ArkRidge Industries</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              We design and manufacture advanced motion systems and critical electromechanical components 
              for aerospace, medical, defense, and industrial sectors. Currently serving the market with 
              our <strong>ARK SPINDLES™</strong> precision electrospindle technology.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              GSTIN: 36ABBCA1781B1Z4
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-gray-300 mb-4">
              For immediate assistance or inquiries about our products and services:
            </p>
            <a 
              href="mailto:info@arkridgeindustries.com?subject=Website%20Inquiry" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
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
