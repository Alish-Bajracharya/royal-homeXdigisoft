import React from "react";
import AboutUs from "../components/Home/AboutUs";
import Service from "../components/Home/Service";
import Style from "../components/Home/Style";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Footer from "../components/Footer";
import Contact from "../components/Home/Contact";
import Testimonial from "../components/Home/Testimonial";
// import Availability from "../components/Home/Availability";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.webp";

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
            Royal Homes
          </h1>
          <p className="text-lg mt-3">
            ~ RHR is committed to creating a welcoming and memorable experience for every guest. 
          </p>
        </div>
      </section>

      {/* Page Sections */}
      <AboutUs />
      <Style />
      <WhyChooseUs />
      <Testimonial />
      <Contact />
      <Footer />
      {/* <Availability /> */}
    </>
  );
};

export default RoyalHomes;
