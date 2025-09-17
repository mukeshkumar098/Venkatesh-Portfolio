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
    <header className={`sticky top-0 w-full z-100  bg-[#E6E8E9] transition-all duration-300 ${isScrolled ? 'bg-[#E6E8E9] shadow-lg py-4' : 'bg-[#E6E8E9] py-5'}`}>
      <div className="container mx-auto  px-10">
        <div className="flex justify-between items-center">
          {/* Logo with Venkatesh branding */}
          <div className="flex items-center">
            <div className="text-4xl font-extrabold text-black">
              <span className="text-black font-serif">Venkatesh</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-[#2D2D2D] hover:text-[#A18662] transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="text-[#2D2D2D] hover:text-[#A18662] transition-colors duration-300 font-medium"
            >
              Services
            </a>
            {/* <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="text-[#2D2D2D] hover:text-[#A18662] transition-colors duration-300 font-medium"
            >
              Projects
            </a> */}
           
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-[#8A6F4F] transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-[#2D2D2D]' : 'text-[#2D2D2D]'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4  bg-white rounded-lg shadow-lg">
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="block py-3 px-4 text-[#2D2D2D] hover:text-[#A18662] hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="block py-3 px-4 text-[#2D2D2D] hover:text-[#A18662] hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              Services
            </a>
            {/* <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="block py-3 px-4 text-[#2D2D2D] hover:text-[#A18662] hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              Projects
            </a> */}
  
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="block py-3 px-4 bg-black text-white hover:bg-[#8A6F4F] transition-colors duration-300 font-medium mt-2 mx-4 rounded-xl text-center"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;