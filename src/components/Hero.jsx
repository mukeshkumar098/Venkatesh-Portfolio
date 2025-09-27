import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9742815086"; // Replace with your actual number
    const message = "Hi Venkatesh, I came across your portfolio and would like to connect with you!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative pt-3 flex items-center justify-center text-white overflow-hidden" style={{backgroundColor: 'black'}}>
      {/* WhatsApp Floating Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 whatsapp-float ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        onMouseEnter={() => setIsWhatsAppHovered(true)}
        onMouseLeave={() => setIsWhatsAppHovered(false)}
      >
        <div className="relative">
          {/* Main WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform ${
              isWhatsAppHovered 
                ? 'scale-110 rotate-6 shadow-lg' 
                : 'scale-100 rotate-0 shadow-xl'
            } bg-gradient-to-br from-green-500 to-green-600 hover:bg-green-600`}
          >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
              isWhatsAppHovered 
                ? 'from-green-400 via-green-500 to-green-600 animate-gradient-shift' 
                : 'from-green-400 via-green-500 to-green-600 opacity-50'
            } transition-all duration-500 blur-sm`}></div>
            
            {/* WhatsApp Icon */}
            <svg 
              className={`w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300 relative z-10 ${
                isWhatsAppHovered ? 'scale-110 whatsapp-icon-hover' : 'scale-100'
              }`} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>

            {/* Glowing Ring Effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-green-400/50 animate-glow-ring ${
              isWhatsAppHovered ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
            } transition-all duration-500`}></div>

            {/* Particle Effects */}
            <div className={`absolute top-0 left-0 w-2 h-2 bg-green-300 rounded-full ${
              isWhatsAppHovered ? 'animate-float-particle particle-1' : 'opacity-0'
            }`}></div>
            <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 bg-green-400 rounded-full ${
              isWhatsAppHovered ? 'animate-float-particle particle-2' : 'opacity-0'
            }`}></div>
            <div className={`absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full ${
              isWhatsAppHovered ? 'animate-float-particle particle-3' : 'opacity-0'
            }`}></div>
            <div className={`absolute bottom-1 left-1 w-1.5 h-1.5 bg-green-200 rounded-full ${
              isWhatsAppHovered ? 'animate-float-particle particle-4' : 'opacity-0'
            }`}></div>
          </button>

          {/* Hover Tooltip */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isWhatsAppHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium border border-gray-700">
              Chat with me!
              <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-10% left-5% w-32 h-32 sm:w-40 sm:h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10% right-5% w-48 h-48 sm:w-60 sm:h-60 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 sm:px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative z-10 min-h-fit">
        {/* Left Side: Text Content */}
        <div className={`md:w-2/5 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium mb-3 border border-orange-500/30">
              Welcome to My Portfolio
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Venkatesh Prasad</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-6 text-gray-300 max-w-lg mx-0 leading-relaxed">
            MBA in Finance, <span className="text-orange-400 font-medium">specializing in Finance, </span><span className="text-yellow-400 font-medium">Strategy, </span>and <span className="text-orange-400 font-medium">Business Management. </span>
            Currently building new ventures in collaboration with Exquisite Groups, a company in entertainment and construction, with a focus on innovation, growth, and sustainable partnerships.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-start">
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden text-sm"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-4 h-4 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-orange-500 text-orange-400 hover:text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden text-sm"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></div>
            </a>
          </div>

          {/* Stats Section */}
          {/* <div className="flex gap-4 mt-6 sm:mt-8 justify-start">
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-2 sm:p-3 bg-transparent rounded-xl backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/30 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right Side: Image */}
        <div className={`md:w-3/5 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group w-full max-w-md sm:max-w-xl md:max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl transform group-hover:scale-105 transition-transform duration-700">
              <img
                src="image-Photoroom.png"
                alt="Venkatesh Portfolio Image"
                className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-700 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating elements around image */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-orange-500/20 rounded-xl -z-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-28 h-20 sm:h-28 bg-yellow-500/20 rounded-xl -z-10 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500"></div>
            
            {/* Decorative dots */}
            <div className="absolute -top-6 sm:-top-8 right-8 sm:right-10 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute bottom-2 sm:bottom-4 -left-6 sm:-left-8 w-5 sm:w-6 h-5 sm:h-6 bg-orange-400 rounded-full animate-bounce delay-500 opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced WhatsApp Animation Styles */}
      <style jsx>{`
        @keyframes float-particle {
          0% { 
            transform: translate(0, 0) scale(0); 
            opacity: 1; 
          }
          50% { 
            transform: translate(var(--x), var(--y)) scale(1.2); 
            opacity: 0.7; 
          }
          100% { 
            transform: translate(var(--x), var(--y)) scale(0); 
            opacity: 0; 
          }
        }

        .particle-1 { --x: 10px; --y: -12px; animation: float-particle 1.2s ease-out forwards; }
        .particle-2 { --x: -8px; --y: 10px; animation: float-particle 1.4s ease-out forwards 0.2s; }
        .particle-3 { --x: 12px; --y: 8px; animation: float-particle 1.3s ease-out forwards 0.4s; }
        .particle-4 { --x: -10px; --y: -10px; animation: float-particle 1.5s ease-out forwards 0.6s; }

        @keyframes glow-ring {
          0% { 
            box-shadow: 0 0 5px 0 rgba(34, 197, 94, 0.5), 0 0 10px 0 rgba(34, 197, 94, 0.3);
          }
          50% { 
            box-shadow: 0 0 10px 5px rgba(34, 197, 94, 0.7), 0 0 20px 10px rgba(34, 197, 94, 0.4);
          }
          100% { 
            box-shadow: 0 0 5px 0 rgba(34, 197, 94, 0.5), 0 0 10px 0 rgba(34, 197, 94, 0.3);
          }
        }

        .animate-glow-ring {
          animation: glow-ring 2s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes icon-shimmer {
          0% { 
            filter: brightness(1) saturate(1);
          }
          50% { 
            filter: brightness(1.3) saturate(1.5);
          }
          100% { 
            filter: brightness(1) saturate(1);
          }
        }

        .whatsapp-icon-hover {
          animation: icon-shimmer 1.2s ease-in-out infinite;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .container {
            flex-direction: column;
            gap: 2rem;
          }
          
          .md\\:w-2\\/5, .md\\:w-3\\/5 {
            width: 100%;
          }
          
          .text-left {
            text-align: left;
          }
          
          .max-w-lg {
            margin-left: 0;
            margin-right: 0;
          }

          .fixed {
            bottom: 4rem;
            right: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .fixed {
            bottom: 3rem;
            right: 1rem;
          }
        }

        /* Continuous floating animation for the button */
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(2deg); }
          50% { transform: translateY(-8px) rotate(0deg); }
          75% { transform: translateY(-4px) rotate(-2deg); }
        }

        .whatsapp-float {
          animation: gentle-float 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;