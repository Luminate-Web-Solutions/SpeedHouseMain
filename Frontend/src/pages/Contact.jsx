import React, { useRef, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import contactAnim from "../assets/Animation - 1751603024220.json";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");  // 'success', 'error', or ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      phone: ""
    };

    try {
      const response = await axios.post("https://speed.luminatewebsol.com/api/contact", formData);
      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const closeOverlay = () => setStatus("");

  return (
    <>
      <Header />

      {/* ✅ Full Screen Overlays */}
      {(loading || status) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm">
            {loading && (
              <>
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 mb-4 mx-auto"></div>
                <p className="text-blue-800 font-semibold text-lg">Please wait, we’re sending your message...</p>
              </>
            )}

            {status === "success" && (
              <>
                <p className="text-green-600 font-bold text-lg mb-3"> Thank you!</p>
                <p className="text-gray-700 mb-4">Your message has been sent successfully.</p>
                <button
                  onClick={closeOverlay}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </>
            )}

            {status === "error" && (
              <>
                <p className="text-red-600 font-bold text-lg mb-3"> Oops!</p>
                <p className="text-gray-700 mb-4">Failed to send your message. Please try again.</p>
                <button
                  onClick={closeOverlay}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

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
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full bg-white shadow-2xl p-10 rounded-2xl"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" required className="border border-gray-300 p-3 mb-4 rounded" />

              <label htmlFor="email" className="font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" required className="border border-gray-300 p-3 mb-4 rounded" />

              <label htmlFor="subject" className="font-semibold mb-1">Subject</label>
              <textarea id="subject" name="subject" required rows="2" className="border border-gray-300 p-3 mb-4 rounded" />

              <label htmlFor="message" className="font-semibold mb-1">Message</label>
              <textarea id="message" name="message" required rows="5" className="border border-gray-300 p-3 mb-4 rounded" />

              <button
                type="submit"
                disabled={loading}
                className={`px-5 py-3 ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                } text-white font-semibold rounded-lg shadow-md`}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center text-center">
            <Lottie animationData={contactAnim} loop autoplay className="w-90 h-79 mx-auto mb-6" />

            <motion.h2 className="text-3xl font-bold text-blue-800 mb-3"
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
                  <p className="text-gray-600 text-sm text-center">Golf Park Building #205, Al Garhoud, Dubai, UAE</p>
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

