import React, { useRef } from "react";  // Line 1
import Lottie from "lottie-react";      // Line 2
import { Mail, Phone, MapPin } from "lucide-react";  // Line 3
import { motion } from "framer-motion"; // Line 4

import Footer from "../Components/Footer";  // Line 6
import Header from "../Components/Header";  // Line 7
import contactAnim from "../assets/Animation - 1751349091018.json";  // Line 8

const Contact = () => {  // Line 10
  const form = useRef();  // Line 11
  console.log("Line 11: Form ref initialized", form);

  const handleSubmit = async (e) => {  // Line 13
    e.preventDefault();  // Line 14
    console.log("Line 14: Form submission triggered");

    const formData = {  // Line 16
      name: form.current.name.value,    // Line 17
      email: form.current.email.value,  // Line 18
      subject: form.current.subject.value, // Line 19
      message: form.current.message.value, // Line 20
      phone: "",  // Line 21
    };

    console.log("Line 23: Form Data Collected:", formData);

    try {
      console.log("Line 26: Sending POST request...");

      const response = await fetch("https://api.speed.luminatewebsol.com/api/contact", {  // Line 28
        method: "POST",  // Line 29
        headers: { "Content-Type": "application/json" },  // Line 30
        body: JSON.stringify(formData),  // Line 31
      });

      console.log("Line 33: Response received:", response);

      const result = await response.json();  // Line 35
      console.log("Line 36: Response JSON parsed:", result);

      if (response.ok) {  // Line 38
        console.log("Line 39: Form submission successful");
        alert("Thank you for reaching out! We will get back to you soon.");  // Line 40
        form.current.reset();  // Line 41
        console.log("Line 42: Form reset completed");
      } else {
        console.error("Line 44: Server responded with error:", result);
        alert("Something went wrong. Please try again later.");  // Line 46
      }
    } catch (error) {
      console.error("Line 49: Network or submission error:", error);
      alert("Failed to send message. Please check your internet connection or try again later.");  // Line 51
    }
  };

  console.log("Line 55: Component rendering");

  return (  // Line 57
    <>
      <Header />  {/* Line 59 */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-green-100 py-20 px-6 text-center"> {/* Line 60 */}
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

      <section className="bg-[#F4F7FA] py-20 px-6 md:px-16">  {/* Line 77 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"> {/* Line 78 */}
          <form
            ref={form}  // Line 80
            onSubmit={handleSubmit}  // Line 81
            className="w-full bg-white shadow-2xl p-10 rounded-2xl"
          >
            <div className="flex flex-col">  {/* Line 84 */}
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

          <div className="flex flex-col items-center text-center">  {/* Line 103 */}
            <Lottie animationData={contactAnim} loop autoplay className="w-60 h-60 mx-auto mb-6" />  {/* Line 104 */}
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

      <Footer />  {/* Line 145 */}
    </>
  );
};

export default Contact;  // Line 149
