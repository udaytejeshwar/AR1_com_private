import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Commented out sliding effect state variables
  // const [curtainPosition, setCurtainPosition] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);
  // const [isRevealed, setIsRevealed] = useState(false);
  // const [dragStartX, setDragStartX] = useState(0);
  // const [dragStartPosition, setDragStartPosition] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);
  
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

  // Commented out mobile detection effect
  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   
  //   checkMobile();
  //   window.addEventListener('resize', checkMobile);
  //   return () => window.removeEventListener('resize', checkMobile);
  // }, []);

  // Commented out curtain reset effect
  // useEffect(() => {
  //   const resetCurtain = () => {
  //     setCurtainPosition(0);
  //     setIsRevealed(false);
  //   };
  //   
  //   window.addEventListener('resize', resetCurtain);
  //   return () => window.removeEventListener('resize', resetCurtain);
  // }, []);

  // Commented out drag handlers
  // const handleStart = useCallback((clientX: number) => {
  //   setIsDragging(true);
  //   setDragStartX(clientX);
  //   setDragStartPosition(curtainPosition);
  // }, [curtainPosition]);

  // const handleMove = useCallback((clientX: number) => {
  //   if (!isDragging) return;
  //   
  //   const deltaX = clientX - dragStartX;
  //   const newPosition = Math.max(0, Math.min(100, dragStartPosition + (deltaX / window.innerWidth) * 100));
  //   setCurtainPosition(newPosition);
  // }, [isDragging, dragStartX, dragStartPosition]);

  // const handleEnd = useCallback(() => {
  //   if (!isDragging) return;
  //   
  //   setIsDragging(false);
  //   
  //   if (curtainPosition > 30) {
  //     setCurtainPosition(100);
  //     setIsRevealed(true);
  //   } else {
  //     setCurtainPosition(0);
  //     setIsRevealed(false);
  //   }
  // }, [isDragging, curtainPosition]);

  // Commented out mouse event handlers
  // const handleMouseDown = useCallback((e: React.MouseEvent) => {
  //   e.preventDefault();
  //   handleStart(e.clientX);
  // }, [handleStart]);

  // const handleMouseMove = useCallback((e: MouseEvent) => {
  //   handleMove(e.clientX);
  // }, [handleMove]);

  // const handleMouseUp = useCallback(() => {
  //   handleEnd();
  // }, [handleEnd]);

  // Commented out touch event handlers
  // const handleTouchStart = useCallback((e: React.TouchEvent) => {
  //   handleStart(e.touches[0].clientX);
  // }, [handleStart]);

  // const handleTouchMove = useCallback((e: TouchEvent) => {
  //   e.preventDefault();
  //   handleMove(e.touches[0].clientX);
  // }, [handleMove]);

  // const handleTouchEnd = useCallback(() => {
  //   handleEnd();
  // }, [handleEnd]);

  // Commented out mouse and touch event listeners
  // useEffect(() => {
  //   if (isDragging) {
  //     document.addEventListener('mousemove', handleMouseMove);
  //     document.addEventListener('mouseup', handleMouseUp);
  //     document.addEventListener('touchmove', handleTouchMove, { passive: false });
  //     document.addEventListener('touchend', handleTouchEnd);
  //     
  //     return () => {
  //       document.removeEventListener('mousemove', handleMouseMove);
  //       document.removeEventListener('mouseup', handleMouseUp);
  //       document.removeEventListener('touchmove', handleTouchMove);
  //       document.removeEventListener('touchend', handleTouchEnd);
  //     };
  //   }
  // }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Commented out slider button click handler
  // const handleSliderButtonClick = () => {
  //   if (isRevealed) {
  //     setCurtainPosition(0);
  //     setIsRevealed(false);
  //   } else {
  //     setCurtainPosition(100);
  //     setIsRevealed(true);
  //   }
  // };

  return (
    <section className="relative min-h-screen h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_50%,_#4d5d6d,_#000000)]">
      {/* Background Layer */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: 0.2
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Main Content - Always Visible */}
      <div className="relative h-full flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter mb-4 sm:mb-6">
            Precision at the Core. <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Innovation at Scale.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
            ArkRidge Industries designs and builds advanced motion systems and critical electromechanical components for next-generation industries.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
            <a 
              href="#vision"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full sm:w-auto justify-center"
              style={{ color: '#4d5d6d' }}
            >
              Our Vision
            </a>
            <a 
              href="#brands"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-md text-base sm:text-lg font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Our Products
            </a>
          </div>
        </div>
      </div>

      {/* Commented out Revealed Content - Ark Spindles */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10" />
        
        <div className="relative h-full flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-1xl sm:text-2xl md:text-3xl font-thin tracking-[0.20em] mb-3 sm:mb-4 leading-tight uppercase text-white"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontStretch: 'expanded' }}
              >
                ARK SPINDLES<span className="text-[0.5em] ml-[0.1em]"
                  style={{ verticalAlign: 'super' }}>™</span>
              </h1>
              <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4 sm:mb-6"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Precision Engineered <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                High-Performance Spindles
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced electrospindles engineered for demanding CNC machining applications. 
              Precision-built for wood, stone, and aluminum processing with exceptional reliability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">60K+</div>
                <div className="text-xs sm:text-sm text-gray-300">RPM Capability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">±0.001</div>
                <div className="text-xs sm:text-sm text-gray-300">Precision (mm)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Operation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">Custom</div>
                <div className="text-xs sm:text-sm text-gray-300">Configurations</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg text-base sm:text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl" style={{ color: '#4d5d6d' }}>
                View Specifications
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-md text-base sm:text-lg font-medium hover:bg-white/10 transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Commented out Curtain Overlay */}
      {/* <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#4d5d6d,_#000000)] transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
        style={{ 
          transform: `translateX(-${curtainPosition}%)`,
          zIndex: 10
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            opacity: 0.2
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative h-full flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter mb-4 sm:mb-6">
              Precision at the Core. <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                Innovation at Scale.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
              ArkRidge Industries designs and builds advanced motion systems and critical electromechanical components for next-generation industries.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
              <a 
                href="#vision"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full sm:w-auto justify-center"
                style={{ color: '#4d5d6d' }}
              >
                Our Vision
              </a>
              <a 
                href="#brands"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-md text-base sm:text-lg font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Our Products
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div> */}

      {/* Commented out Obvious Slider Button */}
      {/* <button
        onClick={handleSliderButtonClick}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 sm:p-4 hover:bg-white/30 transition-all duration-300 group"
        aria-label={isRevealed ? "Show main content" : "Show Ark Spindles"}
      >
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isRevealed ? 'bg-blue-400' : 'bg-white'}`}></div>
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${!isRevealed ? 'bg-blue-400' : 'bg-white/50'}`}></div>
        </div>
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          {isRevealed ? "← Main" : "Products →"}
        </div>
      </button> */}

      {/* Commented out Right edge visual indicator */}
      {/* <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent z-30 pointer-events-none"></div> */}

      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#vision" className="text-white">
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
