import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg py-1' : 'bg-black py-1'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Venkatesh branding */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold">
               <img src="logo.PNG" className='w-34' alt="" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm lg:text-base"
            >
              About
            </a>
            <a
              href="#education"
              onClick={(e) => handleSmoothScroll(e, '#education')}
              className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm lg:text-base"
            >
              Education
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm lg:text-base"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-5 py-2 rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 font-medium text-sm lg:text-base shadow-md"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Modal */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-4/5 sm:w-3/5 max-w-sm bg-black h-full shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative flex flex-col h-full p-6 sm:p-8">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-10 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
            </div>

            {/* Header with Close Button */}
            <div className="flex justify-between items-center mb-8 z-10">
              <div className="text-xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Venkatesh</span>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4 z-10">
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-base flex items-center"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </a>
              <a
                href="#education"
                onClick={(e) => handleSmoothScroll(e, '#education')}
                className="text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-base flex items-center"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                </svg>
                Education
              </a>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className="text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-base flex items-center"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Services
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 font-medium text-base text-center flex items-center justify-center shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </a>
            </nav>

            {/* Social Links */}
            <div className="mt-auto pt-8 border-t border-gray-700 z-10">
              <p className="text-center text-gray-300 text-sm mb-4">Connect with me</p>
              <div className="flex justify-center gap-4">
                {[
                  {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/share/1KBL1kanKR/?mibextid=wwXIfr',
                    icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z',
                  },
                  {
                    name: 'Twitter',
                    href: 'https://x.com/venkatesh2244?s=21',
                    icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                  },
                  {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/venky2244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                  },
                  {
                    name: 'Instagram',
                    href: 'https://www.instagram.com/venky_30_?igsh=MW9jY3ppeWs0a2h6dA%3D%3D&utm_source=qr',
                    icon: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334',
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;