import React from 'react';
import Header from '../Components/Header';
import { Linkedin, Facebook, Instagram,Eye, Target, FileText , Users, BriefcaseBusiness, Image as ImageIcon } from 'lucide-react';
import Footer from '../Components/Footer';
import Autoscroll from '../Components/Autoscroll';
import about from '../assets/blue1.jpg';
import { motion } from 'framer-motion';
import statsImage from '../assets/OfficeMeeting2.jpg'; // Replace with your actual image path
// import { Linkedin, Facebook, Instagram } from 'lucide-react';
// import { ImageIcon } from "lucide-react";


const Aboutus = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}

<section
  className="h-[80vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{
    backgroundImage: `url(${about})`,
  }}
>
  <motion.div
    className="bg-black/70 bg-opacity-50 p-10 rounded-xl text-center max-w-3xl"
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
      About Us
    </motion.h1>
    <motion.p
      className="text-white text-lg md:text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Designing the future, preserving the legacy — since 2004.
    </motion.p>
  </motion.div>
</section>



    {/* About Philosophy */}
<section className="py-20 px-6 md:px-0 bg-[#F4F7FA]">
  <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-8">
      Our Architectural Philosophy
    </h2>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
      At Speed House Engineering Consultant, architecture is about more than structures — it's about purpose, emotion, and transformation. We strive to design spaces that resonate with people, respect the environment, and endure over time.
    </p>

    {/* Philosophy Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      <div className="bg-[#F0F7F4] p-6 rounded-xl shadow hover:shadow-lg transition-all text-center">
        <Eye size={40} className="mx-auto text-green-700 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-green-800">Design with Purpose</h3>
        <p className="text-gray-700">
          Every project we undertake begins with a clear understanding of user needs and context — translating vision into functional, aesthetic spaces.
        </p>
      </div>
      <div className="bg-[#F0F7F4] p-6 rounded-xl shadow hover:shadow-lg transition-all text-center">
        <Target size={40} className="mx-auto text-blue-700 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-blue-800">Client-Centric Approach</h3>
        <p className="text-gray-700">
          We work in close collaboration with clients and stakeholders at every stage — ensuring transparency, alignment, and satisfaction.
        </p>
      </div>
      <div className="bg-[#F0F7F4] p-6 rounded-xl shadow hover:shadow-lg transition-all text-center">
        <BriefcaseBusiness size={40} className="mx-auto text-indigo-700 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-indigo-800">Built on Experience</h3>
        <p className="text-gray-700">
          With a legacy of 250+ projects, we bring unmatched expertise, creative innovation, and proven quality to everything we build.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#F4F7FA] py-16 px-6 md:px-10">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
    
    {/* Image Side */}
    <div className="w-full h-full">
      <img
        src={statsImage}
        alt="Our Achievements"
        className="rounded-2xl shadow-xl w-full h-full object-cover"
      />
    </div>

    {/* Stats Side - Full Height */}
    <div className="flex flex-col justify-between gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
        {/* Project Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-2">150<sup className="text-xl align-top">+</sup></h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Projects</h3>
          <hr className="border-t mb-4 w-1/2 mx-auto" />
          <p className="text-gray-600 text-sm">Delivered architectural and engineering solutions across the UAE.</p>
        </div>

        {/* Clients Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-2">80<sup className="text-xl align-top">+</sup></h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Clients</h3>
          <hr className="border-t mb-4 w-1/2 mx-auto" />
          <p className="text-gray-600 text-sm">Trusted by top developers and authorities.</p>
        </div>

        {/* Satisfaction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-2">98<sup className="text-xl align-top">%</sup></h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Satisfaction</h3>
          <hr className="border-t mb-4 w-1/2 mx-auto" />
          <p className="text-gray-600 text-sm">Client happiness is our top priority.</p>
        </div>

        {/* Awards Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-2">12<sup className="text-xl align-top">+</sup></h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Awards</h3>
          <hr className="border-t mb-4 w-1/2 mx-auto" />
          <p className="text-gray-600 text-sm">Recognized for excellence in design.</p>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* Portfolio Section */}
            

<section className="bg-[#F4F7FA] py-16 px-10 md:px-10]">
  <div className="max-w-6xl mx-auto px-6 bg-white p-10 md:p-16 rounded-3xl shadow-2xl text-center">
    {/* Icon Circle */}
    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#e0e7ff] ">
      <FileText size={50} className="text-[#1E40AF]" />
    </div>

    {/* Heading */}
    <h2 className="text-4xl  md:text-5xl font-extrabold text-[#1E40AF] mb-4 leading-tight">
      Crafted with Vision, Built with Precision
    </h2>

    {/* Description */}
    <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
      Dive into our curated portfolio highlighting iconic projects that blend architectural brilliance with innovative engineering. From modern facades to timeless interiors — experience our legacy of excellence.
    </p>

    {/* CTA Button */}
    <a
      href="/shec-portfolio.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <FileText size={20} />
      View Portfolio PDF
    </a>
  </div>
</section>



      {/* Our Team */}
      

<section className="bg-[#F0F7F4] pt-10">
  <div className="max-w-6xl mx-auto px-6 bg-white p-10 md:p-20 rounded-xl shadow-md">
    <h2 className="text-3xl md:text-4xl text-center font-bold text-[#2563EB] mb-12">
      Meet Our Team
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        { name: "John Doe", title: "Senior Architect", img: "./male.jpg" },
        { name: "Jane Smith", title: "Managing Director", img: "./female.jpg" },
        { name: "Robert Lee", title: "Project Manager", img: "./male2.jpg" }
      ].map((member, index) => (
        <div
          key={index}
          className="bg-[#F0F7F4] p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-[#2563EB] shadow">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-xl font-bold text-center text-gray-800">{member.name}</h4>
          <p className="text-center text-gray-600 mt-1">{member.title}</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-[#2563EB] hover:text-blue-800 transition">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-[#E1306C] hover:text-pink-700 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-[#1877F2] hover:text-blue-600 transition">
              <Facebook size={22} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="py-16 bg-[#F4F7FA]">
  <div className="max-w-6xl mx-auto px-6 bg-white p-10 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 items-center gap-10">
    {/* Left Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">Our Experience</h2>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto md:mx-0 mb-6">
        With over a decade of experience, Speed House Engineering Consultant LLC has successfully delivered more than 250 projects from luxury villas to commercial buildings and industrial parks combining technical excellence with creative innovation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#EEF2FF] rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Residential & Commercial</h3>
          <p className="text-gray-600 text-sm">High-end residential and commercial project expertise with aesthetic functionality.</p>
        </div>
        <div className="bg-[#ECFDF5] rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Government Partnerships</h3>
          <p className="text-gray-600 text-sm">Trusted partner to major government bodies across the UAE.</p>
        </div>
        <div className="bg-[#ECFDF5] rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainable Solutions</h3>
          <p className="text-gray-600 text-sm">Innovative, eco-friendly design strategies aligned with modern standards.</p>
        </div>
        <div className="bg-[#EEF2FF] rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Expert Team</h3>
          <p className="text-gray-600 text-sm">A dedicated team of engineers, architects, and project managers delivering excellence.</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full">
      <img src="./aus.jpg" alt="Our Experience" className="rounded-xl shadow-lg w-full h-auto object-cover" />
    </div>
  </div>
</section>




      {/* Authority Logos (Autoscroll) */}
      <section className="pb-15 bg-[#F4F7FA]">
        <div className="max-w-6xl mx-auto px-6 bg-white p-10 rounded-xl shadow-md overflow-x-auto">
          
          <Autoscroll />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Aboutus;
