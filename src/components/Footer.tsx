import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">ARKRIDGE INDUSTRIES</h3>
            <p className="text-gray-400 max-w-md mb-6">
              Engineering precision motion systems and electromechanical components for next-generation industries. Building tomorrow's technology today.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#brands" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Ark Spindles
                </a>
              </li>
              <li>
                <span className="text-gray-500">Motion Systems (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500">Medical Components (Planned)</span>
              </li>
              <li>
                <span className="text-gray-500">Aerospace Systems (Planned)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#vision" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Industries
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <span className="text-gray-400">Plot 28, Telecom nagar, Gachibowli, Hyderabad</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-400">+91 (630) 918-5996</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <a href="mailto:info@arkridgeindustries.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    info@arkridgeindustries.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} ArkRidge Industries. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Building the future of precision manufacturing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
