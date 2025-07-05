import React, { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Brands: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal') || [];
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="brands" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Starting with precision spindle technology, we're building a comprehensive portfolio of advanced motion systems and electromechanical components.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal opacity-0">
          {/* Ark Spindles - Current Product */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white shadow-2xl mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Ark Spindles</h3>
                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium">
                  Available Now
                </span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              High-performance electrospindles engineered for demanding CNC machining applications. Precision-built for wood, stone, and aluminum processing with exceptional reliability and performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                <span className="text-blue-100">High-speed precision spindles</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                <span className="text-blue-100">Advanced thermal management</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                <span className="text-blue-100">Industrial-grade reliability</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                <span className="text-blue-100">Custom configurations available</span>
              </div>
            </div>
            
            <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              Visit Ark Spindles
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal opacity-0">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Our current expertise in precision spindle technology serves as the foundation for expanding into comprehensive motion systems and electromechanical components across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Partner with Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#capabilities" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-md text-lg font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Our Capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
