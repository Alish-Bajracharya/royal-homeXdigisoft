import React, { useState } from "react";
import { motion } from "framer-motion";
import airCondition from "../assets/icons/aircondition.png";
import internet from "../assets/icons/router.png";
import smartLock from "../assets/icons/smart-lock.png";
import conference from "../assets/icons/conference-hall.png";
import breakfast from "../assets/icons/lunch.png";
import swimmingPool from "../assets/icons/swimming-pool.png";
import dummy from "../assets/night.webp";

import pool from "../assets/pool/5.jpg"
import hall from "../assets/hall/3.jpg"
import restaurant from "../assets/restaurant/2.jpg"
import room from "../assets/rooms/5.jpg"


const topFacilities = [
  { icon: airCondition, title: "Air Condition" },
  { icon: internet, title: "High-Speed Internet" },
  { icon: smartLock, title: "Smart Lock" },
  { icon: conference, title: "Conference Hall" },
  { icon: breakfast, title: "Breakfast" },
  { icon: swimmingPool, title: "Swimming Pool" },
];

const facilities = [
  {
    id: "01",
    category: "SWIMMING",
    title: " Swimming Pool",
    description:
      "Immerse yourself in tranquility with our temperature-controlled indoor swimming pool designed for leisure and fitness, offering calm lighting and serene vibes. Enjoy refreshing laps or simply unwind by the poolside with soothing music and refreshments from our in-house bar. The pool area also includes a jacuzzi and a small kids’ section for family enjoyment.",
    image: pool,
    reverse: false,
  },
  {
    id: "02",
    category: "BUSINESS",
    title: "Conference Hall",
    description:
      "Host your meetings, workshops, and conferences in a sophisticated venue equipped with the latest technology and refined interiors. Our conference hall offers adjustable lighting, high-speed connectivity, and customizable layouts to suit your needs — perfect for professional events or private gatherings.",
    image: hall,
    reverse: true,
  },
  {
    id: "03",
    category: "DINING",
    title: "Luxury Restaurant",
    description:
      "Experience fine dining in our elegantly curated restaurant, offering world-class cuisine crafted by top chefs. Indulge in international delicacies infused with local flavors, all served in an ambient space that celebrates culinary artistry and comfort. Enjoy a cozy dinner with loved ones or a premium breakfast buffet each morning.",
    image: restaurant,
    reverse: false,
  },
  {
    id: "04",
    category: "ACCOMMODATION",
    title: "Luxury Rooms & Suites",
    description:
      "Relax and unwind in our beautifully designed rooms blending modern comfort with cultural heritage. Each suite offers spacious interiors, elegant furnishings, and scenic views. Wake up to soft lighting, indulge in premium bedding, and experience a peaceful escape from the city’s hustle.",
    image: room,
    reverse: true,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const HotelFacilities = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      {/* === FACILITY ICONS SECTION === */}
      <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-[#caa577]/30 blur-3xl rounded-full top-[-100px] left-[-200px] opacity-30 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-[#e2d1b0]/20 blur-3xl rounded-full bottom-[-200px] right-[-100px] opacity-40 animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-[#caa577] tracking-[0.25em] uppercase text-sm font-semibold flex items-center justify-center gap-3"
          >
            <span className="border-t border-gray-300 w-10"></span>
            Hotel Facilities
            <span className="border-t border-gray-300 w-10"></span>
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-serif py-4 font-light tracking-wide text-[#111] leading-[1.5]"
          >
            Comfort & Luxury <br /> Designed Around You
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-10"
          >
            {topFacilities.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center bg-white/50 backdrop-blur-md border border-gray-100  py-10 px-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-6 opacity-80"
                />
                <div className="w-[1px] h-6 bg-gray-300 mb-3"></div>
                <h3 className="text-sm font-medium text-gray-700">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === MAIN FACILITY SECTIONS === */}
      <section className="max-w-7xl mx-auto py-20 px-6 space-y-32 bg-white relative overflow-hidden">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              facility.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: facility.reverse ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`relative z-10 ${
                facility.reverse
                  ? "md:pl-10 md:border-l-4 border-[#caa577]"
                  : "md:pr-10 md:border-r-4 border-[#caa577]"
              }`}
            >
              <p className="text-[#caa577] font-bold text-sm tracking-widest mb-2 uppercase">
                {facility.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 relative z-10">
                {facility.title}
              </h2>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute text-8xl font-light text-gray-300 top-0 right-10 select-none z-0"
              >
                {facility.id}
              </motion.p>

              <div className="mt-6 backdrop-blur-md bg-white/60 border border-[#caa577]/40 pl-6 py-4 pr-4 rounded-xl shadow-md">
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  {expanded === index
                    ? facility.description
                    : `${facility.description.slice(0, 150)}...`}
                </p>
              </div>

              {/* Read More button below */}
              <motion.button
                onClick={() => toggleReadMore(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mt-6 text-sm font-medium text-[#caa577] underline underline-offset-4 hover:text-[#b88d54] transition-all"
              >
                {expanded === index ? "Read Less" : "Read More"}
              </motion.button>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: facility.reverse ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex ${
                facility.reverse ? "justify-start" : "justify-end"
              }`}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={facility.image}
                alt={facility.title}
                className=" shadow-2xl w-full border border-white/40"
              />
            </motion.div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default HotelFacilities;
