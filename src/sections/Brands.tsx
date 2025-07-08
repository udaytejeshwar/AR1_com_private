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
            Precision Engineering Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From our flagship electrospindle technology to our expanding portfolio of advanced motion systems, we deliver precision components that power next-generation industries.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal opacity-0">
          {/* Ark Spindles - Current Product */}
          <div className="rounded-2xl p-8 lg:p-12 text-white shadow-2xl mb-12" style={{ background: 'linear-gradient(135deg, #4d5d6d 0%, #000000 100%)' }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-1xl sm:text-2xl md:text-3xl font-thin tracking-[0.20em] mb-3 sm:mb-4 leading-tight uppercase text-white"
  style={{ fontFamily: "'Nunito Sans', sans-serif", fontStretch: 'expanded' }}
>
  ARK SPINDLES<span className="text-[0.5em] ml-[0.1em]"
    style={{ verticalAlign: 'super' }}>™</span></h3>
              </div>
            </div>
            
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              High-performance electrospindles engineered for demanding CNC machining applications. Precision-built for wood, stone, and aluminum processing with exceptional reliability and performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                <span className="text-gray-200">High-speed precision spindles</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                <span className="text-gray-200">Advanced thermal management</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                <span className="text-gray-200">Industrial-grade reliability</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                <span className="text-gray-200">Custom configurations available</span>
              </div>
            </div>
            
            <button className="w-full bg-white py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center" style={{ color: '#4d5d6d' }}>
              Visit ARK SPINDLES™
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal opacity-0">
          <div className="rounded-2xl p-8 lg:p-12 text-white" style={{ background: 'linear-gradient(135deg, #000000 0%, #4d5d6d 100%)' }}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Our current expertise in precision spindle technology serves as the foundation for expanding into comprehensive motion systems and electromechanical components across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                style={{ color: '#4d5d6d' }}
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
