import React from 'react';
import { Linkedin, Facebook, Instagram, Phone, Mail, Map } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-black px-6 pt-12 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Logo and Intro */}
        <div>
          <a href="/" className="flex items-center mb-4">
            <img src="/logo.png" className="h-16 mr-3" alt="Speed House Logo" />
          </a>
          <p className="text-gray-700 text-sm leading-relaxed">
            Creating meaningful spaces through innovation, sustainability, and architectural excellence.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Map className="mt-[2px] text-blue-800" size={18} />
              <span>Golf Park Building #205, Al Garhoud, Dubai, UAE</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-blue-800" size={18} />
              <a href="tel:+971044503306" className="hover:underline text-blue-700 font-medium">
                +971 04 450 3306
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-blue-800" size={18} />
              <a href="mailto:info@speedhousedesign.com" className="hover:underline text-blue-700 font-medium">
                info@speedhousedesign.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Follow Us</h3>
          <div className="flex md:justify-end gap-4">
            <a
              href="#"
              className="p-2 shadow hover:shadow-lg transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-[#0077B5] hover:text-[#005582]" size={24} />
            </a>
            <a
              href="#"
              className="p-2 shadow hover:shadow-lg transition"
              aria-label="Facebook"
            >
              <Facebook className="text-[#1877F2] hover:text-[#0d5dc0]" size={24} />
            </a>
            <a
              href="#"
              className="p-2  shadow hover:shadow-lg transition"
              aria-label="Instagram"
            >
              <Instagram className="text-[#E1306C] hover:text-[#b02557]" size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 mb-6" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mb-2 md:mb-0 font-medium">
          Designed by{' '}
          <a
            href="https://luminatewebsol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-yellow-500 transition"
          >
            Luminate Web Solutions
          </a>
        </p>
        <p className="text-xs">&copy; 2025 Speed House Engineering Consultant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
