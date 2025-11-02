import React from "react";
import { motion } from "framer-motion";
import DiningImg from "../../assets/night1.webp";
import StayImg from "../../assets/hero.webp";
import WifiIcon from "../../assets/icons/internet.png";
import BellIcon from "../../assets/icons/hotel-cart.png";
import SuitcaseIcon from "../../assets/icons/laundry.png";
import EV from "../../assets/icons/EV.png";
import PhoneIcon from "../../assets/icons/telephone.png";

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        duration: 0.9,
        delay,
      },
    },
  };
  return variants;
};

const Service = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-8">
        {/*  Header  */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center"
        >
          {/* Left Heading */}
          <div>
            <h5 className="text-[#caa577] font-[sans-serif] tracking-[0.25em] uppercase text-sm py-4 font-semibold">
              Our Services
            </h5>
            <h2 className="text-2xl md:text-5xl font-serif py-4 font-light tracking-wide text-[#111] leading-[1.6]">
              YOUR JOURNEY BEGINS
              <br />
              <span className="block mt-4 md:mt-7">AT ROYALS HOME</span>
            </h2>
          </div>

          {/* Right Paragraph */}
          <div className="lg:justify-end flex">
            <p className="text-[#444] mt-0 lg:mt-4 lg:w-[400px] text-[15px] leading-relaxed font-sans text-justify">
              Step into a world of refined hospitality where every journey begins
              with comfort, elegance, and unforgettable moments. Experience
              serenity, indulgence, and signature service at ROYALS HOME Resorts.
            </p>
          </div>
        </motion.div>

        {/*  Content Section  */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
          {/*  Left Section  */}
          <div className="flex flex-col">
            {/* Top Image */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden shadow-md"
            >
              <img
                src={DiningImg}
                alt="Dining Experience"
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* Bottom Icons */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-3 gap-8 mt-10"
            >
              {[
                { icon: WifiIcon, label: "Assistance" },
                { icon: SuitcaseIcon, label: "Hospitality" },
                { icon: BellIcon, label: "Experiences" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", 0.1 * idx)}
                  className="border border-[#e5e5e5] bg-white p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-16 h-16 mb-3 object-contain"
                  />
                  <h4 className="font-semibold font-mono text-sm tracking-wider uppercase text-[#333]">
                    {item.label}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/*  Right Section  */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-between px-4 space-y-8"
          >
            {/* Top Icon Cards */}
            <motion.div
              variants={fadeIn("down", 0.5)}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { icon: EV, label: "EV Charging" },
                { icon: PhoneIcon, label: "24/7 AVAILABLE" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", 0.2 * idx)}
                  className="border border-[#e5e5e5] bg-white p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-16 h-16 mb-3 object-contain"
                  />
                  <h4 className="font-semibold font-mono text-sm tracking-wider uppercase text-[#333]">
                    {item.label}
                  </h4>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden shadow-md"
            >
              <img
                src={StayImg}
                alt="Stay Inspired"
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
                <h6 className="text-[#caa577] uppercase tracking-wider text-xs mb-6">
                  Hotel & Resort
                </h6>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
                  STAY INSPIRED, STAY ROYAL
                </h3>
                <p className="text-base max-w-xs font-sans leading-relaxed mb-6 opacity-90">
                  Every stay at ROYALS HOME is an experience crafted with elegance
                  and care, where comfort meets sophistication.
                </p>
                <div className="flex gap-10 text-5xl font-medium font-[sans-serif]">
                  <span className="border-r-2 border-white pr-8">30+</span>
                  <span>80%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
