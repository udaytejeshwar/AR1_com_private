import React, { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 1,
    name: 'Aerospace',
    description: 'Crafting ultra-precise components for aircraft, spacecraft, and defense systems that meet rigorous safety and performance standards.',
    image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Medical',
    description: 'Manufacturing life-saving devices and implants with exceptional precision, reliability, and biocompatibility.',
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Automotive',
    description: 'Producing high-performance components for next-generation vehicles, focusing on efficiency, durability, and innovation.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Electronics',
    description: 'Creating intricate parts for electronic devices and systems with exceptional precision and reliability.',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Renewable Energy',
    description: 'Engineering critical components for solar, wind, and other renewable energy systems that maximize efficiency and sustainability.',
    image: 'https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Defense',
    description: 'Developing mission-critical hardware with uncompromising quality and security for national defense applications.',
    image: 'https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Industries: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((current) => {
        const nextIndex = industries.findIndex(ind => ind.id === current) + 1;
        return nextIndex >= industries.length ? industries[0].id : industries[nextIndex].id;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const activeIndustryData = industries.find(ind => ind.id === activeIndustry) || industries[0];

  return (
    <section id="industries" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Transform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our precision manufacturing capabilities span across multiple sectors, bringing innovation and excellence to diverse applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center reveal opacity-0">
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeIndustry === industry.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
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
      </div>
    </section>
  );
};

export default Industries;