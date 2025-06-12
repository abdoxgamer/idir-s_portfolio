import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Languages from './components/Languages';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Languages />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Abdelwahed Idir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;