import React, { useRef } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      phone: form.current.phone?.value || ""
    };

    try {
      const response = await axios.post(
        'https://speed.luminatewebsol.com/api/contact', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      alert(response.data.message);
      form.current.reset();
    } catch (error) {
      console.error("Error details:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      
      alert(error.response?.data?.error || "Failed to send message. Please try again.");
    }
  };

  return (
    <section className="bg-[#F4F7FA] py-20 px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-2xl p-10 rounded-2xl"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold mb-1">Name*</label>
            <input type="text" id="name" name="name" required className="border border-gray-300 p-3 mb-4 rounded" />

            <label htmlFor="email" className="font-semibold mb-1">Email*</label>
            <input type="email" id="email" name="email" required className="border border-gray-300 p-3 mb-4 rounded" />

            <label htmlFor="phone" className="font-semibold mb-1">Phone</label>
            <input type="tel" id="phone" name="phone" className="border border-gray-300 p-3 mb-4 rounded" />

            <label htmlFor="subject" className="font-semibold mb-1">Subject*</label>
            <input type="text" id="subject" name="subject" required className="border border-gray-300 p-3 mb-4 rounded" />

            <label htmlFor="message" className="font-semibold mb-1">Message*</label>
            <textarea id="message" name="message" required rows="5" className="border border-gray-300 p-3 mb-4 rounded" />

            <button 
              type="submit" 
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Contact Info Section remains same */}
      </div>
    </section>
  );
};

export default Contact;