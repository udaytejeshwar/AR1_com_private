import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tighter">ARKRIDGE</h3>
            <p className="text-gray-400 max-w-xs">
              Redefining precision manufacturing across industries with cutting-edge
              technology and uncompromising quality.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
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
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
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
                <a href="mailto:contact@arkridge.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@arkridgeindustries.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ArkRidge Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
