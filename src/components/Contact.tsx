import React, { useState } from 'react';
import { Mail, Phone, Instagram, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:abdelwahedidr@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+212 621 24 85 03",
      href: "tel:+212621248503",
      color: "text-green-600",
      hoverBg: "group-hover:bg-green-50",
      iconBg: "bg-green-100 group-hover:bg-green-500",
      iconColor: "text-green-600 group-hover:text-white",
      textColor: "group-hover:text-green-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "abdelwahedidr@gmail.com",
      href: "mailto:abdelwahedidr@gmail.com",
      color: "text-blue-600",
      hoverBg: "group-hover:bg-blue-50",
      iconBg: "bg-blue-100 group-hover:bg-blue-500",
      iconColor: "text-blue-600 group-hover:text-white",
      textColor: "group-hover:text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@abdo_idrr",
      href: "https://www.instagram.com/abdo_idrr/",
      color: "text-pink-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-500 group-hover:to-pink-500",
      iconColor: "text-pink-600 group-hover:text-white",
      textColor: "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "abdelwahed-idir",
      href: "https://linkedin.com/in/abdelwahed-idir",
      color: "text-blue-700",
      hoverBg: "group-hover:bg-blue-50",
      iconBg: "bg-blue-100 group-hover:bg-blue-700",
      iconColor: "text-blue-700 group-hover:text-white",
      textColor: "group-hover:text-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-green-400/15 to-blue-600/15 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-lg animate-bounce-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect and discuss opportunities in fisheries engineering, technology, or cybersecurity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-300"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-white relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Send size={20} className="mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Send Message via Email</span>
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                This will open your email client to send the message directly to Abdelwahed
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center p-4 rounded-lg transition-all duration-500 group transform hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-gray-100 ${contact.hoverBg}`}
                  >
                    <div className={`p-3 rounded-lg transition-all duration-500 mr-4 group-hover:scale-110 group-hover:shadow-lg ${contact.iconBg}`}>
                      <contact.icon className={`transition-all duration-500 group-hover:scale-110 ${contact.iconColor}`} size={24} />
                    </div>
                    <div>
                      <div className={`font-semibold text-gray-900 transition-all duration-500 ${contact.textColor}`}>
                        {contact.label}
                      </div>
                      <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-600 mr-3 hover:scale-110 transition-transform duration-300" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Currently:</strong> Rabat, Morocco
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Originally from:</strong> Beni Mellal-Khénifra, Morocco
              </p>
              <p className="text-gray-600 text-sm">
                Available for remote work and willing to travel for the right opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;