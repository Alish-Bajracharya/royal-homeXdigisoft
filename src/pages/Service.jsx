import React from "react";
import { motion } from "framer-motion";

import Service from "../components/Home/Service";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.webp";
import HotelFacilities from "../components/HotelFacilities";
import slogo from "../assets/slogo.png";
import pool from "../assets/pool/5.jpg"

const room = {
  title: "Our Services",
  reviews: 56,
  rating: 4.8,
  location: "Tanahun",
  heroImage: hero,

};

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
const Services = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative overflow-hidden"
        >
          <div
            className="relative h-[420px] md:h-[520px] flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(11,45,30,0.58), rgba(255,255,255,0.04)), url(${room.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0" style={{ mixBlendMode: "overlay" }} />

            <div className="relative z-10 text-center px-6">
              <h1
                className="text-4xl md:text-6xl font-serif font-semibold tracking-tight text-white"
                style={{
                  textShadow:
                    "0 6px 20px rgba(11,45,30,0.35), 0 1px 0 rgba(255,255,255,0.02)",
                }}
              >
                {room.title}
              </h1>
              <p className="mt-3 text-sm md:text-lg text-[#f4e8cf]/95">
                Luxurious Life-Time Experience — {room.location}
              </p>

              <div
                className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
              </div>
            </div>
   
            {/* soft curved bottom */}
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,40 C200,120 400,0 720,40 C1040,80 1240,20 1440,60 L1440,100 L0,100 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </motion.section>
        <div className="absolute z-10 text-left left-16 -mt-72">
                      <img src={slogo} alt="abcd" />
                    </div>

      {/* Page Sections */}
      <Service />
      <HotelFacilities />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
