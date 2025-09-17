// components/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Luxury Residential Complex",
      category: "construction",
      description: "Managed the construction of a 50-unit luxury residential building with premium amenities",
      image: "#"
    },
    {
      title: "Theater Renovation",
      category: "entertainment",
      description: "Oversaw the complete renovation of a historic theater including technical upgrades",
      image: "#"
    },
    {
      title: "Corporate Office Design",
      category: "design",
      description: "Designed and executed a modern workspace for a growing tech company",
      image: "#"
    },
    {
      title: "Restaurant & Bar Concept",
      category: "design",
      description: "Developed and delivered a complete hospitality concept from design to opening",
      image: "#"
    },
    {
      title: "Event Venue Construction",
      category: "construction",
      description: "Project managed the construction of a multi-purpose event space",
      image: "#"
    },
    {
      title: "Music Festival Infrastructure",
      category: "entertainment",
      description: "Coordinated all temporary infrastructure for a major annual music festival",
      image: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">Featured Projects</h2>
          <p className="text-[#5A5A5A]">
            A selection of completed projects showcasing expertise across design, construction, and entertainment sectors.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button 
            className={`px-4 py-2 rounded-md ${activeFilter === 'all' ? 'bg-[#A18662] text-white' : 'bg-gray-100 text-[#5A5A5A]'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeFilter === 'design' ? 'bg-[#A18662] text-white' : 'bg-gray-100 text-[#5A5A5A]'}`}
            onClick={() => setActiveFilter('design')}
          >
            Design
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeFilter === 'construction' ? 'bg-[#A18662] text-white' : 'bg-gray-100 text-[#5A5A5A]'}`}
            onClick={() => setActiveFilter('construction')}
          >
            Construction
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeFilter === 'entertainment' ? 'bg-[#A18662] text-white' : 'bg-gray-100 text-[#5A5A5A]'}`}
            onClick={() => setActiveFilter('entertainment')}
          >
            Entertainment
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-[#A18662] text-lg">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">{project.title}</h3>
                <p className="text-[#5A5A5A] mb-4">{project.description}</p>
                <span className="inline-block bg-gray-100 text-[#5A5A5A] px-3 py-1 rounded-full text-sm capitalize">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;