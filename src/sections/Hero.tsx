import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [curtainPosition, setCurtainPosition] = useState(25); // Start at 25% revealed
  const [isDragging, setIsDragging] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartPosition, setDragStartPosition] = useState(25);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
    // Allow dragging from anywhere on the curtain, but prioritize right edge
    setIsDragging(true);
    setDragStartX(clientX);
    setDragStartPosition(curtainPosition);
  }, [curtainPosition]);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    
    const deltaX = dragStartX - clientX; // Positive when dragging left
    const windowWidth = window.innerWidth;
    const dragSensitivity = 100; // How much to move per window width
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
      // Snap to fully revealed
      setCurtainPosition(100);
      setIsRevealed(true);
    } else {
      // Snap back to starting position (25%)
      setCurtainPosition(25);
      setIsRevealed(false);
    }
  }, [isDragging, curtainPosition]);

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
      // On mobile, tap anywhere on right side to reveal
      if (touch.clientX > window.innerWidth * 0.7) {
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
      // Add event listeners to document for better drag handling
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
      
      // Prevent text selection during drag
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    } else {
      // Re-enable text selection
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
    setCurtainPosition(25); // Reset to 25% instead of 0%
    setIsRevealed(false);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        {/* Product Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-blue-900/80" />
        
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Ark Spindles Logo/Brand */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-4xl font-bold">⚡</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Ark Spindles
                </span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              High-performance electrospindles engineered for demanding CNC machining applications. 
              Precision-built for wood, stone, and aluminum processing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-300 mb-2">60,000</div>
                <div className="text-blue-200">RPM Max Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-300 mb-2">99.9%</div>
                <div className="text-blue-200">Precision Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-300 mb-2">24/7</div>
                <div className="text-blue-200">Industrial Grade</div>
              </div>
            </div>
            
            {isRevealed && (
              <div className="animate-fade-in-delayed">
                <a 
                  href="https://arkspindles.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                >
                  Explore Ark Spindles
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                
                <button
                  onClick={resetCurtain}
                  className="ml-4 px-6 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Back to Main
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Curtain Overlay - Slides from right to left */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 transition-transform duration-300 ease-out z-10 ${
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
        
        {/* Main Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6 animate-fade-in">
              Precision at the Core. <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                Innovation at Scale.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-10 max-w-4xl mx-auto animate-fade-in-delayed leading-relaxed">
              ArkRidge Industries designs and builds advanced motion systems and critical electromechanical components for next-generation industries.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delayed-more">
              <a 
                href="#vision"
                className="px-8 py-4 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Our Vision
              </a>
              <a 
                href="#brands"
                className="px-8 py-4 bg-transparent border-2 border-white rounded-md text-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Our Products
              </a>
            </div>
          </div>
        </div>

        {/* Drag Hint */}
        {!isRevealed && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70">
            <div className="flex flex-col items-center animate-pulse">
              <div className="w-1 h-16 bg-white/50 rounded-full mb-2"></div>
              <span className="text-sm font-medium">
                {isMobile ? 'Tap to reveal' : 'Drag to reveal'}
              </span>
              <div className="w-1 h-16 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        )}

        {/* Right edge visual indicator */}
        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-r from-transparent to-white/20"></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#vision" className="text-white">
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
