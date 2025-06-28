import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const translateY = scrollPosition * 0.5;
      
      heroRef.current.style.transform = `translateY(${translateY}px)`;
      heroRef.current.style.opacity = opacity.toString();
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      <div
  ref={heroRef}
  className="absolute inset-0 w-full h-full bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroBg})`,
    opacity: 0.3
  }}
/>
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6 animate-fade-in">
            Pioneering Tomorrow's <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Manufacturing Solutions
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-delayed">
            Advancing precision manufacturing with cutting-edge technology and innovation
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delayed-more">
            <a 
              href="#about"
              className="px-8 py-4 bg-white text-gray-900 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Discover More
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white rounded-md text-lg font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
