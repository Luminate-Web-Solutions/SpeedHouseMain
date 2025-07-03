import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bg from '../assets/bg.avif';
import what from '../assets/offer.png';
import { motion } from 'framer-motion';

import { LayoutGrid, Lightbulb, Handshake } from 'lucide-react';

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
      desc: 'At Speed House Engineering Consultant, our Architectural Design services blend innovation, functionality, and aesthetics to create spaces that inspire and endure. From conceptual development to detailed planning, we design structures that reflect our clients vision while adhering to the highest standards of sustainability and engineering excellence. Our expert team of architects and designers works collaboratively with clients, engineers, and planners to craft designs that are not only visually compelling but also practical, cost-effective, and aligned with regulatory requirements. Whether its residential, commercial, or industrial architecture, we bring each project to life with a clear focus on form, function, and the future.'
    },
    {
      title: 'Interior Design',
      img: service2,
      desc: 'At Speed House Engineering Consultant, our Interior Design services transform spaces into environments that reflect personality, functionality, and refined taste. We specialize in creating interiors that balance aesthetics with comfort, delivering visually captivating and highly livable spaces Our team works closely with clients to understand their lifestyle, brand, or business needs, integrating custom design elements, color palettes, textures, and furnishings that elevate both form and function. Whether its a home, office, retail space, or hospitality venue, we design interiors that inspire and perform.'
    },
    {
      title: 'Landscape Architecture',
      img: service3,
      desc: 'At Speed House Engineering Consultant, our Landscape Architecture services create harmonious outdoor environments that enhance natural beauty, promote sustainability, and elevate the user experience. We design landscapes that seamlessly blend functionality, ecology, and visual appeal — from private gardens to large-scale urban spaces Our approach combines thoughtful planning with creative design to shape outdoor spaces that are both inviting and enduring. Whether its a residential development, commercial complex, public park, or resort landscape, we integrate nature, culture, and innovation to bring outdoor visions to life.'
    },
    {
      title: 'Commercial Projects',
      img: service4,
      desc: 'At Speed House Engineering Consultant, we specialize in delivering Commercial Projects that combine strategic planning, innovative design, and engineering precision. From concept to completion, we develop commercial spaces that are functional, modern, and tailored to support business growth and operational efficiency. Whether its office buildings, retail complexes, mixed-use developments, or hospitality venues, we design and execute each project with a clear focus on quality, compliance, and client goals. Our interdisciplinary team ensures seamless coordination across architecture, MEP, structural design, and interior planning — delivering spaces that are both high-performing and visually compelling'
    },
    {
      title: 'Villa Design',
      img: service5,
      desc: 'At Speed House Engineering Consultant, our Villa Design services are a perfect blend of luxury, comfort, and timeless architectural elegance. We specialize in creating bespoke villa designs that reflect our clients’ lifestyle, taste, and aspirations — transforming visions into iconic living spaces.Each villa we design is tailored to its surroundings, combining thoughtful spatial planning, aesthetic harmony, and premium functionality. From classical grandeur to modern minimalism, we bring a personalized touch to every detail — ensuring beauty, privacy, and comfort at every corner'
    },
    {
      title: 'Sustainable Solutions',
      img: service6,
      desc: 'Sustainable solutions are approaches, practices, or systems designed to meet present needs without compromising the ability of future generations to meet their own needs, encompassing environmental, social, and economic considerations. They aim to minimize negative impacts while maximizing positive contributions to the planet and its inhabitants Focusing on minimizing resource depletion, pollution, and ecological damage. This includes promoting renewable energy, efficient resource management, waste reduction, and conservation efforts. Ensuring equitable access to resources, opportunities, and a healthy environment for all, including considerations for human well-being, social justice, and community development.'
    },
  ];

  const projectExpertise = [
    {
      title: 'Architecture',
      img: architectureImg,
      desc: 'By blending artistry, technology, and unrivalled services...'
    },
    {
      title: 'Interior Design',
      img: interiorImg,
      desc: 'We curate eye-catching interiors through custom furniture...'
    },
    {
      title: 'Commercial',
      img: commercialImg,
      desc: 'We deliver elegant and functional commercial spaces...'
    },
    {
      title: 'Residential',
      img: residentialImg,
      desc: 'Our designs combine aesthetic appeal and Vastu principles...'
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />

        <section
          className="h-[80vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${what})` }}
        >
          <motion.div
            className="bg-black/40 bg-opacity-50 p-10 rounded-xl text-center max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              What We Offer
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Innovative, aesthetic, and efficient architectural designs tailored to unique client needs and urban contexts.
            </motion.p>
          </motion.div>
        </section>

        <section className="bg-[#F4F7FA] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#047857] mb-6">Our Capabilities</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12">
              Blending creativity, precision, and purpose in every project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <LayoutGrid size={40} className="text-[#1E40AF] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Architectural Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Innovative, aesthetic, and efficient architectural designs tailored to unique client needs and urban contexts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <Lightbulb size={40} className="text-[#F59E0B] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Sustainable Vision</h3>
                <p className="text-gray-600 text-sm">
                  We design with the future in mind — integrating green practices, energy efficiency, and long-term environmental value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <Handshake size={40} className="text-[#10B981] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Collaborative Delivery</h3>
                <p className="text-gray-600 text-sm">
                  We work hand-in-hand with clients, consultants, and authorities to deliver seamless, on-time, and on-budget execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*our services*/}

        <section className="bg-[#F4F7FA] py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedService(service);
                    setShowModal(true);
                  }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-blue-50 hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {showModal && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl relative">
              <button
                className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-800 text-center mb-2">{selectedService.title}</h3>
              <p className="text-gray-700 text-left text-sm">{selectedService.desc}</p>
            </div>
          </div>
        )}

        <section className="bg-[#F4F7FA] py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Maintenance Services We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="grid grid-cols-1 gap-6 h-full">
                {["Annual Maintenance", "MEP Services", "Renovation & Repairs", "On-Demand Support"].map((title, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[#E0F2FE] hover:bg-[#bae6fd] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 h-full"
                  >
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Service details for {title} go here.</p>
                  </motion.div>
                ))}
              </div>
              <div className="w-full h-full">
                <img
                  src="./ms.png"
                  alt="Maintenance Services"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F7FA] py-16 px-6 md:px-10 w-full">
          <div className="max-w-6xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-900 mb-12 relative">
              Expertise That Builds Trust
              <span className="block w-20 h-1 bg-emerald-600 mt-2 mx-auto rounded-full"></span>
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              <div className="w-full md:w-1/2 flex">
                <img
                  src="./Architect.jpg"
                  alt="Project Expertise"
                  className="rounded-2xl shadow-lg w-full object-cover h-full"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-6 justify-between">
                {projectExpertise.map((item, i) => {
                  const bgColors = [
                    "bg-[#D1FAE5]", "bg-[#E0F2FE]", "bg-[#D1FAE5]", "bg-[#E0F2FE]",
                    "bg-[#EDE9FE]", "bg-[#FFE4E6]", "bg-[#D1FAE5]", "bg-[#E0F2FE]"
                  ];
                  const color = bgColors[i % bgColors.length];
                  return (
                    <div
                      key={i}
                      className={`${color} rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300`}
                    >
                      <h3 className="font-bold text-lg text-emerald-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  );
                })}
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
