"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const images = [
  "/du.png", "/Dwc.png", "/Emaar.jpg", "./dubai municipality logo.avif",
  "./TECOM.png", "./trakhees_logo.png", "./rta.png", "./silicon.png", "./Dewalogo.jpg", "./mof.jpg"
];

const Autoscroll = () => {
  const rowRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    const row = rowRef.current;
    if (!row) return;

    // Create the tween and save to ref
    tweenRef.current = gsap.to(row, {
      x: "-50%",
      duration: 30,
      repeat: -1,
      ease: "linear"
    });

    // Add event listeners for hover
    const handleMouseEnter = () => {
      tweenRef.current.pause();
    };

    const handleMouseLeave = () => {
      tweenRef.current.resume();
    };

    row.addEventListener("mouseenter", handleMouseEnter);
    row.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup listeners on unmount
    return () => {
      row.removeEventListener("mouseenter", handleMouseEnter);
      row.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      <div className="overflow-hidden">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Authority Approvals
        </h1>

        <div ref={rowRef} className="flex w-max gap-12 whitespace-nowrap">
          {[...images, ...images].map((img, index) => (
            <div
              key={`logo-${index}`}
              className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-xl transition-transform hover:scale-105 duration-300"
            >
              <img
                src={img}
                alt={`logo-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Autoscroll;
