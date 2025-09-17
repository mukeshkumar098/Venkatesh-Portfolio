import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-white text-gray-900 overflow-hidden">
      {/* Background Curved Design */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#000000"
            fillOpacity="0.12"
            d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,128C840,107,960,85,1080,96C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
          <path
            fill="#1f1f1f"
            fillOpacity="0.08"
            d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,170.7C1120,192,1280,192,1360,181.3L1440,171L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 to-gray-200/60"></div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side: Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center animate-fade-in-left">
            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Contact Illustration"
                className="w-full h-auto max-h-[400px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 grayscale"
              />
              <div className="absolute -inset-4 bg-gray-200/30 rounded-3xl -z-10 transform rotate-2"></div>
              <div className="absolute -inset-6 bg-gray-300/20 rounded-3xl -z-20 transform -rotate-2"></div>
            </div>
          </div>

          {/* Right Side: Contact Form & Details */}
          <div className="md:w-1/2 md:pl-16 text-center md:text-left animate-fade-in-right">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I'm excited to collaborate on your next project! Feel free to reach out with any inquiries or to discuss your vision.
            </p>
            <form className="space-y-4 max-w-lg mx-auto md:mx-0">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-100/70 rounded-xl text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-100/70 rounded-xl text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 bg-gray-100/70 rounded-xl text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-black to-gray-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto md:mx-0">
              <div className="p-4 bg-gray-100/70 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-black mb-1">Email</h3>
                <p className="text-gray-600 text-sm">contact@yourportfolio.com</p>
              </div>
              <div className="p-4 bg-gray-100/70 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-black mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-12 left-12 w-14 h-14 bg-gray-300/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-400/30 rounded-full animate-pulse delay-200"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gray-200/30 rounded-full animate-pulse delay-400"></div>
    </section>
  );
};

export default Contact;