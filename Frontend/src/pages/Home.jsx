import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy, Clock, Sprout, BarChart3 as ChartNoAxesCombined } from 'lucide-react';
import Autoscroll from '../Components/Autoscroll';

import bg1 from '../assets/bg.jpg';
import bg2 from '../assets/H21.jpg';
import bg3 from '../assets/H61.jpg';
import bg4 from '../assets/H81.jpg';
import bg5 from '../assets/H51.jpg';
import bg6 from '../assets/H3.jpg';
import bg7 from '../assets/H41.jpg';
import bg8 from '../assets/H7.jpg';
import bg9 from '../assets/H5.jpg';

const bgImages = [
  { image: bg1, title: 'Creative Living', desc: 'Creative Living combines style and function to create inspiring spaces that elevate everyday living' },
  { image: bg2, title: 'Modern Architecture', desc: 'Blending innovation, simplicity, and elegance, Modern Architecture shapes the future of living spaces' },
  { image: bg3, title: 'Timeless Elegance', desc: 'Where classic sophistication meets enduring design—crafted to inspire for generations.' },
  { image: bg4, title: 'Innovative Designs', desc: 'Pioneering creative solutions that redefine modern living with style and functionality' },
  { image: bg5, title: 'Bespoke Villas', desc: 'Exquisitely crafted residences tailored for luxury, comfort, and individual style.' },
  { image: bg6, title: 'Urban Excellence', desc: 'Shaping dynamic cityscapes with innovative, sustainable, and sophisticated design solutions' },
  { image: bg7, title: 'Elegant Interiors', desc: 'Creating vibrant cityscapes that blend innovation, functionality, and timeless design.' },
  { image: bg8, title: 'Green Solutions', desc: 'Delivering eco-friendly, sustainable designs that harmonize with nature and the urban environment' },
  { image: bg9, title: 'Landmark Projects', desc: 'Designing iconic structures that define skylines and stand the test of time.' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimeout = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bgImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  const startAutoSlide = () => {
    clearInterval(slideTimeout.current);
    slideTimeout.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoSlide();
    }
    return () => clearInterval(slideTimeout.current);
  }, [isPaused]);

  return (
    <>
      <div className="relative w-full overflow-hidden min-h-[60vh] md:min-h-screen" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {bgImages.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 min-h-[60vh] md:min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white/70 backdrop-blur-lg p-4 sm:p-6 md:p-10 rounded-xl max-w-lg shadow-2xl text-center">
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-900 mb-3">{item.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-5">{item.desc}</p>
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition">Get Started</Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/60 hover:bg-white text-blue-900 rounded-full p-1 sm:p-2 shadow-lg">
          <ChevronLeft size={20} className="sm:size-7" />
        </button>
        <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/60 hover:bg-white text-blue-900 rounded-full p-1 sm:p-2 shadow-lg">
          <ChevronRight size={20} className="sm:size-7" />
        </button>
      </div>
<div className="bg-[#F4F7FA] flex items-center justify-center pt-12 px-4 md:px-10 w-full">
  <div className="bg-white flex flex-col md:flex-row gap-8 px-6 md:px-10 py-10 rounded-3xl w-full max-w-6xl shadow-2xl">
    
    {/* Image Section */}
    <div className="md:w-1/2 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-500">
      <img
        src="./Since.jpg"
        alt="Speed House Overview"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-extrabold text-green-900 mb-4 leading-tight">
        Speed House <span className="text-blue-900 block">Engineering Consultant</span>
      </h2>
      <div className="w-16 h-1 bg-green-600 mx-auto md:mx-0 mb-5 rounded-full"></div>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
        Welcome to <strong>Speed House Engineering Consultant L.L.C.</strong>, a premier architectural design firm based in Dubai, UAE. Since our inception, we've been passionate about crafting spaces that are not only functional but also inspire beauty and innovation.
      </p>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
        Our expert team combines cutting-edge design, sustainability, and client-centric solutions to bring visionary concepts to life—spaces that stand the test of time and spark imagination.
      </p>
     
    </div>
  </div>
</div>


      <section className="bg-[#F4F7FA] py-12 sm:py-16 px-4 md:px-10 w-full">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 leading-tight">Since 2004 <span className="text-emerald-700 block">A Legacy of Innovation</span></h2>
            <div className="w-16 h-1 bg-blue-800 mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-4">For over two decades, Speed House Engineering Consultant has stood at the forefront of architectural excellence in Dubai. Since 2004, we've been crafting spaces that blend creativity, functionality, and sustainability.</p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">Our legacy is built on trust, precision, and a deep understanding of the evolving architectural landscape. We’re proud to deliver solutions that not only meet client expectations — but exceed them.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="./DesSection1.jpg" alt="Legacy since 2004" className="rounded-2xl shadow-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105" />
          </div>
        </div>
      </section>

      <div className="bg-[#F4F7FA] py-12 sm:py-16 px-4 md:px-10 w-full">
        <div className="max-w-6xl mx-auto text-center bg-white p-6 sm:p-10 md:p-14 rounded-2xl shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-8 sm:mb-12 relative inline-block">Featured Projects <span className="block w-10 sm:w-16 h-1 bg-blue-500 mt-2 mx-auto rounded-full"></span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[{ title: 'Al Quoz First', image: './FirstProject.jpg' }, { title: 'Oud Al Muteena Villa', image: './villa.jpg' }, { title: 'Dubai Investment Park', image: './Interior.jpg' }].map((project, i) => (
              <div key={i} className="bg-[#F9FAFB] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 object-cover transform hover:scale-105 transition duration-500" />
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-800">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12">
            <Link to="/Ourproject" className="inline-block bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-blue-900 transition duration-300">View All Projects</Link>
          </div>
        </div>
      </div>

      <section className="bg-[#F4F7FA] py-12 sm:py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto bg-white p-6 sm:p-10 md:p-14 rounded-3xl shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-4">Why Choose Speed House</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-8 sm:mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <Trophy size={30} className="sm:size-10" />, title: "Proven Track Record", desc: "Trusted by hundreds of clients..." },
              { icon: <Sprout size={30} className="sm:size-10" />, title: "Sustainable Designs", desc: "We prioritize eco-friendly solutions..." },
              { icon: <ChartNoAxesCombined size={30} className="sm:size-10" />, title: "Expert Team", desc: "A dedicated team with passion..." },
              { icon: <Clock size={30} className="sm:size-10" />, title: "Timely Delivery", desc: "Your project delivered on time." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }} viewport={{ once: true }} className={`p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${i % 2 === 0 ? "bg-[#E6F4EA]" : "bg-[#F0FDF4]"}`}>
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="text-green-700">{item.icon}</span>
                  <h3 className="text-base sm:text-lg font-bold text-green-800">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 bg-[#F4F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-[#FFFFFF] p-6 sm:p-10 rounded-xl shadow-xl overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <Autoscroll />
        </div>
      </section>
    </>
  );
};

export default Home;
