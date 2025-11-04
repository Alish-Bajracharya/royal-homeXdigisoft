import React from "react";
import AboutUs from "../components/Home/AboutUs";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Testimonial from "../components/Home/Testimonial";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.webp";
import FeaturesSection from "../components/About/FeaturesSection";
import slogo from "../assets/slogo.png";

const RoyalHomes = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <img
          src={hero}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold tracking-wide">
            ROYALS HOME
          </h1>
          <p className="text-lg mt-3">
            ~ RHR is committed to creating a welcoming and memorable experience for every guest. 
          </p>
        </div>
      </section>
      <div className="absolute z-10 text-left left-16 -mt-64">
                    <img src={slogo} alt="abcd" />
                  </div>

      {/* Page Sections */}
      <AboutUs />
      <FeaturesSection />
      <WhyChooseUs />
      <Contact />
      <Testimonial />
      <Footer />
    </>
  );
};

export default RoyalHomes;
