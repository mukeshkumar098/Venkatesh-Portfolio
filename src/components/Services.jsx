import React, { useState } from 'react';

const CollaborationCard = ({ image, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-xs rounded-xl m-2 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
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
        <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-xs leading-tight mb-2">{description}</p>
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
    {
      image: "https://th.bing.com/th/id/OIP.FuX67Uonfn0mFbH1PINvMwHaEO?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Fashion & Retail",
      description: "Support for retail operations, merchandising and rollout coordination across stores and launches.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
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

      <div className="container mx-auto px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
            Businesses I Collaborate With
          </h2>
          <p className="text-base md:text-lg mb-6 text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Discover the diverse industries and dedicated partners I collaborate with to deliver outstanding project results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collaborations.map((collab, index) => (
            <CollaborationCard key={index} {...collab} />
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-gray-300/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-gray-400/30 rounded-full animate-pulse delay-200"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gray-200/30 rounded-full animate-pulse delay-400"></div>
    </section>
  );
};

export default Services;