import React, { useRef, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { Mail, Phone, MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import contactAnim from "../assets/Animation - 1751603024220.json";
import getintouch from "../assets/Animation - 1751601835143.json";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      phone: ""
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3035';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);

      setPopup({ show: true, type: 'success', message: response.data.message || "Message sent successfully!" });
      form.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setPopup({ show: true, type: 'error', message: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => setPopup({ show: false, type: '', message: '' });

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-green-100 py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
            Let’s Build Something Together
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Got a project in mind? We’re here to help you shape your ideas into reality.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#F4F7FA] py-20 px-6 md:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">

          {/* Form Card */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-2xl w-full border border-blue-100"
          >
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="font-semibold mb-1 text-gray-700">Name</label>
                <input type="text" id="name" name="name" required className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold mb-1 text-gray-700">Email</label>
                <input type="email" id="email" name="email" required className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
              </div>
              <div>
                <label htmlFor="subject" className="font-semibold mb-1 text-gray-700">Subject</label>
                <textarea id="subject" name="subject" rows="2" required className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
              </div>
              <div>
                <label htmlFor="message" className="font-semibold mb-1 text-gray-700">Message</label>
                <textarea id="message" name="message" rows="5" required className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
              </div>
              <button type="submit" disabled={loading} className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-200 flex items-center justify-center gap-2">
                {loading && <Loader2 className="animate-spin" size={20} />}
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </motion.form>

          {/* Animation + Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <Lottie animationData={contactAnim} loop autoplay className="w-100 h-78 mx-auto mb-6" />

            <h2 className="text-3xl font-bold text-blue-800 mb-3">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Whether it’s a question or a project — we’d love to hear from you.
            </p>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full border border-blue-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                <div className="flex flex-col items-center group">
                  <MapPin className="text-blue-700 mb-2 group-hover:scale-110 transition" size={32} />
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm text-center">Golf Park Building #205, Al Garhoud, Dubai, UAE</p>
                </div>

                <div className="flex flex-col items-center group">
                  <Phone className="text-blue-700 mb-2 group-hover:scale-110 transition" size={32} />
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm">+971 55 123 4567</p>
                </div>

                <div className="flex flex-col items-center group">
                  <Mail className="text-blue-700 mb-2 group-hover:scale-110 transition" size={32} />
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">info@speedhouseeng.com</p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Popup Modal */}
        {popup.show && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm mx-auto">
              {popup.type === 'success' ? (
                <CheckCircle size={50} className="text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle size={50} className="text-red-500 mx-auto mb-4" />
              )}
              <h3 className="text-xl font-bold mb-2">{popup.type === 'success' ? 'Success!' : 'Error'}</h3>
              <p className="text-gray-600 mb-6">{popup.message}</p>
              <button onClick={closePopup} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Close
              </button>
            </div>
          </div>
        )}

      </section>

      <Footer />
    </>
  );
};

export default Contact;
