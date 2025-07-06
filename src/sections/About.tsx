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
    <section id="vision" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Engineering the Future of <br />
                <span style={{ color: '#4d5d6d' }}>Precision Manufacturing</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ArkRidge Industries was established to design and manufacture mission-critical precision components across aerospace, medical, defense, and industrial sectors. With a deep focus on core engineering principles, we are building a platform to serve industries where quality and reliability are non-negotiable.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our infrastructure is being designed to serve the future of these industries, combining advanced simulation, AI-based optimization, and cutting-edge manufacturing processes to deliver components that exceed tomorrow's standards.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-gray-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Current Operations</h3>
                <p className="text-gray-700">
                  We currently manufacture high-performance electrospindles under our dedicated brand <strong>Ark Spindles</strong>. These products are engineered for demanding machining applications across wood, stone, and aluminum processing, serving as our foundation for broader manufacturing excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-gray-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">R&D</p>
                  <p className="text-gray-600">Driven Innovation</p>
                </div>
                
                <div className="border-l-4 border-gray-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">99.9%</p>
                  <p className="text-gray-600">Precision Standards</p>
                </div>
                
                <div className="border-l-4 border-gray-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">Multi</p>
                  <p className="text-gray-600">Industry Focus</p>
                </div>
                
                <div className="border-l-4 border-gray-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">Global</p>
                  <p className="text-gray-600">Vision & Reach</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal opacity-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-gray-100 rounded-lg -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Advanced engineering and design facility" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{height: "600px"}} 
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 reveal opacity-0">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Advanced Engineering Culture</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our engineering approach combines cutting-edge simulation, AI-based optimization, and rigorous testing to deliver components that exceed industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-lg shadow-lg" style={{ background: 'linear-gradient(135deg, #4d5d6d 0%, #000000 100%)' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Advanced Simulation & Testing</h4>
              <p className="text-gray-200">
                Comprehensive finite element analysis, thermal modeling, and vibration testing ensure our components perform flawlessly under extreme conditions before they reach production.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-500/10 rounded-full flex items-center justify-center mb-6">
                <span style={{ color: '#4d5d6d' }} className="text-2xl">⚙️</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">CAD/CAM Integration</h4>
              <p className="text-gray-600">
                Seamless integration from design to manufacturing through advanced CAD/CAM systems, enabling rapid prototyping and precision manufacturing with minimal tolerance variations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-500/10 rounded-full flex items-center justify-center mb-6">
                <span style={{ color: '#4d5d6d' }} className="text-2xl">🤖</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">AI-Based Optimization</h4>
              <p className="text-gray-600">
                Machine learning algorithms optimize thermal management and vibration characteristics, enabling us to push performance boundaries while maintaining reliability and longevity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
