import React from "react";
import { motion } from "framer-motion";
import RoomImg from "../assets/night.webp";

const Contact = () => {
  return (
    <section className="relative w-full min-h-[700px] lg:h-[800px] overflow-hidden">
      {/*  Container  */}
      <div className="flex flex-col lg:flex-row w-full h-full relative">

        {/*  Left Map Section  */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-[500px] lg:h-full"
        >
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7051.443786747377!2d84.5275993!3d27.9105065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399519bdbc64fa73%3A0x31979c4406333f56!2sRoyals%20Home%20Resort%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1760607691332!5m2!1sen!2snp"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/*  Right Image Section  */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-[500px] lg:h-full relative bg-cover bg-center"
          style={{ backgroundImage: `url(${RoomImg})` }}
        >
          {/* Overlay with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent"></div>
        </motion.div>

        {/*  Floating Contact Card  */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute lg:left-[40%] lg:top-40 left-6 top-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-10 w-[90%] sm:w-[410px] text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111] mb-2"
          >
            Get in Touch
          </motion.h2>
          <p className="text-[#7a8262] uppercase tracking-[0.25em] text-xs mb-8">
            Royals Home Resort Pvt. Ltd.
          </p>

          {/*  Contact Details  */}
          <div className="space-y-6 text-[#333]">
            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#bda87f] text-sm mb-1 uppercase tracking-wide">
                Call Us
              </span>
              <p className="text-lg sm:text-xl font-semibold">
                +977-9806767979
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#bda87f] text-sm mb-1 uppercase tracking-wide">
                Email
              </span>
              <p className="text-lg sm:text-xl font-semibold">
                info@royalshomeresort.com.np
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#bda87f] text-sm mb-1 uppercase tracking-wide">
                Location
              </span>
              <p className="text-lg sm:text-xl font-semibold text-center">
                Anboo Khaireni, Tanahun, Nepal
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "70%" }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 mb-6 border-t border-[#d4c7a1]/40 mx-auto"
          ></motion.div>

          <p className="text-sm text-[#666] italic">
            “Luxury is in the details. Experience tranquility with us.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
