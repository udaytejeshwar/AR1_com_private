import React, { useEffect, useRef, useState } from 'react';

const capabilities = [
  {
    id: 'cnc',
    title: 'Advanced CNC Machining',
    description: 'Our 5-axis CNC machines achieve tolerances as tight as ±0.0001 inches, creating complex geometries with exceptional surface finishes.',
    details: [
      '5-axis simultaneous machining',
      'Micro-machining capabilities',
      'High-speed cutting up to 30,000 RPM',
      'Advanced toolpath optimization'
    ],
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'additive',
    title: 'Additive Manufacturing',
    description: 'Our metal and polymer 3D printing technologies create components with internal features and geometries impossible with traditional methods.',
    details: [
      'Direct metal laser sintering (DMLS)',
      'Selective laser melting (SLM)',
      'Multi-material capabilities',
      'Post-processing and finishing'
    ],
    image: 'https://images.pexels.com/photos/4386345/pexels-photo-4386345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'metrology',
    title: 'Advanced Metrology',
    description: 'Our quality assurance employs cutting-edge measurement systems including CMM, CT scanning, and laser scanning for comprehensive verification.',
    details: [
      'High-precision coordinate measuring machines',
      'Optical measurement systems',
      'CT scanning for internal feature inspection',
      'Real-time production monitoring'
    ],
    image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'materials',
    title: 'Advanced Materials',
    description: 'We work with the full spectrum of engineering materials, from traditional alloys to advanced composites and custom-developed materials.',
    details: [
      'Titanium and super alloys',
      'Medical-grade materials',
      'High-performance polymers',
      'Ceramic composites'
    ],
    image: 'https://images.pexels.com/photos/162536/tubes-metal-components-162536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
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

  const activeCapability = capabilities.find(c => c.id === activeTab) || capabilities[0];

  return (
    <section id="capabilities" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Manufacturing Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technology and proprietary processes to achieve exceptional results across all dimensions of precision manufacturing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal opacity-0">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-xl overflow-hidden h-full transition-all duration-500">
              <div className="relative h-64 md:h-96">
                <img 
                  src={activeCapability.image} 
                  alt={activeCapability.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {activeCapability.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {activeCapability.description}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeCapability.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Explore Our Technologies</h3>
              
              <div className="space-y-3">
                {capabilities.map((capability) => (
                  <button
                    key={capability.id}
                    onClick={() => setActiveTab(capability.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeTab === capability.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{capability.title}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-3">Industry Certifications</h4>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    ISO 9001:2015
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    AS9100D (Aerospace)
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    ISO 13485 (Medical)
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    IATF 16949 (Automotive)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;