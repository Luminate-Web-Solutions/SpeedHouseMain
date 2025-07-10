import React, { useState, useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProjectCard from '../Components/ProjectCard';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import pro from '../assets/ourproject.jpg';

const Ourproject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const sections = [


    {
      title: 'Interior Projects',
      color: 'text-[#1E3A8A]',
      projects: [
        {
  title: 'Palm Jumeirah Luxury Villa Interior',
  image: './0.jpg',
  client: 'Mr. Ahmed',
  location: 'Palm Jumeirah, Dubai',
  builtUpArea: '7,200 sq. ft.',
  configuration: '5 BHK',
  projectType: 'Interior',
  desc: "A bespoke villa interior that blends contemporary design with classic elegance, featuring premium finishes, curated art, and open-plan luxury living."
},
{
  title: 'Downtown Skyline Apartment Interior',
  image: './42.jpg',
  client: 'Ms. Fatima',
  location: 'Downtown Dubai',
  builtUpArea: '3,500 sq. ft.',
  configuration: '3 BHK',
  projectType: 'Interior',
  desc: "A stylish apartment interior crafted with modern minimalism, soft textures, and floor-to-ceiling views of the city skyline—perfect for urban sophistication."
},
{
  title: 'Jumeirah Golf Estates Villa Interior',
  image: './43.jpg',
  client: 'Mr. Kareem',
  location: 'Jumeirah Golf Estates, Dubai',
  builtUpArea: '5,800 sq. ft.',
  configuration: '4 BHK',
  projectType: 'Interior',
  desc: "A luxurious villa interior inspired by nature, featuring organic materials, serene color palettes, and seamless indoor-outdoor living."
},
{
  title: 'Al Barsha Contemporary Apartment Interior',
  image: './44.jpg',
  client: 'Mrs. Sara',
  location: 'Al Barsha, Dubai',
  builtUpArea: '2,900 sq. ft.',
  configuration: '2 BHK',
  projectType: 'Interior',
  desc: "A fresh and contemporary apartment design with smart space utilization, elegant furniture, and a soft neutral color scheme for modern family living."
},
{
  title: 'Emirates Hills Grand Villa Interior',
  image: './45.jpg',
  client: 'Mr. Youssef',
  location: 'Emirates Hills, Dubai',
  builtUpArea: '9,500 sq. ft.',
  configuration: '6 BHK',
  projectType: 'Interior',
  desc: "An opulent villa interior combining timeless luxury with cutting-edge technology, offering handcrafted detailing, custom lighting, and expansive living spaces."
},
{
  title: 'Bluewaters Island Seafront Apartment',
  image: './46.jpg',
  client: 'Ms. Layla',
  location: 'Bluewaters Island, Dubai',
  builtUpArea: '3,800 sq. ft.',
  configuration: '3 BHK',
  projectType: 'Interior',
  desc: "A seafront apartment interior embracing coastal elegance with breezy layouts, natural textures, and unobstructed ocean views for relaxed waterfront living."
},
{
  title: 'Dubai Marina Penthouse Interior',
  image: './51.jpg',
  client: 'Mr. Nasser',
  location: 'Dubai Marina, Dubai',
  builtUpArea: '6,400 sq. ft.',
  configuration: '4 BHK Duplex',
  projectType: 'Interior',
  desc: "An ultra-modern penthouse with sleek furnishings, high-end materials, and panoramic views—designed for sophisticated urban lifestyles in Dubai Marina."
},
{
  title: 'City Walk Luxury Apartment',
  image: './48.jpg',
  client: 'Ms. Huda',
  location: 'City Walk, Dubai',
  builtUpArea: '2,600 sq. ft.',
  configuration: '2 BHK',
  projectType: 'Interior',
  desc: "A chic, urban apartment featuring contemporary interiors, statement lighting, and vibrant art—crafted for upscale living in the heart of Dubai."
},
{
  title: 'The Palm Boutique Hotel Interior',
  image: './49.jpg',
  client: 'Al Noor Group',
  location: 'Palm Jumeirah, Dubai',
  builtUpArea: '12,000 sq. ft.',
  configuration: 'Hotel Suites',
  projectType: 'Interior',
  desc: "A boutique hotel interior designed for indulgence, combining luxurious fabrics, bespoke furnishings, and a serene ambiance inspired by coastal living."
},
{
  title: 'Business Bay Corporate Office Interior',
  image: './50.jpg',
  client: 'FutureBuild Ltd.',
  location: 'Business Bay, Dubai',
  builtUpArea: '15,500 sq. ft.',
  configuration: 'Corporate HQ',
  projectType: 'Interior',
  desc: "A high-end corporate interior blending modern aesthetics, ergonomic workspaces, and sustainable materials to create a future-ready business environment."
}

      ],
    },
    {
      title: 'Commercial Projects ',
      color: 'text-[#0F766E]',
      projects: [
        {
  title: 'Business Bay Logistics Warehouse',
  image: './67.jpg',
  client: 'Gulf Logistics Solutions',
  location: 'Dubai Industrial City, Dubai',
  builtUpArea: '150,000 sq. ft.',
  configuration: 'G+1',
  projectType: 'Warehouse',
  desc: "A modern logistics facility designed for efficient storage, streamlined operations, and easy accessibility—ideal for large-scale industrial and distribution businesses."
},
{
  title: 'Al Quoz Distribution Warehouse',
  image: './68.jpg',
  client: 'TransGulf Warehousing LLC',
  location: 'Al Quoz, Dubai',
  builtUpArea: '120,000 sq. ft.',
  configuration: 'G+1',
  projectType: 'Warehouse',
  desc: "A purpose-built warehouse offering spacious layouts, optimized loading zones, and robust infrastructure to meet diverse storage and supply chain needs."
},
{
  title: 'Downtown Skyline Hotel',
  image: './64.jpg',
  client: 'Skyline Hospitality Group',
  location: 'Downtown Dubai',
  builtUpArea: '180,000 sq. ft.',
  configuration: 'G+10+R',
  projectType: 'Hotel',
  desc: "A luxury hotel designed with contemporary architecture, upscale amenities, and breathtaking views of the city skyline—offering an exceptional guest experience in Downtown Dubai."
},
{
  title: 'Palm Jumeirah Beachfront Hotel',
  image: './63.png',
  client: 'Oceanview Hospitality Ltd.',
  location: 'Palm Jumeirah, Dubai',
  builtUpArea: '200,000 sq. ft.',
  configuration: 'G+8+R',
  projectType: 'Hotel',
  desc: "An elegant beachfront hotel featuring sophisticated interiors, world-class facilities, and stunning sea views—perfect for leisure and luxury hospitality on Palm Jumeirah."
}


        // {
        //   title: 'Business Bay Commercial Complex',
        //   image: './64.jpg',
        //   client: 'Emirates Investment',
        //   location: 'Business Bay, Dubai',
        //   builtUpArea: '220,000 sq. ft.',
        //   configuration: 'G+5+R',
        //   projectType: 'Commercial',
        //   desc: "An architectural landmark in Business Bay, featuring sleek glass façades, eco-friendly systems, and pedestrian-friendly zones. Designed to foster productivity in a sustainable urban setting."
        // }, {
        //   title: 'Business Bay Commercial Complex',
        //   image: './63.png',
        //   client: 'Emirates Investment',
        //   location: 'Business Bay, Dubai',
        //   builtUpArea: '220,000 sq. ft.',
        //   configuration: 'G+5+R',
        //   projectType: 'Commercial',
        //   desc: "An architectural landmark in Business Bay, featuring sleek glass façades, eco-friendly systems, and pedestrian-friendly zones. Designed to foster productivity in a sustainable urban setting."
        // }, {
        //   title: 'Business Bay Commercial Complex',
        //   image: './.jpg',
        //   client: 'Emirates Investment',
        //   location: 'Business Bay, Dubai',
        //   builtUpArea: '220,000 sq. ft.',
        //   configuration: 'G+5+R',
        //   projectType: 'Commercial',
        //   desc: "An architectural landmark in Business Bay, featuring sleek glass façades, eco-friendly systems, and pedestrian-friendly zones. Designed to foster productivity in a sustainable urban setting."
        // }, {
        //   title: 'Business Bay Commercial Complex',
        //   image: './0.jpg',
        //   client: 'Emirates Investment',
        //   location: 'Business Bay, Dubai',
        //   builtUpArea: '220,000 sq. ft.',
        //   configuration: 'G+5+R',
        //   projectType: 'Commercial',
        //   desc: "An architectural landmark in Business Bay, featuring sleek glass façades, eco-friendly systems, and pedestrian-friendly zones. Designed to foster productivity in a sustainable urban setting."
        // },
        // {
        //   title: 'Office Fit-Out',
        //   image: './i9.jpg',
        //   client: 'TechCorp LLC',
        //   location: 'Silicon Oasis, Dubai',
        //   configuration: 'G+2',
        //   projectType: 'Interior',
        //   desc: "A smart, vibrant office layout promoting productivity and collaboration. Includes modern lighting, ergonomic design, and acoustic zoning."
        // },
        // {
        //   title: 'Boutique Hotel Interior',
        //   image: './i1.jpg',
        //   client: 'Aura Hospitality',
        //   location: 'Downtown Dubai',
        //   configuration: 'G+3',
        //   projectType: 'Interior',
        //   desc: "Chic interiors blending contemporary minimalism with luxurious textures. Each room is uniquely styled to offer a memorable guest experience."
        // },
      ],
    },
    {
      title: 'Villa Projects',
      color: 'text-[#6D28D9]',
      projects: [
        {
          title: 'Palm Jumeirah Villa',
          image: './29.jpg',
          client: 'Mr. Kareem',
          location: 'Palm Jumeirah, Dubai',
          configuration: 'G+1+Roof',
          projectType: 'Residential Villa',
          desc: "A stunning seafront villa with panoramic ocean views, infinity pool, and elegant interiors tailored for comfort and luxury living."
        },
        {
          title: 'Emirates Hills Estate',
          image: './31.jpg',
          client: 'Ms. Noura',
          location: 'Emirates Hills, Dubai',
          configuration: 'G+2',
          projectType: 'Luxury Villa',
          desc: "A premium estate that blends classical architecture with modern aesthetics. Landscaped gardens, marble interiors, and state-of-the-art automation."
        },
        {
          title: 'Al Quoz Villa',
          image: './32.jpg',
          client: 'Mr. Hassan Ahmed',
          location: 'Al Quoz First, Dubai',
          configuration: 'G+1',
          projectType: 'Villa',
          desc: "Spacious family villa designed for comfort and privacy, with an open courtyard, modern kitchen, and stylish interiors."
        },
        {
  title: 'Whispering Willows',
  image: './33.jpg',
  client: 'Palm Luxury Estates',
  location: 'Palm Jumeirah, Dubai',
  builtUpArea: '5,500 sq. ft.',
  configuration: 'G+1',
  projectType: 'Residential Villa',
  desc: "A luxurious villa designed with modern architecture, open living spaces, and lush surroundings—offering an exceptional lifestyle on the iconic Palm Jumeirah."
},
{
  title: 'Coral Dunes Villa',
  image: './34.png',
  client: 'Hillside Property Group',
  location: 'Dubai Hills Estate, Dubai',
  builtUpArea: '5,200 sq. ft.',
  configuration: 'G+2',
  projectType: 'Residential Villa',
  desc: "A stunning villa blending contemporary elegance with serene outdoor spaces, perfect for families seeking privacy and comfort in Dubai Hills Estate."
},
{
  title: 'Azure Palm Villa',
  image: './35.png',
  client: 'Blue Horizon Developments',
  location: 'Jumeirah Golf Estates, Dubai',
  builtUpArea: '5,000 sq. ft.',
  configuration: 'G+1',
  projectType: 'Residential Villa',
  desc: "An exclusive villa featuring sleek interiors, garden views, and eco-friendly design—crafted for premium living in Jumeirah Golf Estates."
},
{
  title: 'Golden Horizon Villa',
  image: './36.png',
  client: 'Prestige Living Real Estate',
  location: 'Emirates Hills, Dubai',
  builtUpArea: '4,800 sq. ft.',
  configuration: 'G+2',
  projectType: 'Residential Villa',
  desc: "A sophisticated villa with spacious layouts, modern finishes, and scenic views—ideal for luxury living in the prestigious Emirates Hills."
},
{
  title: 'Sunset Valley Villa',
  image: './37.jpg',
  client: 'Barari Signature Homes',
  location: 'Al Barari, Dubai',
  builtUpArea: '4,700 sq. ft.',
  configuration: 'G+1',
  projectType: 'Residential Villa',
  desc: "A beautifully designed villa offering a harmonious blend of nature and architecture, complete with private terraces and lush landscaped gardens in Al Barari."
},
{
  title: 'Emerald Garden Villa',
  image: './38.jpg',
  client: 'Greenline Residences',
  location: 'The Lakes, Dubai',
  builtUpArea: '4,600 sq. ft.',
  configuration: 'G+2',
  projectType: 'Residential Villa',
  desc: "A graceful villa with expansive living spaces, modern amenities, and tranquil outdoor areas—perfect for refined family living in The Lakes community."
},
{
  title: 'Serene Bay Villa',
  image: './39.jpg',
  client: 'Arabian Luxe Properties',
  location: 'Arabian Ranches, Dubai',
  builtUpArea: '4,500 sq. ft.',
  configuration: 'G+1',
  projectType: 'Residential Villa',
  desc: "An exclusive villa retreat combining contemporary luxury with nature-inspired design, offering a peaceful escape within the prestigious Arabian Ranches."
}


      ],
    },


    // {Resditional}




    {
      title: 'Residential Projects',
      color: 'text-[#6D28D9]',
      projects: [
        {
          title: 'Palm Jumeirah Villa',
          image: './18.jpg',
          client: 'Mr. Adel Yousf',
          location: 'Al Khawaneej Second',
          configuration: 'G+1',
          BuildUpArea :'5504',
          projectType: 'Residential Villa',
          desc: "A stunning seafront villa with panoramic ocean views, infinity pool, and elegant interiors tailored for comfort and luxury living."
        },
        {
          title: 'Palm Grove Villas',
          image: './19.png',
          client: 'Mr Khalid Al Khaja',
          location: 'Al Khawaneej Second',
          configuration: 'G+1',
          projectType: 'Luxury Villa',
          desc: "The Palm Grove Villas offers a sweet balance between traditional Balinese charm and modern comfort. It’s ideal for couples, small groups, or solo travelers seeking peace, beach fun, and diving adventures—with the conveniences of central location and thoughtful amenities."
        },
        {
          title: 'Al Quoz Villa',
          image: './20.png',
          client: 'Mr. Hassan Ahmed Ghuloom Ahmad Albbalooshi',
          location: 'Al Quoz First, Dubai',
          configuration: 'G+1',
          projectType: 'Villa',
          desc: "Spacious family villa designed for comfort and privacy, with an open courtyard, modern kitchen, and stylish interiors."
        },
         {
          title: 'Emerald Heights',
          image: './21.png',
          client: 'Mr Afaf Mahmoud Alsomali',
          location: 'Muhaisanah Third',
          builtUpArea: '8666,838 sq. ft.',
          configuration: 'G+1',
          projectType: 'Residential Villa',
          desc: "Emerald Heights is an exclusive residential community offering modern villas and apartments designed for luxurious living amidst serene surroundings. With elegant architecture, lush landscapes, and top-tier amenities, Emerald Heights provides a perfect blend of comfort, style, and sophistication—ideal for families and individuals seeking a premium lifestyle."
        }, {
          title: 'The Royal Meadows',
          image: './30.jpg',
          client: 'MR.Mohammed (Talal)',
          location: 'Nadd Al Shiba 1, Dubai',
          builtUpArea: '12525sq. ft.',
          configuration: 'G+1',
          projectType: 'Residntaial Villas',
          desc: "Royal Meadows delivers a refined villa-style getaway with modern comforts, private pool access, and thoughtful service, making it an excellent choice for a peaceful hill-station retreat with family or friends."
        }, {
          title: 'Golden Horizon Villas',
          image: './23.jpg',
          client: 'Mr Zeid Ali',
          location: 'Qud Al Muteena Second, Dubai',
          builtUpArea: '5767 sq. ft.',
          configuration: 'G+1',
          projectType: 'Residential Villas',
          desc: "Golden Horizon Villas delivers a premium stay with modern comforts, sea-view swimming pool, and full self-catering setup, all within easy reach of Santorini’s top beaches and heritage sites—ideal for upscale, independent group stays in a stunning setting."
        }, {
          title: 'Silver Lake Residences',
          image: './24.jpg',
          client: 'Mr.Saood Abdul Aziz Idris Obaid Al Shamsi',
          location: 'Al Muhaisanah Third, Dubai',
          // builtUpArea: '220,000 sq. ft.',
          configuration: 'G',
          projectType: 'Resdential Villas',
          desc: "A standout example of mid-century modern living: Silver Lake Residences offers elevated architectural design, light-filled interiors, and a prime location in one of LA’s most creative communities—perfect for those who value aesthetic heritage and contemporary comfor."
        }, {
          title: 'Azure Garden Villas',
          image: './28.jpg',
          client: 'Mr.Ali Hussain Abdul Aziz Al Khaja',
          location: 'Al Khwaneej Second, Dubai',
          builtUpArea: '5381 sq. ft.',
          configuration: 'G+1',
          projectType: 'Residential Villas',
          desc: "Azure Garden Villas deliver a refined blend of contemporary style, thoughtful design, and garden-side serenity—ideal for travelers seeking peaceful, upscale villa-style stays in lush, picturesque surrounding."
        }, {
          title: 'Whispering Pines',
          image: './26.png',
          client: 'Mr. Saood Abdul Idris Al Shamsi ',
          location: 'Al Warqa Third ',
          builtUpArea: '3702 sq. ft.',
          configuration: 'G+1',
          projectType: 'residential Villas',
          desc: "An architectural landmark in Business Bay, featuring sleek glass façades, eco-friendly systems, and pedestrian-friendly zones. Designed to foster productivity in a sustainable urban setting."
        }, {
          title: 'Sunrise Valley Villa',
          image: './27.png',
          client: 'Mr.Mohammed Abdulla Hassan Ahmad',
          location: 'Al Khwaneej Second',
          builtUpArea: '5567 sq. ft.',
          configuration: 'G',
          projectType: 'Residential Villa',
          desc: "Azure Garden Villas deliver a refined blend of contemporary style, thoughtful design, and garden-side serenity—ideal for travelers seeking peaceful, upscale villa-style stays in lush, picturesque surrounding."
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

      <div className="bg-[#F4F7FA] py-16 px-5">
        {sections.map((section, index) => {
          const prevRef = useRef(null);
          const nextRef = useRef(null);

          return (
            <section className="mb-20 text-left md:pl-10" key={index}>
              <h3 className={`text-3xl font-semibold mb-6 ${section.color} text-center`}>
                {section.title}
              </h3>

              <div className="relative group px-4">
                {/* Desktop Navigation Buttons */}
                <button
                  ref={prevRef}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-blue-600 hover:text-white z-10"
                >
                  <ChevronLeft />
                </button>

                <button
                  ref={nextRef}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-blue-600 hover:text-white z-10"
                >
                  <ChevronRight />
                </button>

                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                >
                  {section.projects.map((proj, i) => (
                    <SwiperSlide key={i}>
                      <div className="transform hover:scale-105 transition duration-300 cursor-pointer max-w-sm mx-auto">
                        <ProjectCard {...proj} onViewDetails={() => setSelectedProject(proj)} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-600 hover:text-white transition"
            >
              <span className="text-xl font-bold leading-none">&times;</span>
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-blue-800 mb-2">{selectedProject.title}</h2>

            {selectedProject.client && <p className="text-gray-600 text-sm"><strong>Client:</strong> {selectedProject.client}</p>}
            {selectedProject.location && <p className="text-gray-600 text-sm"><strong>Location:</strong> {selectedProject.location}</p>}
            {selectedProject.builtUpArea && <p className="text-gray-600 text-sm"><strong>Built-up Area:</strong> {selectedProject.builtUpArea}</p>}
            {selectedProject.configuration && <p className="text-gray-600 text-sm"><strong>Configuration:</strong> {selectedProject.configuration}</p>}
            {selectedProject.projectType && <p className="text-gray-600 text-sm"><strong>Type:</strong> {selectedProject.projectType}</p>}
            {selectedProject.desc && <p className="text-gray-600 text-sm mt-2"><strong>Description:</strong> {selectedProject.desc}</p>}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Ourproject;