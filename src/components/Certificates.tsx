import React from 'react';
import { Award, Calendar, Hash, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Querying Data with Transact-SQL",
      provider: "Udemy",
      date: "Apr 2025",
      id: "UC-5e1f2b27-39e8-d0d8-99e2-e1ea1491a4d0",
      category: "Database",
      color: "bg-blue-500",
      url: "https://www.udemy.com/certificate/UC-5e1f2b27-39e8-d0d8-99e2-e1ea1491a4d0/"
    },
    {
      title: "Ultimate Ethical Hacking and Penetration Testing (UEH)",
      provider: "Udemy",
      date: "May 2021",
      id: "UC-04a6b5c8-ad81-4aad-9164-675e4b00b46f",
      category: "Cybersecurity",
      color: "bg-red-500",
      url: "https://www.udemy.com/certificate/UC-04a6b5c8-ad81-4aad-9164-675e4b00b46f/"
    },
    {
      title: "WiFi Hacking using Evil Twin Attacks and Captive Portals",
      provider: "Udemy",
      date: "Apr 2021",
      id: "UC-bb2336e4-f5a1-4d3c-bdf2-2e0ad9d345b6",
      category: "Network Security",
      color: "bg-purple-500",
      url: "https://www.udemy.com/certificate/UC-bb2336e4-f5a1-4d3c-bdf2-2e0ad9d345b6/"
    },
    {
      title: "Bootstrap 5 Certificate",
      provider: "Shiyar Academy",
      date: "Oct 2020",
      id: "CSC-20201011-0830",
      category: "Frontend",
      color: "bg-indigo-500",
      url: "https://academy.codershiyar.com/certification.php?certificate_number=CSC-20201011-0830"
    },
    {
      title: "Master CSS Certificate",
      provider: "Shiyar Academy",
      date: "Oct 2020",
      id: "CSC-20201009-1831",
      category: "Frontend",
      color: "bg-green-500",
      url: "https://academy.codershiyar.com/certification.php?certificate_number=CSC-20201009-1831"
    },
    {
      title: "Build Responsive Website using HTML5, CSS3, JS, Bootstrap",
      provider: "EDUCBA",
      date: "Oct 2020",
      id: "3ZFDFWJZ",
      category: "Web Development",
      color: "bg-orange-500",
      url: "https://www.educba.com/certificate/?c=3ZFDFWJZ"
    },
    {
      title: "React & Redux Certificate",
      provider: "Sololearn",
      date: "Oct 2020",
      id: "CT-VBJRNUDF",
      category: "Frontend",
      color: "bg-cyan-500",
      url: "https://www.sololearn.com/certificates/CT-VBJRNUDF"
    },
    {
      title: "Master HTML Certificate",
      provider: "Shiyar Academy",
      date: "Sep 2020",
      id: "CSC-20200925-2119",
      category: "Frontend",
      color: "bg-teal-500",
      url: "https://academy.codershiyar.com/certification.php?certificate_number=CSC-20200925-2119"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of professional certifications showcasing expertise in web development, 
            cybersecurity, and database management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden group cursor-pointer relative"
            >
              <div className={`${cert.color} h-2 group-hover:h-3 transition-all duration-300`}></div>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`${cert.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="text-white" size={20} />
                    </div>
                    <span className={`ml-3 text-sm font-medium px-3 py-1 rounded-full ${cert.color} text-white group-hover:shadow-lg transition-shadow duration-300`}>
                      {cert.category}
                    </span>
                  </div>
                  <ExternalLink 
                    className="text-gray-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" 
                    size={16} 
                  />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-blue-600 font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {cert.provider}
                </p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Hash size={16} className="mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="font-mono text-xs break-all">{cert.id}</span>
                  </div>
                </div>

                <div className="mt-4 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Click to view certificate →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <Award className="text-blue-600 mx-auto mb-4 hover:scale-110 transition-transform duration-300" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600">
              These certifications represent my commitment to continuous learning and 
              professional development across multiple domains including cybersecurity, 
              web development, and database management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;