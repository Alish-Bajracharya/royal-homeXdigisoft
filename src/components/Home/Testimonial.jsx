import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/happy.webp";
import User1 from "../../assets/icons/hotel-cart.png";
import User2 from "../../assets/icons/hotel-cart.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const Testimonial = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-[1300px] mx-auto px-8"
      >
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 mb-16 gap-10 items-center"
        >
          {/* Left Heading */}
          <div>
            <h5 className="text-[#caa577] font-[sans-serif] tracking-[0.25em] uppercase text-sm font-semibold">
              Testimonials
            </h5>
            <h2 className="text-3xl md:text-5xl py-4 font-light font-serif tracking-wider text-[#111] leading-[1.6]">
              Your Perfect Getaway;
              <br />
              <span className="block mt-4">According to Our Guests</span>
            </h2>
          </div>

          {/* Right Paragraph */}
          <div className="lg:justify-end flex">
            <p className="mt-0 lg:mt-0 lg:w-[400px] leading-relaxed text-sm font-lexend font-medium text-[#616161] text-justify">
              Step into a world of refined hospitality where every journey begins
              with comfort, elegance, and unforgettable moments. Experience
              serenity, indulgence, and signature service at ROYALS HOME
              Resorts.
            </p>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Image + Stats */}
          <motion.div variants={fadeUp}>
            <motion.img
              src={Img1}
              alt="Interior"
              className="w-full h-[350px] object-cover mb-10 rounded-md shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="grid grid-cols-2 gap-6">
              {[{ label: "Global Guests Welcomed", value: "300+" },
                { label: "Eco-Friendly Initiatives", value: "80%" }].map(
                (item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white shadow-sm border border-[#e5e5e5] rounded-sm text-center py-10 hover:shadow-lg hover:scale-105 transition-all duration-500"
                  >
                    <p className="text-[#666] text-sm mb-2 whitespace-pre-line">
                      {item.label}
                    </p>
                    <h3 className="text-[#a78b61] text-4xl font-light">
                      {item.value}
                    </h3>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Right Testimonials */}
          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            {[{
              stars: 5,
              text: `From the moment we arrived, everything was flawless. The staff went above and beyond to make our stay memorable. The room was elegant, the dining exceptional, and the spa experience truly rejuvenating.`,
              name: "NALIN & ARYAN",
              location: "JHAPA",
              user: User1,
            },
            {
              stars: 5,
              text: `What impressed me most about ROYALS HOME was the attention to detail. The staff remembered our names, our preferences, and even surprised us with a special cake for our anniversary.`,
              name: "ALISH & NIMCHUKI",
              location: "KATHMANDU",
              user: User2,
            }].map((review, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="border border-[#e5e5e5] bg-white p-8 rounded-md shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-700 relative overflow-hidden"
              >
                {/* Decorative Accent */}
                <motion.span
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#caa577] to-transparent opacity-80"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                <div className="flex items-center gap-1 text-[#d4b26a] mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-[#555] text-[15px] leading-relaxed mb-6 relative z-10">
                  {review.text}
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <img
                    src={review.user}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#111] text-sm">
                      {review.name}
                    </p>
                    <p className="text-[#777] text-xs mt-1">{review.location}</p>
                  </div>
                </div>
                <span className="text-[#d4b26a] text-5xl float-right -mt-8 opacity-40 font-serif">
                  &#10077;
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
