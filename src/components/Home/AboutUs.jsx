import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/homes.webp";
import icon1 from "../../assets/icons/hotel-cart.png";
import icon2 from "../../assets/icons/time.png";
import icon3 from "../../assets/icons/EV.png";

// Reusable animation variants
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      duration: 1,
      delay,
    },
  },
});

export default function AboutUs() {
  return (
    <section className="bg-[#f7f7f6] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        {/* MAIN ROW */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-12">
          {/* LEFT SIDE SMALL TITLE */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-[8%] w-full"
          >
            <p className="text-[#c9b27c] uppercase tracking-wide text-sm font-[sans-serif] font-semibold md:-mt-[155px] -mb-4 md:-mb-0">
              About Us
            </p>
          </motion.div>

          {/* CENTER TEXT CONTENT */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-[47%] w-full text-left"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] tracking-wider leading-snug md:leading-relaxed font-serif text-[#111111] mb-4 md:mb-6">
              COMFORT MEETS <br className="hidden md:block" /> ELEGANCE
            </h2>

            <p className="text-[#555555] font-lexend font-medium text-sm sm:text-base leading-relaxed md:leading-loose tracking-wide mb-6 md:pr-14">
              Step into a world of refined hospitality where every journey begins
              with comfort, elegance, and unforgettable moments.
              <br className="hidden sm:block" />
              At ROYALS HOME Resort.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#c9b27c] hover:bg-[#b39d6c] text-white font-[sans-serif] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 transition duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-[40%] w-full"
          >
            <img
              src={image}
              alt="About Us"
              className="w-full h-56 sm:h-72 md:h-[350px] object-cover mt-2 rounded-lg md:rounded-none shadow-md"
            />
          </motion.div>
        </div>

        {/* ICON BOXES BELOW */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-[sans-serif] gap-6 mt-14 md:mt-20"
        >
          {/* Fine Dining */}
          <div className="border border-[#e5e5e5] p-6 sm:p-8 flex items-start gap-4 sm:gap-5 bg-white hover:shadow-md transition duration-300">
            <img
              src={icon1}
              alt="Fine Dining Icon"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
            />
            <div className="px-3">
              <h3 className="text-sm font-lexend font-semibold text-[#414141] mb-1 sm:mb-2">
                Fine Dining & Cuisine
              </h3>
              <p className="leading-relaxed text-base font-lexend font-medium text-[#616161]">
                Step into a world of refined hospitality where every journey
                begins with comfort.
              </p>
            </div>
          </div>

          {/* Event Planning */}
          <div className="border border-[#e5e5e5] p-6 sm:p-8 flex items-start gap-4 sm:gap-5 bg-white hover:shadow-md transition duration-300">
            <img
              src={icon2}
              alt="Event Planning Icon"
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-sm font-lexend font-semibold text-[#414141] mb-1 sm:mb-2">
                Event Planning
              </h3>
              <p className="leading-relaxed text-base font-lexend font-medium text-[#616161]">
                Weddings, anniversaries, or business gatherings tailored with
                perfection.
              </p>
            </div>
          </div>

          {/* EV Charging */}
          <div className="border border-[#e5e5e5] p-6 sm:p-8 flex items-start gap-4 sm:gap-5 bg-white hover:shadow-md transition duration-300">
            <img
              src={icon3}
              alt="EV Charging Icon"
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-sm font-lexend font-semibold text-[#414141] mb-1 sm:mb-2">
                EV Charging Point
              </h3>
              <p className="leading-relaxed text-base font-lexend font-medium text-[#616161]">
                Dual (7.4 kW or 11kW) Slow and Fast Chargers for quick top-ups
                provide a complete solution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
