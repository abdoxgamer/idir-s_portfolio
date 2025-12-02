import React from 'react';
import { Globe } from 'lucide-react';

const Languages = () => {
  const languages = [
    {
      language: "Arabic",
      level: "Native",
      flag: "🇲🇦",
      proficiency: 100,
      description: "Mother tongue"
    },
    {
      language: "French",
      level: "Fluent",
      flag: "🇫🇷",
      proficiency: 90,
      description: "Professional proficiency"
    },
    {
      language: "English",
      level: "Fluent",
      flag: "🇺🇸",
      proficiency: 85,
      description: "Advanced conversational"
    },
    {
      language: "Spanish",
      level: "Basic",
      flag: "🇪🇸",
      proficiency: 40,
      description: "Elementary understanding"
    }
  ];

  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #f1f5f9 25%, transparent 25%),
                           linear-gradient(-45deg, #f1f5f9 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, #f1f5f9 75%),
                           linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Languages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multilingual communication skills enabling global collaboration and cultural understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{lang.flag}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {lang.language}
              </h3>
              
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105 ${
                  lang.level === 'Native' ? 'bg-green-100 text-green-800 group-hover:bg-green-200' :
                  lang.level === 'Fluent' ? 'bg-blue-100 text-blue-800 group-hover:bg-blue-200' :
                  'bg-orange-100 text-orange-800 group-hover:bg-orange-200'
                }`}>
                  {lang.level}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{lang.description}</p>
              
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-700 group-hover:from-blue-600 group-hover:to-green-600"
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
              
              <div className="text-sm text-gray-500 mt-2 group-hover:text-gray-700 transition-colors duration-300">
                {lang.proficiency}%
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 max-w-4xl mx-auto hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Globe className="text-blue-600 mx-auto mb-4 hover:scale-110 hover:rotate-12 transition-all duration-300" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Communication</h3>
            <p className="text-gray-600 text-lg">
              My multilingual abilities enable me to work effectively in diverse international environments, 
              bridging cultural gaps and facilitating clear communication across different regions and markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;