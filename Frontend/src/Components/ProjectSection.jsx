import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectCard from '../Components/ProjectCard';

const ProjectSection = ({ title, color, projects, onViewDetails }) => {
  return (
    <section className="mb-20">
      <h3 className={`text-3xl font-semibold mb-6 ${color} text-center`}>{title}</h3>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            <div className="transform hover:scale-105 transition duration-300 cursor-pointer">
              <ProjectCard {...proj} onViewDetails={() => onViewDetails(proj)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectSection;
