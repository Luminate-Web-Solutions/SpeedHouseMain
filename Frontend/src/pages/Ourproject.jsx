import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProjectCard from '../Components/ProjectCard';
import { motion } from 'framer-motion';
import pro from '../assets/ourproject.jpg';

const Ourproject = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sections = [
    {
      title: 'Commercial Projects',
      color: 'text-[#1E3A8A]',
      projects: [
        {
          title: 'Business Bay Commercial Complex',
          image: './b1.webp',
          client: 'Emirates Investment',
          location: 'Business Bay, Dubai',
          builtUpArea: '220,000 sq. ft.',
          configuration: 'G+5+R',
          projectType: 'Commercial',
          desc: "An architectural landmark in Business Bay, featuring sleek glass façades, eco-friendly systems, and pedestrian-friendly zones. Designed to foster productivity in a sustainable urban setting."
        },
        {
          title: 'Deira Corporate Center',
          image: './b2.jpg',
          client: 'Al Noor Group',
          location: 'Deira, Dubai',
          builtUpArea: '180,000 sq. ft.',
          configuration: 'G+4',
          projectType: 'Commercial',
          desc: "A modern corporate facility tailored for functionality and elegance. Combines state-of-the-art infrastructure with optimal space planning in Dubai’s business hub."
        },
        {
          title: 'Tech Valley Tower',
          image: './b33.jpg',
          client: 'FutureBuild Ltd.',
          location: 'Business Bay, Dubai',
          builtUpArea: '200,000 sq. ft.',
          configuration: 'G+7+R',
          projectType: 'Commercial',
          desc: "A hub for innovation and enterprise. This tower features cutting-edge smart systems, collaborative open floors, and breathtaking skyline views."
        },
      ],
    },
    {
      title: 'Interior Projects',
      color: 'text-[#0F766E]',
      projects: [
        {
          title: 'Luxury Apartment Interior',
          image: './i10.jpg',
          client: 'Mr. Faisal',
          location: 'Jumeirah, Dubai',
          configuration: '3 BHK',
          projectType: 'Interior',
          desc: "Crafted with high-end finishes and bespoke furniture, this apartment interior echoes contemporary elegance with Arabic design influences."
        },
        {
          title: 'Office Fit-Out',
          image: './i9.jpg',
          client: 'TechCorp LLC',
          location: 'Silicon Oasis, Dubai',
          configuration: 'G+2',
          projectType: 'Interior',
          desc: "A smart, vibrant office layout promoting productivity and collaboration. Includes modern lighting, ergonomic design, and acoustic zoning."
        },
        {
          title: 'Boutique Hotel Interior',
          image: './i1.jpg',
          client: 'Aura Hospitality',
          location: 'Downtown Dubai',
          configuration: 'G+3',
          projectType: 'Interior',
          desc: "Chic interiors blending contemporary minimalism with luxurious textures. Each room is uniquely styled to offer a memorable guest experience."
        },
      ],
    },
    {
      title: 'Villa Projects',
      color: 'text-[#6D28D9]',
      projects: [
        {
          title: 'Palm Jumeirah Villa',
          image: './f2.jpg',
          client: 'Mr. Kareem',
          location: 'Palm Jumeirah, Dubai',
          configuration: 'G+1+Roof',
          projectType: 'Residential Villa',
          desc: "A stunning seafront villa with panoramic ocean views, infinity pool, and elegant interiors tailored for comfort and luxury living."
        },
        {
          title: 'Emirates Hills Estate',
          image: './f3.jpg',
          client: 'Ms. Noura',
          location: 'Emirates Hills, Dubai',
          configuration: 'G+2',
          projectType: 'Luxury Villa',
          desc: "A premium estate that blends classical architecture with modern aesthetics. Landscaped gardens, marble interiors, and state-of-the-art automation."
        },
        {
          title: 'Al Quoz Villa',
          image: './f4.jpg',
          client: 'Mr. Hassan Ahmed',
          location: 'Al Quoz First, Dubai',
          configuration: 'G+1',
          projectType: 'Villa',
          desc: "Spacious family villa designed for comfort and privacy, with an open courtyard, modern kitchen, and stylish interiors."
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <section
        className="h-[80vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${pro})` }}
      >
        <motion.div
          className="bg-black/50 p-10 rounded-xl text-center max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects We've Delivered
          </motion.h1>
          <motion.p className="text-white text-lg md:text-xl">
            Where vision meets structure — a portfolio of our proudest achievements
          </motion.p>
        </motion.div>
      </section>

      <div className="bg-[#F4F7FA] py-16 px-4">
        {sections.map((section, index) => (
          <section className="mb-20" key={index}>
            <h3 className={`text-3xl font-semibold mb-6 ${section.color} text-center`}>
              {section.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
              {section.projects.map((proj, i) => (
                <div key={i} className="cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out">
                  <ProjectCard {...proj} onViewDetails={() => setSelectedProject(proj)} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{selectedProject.title}</h2>
            {selectedProject.client && <p className="text-gray-600 mb-1"><strong>Client:</strong> {selectedProject.client}</p>}
            {selectedProject.location && <p className="text-gray-600 mb-1"><strong>Location:</strong> {selectedProject.location}</p>}
            {selectedProject.builtUpArea && <p className="text-gray-600 mb-1"><strong>Built-up Area:</strong> {selectedProject.builtUpArea}</p>}
            {selectedProject.configuration && <p className="text-gray-600 mb-1"><strong>Configuration:</strong> {selectedProject.configuration}</p>}
            {selectedProject.projectType && <p className="text-gray-600 mb-3"><strong>Type:</strong> {selectedProject.projectType}</p>}
            {selectedProject.desc && <p className="text-gray-700"><strong>Description:</strong> {selectedProject.desc}</p>}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Ourproject;