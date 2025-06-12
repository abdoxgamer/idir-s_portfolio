import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <img
              src="/profile-photo.jpg"
              alt="Abdelwahed Idir"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover shadow-2xl border-4 border-white hover:shadow-3xl hover:scale-105 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'padding-box'
              }}
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full opacity-30 animate-pulse delay-1000 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full opacity-25 animate-bounce delay-500 hover:opacity-45 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
          Abdelwahed Idir
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Fisheries Engineering Student | Aquaculture Enthusiast | Multilingual Tech Learner
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Get In Touch</span>
          </button>
          <button
            onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10">View Certificates</span>
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 transform"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;