import React, { useEffect, useRef, useState } from 'react';

const capabilities = [
  {
    id: 'current',
    title: 'Precision Spindle Technology',
    description: 'Our flagship capability: high-performance electrospindles with advanced thermal management, precision bearings, and custom configurations for demanding CNC applications.',
    details: [
      'High-speed precision spindles up to 60,000 RPM',
      'Advanced thermal management systems',
      'Custom motor configurations',
      'Industrial-grade reliability testing'
    ],
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'development',
    title: 'Advanced Motion Systems',
    description: 'Expanding into comprehensive motion control solutions including servo motors, linear actuators, and integrated mechatronics systems for industrial automation.',
    details: [
      'Servo motor design and manufacturing',
      'Linear motion systems',
      'Integrated control electronics',
      'Custom mechatronics assemblies'
    ],
    image: 'https://images.pexels.com/photos/4386345/pexels-photo-4386345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'engineering',
    title: 'Advanced Engineering Culture',
    description: 'Our engineering approach combines cutting-edge simulation, AI-based optimization, and rigorous testing to deliver components that exceed industry standards.',
    details: [
      'CAD/CAM integration and simulation',
      'AI-based thermal and vibration optimization',
      'Advanced materials research',
      'Comprehensive testing and validation'
    ],
    image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'future',
    title: 'Next-Generation Components',
    description: 'Research and development into miniaturized motors for medical applications, aerospace-grade components, and specialized systems for emerging industries.',
    details: [
      'Miniaturized medical device motors',
      'Aerospace-grade motion systems',
      'High-performance tool holders',
      'Custom electromechanical solutions'
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
    <section id="capabilities" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Engineering Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From our current expertise in precision spindles to our expanding capabilities across multiple engineering disciplines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal opacity-0">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="bg-white rounded-xl overflow-hidden h-full transition-all duration-500 shadow-lg">
              <div className="relative h-64 md:h-96">
                <img 
                  src={activeCapability.image} 
                  alt={activeCapability.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {activeCapability.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {activeCapability.description}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-4">Key Features & Capabilities:</h4>
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
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Explore Our Technologies</h3>
              
              <div className="space-y-3">
                {capabilities.map((capability) => (
                  <button
                    key={capability.id}
                    onClick={() => setActiveTab(capability.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeTab === capability.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{capability.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
