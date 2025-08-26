import React from 'react';
import UnderConstruction from './components/UnderConstruction';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Industries from './sections/Industries';
import Brands from './sections/Brands';
import Capabilities from './sections/Capabilities';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  // Check if the site is in under construction mode
  const isUnderConstruction = import.meta.env.VITE_UNDER_CONSTRUCTION === 'true';

  // If under construction, show only the under construction page
  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  // Otherwise, show the normal site
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Industries />
{/*         <Brands /> */}
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
