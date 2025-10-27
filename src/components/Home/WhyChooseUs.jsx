import React from "react";
import { motion } from "framer-motion";
import CenterImg from "../../assets/ev.webp";
import Icon1 from "../../assets/icons/icon1.png";
import Icon2 from "../../assets/icons/icon2.png";
import Icon3 from "../../assets/icons/icon3.png";
import Icon4 from "../../assets/icons/icon4.png";

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.9,
        delay,
      },
    },
  };
  return variants;
};

const WhyChooseUs = () => {
  const items = [
    {
      icon: Icon1,
      title: "Luxury Initiatives",
      text: "Eco-conscious stays with green energy, local sourcing, and waste-free programs.",
    },
    {
      icon: Icon2,
      title: "Adventure & Excursions",
      text: "Guided tours, cultural trips, and outdoor adventures unique to each destination.",
    },
    {
      icon: Icon3,
      title: "Room Technology",
      text: "Control lighting, temperature, and services with just a touch for ultimate comfort.",
    },
    {
      icon: Icon4,
      title: "Dining Experiences",
      text: "Enjoy curated menus crafted by world-class chefs, paired with exquisite wines.",
    },
  ];

  return (
    <section className="bg-[#f7f7f6] py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        {/*  Header  */}
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <p className="text-[#caa577] uppercase text-sm tracking-[0.12em] font-semibold font-[sans-serif] mb-8">
            Why Choose Us
          </p>
          <h2 className="text-2xl md:text-5xl font-serif text-[#111] leading-relaxed py-4">
            EXPERIENCE A WORLD OF <br className="hidden md:block" />
            <span className="block mt-8">REFINED RELAXATION</span>
          </h2>
        </motion.div>

        {/*  Grid Section  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/*  Left Column  */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"s
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-10"
          >
            {/* Luxury Initiatives */}
            <div className="bg-white border border-[#e6e6e6] p-8 text-center shadow-sm hover:shadow-md transition">
              <img src={items[0].icon} alt={items[0].title} className="mx-auto w-14 mb-6" />
              <h4 className="text-lg font-semibold text-[#111] mb-3 font-serif">
                {items[0].title}
              </h4>
              <p className="text-sm text-[#555] leading-relaxed font-sans">
                {items[0].text}
              </p>
            </div>

            {/* Room Technology */}
            <div className="bg-[#f7f7f7] border border-[#e6e6e6] p-8 text-center shadow-sm hover:shadow-md transition">
              <img src={items[2].icon} alt={items[2].title} className="mx-auto w-14 mb-6" />
              <h4 className="text-lg font-semibold text-[#111] mb-3 font-serif">
                {items[2].title}
              </h4>
              <p className="text-sm text-[#555] leading-relaxed font-sans">
                {items[2].text}
              </p>
            </div>
          </motion.div>

          {/*  Center Image  */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={CenterImg}
              alt="Hotel Interior"
              className="w-[420px] h-[507px] object-cover shadow-md rounded-sm"
            />
          </motion.div>

          {/*  Right Column  */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-10"
          >
            {/* Adventure & Excursions */}
            <div className="bg-[#f7f7f7] border border-[#e6e6e6] p-8 text-center shadow-sm hover:shadow-md transition">
              <img src={items[1].icon} alt={items[1].title} className="mx-auto w-14 mb-6" />
              <h4 className="text-lg font-semibold text-[#111] mb-3 font-serif">
                {items[1].title}
              </h4>
              <p className="text-sm text-[#555] leading-relaxed font-sans">
                {items[1].text}
              </p>
            </div>

            {/* Dining Experiences */}
            <div className="bg-white border border-[#e6e6e6] p-8 text-center shadow-sm hover:shadow-md transition">
              <img src={items[3].icon} alt={items[3].title} className="mx-auto w-14 mb-6" />
              <h4 className="text-lg font-semibold text-[#111] mb-3 font-serif">
                {items[3].title}
              </h4>
              <p className="text-sm text-[#555] leading-relaxed font-sans">
                {items[3].text}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
