import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  CalendarHeart,
  Sparkles,
  Music,
  Camera,
  Utensils,
  PartyPopper,
} from "lucide-react";
import hero from "../assets/hero.webp"
import hall from "../assets/hall/2.jpg"
import ev from "../assets/ev/1.jpg"
import ct from "../assets/happy.webp"
import hall2 from "../assets/hall/4.jpg"
import pool from "../assets/pool/5.jpg"
import rt from "../assets/restaurant/2.jpg"
import hall3 from "../assets/hall/3.jpg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const ResortEvents = () => {
  return (
    <>
    <Navbar />
    <div className="overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100/40">
      {/* 🌟 Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Event celebration"
            className="w-full h-full object-cover brightness-[0.45]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            Celebrate Life’s Best Moments
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
            From dreamy weddings to thrilling pool parties — we bring your
            celebrations to life with elegance and precision.
          </p>
          <button className="px-10 py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-full transition-all shadow-md">
            Plan Your Event
          </button>
        </motion.div>
      </section>

      {/* ✨ Section 2: The Experience */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={ct}
              alt="Event celebration"
              className=" shadow-lg object-cover h-72 w-full col-span-2"
            />
            <img
              src={ev}
              alt="Wedding event"
              className=" shadow-md object-cover h-60"
            />
            <img
              src={hall}
              alt="Dinner"
              className="shadow-md object-cover h-60"
            />
          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
              An Experience Beyond Celebration
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every event at our resort is more than a gathering — it’s an
              emotion crafted with detail. From stunning decorations to curated
              music, we design moments that speak luxury, love, and laughter.
            </p>

            <ul className="space-y-3">
              {[
                "Tailored event themes and styling",
                "Candlelight setups & floral backdrops",
                "Luxury catering and curated menus",
                "Poolside & open-lawn event spaces",
"Luxury décor, floral & lighting design",
"In-house catering & customized menus",
"Music, DJ, and entertainment setup",
"Professional photography & media",
"EV charging & guest accommodation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-amber-500 w-5 h-5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 🎊 Event Categories */}
      <section className="py-24 bg-gradient-to-t from-amber-100/50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          >
            Events We Organize
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <CalendarHeart className="w-10 h-10 text-amber-500" />,
                title: "Weddings & Pre-Weddings",
                desc: "Romantic themes, dreamy décor, and flawless coordination for your big day.",
              },
              {
                icon: <PartyPopper className="w-10 h-10 text-amber-500" />,
                title: "Birthday Celebrations",
                desc: "Make every birthday unforgettable with themed parties, food & music.",
              },
              {
                icon: <Music className="w-10 h-10 text-amber-500" />,
                title: "Corporate & Private Events",
                desc: "Seamless hosting for meetings, launches, or private parties.",
              },
              {
                icon: <Utensils className="w-10 h-10 text-amber-500" />,
                title: "Catering & Dining",
                desc: "Multi-cuisine catering services with professional chefs and service staff.",
              },
              {
                icon: <Camera className="w-10 h-10 text-amber-500" />,
                title: "Photography & Videography",
                desc: "Professional coverage, highlight reels, and cinematic storytelling.",
              },
              {
                icon: <Sparkles className="w-10 h-10 text-amber-500" />,
                title: "Pool Parties & After-Events",
                desc: "Celebrate with music, drinks, and fun in our premium poolside setup.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white  p-8 shadow-lg border border-amber-100 hover:border-amber-300 hover:shadow-amber-200/50 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌅 Gallery */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            Glimpse of Our Events
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              hall2,
              ct,
              hall,
              pool,
              hall3,
              rt,
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden  group"
              >
                <img
                  src={src}
                  alt="Event"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💫 Redesigned Section 5: Booking CTA */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src={ct}
          alt="Event Night"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            Ready to Celebrate?
          </h2>
          <p className="max-w-xl mx-auto text-lg mb-8 text-gray-200">
            Our event team will turn your dream celebration into an unforgettable
            experience — crafted with passion and precision.
          </p>
          <button className="bg-amber-500 text-gray-900 px-10 py-3 rounded-full font-semibold hover:bg-amber-400 transition">
            Book Your Event Now
          </button>
        </motion.div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ResortEvents;