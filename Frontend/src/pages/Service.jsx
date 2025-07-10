import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { LayoutGrid, Lightbulb, Handshake } from 'lucide-react';

import bg from '../assets/bg.avif';
import what from '../assets/offer.jpg';
import service1 from '../assets/img1.jpg';
import service2 from '../assets/Interior.jpg';
import service3 from '../assets/3.jpg';
import service4 from '../assets/2.jpg';
import service5 from '../assets/bg.jpg';
import service6 from '../assets/hero.jpg';
import architectureImg from '../assets/img1.jpg';
import interiorImg from '../assets/Interior.jpg';
import commercialImg from '../assets/2.jpg';
import residentialImg from '../assets/4.jpg';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
  {
    title: 'Architectural Design',
    img: service1,
    desc: 'Our Architectural Design services blend innovation, functionality, and aesthetics to create timeless spaces that inspire and endure. From concept to completion, we ensure each design reflects the client’s vision while meeting the highest standards of sustainability and usability. Our experienced team works meticulously to bring creative ideas to life, delivering solutions that stand the test of time.'
  },
  {
    title: 'Interior Design',
    img: service2,
    desc: 'Our Interior Design services transform spaces into reflections of personality and refined taste, balancing aesthetics with comfort. We carefully curate every element, from color palettes to furniture selection, creating environments that are both beautiful and functional. Whether residential or commercial, our designs embody elegance, comfort, and practicality.'
  },
  {
    title: 'Landscape Architecture',
    img: service3,
    desc: 'We create harmonious outdoor environments that enhance beauty, promote sustainability, and elevate the user experience. Our Landscape Architecture solutions seamlessly integrate natural elements with innovative design concepts, resulting in inviting, functional, and eco-friendly spaces. We focus on biodiversity, user engagement, and long-term environmental impact.'
  },
  {
    title: 'Commercial Projects',
    img: service4,
    desc: 'We deliver Commercial Projects that combine strategic planning, innovative design, and engineering precision. From retail spaces to office buildings, our team ensures every project aligns with brand identity and operational needs. We prioritize functionality, sustainability, and visual appeal to create impactful commercial environments.'
  },
  {
    title: 'Villa Design',
    img: service5,
    desc: 'Our Villa Design services offer bespoke luxury and timeless architectural elegance tailored to your lifestyle. We specialize in crafting unique residential masterpieces that blend sophistication, comfort, and innovation. Every villa is designed with careful attention to detail, ensuring it reflects the individuality and aspirations of its owner.'
  },
  {
    title: 'Sustainable Solutions',
    img: service6,
    desc: 'We provide Sustainable Solutions that minimize ecological impact while maximizing long-term value for clients and communities. Our approach emphasizes energy efficiency, resource conservation, and innovative green technologies. We aim to create spaces that contribute positively to both the environment and the quality of life.'
  },
];



  const projectExpertise = [
    { title: 'Architecture', img: architectureImg, desc: 'Blending artistry, technology, and unrivaled service for iconic structures.' },
    { title: 'Interior Design', img: interiorImg, desc: 'Curating interiors that captivate through custom design and fine craftsmanship.' },
    { title: 'Commercial', img: commercialImg, desc: 'Delivering elegant and functional commercial spaces tailored to business needs.' },
    { title: 'Residential', img: residentialImg, desc: 'Designs that balance aesthetic appeal with cultural and spatial harmony.' },
  ];

  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center min-h-screen w-full" style={{ backgroundImage: `url(${bg})` }}>
        <Header />

        {/* Hero Section */}
        <section className="h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${what})` }}>
          <motion.div
            className="bg-black/50 p-10 rounded-xl text-center max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Offer</h1>
            <p className="text-white text-lg md:text-xl">Innovative, aesthetic, and efficient architectural designs tailored to unique client needs and urban contexts.</p>
          </motion.div>
        </section>

        {/* Capabilities */}
        <section className="bg-[#F4F7FA] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#047857] mb-6">Our Capabilities</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12">Blending creativity, precision, and purpose in every project.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{ icon: LayoutGrid, title: 'Architectural Excellence', color: '#1E40AF' },
                { icon: Lightbulb, title: 'Sustainable Vision', color: '#F59E0B' },
                { icon: Handshake, title: 'Collaborative Delivery', color: '#10B981' }]
                .map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                    <item.icon size={40} className={`mb-4 mx-auto text-[${item.color}]`} />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">We deliver every project with creativity, sustainability, and collaboration at its core.</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="bg-[#F4F7FA] py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  onClick={() => { setSelectedService(service); setShowModal(true); }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-blue-50 hover:shadow-lg transition cursor-pointer"
                >
                  <img loading="lazy" src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {showModal && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl relative">
              <button className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black" onClick={() => setShowModal(false)}>&times;</button>
              <img loading="lazy" src={selectedService.img} alt={selectedService.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">{selectedService.title}</h3>
              <p className="text-gray-700 text-sm">{selectedService.desc}</p>
            </div>
          </div>
        )}

        {/* Maintenance Services */}
        <section className="bg-[#F4F7FA] py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Maintenance Services We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 gap-6">
                {["Annual Maintenance", "MEP Services", "Renovation & Repairs", "On-Demand Support"].map((title, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[#E0F2FE] hover:bg-[#bae6fd] p-6 rounded-xl shadow-md hover:shadow-xl transition"
                  >
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
                    <p className="text-sm text-gray-700">Comprehensive solutions for {title.toLowerCase()} tailored to your needs.</p>
                  </motion.div>
                ))}
              </div>
              <div>
                <img loading="lazy" src="./ms.png" alt="Maintenance" className="rounded-xl shadow-lg w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Expertise */}
        <section className="bg-[#F4F7FA] py-16 px-6 md:px-10">
          <div className="max-w-6xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-900 mb-12">Expertise That Builds Trust</h2>
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              <div className="w-full md:w-1/2">
                <img loading="lazy" src="./Architect.jpg" alt="Expertise" className="rounded-2xl shadow-lg w-full object-cover h-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                {projectExpertise.map((item, i) => (
                  <div key={i} className={`p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition ${i % 2 === 0 ? 'bg-[#D1FAE5]' : 'bg-[#E0F2FE]'}`}>
                    <h3 className="font-bold text-lg text-emerald-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Service;
