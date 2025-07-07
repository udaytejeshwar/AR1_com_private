import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [curtainPosition, setCurtainPosition] = useState(0); // Start at 0% for mobile, will be set based on screen size
  const [isDragging, setIsDragging] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Set initial position based on screen size
      if (mobile) {
        setCurtainPosition(0); // Start at 0% on mobile
        setDragStartPosition(0);
      } else {
        setCurtainPosition(15); // Start at 15% on desktop
        setDragStartPosition(15);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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

  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragStartPosition(curtainPosition);
  }, [curtainPosition]);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    
    const deltaX = dragStartX - clientX;
    const windowWidth = window.innerWidth;
    const dragSensitivity = 100;
    const positionChange = (deltaX / windowWidth) * dragSensitivity;
    
    const newPosition = Math.max(0, Math.min(100, dragStartPosition + positionChange));
    setCurtainPosition(newPosition);
    
    if (newPosition > 80) {
      setIsRevealed(true);
    } else {
      setIsRevealed(false);
    }
  }, [isDragging, dragStartX, dragStartPosition]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (curtainPosition > 50) {
      setCurtainPosition(100);
      setIsRevealed(true);
    } else {
      const resetPosition = isMobile ? 0 : 15;
      setCurtainPosition(resetPosition);
      setIsRevealed(false);
    }
  }, [isDragging, curtainPosition, isMobile]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    e.preventDefault();
    handleEnd();
  }, [handleEnd]);

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    if (isMobile) {
      // On mobile, tap the slider button to reveal
      if (touch.clientX > window.innerWidth * 0.8) {
        setCurtainPosition(100);
        setIsRevealed(true);
      }
    } else {
      handleStart(touch.clientX);
    }
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    if (!isMobile && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove, isMobile]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    e.preventDefault();
    if (!isMobile) {
      handleEnd();
    }
  }, [handleEnd, isMobile]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
      
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    } else {
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const resetCurtain = () => {
    const resetPosition = isMobile ? 0 : 15;
    setCurtainPosition(resetPosition);
    setIsRevealed(false);
  };

  const handleSliderButtonClick = () => {
    setCurtainPosition(100);
    setIsRevealed(true);
  };

  return (
    <section className="relative min-h-screen h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_50%,_#4d5d6d,_#000000)]">
      {/* Background Layer - Always visible */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: 0.2
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Revealed Content - Ark Spindles (Behind curtain) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#4d5d6d,_#000000)]">
        {/* Product Background Image */}
        
        
        {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-blue-900/80" /> */}
        
        <div className="relative h-full flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* Ark Spindles Logo/Brand */}
            <div className="mb-6 sm:mb-8">
              
              <h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-[0.50em] mb-3 sm:mb-4 leading-tight uppercase text-white"
  style={{ fontFamily: "'Nunito Sans', sans-serif", fontStretch: 'expanded' }}
>
  ARK SPINDLES™
</h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              High-performance electrospindles engineered for demanding CNC machining applications. 
              Precision-built for wood, stone, and aluminum processing.
            </p>
            
            
            {isRevealed && (
              <div className="animate-fade-in-delayed px-2">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <a 
                    href="https://arkspindles.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full sm:w-auto justify-center"
style={{ color: '#4d5d6d' }}
                  >
                    Explore Ark Spindles™
                    <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  
                  <button
                    onClick={resetCurtain}
                    className="px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg text-base sm:text-lg font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                  >
                    Back to Main
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Curtain Overlay - Slides from right to left */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-gray-900 via-[#4d5d6d] to-gray-900 transition-transform duration-300 ease-out z-10 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          transform: `translateX(-${curtainPosition}%)`,
          transformOrigin: 'left center'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Curtain Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            opacity: 0.2
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        {/* Main Content - Responsive Layout */}
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

        {/* Obvious Slider Button - Much more prominent */}
        {!isRevealed && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
            <button
              onClick={handleSliderButtonClick}
              className="group text-white font-bold py-4 px-3 sm:py-6 sm:px-4 rounded-l-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none border-2 border-white/20"
              style={{ 
                background: 'linear-gradient(135deg, #4d5d6d 0%, #000000 100%)',
                ':hover': { background: 'linear-gradient(135deg, #5d6d7d 0%, #1a1a1a 100%)' }
              }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {isMobile ? 'Tap' : 'Slide'}
                  
                </div>
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Products
                </div>
              </div>
            </button>
            
            {/* Animated hint arrows */}
            <div className="absolute -left-8 sm:-left-12 top-1/2 transform -translate-y-1/2 flex space-x-1 animate-pulse">
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white/60" />
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white/40" />
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white/20" />
            </div>
          </div>
        )}

        {/* Right edge visual indicator */}
        <div className="absolute right-0 top-0 w-1 sm:w-2 h-full bg-gradient-to-r from-transparent to-white/20"></div>
      </div>
      
      {/* Scroll Indicator - Responsive positioning */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#vision" className="text-white">
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
