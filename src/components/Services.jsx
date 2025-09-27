import React, { useState } from 'react';

const CollaborationCard = ({ image, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-md sm:max-w-xs rounded-xl m-2 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-40 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          src={image}
          alt={title}
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-start p-2">
          <h3 className="text-white text-sm font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-base font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-300 text-xs leading-tight mb-2">{description}</p>
        <div
          className={`absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href={link}
            className="inline-block px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-xs"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const collaborations = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Construction Team",
      description: "Supporting site execution quality checks, and vendor coordination for residential & commercial projects.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Entertainment Projects",
      description: "Event operations & production support — on-ground coordination, logistics and vendor management.",
      link: "#"
    },
   
   
  ];

  return (
    <section id="services" className="relative py-10 bg-black overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
           <span className='text-white'>Businesses I</span> Collaborate With
          </h2>
          <p className="text-base md:text-lg mb-6 text-gray-300 max-w-lg mx-0 md:mx-auto leading-relaxed">
            Discover the diverse industries and dedicated partners I collaborate with to deliver outstanding project results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {collaborations.map((collab, index) => (
            <CollaborationCard key={index} {...collab} />
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-orange-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-yellow-500/10 rounded-full animate-pulse delay-200"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-500/10 rounded-full animate-pulse delay-400"></div>
    </section>
  );
};

export default Services;