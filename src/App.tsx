import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Industries from './sections/Industries';
import About from './sections/About';
import Capabilities from './sections/Capabilities';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Industries />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App