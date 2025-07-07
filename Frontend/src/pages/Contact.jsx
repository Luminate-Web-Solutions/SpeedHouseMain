import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin } from "lucide-react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contactusAnimation.json";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://luminatewebsol.com/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        alert("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-[#F4F7FA] py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border p-3 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700 text-white py-2 px-5 rounded hover:bg-blue-800"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          <div className="flex flex-col items-center text-center">
            <Lottie animationData={contactAnimation} loop autoplay className="w-64 h-64 mb-6" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-blue-700" /> <span>Golf Park Building #205, Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-blue-700" /> <span>+971 55 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-blue-700" /> <span>info@luminatewebsol.com</span>
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
