import React from 'react';

const Education = () => {
  return (
    <section id="education" className="relative bg-black text-white overflow-hidden  md:py-6 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,165,0,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-left md:text-center mb-12">
          <div className="mb-5 flex justify-start md:justify-center">
            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
              Academic Background
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Qualifications</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-0 md:mx-auto">
            My educational journey in construction, design, and project management
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Timeline Item 1 */}
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-2/5 md:pr-8 mb-6 md:mb-0">
              <div className="bg-transperant rounded-xl p-5 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 w-full">
                <div className="text-2xl font-bold text-yellow-400 mb-2">2015 - 2018</div>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-3"></div>
                <p className="text-gray-400 text-sm">Bachelor's Degree</p>
              </div>
            </div>
            
            <div className="md:w-4/5">
              <div className="bg-transperant rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 w-full">
                <h3 className="text-xl font-bold text-white mb-2">bachelor's of commerce</h3>
                <p className="text-orange-400 font-medium mb-3">University of Technology</p>
                <p className="text-gray-300 mb-4">
                  Specialized in business management, financial accounting, and commercial strategies. and Developed strong foundation in business principles and commercial operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Business Management</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Financial Accounting</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Commercial Strategy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-2/5 md:pr-8 mb-6 md:mb-0">
              <div className="bg-transperant rounded-xl p-5 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 w-full">
                <div className="text-2xl font-bold text-yellow-400 mb-2">2021 - 2023</div>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-3"></div>
                <p className="text-gray-400 text-sm">master's Degree</p>
              </div>
            </div>
            
            <div className="md:w-4/5">
  <div className="bg-transperant rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 w-full">
    <h3 className="text-xl font-bold text-white mb-2">Masters of Business Administration</h3>
    <p className="text-orange-400 font-medium mb-3">Design Institute of Excellence</p>
    A postgraduate program focusing on leadership, management, and entrepreneurship.  
  Built strong skills in strategic decision-making, organizational leadership, and business innovation.  
  Prepared to take on executive-level roles in corporate and global business environments.
    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Strategic Management</span>
      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Leadership</span>
      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Business Innovation</span>
      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Digital Transformation</span>
      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Entrepreneurship</span>
      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30">Global Business</span>
    </div>
  </div>
</div>

          </div>

       
      
        </div>

      </div>
     
    </section>
  );
};

export default Education;