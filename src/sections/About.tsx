import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="reveal opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Pioneering Precision Manufacturing <br />
                <span className="text-blue-600">For Global Innovation</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our company represents the culmination of decades of manufacturing expertise, cutting-edge technology integration, and a vision to transform how precision components are designed and produced across multiple industries.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We combine state-of-the-art machinery, proprietary processes, and exceptional talent to deliver manufacturing solutions that meet the exacting demands of the world's most innovative companies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-4xl font-bold text-gray-900">15+</p>
                  <p className="text-gray-600">Industries Served</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-4xl font-bold text-gray-900">99.9%</p>
                  <p className="text-gray-600">Production Accuracy</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-4xl font-bold text-gray-900">24/7</p>
                  <p className="text-gray-600">Production Capability</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-4xl font-bold text-gray-900">Global</p>
                  <p className="text-gray-600">Service Reach</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal opacity-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-lg -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Precision manufacturing facility" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{height: "600px"}} 
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 reveal opacity-0">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every component we manufacture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl font-bold">01</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Uncompromising Precision</h4>
              <p className="text-gray-600">
                We maintain tolerances that exceed industry standards, ensuring perfect fits and optimal performance.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl font-bold">02</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Constant Innovation</h4>
              <p className="text-gray-600">
                We consistently invest in new technologies and processes to stay at the forefront of manufacturing capabilities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl font-bold">03</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Environmental Responsibility</h4>
              <p className="text-gray-600">
                Our processes are designed to minimize waste, reduce energy consumption, and utilize sustainable materials.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl font-bold">04</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Collaborative Excellence</h4>
              <p className="text-gray-600">
                We partner closely with our clients, combining our manufacturing expertise with their vision to create superior outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
