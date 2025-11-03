import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import BookingIcon from "../assets/icons/icon-book.png";
import TripAdvisorIcon from "../assets/icons/icon-agoda.png";
import AgodaIcon from "../assets/icons/icon-expedia.png";
import VisaIcon from "../assets/icons/visa.png";
import MasterIcon from "../assets/icons/mc.png";
import KhaltiIcon from "../assets/icons/khalti.png";
import EsewaIcon from "../assets/icons/esewa.png";
import LogoImg from "../assets/logo.png";
import BgFooter from "../assets/crown.png";

const Footer = () => {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${BgFooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0a0a0a]/90 to-black/95"></div>

      {/* Glowing Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#bda87f] via-white to-[#bda87f] opacity-60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20"
      >
        {/* ===== Top: Logo & Description ===== */}
        <div className="flex flex-col items-center text-center space-y-6 mb-14">
          <img src={LogoImg} alt="ROYALS HOME Resort" className="w-40 object-contain" />
          <p className="max-w-2xl text-gray-300 text-sm leading-relaxed">
            Experience timeless elegance and warm Nepali hospitality at{" "}
            <span className="text-[#bda87f] font-semibold">ROYALS HOME Resort</span>. 
            A serene retreat blending nature, luxury, and heartfelt service in the heart of Aanboo Khaireni.
          </p>
          <div className="flex space-x-5 mt-2">
            <a href="#" className="hover:text-blue-600 transition-all duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-red-500 transition-all duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-all duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* ===== Middle: Links Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-[#bda87f] uppercase tracking-wide border-b border-[#bda87f]/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/news" className="hover:text-white">News & Updates</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Facilities */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-[#bda87f] uppercase tracking-wide border-b border-[#bda87f]/30 pb-2">
              We Provide
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/rooms" className="hover:text-white">Deluxe Rooms</a></li>
              <li><a href="/suites" className="hover:text-white">Super Deluxe Suites</a></li>
              <li><a href="/conference" className="hover:text-white">Conference Hall</a></li>
              <li><a href="/restaurant" className="hover:text-white">Restaurant & Lounge</a></li>
              <li><a href="/events" className="hover:text-white">Wedding & Events</a></li>
            </ul>
          </div>

          {/* Find Us On */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-[#bda87f] uppercase tracking-wide border-b border-[#bda87f]/30 pb-2">
              Find Us On
            </h4>
            <div className="flex flex-wrap gap-8">
              <img src={BookingIcon} alt="Booking.com" className="h-10 hover:scale-110 transition-transform" />
              <img src={TripAdvisorIcon} alt="TripAdvisor" className="h-10 hover:scale-110 transition-transform" />
              <img src={AgodaIcon} alt="Agoda" className="h-10 hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-[#bda87f] uppercase tracking-wide border-b border-[#bda87f]/30 pb-2">
              We Accept
            </h4>
            <div className="flex space-x-4 items-center">
              <img src={EsewaIcon} alt="Esewa" className="h-12 object-contain hover:opacity-90 transition" />
              <img src={MasterIcon} alt="MasterCard" className="h-12 object-contain hover:opacity-90 transition" />
              <img src={VisaIcon} alt="Visa" className="h-12 object-contain hover:opacity-90 transition" />
              <img src={KhaltiIcon} alt="Khalti" className="h-12 object-contain hover:opacity-90 transition" />

            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Divider Line ===== */}
      <div className="border-t border-gray-700 opacity-50"></div>

      {/* ===== Bottom Bar ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-[#bda87f]">ROYALS HOME Resort</span>. All rights reserved.
        </div>
        <div className="mt-2 md:mt-0 text-center md:text-right">
          Website by{" "}
          <a
            href="https://archiesoft.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#bda87f] transition-colors"
          >
            ArchieSoft Technology
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
