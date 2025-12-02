import React from 'react';
import { MapPin, GraduationCap, Fish, Shield, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #10b981 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about marine sciences, technology, and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Origins</h3>
                <p className="text-gray-600">
                  Born and raised in the beautiful Beni Mellal-Khénifra region of Morocco, 
                  I bring a deep connection to Morocco's natural landscapes and agricultural heritage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-green-50 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Education</h3>
                <p className="text-gray-600">
                  Currently pursuing Fisheries Engineering and Aquaculture at IAV Hassan II in Rabat, 
                  one of Morocco's leading agricultural institutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-cyan-50 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-cyan-100 p-3 rounded-lg group-hover:bg-cyan-200 group-hover:scale-110 transition-all duration-300">
                <Fish className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Marine Sciences</h3>
                <p className="text-gray-600">
                  Passionate about sustainable aquaculture practices and marine ecosystem conservation, 
                  working towards innovative solutions for food security.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 group hover:bg-purple-50 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                <Shield className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Cybersecurity</h3>
                <p className="text-gray-600">
                  Deeply interested in ethical hacking and cybersecurity, 
                  with multiple certifications in penetration testing and network security.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-orange-50 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                <Code className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Web Development</h3>
                <p className="text-gray-600">
                  Self-taught web developer with expertise in modern technologies including 
                  React, CSS frameworks, and database management systems.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-700">
                At 20 years old, I'm combining my passion for marine sciences with technology 
                to create innovative solutions for sustainable aquaculture and food security, 
                while maintaining strong cybersecurity practices in our digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;