import React, { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 1,
    name: 'Aerospace',
    description: 'Developing ultra-precise components for aircraft, spacecraft, and defense systems. Our roadmap includes compact high-speed rotors and motion-control assemblies for next-generation aerospace applications.',
    image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Medical Devices',
    description: 'Engineering miniaturized motors and precision components for life-saving medical devices and surgical instruments that demand exceptional reliability and biocompatibility.',
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'CNC & Robotics',
    description: 'Currently serving this sector with our Ark Spindles electrospindle line. Expanding into advanced tool holders and precision motion systems for industrial automation.',
    image: 'https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Industrial Automation',
    description: 'Building mechatronics and robotics components that enable the next generation of smart manufacturing and automated production systems.',
    image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Automotive Systems',
    description: 'Designing precision electromechanical components for electric vehicles and advanced automotive systems that require exceptional performance and durability.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Defense',
    description: 'Developing mission-critical motion systems and precision components for defense applications where reliability and performance are paramount.',
    image: 'https://images.pexels.com/photos/87011/helicopter-army-military-war-87011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Industries: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(industries[2].id); // Start with CNC & Robotics
  
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

  const activeIndustryData = industries.find(ind => ind.id === activeIndustry) || industries[2];

  return (
    <section id="industries" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We're Designed to Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our infrastructure is being designed to serve the future of these industries, building from our current expertise toward comprehensive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start reveal opacity-0">
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeIndustry === industry.id
                      ? 'text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  style={activeIndustry === industry.id ? { background: 'linear-gradient(135deg, #4d5d6d 0%, #000000 100%)' } : {}}
                >
                  <span className="font-medium text-lg">{industry.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 h-full">
              <div className="relative h-64 md:h-96">
                <img
                  src={activeIndustryData.image}
                  alt={activeIndustryData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {activeIndustryData.name}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {activeIndustryData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal opacity-0">
          <div className="text-white rounded-xl p-8 max-w-4xl mx-auto" style={{ background: 'linear-gradient(135deg, #4d5d6d 0%, #000000 100%)' }}>
            <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-gray-200 mb-6">
              Whether you need our current spindle technology or want to discuss future collaboration opportunities, we're here to help engineer your next breakthrough.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              style={{ color: '#4d5d6d' }}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
