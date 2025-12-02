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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 relative">
          <div className="relative inline-block group">
            {/* Animated background rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 opacity-75 blur-lg animate-pulse group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-green-500 opacity-20 animate-spin-slow group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 animate-pulse delay-1000 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main photo container */}
            <div className="relative bg-white p-2 rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img
                src="/profile-photo.jpg"
                alt="Abdelwahed Idir"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-inner border-4 border-white group-hover:border-blue-100 transition-all duration-500 transform group-hover:scale-105"
                style={{
                  filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                }}
              />
              
              {/* Professional overlay gradient */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-t from-black/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80 animate-float shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-70 animate-float-delayed shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500"></div>
            <div className="absolute top-1/2 -right-10 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-60 animate-bounce-slow shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500"></div>
            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full opacity-50 animate-pulse shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500"></div>
            
            {/* Professional badge */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              Professional
            </div>
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