import React, { useEffect, useRef } from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Alexandra Chen',
    role: 'Chief Executive Officer',
    bio: 'Former aerospace engineering executive with 20+ years of experience in precision manufacturing and a Ph.D. in Advanced Materials Science.',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Pioneering engineer who led R&D teams at leading tech companies, specializing in automated manufacturing systems and digital twin technology.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Head of Advanced Materials',
    bio: 'Materials scientist with breakthrough research in high-performance alloys and composites for extreme environments.',
    image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'James Wilson',
    role: 'Director of Global Operations',
    bio: 'Supply chain expert with expertise in lean manufacturing and worldwide logistics optimization for precision components.',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Team: React.FC = () => {
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
    <section id="team" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry veterans with decades of combined experience in precision manufacturing, engineering, and technological innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal opacity-0">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="relative h-64 sm:h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal opacity-0">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Our team combines decades of expertise across aerospace, medical, automotive, and high-tech industries to deliver unparalleled manufacturing solutions.
          </p>
          
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Connect With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;