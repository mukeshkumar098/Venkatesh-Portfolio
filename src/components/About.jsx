import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-white overflow-hidden py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* Left Side: Image - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-sm group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Construction and Design Professional"
                className="w-full h-auto rounded-xl shadow-xl transform group-hover:scale-105 transition duration-700 border-2 border-orange-500/30 object-cover"
                style={{ height: '480px' }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-orange-500/20 rounded-lg -z-10 transform rotate-12"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-yellow-500/20 rounded-lg -z-10 transform -rotate-12"></div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-3/5">
            <div className="mb-5 flex justify-center md:justify-start">
              <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                Professional Background
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-center md:text-left">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Venkatesh Prasad</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I’ve spent <span className="text-orange-400 font-semibold">7+ years in Banking</span>and IT, building skills in finance, strategy, and business management and I love turning fresh ideas into real businesses. Beyond work, I’m passionate about fitness, with 4+ years in the industry, which keeps me disciplined and motivated.

              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                With Exquisite Groups, I get to work on things I truly enjoy whether it’s creating spaces through Exquisite Constructions or shaping stories and talent with Exquisite Entertainments. For me, it’s all about blending business, creativity, and passion to make an impact.
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-transperant rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-9 h-9 bg-orange-500/20 rounded-md flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H5m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-md font-semibold text-white">Construction Management</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Overseeing projects with precision and efficiency from concept to completion</p>
              </div>
              
              <div className="p-4 bg-transperant rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-9 h-9 bg-yellow-500/20 rounded-md flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                  <h3 className="text-md font-semibold text-white">Interior Design</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Creating functional and visually appealing spaces that reflect client personality</p>
              </div>
            </div>
            
          
           
          </div>
        </div>

        {/* Mobile Image - Only visible on small screens */}
        <div className="mt-10 md:hidden flex justify-center">
          <div className="relative w-full max-w-xs group">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Construction and Design Professional"
              className="w-full h-auto rounded-xl shadow-xl border-2 border-orange-500/30 object-cover"
              style={{ height: '320px' }}
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500/20 rounded-md -z-10 transform rotate-12"></div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-500/20 rounded-md -z-10 transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;