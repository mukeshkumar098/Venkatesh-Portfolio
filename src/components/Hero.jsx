// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//   const [displayedText, setDisplayedText] = useState('');
//   const fullText = 'Venkatesh';
  
//   // Typing animation effect
//   useEffect(() => {
//     let index = 0;
//     const typingInterval = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayedText(fullText.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 150);
    
//     return () => clearInterval(typingInterval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden py-16">
//       {/* Background decorative elements */}
//       <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#A18662] opacity-10 animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#A18662] opacity-5 animate-ping"></div>
      
//       <div className="container mx-auto px-6 lg:px-12 z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Left Side: Text Content */}
//           <div className="lg:w-1/2 max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
//               Hi, I'm <span className="text-[#A18662]">{displayedText}</span>
//               <span className="animate-blink">|</span>
//             </h2>
            
//             <div className="h-16 mb-6 overflow-hidden">
//               <div className="text-2xl md:text-3xl text-[#5A5A5A] font-medium">
//                 Project Management Expert
//               </div>
//             </div>
           
//             <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
//               Specializing in design, construction, and entertainment projects with a focus on client collaboration and seamless delivery.
//             </p>
            
//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="#projects"
//                 className="bg-[#A18662] hover:bg-[#8A6F4F] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//                 View Projects
//               </a>
//               <a
//                 href="#contact"
//                 className="border-2 border-[#A18662] text-[#A18662] hover:bg-[#A18662] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 Get In Touch
//               </a>
//             </div>
            
//             {/* Social links */}
//             <div className="flex gap-4 mt-8">
//               {[
//                 { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
//                 { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
//                 { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#5A5A5A] hover:bg-[#A18662] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
//                   aria-label={social.name}
//                 >
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path d={social.icon} fill="currentColor" />
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           {/* Right Side: Professional Image */}
//           <div className="lg:w-1/2 flex justify-center">
//             <div className="relative">
//               <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
//                 <img
//                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
//                   alt="Venkatesh - Project Management Expert"
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                   onError={(e) => {
//                     e.target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80';
//                   }}
//                 />
//               </div>
              
//               {/* Floating elements around image */}
//               <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#A18662] opacity-20 animate-pulse"></div>
//               <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#A18662] opacity-10 animate-ping"></div>
              
//               {/* Decorative elements */}
//               <div className="absolute top-10 -left-10 w-8 h-8 border-4 border-[#A18662] rounded-full opacity-30"></div>
//               <div className="absolute bottom-10 -right-10 w-12 h-12 border-4 border-[#A18662] rounded-full opacity-20"></div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <div className="animate-bounce flex flex-col items-center text-[#5A5A5A]">
//           <span className="text-sm mb-2">Scroll Down</span>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
//         .animate-blink {
//           animation: blink 1s step-end infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-white text-gray-900 overflow-hidden">
//       {/* Background Curved Design */}
//       <div className="absolute inset-0 z-0">
//         <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
//           <path
//             fill="#4f46e5"
//             fillOpacity="0.1"
//             d="M0,160L80,138.7C160,117,320,75,480,80C640,85,800,138,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
//           />
//         </svg>
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50"></div>
//       </div>

//       <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
//         {/* Left Side: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left animate-fade-in-left">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
//             Hi, I am Venkatesh
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 max-w-lg mx-auto md:mx-0">
//             Specializing in design, construction, and entertainment projects with a focus on client collaboration and seamless delivery.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="#projects"
//               className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold transition duration-300 shadow-lg transform hover:scale-105"
//             >
//               View My Work
//             </a>
//             <a
//               href="#contact"
//               className="inline-block px-8 py-4 bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full font-semibold transition duration-300 shadow-lg transform hover:scale-105"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//               alt="Venkatesh Portfolio Image"
//               className="w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
//             />
//             <div className="absolute -inset-4 bg-indigo-200/30 rounded-3xl -z-10 transform rotate-3"></div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Decorative Elements */}
//       <div className="absolute top-10 left-10 w-16 h-16 bg-purple-300/30 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-300/30 rounded-full animate-pulse delay-100"></div>
//     </section>
//   );
// };

// export default HeroSection;






// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-white text-gray-900 overflow-hidden">
//       {/* Background Curved Design */}
//       <div className="absolute inset-0 z-0">
//         <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
//           <path
//             fill="#f97316"
//             fillOpacity="0.15"
//             d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
//           />
//         </svg>
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-rose-100/50"></div>
//       </div>

//       <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
//         {/* Left Side: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left animate-fade-in-left">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
//             Hi, I am Venkatesh
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 max-w-lg mx-auto md:mx-0">
//             Specializing in design, construction, and entertainment projects with a focus on client collaboration and seamless delivery.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="#projects"
//               className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 rounded-full text-white font-semibold transition duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
//             >
//               View My Work
//             </a>
//             <a
//               href="#contact"
//               className="inline-block px-8 py-4 bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full font-semibold transition duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//               alt="Venkatesh Portfolio Image"
//               className="w-full max-w-xs rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
//             />
//             <div className="absolute -inset-4 bg-amber-200/30 rounded-3xl -z-10 transform rotate-2"></div>
//             <div className="absolute -inset-6 bg-rose-200/20 rounded-3xl -z-20 transform -rotate-2"></div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Decorative Elements */}
//       <div className="absolute top-10 left-10 w-12 h-12 bg-amber-300/30 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-16 right-16 w-20 h-20 bg-rose-300/30 rounded-full animate-pulse delay-200"></div>
//       <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-200/30 rounded-full animate-pulse delay-400"></div>
//     </section>
//   );
// };

// export default HeroSection;



import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-6 pb-5 flex items-center justify-center bg-white text-gray-900 overflow-hidden">
      {/* Background Curved Design */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#000000"
            fillOpacity="0.1"
            d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-300/50"></div>
      </div>

      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap- relative z-10">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
            Hi, I am Venkatesh
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 max-w-lg mx-auto md:mx-0">
            Specializing in design, construction, and entertainment projects with a focus on client collaboration and seamless delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="inline-block px-8 py-4 bg-black hover:bg-gray-800 rounded-full text-white font-semibold transition duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-full font-semibold transition duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Venkatesh Portfolio Image"
              className="w-full max-w-sm rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute -inset-4 bg-gray-200/30 rounded-3xl -z-10 transform rotate-2"></div>
            <div className="absolute -inset-6 bg-gray-300/20 rounded-3xl -z-20 transform -rotate-2"></div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-gray-300/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-gray-400/30 rounded-full animate-pulse delay-200"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gray-200/30 rounded-full animate-pulse delay-400"></div>
    </section>
  );
};

export default HeroSection;