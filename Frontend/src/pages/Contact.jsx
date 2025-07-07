import React, { useRef } from "react";
import Lottie from "lottie-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import contactAnim from "../assets/Animation - 1751349091018.json";

const Contact = () => {
  const form = useRef();
  console.log("Line 11: Form ref initialized", form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Line 14: Form submission triggered");

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      phone: "",
    };

    console.log("Line 23: Form Data Collected:", formData);

    try {
      console.log("Line 26: Sending POST request...");

      const response = await fetch("https://speed.luminatewebsol.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Line 33: Response received:", response);

      if (response.status === 200) {
        const result = await response.json();
        console.log("Line 36: Response JSON parsed:", result);
        alert("Thank you for reaching out! We will get back to you soon.");
        form.current.reset();
        console.log("Line 42: Form reset completed");
      } else {
        console.error("Line 44: Server responded with status:", response.status);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Line 49: Network or submission error:", error);
      alert("Failed to send message. Please check your internet connection or try again later.");
    }
  };

  console.log("Line 55: Component rendering");

  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-blue-100 via-white to-green-100 py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Let’s Build Something Together
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Got a project in mind? We’re here to help you shape your ideas into reality.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#F4F7FA] py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="w-full bg-white shadow-2xl p-10 rounded-2xl">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" required className="border border-gray-300 p-3 mb-4 rounded" />

              <label htmlFor="email" className="font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" required className="border border-gray-300 p-3 mb-4 rounded" />

              <label htmlFor="subject" className="font-semibold mb-1">Subject</label>
              <textarea id="subject" name="subject" required rows="2" className="border border-gray-300 p-3 mb-4 rounded" />

              <label htmlFor="message" className="font-semibold mb-1">Message</label>
              <textarea id="message" name="message" required rows="5" className="border border-gray-300 p-3 mb-4 rounded" />

              <button type="submit" className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md">
                Submit
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center text-center">
            <Lottie animationData={contactAnim} loop autoplay className="w-60 h-60 mx-auto mb-6" />
            <motion.h2
              className="text-3xl font-bold text-blue-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in Touch
            </motion.h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether it’s a question or a project — we’d love to hear from you.
            </p>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <MapPin className="text-blue-700 mb-2" size={32} />
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm text-center">
                    Golf Park Building #205, Al Garhoud, Dubai, UAE
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="text-blue-700 mb-2" size={32} />
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm">+971 55 123 4567</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="text-blue-700 mb-2" size={32} />
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">info@speedhouseeng.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;