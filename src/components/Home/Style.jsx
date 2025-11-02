import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/hills.webp";
import Img2 from "../../assets/ev.webp";
import ButtonPrimary from "../ButtonPrimary";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
      mass: 0.8,
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const subtleRise = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Style = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/*  Left Side - Image Stack  */}
        <motion.div
          variants={subtleRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="flex gap-6 justify-center"
        >
          {/* Left Image */}
          <div className="w-[280px] h-[500px] overflow-hidden mt-12 shadow-lg">
            <img
              src={Img1}
              alt="Luxury Room"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Image */}
          <div className="w-[280px] h-[500px] overflow-hidden shadow-lg hidden sm:block">
            <img
              src={Img2}
              alt="Interior Design"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/*  Right Side - Text Content  */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-2xl text-center lg:text-left"
        >
          {/* Small Heading */}
          <motion.p
            variants={slideInLeft}
            className="text-base font-bold text-[#b2925a] tracking-[0.1em] mb-2 uppercase font-sans"
          >
            Stay in Style
          </motion.p>

          {/* Main Heading - split into lines for step-by-step entrance */}
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#424242] leading-[1.5] py-6">
            <motion.span
              variants={slideInLeft}
              className="block"
            >
              WHERE EVERY
            </motion.span>

            <motion.span
              variants={slideInLeft}
              className="block mt-7"
            >
              MOMENT FEELS
            </motion.span>

            <motion.span
              variants={slideInLeft}
              className="block mt-7"
            >
              SPECIAL
            </motion.span>
          </h2>

          {/* Paragraph */}
          <motion.p
            variants={slideInLeft}
            className="text-[#555] leading-relaxed text-justify font-sans py-4 text-sm md:text-base"
          >
            At ROYALS HOME Resorts, we believe every detail matters. From warm
            welcomes to world-class amenities, we craft moments that transform
            ordinary stays into extraordinary experiences of comfort and charm.
          </motion.p>

          {/* Button */}
          <motion.div variants={slideInLeft} className="mt-6 inline-block">
            <ButtonPrimary
              label="VIEW HOTEL DETAILS"
              href="/RoyalHomes"
              className="mt-6"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Style;
