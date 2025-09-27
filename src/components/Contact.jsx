import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black text-white overflow-hidden">
      {/* Background Curved Design */}
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

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side: Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center animate-fade-in-left">
            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Contact Illustration"
                className="w-full h-auto max-h-[400px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl -z-10 transform rotate-2"></div>
              <div className="absolute -inset-6 bg-yellow-500/10 rounded-3xl -z-20 transform -rotate-2"></div>
            </div>
          </div>

          {/* Right Side: Contact Form & Details */}
          <div className="md:w-1/2 md:pl-16 text-left md:text-left animate-fade-in-right">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-4 max-w-lg mx-0 md:mx-0 leading-relaxed">
              I'm excited to collaborate on your next project! Feel free to reach out with any inquiries or to discuss your vision.
            </p>
            <form className="space-y-4 max-w-lg mx-0 md:mx-0">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-transperant rounded-xl text-sm text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-transperant rounded-xl text-sm text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 bg-transperant rounded-xl text-sm text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-0 md:mx-0">
              <div className="p-4 bg-transperant rounded-xl text-sm text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-300 text-sm">venkateshvenky2244@gmail.com </p>
              </div>
              <div className="p-4 v rounded-xl text-sm text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-300 text-sm">+91 9742815086</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-12 left-12 w-14 h-14 bg-orange-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-500/10 rounded-full animate-pulse delay-200"></div>
      
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500/10 rounded-full animate-pulse delay-400"></div>
   <hr className='m-3 text-gray-700'/> </section>
  );
};

export default Contact;