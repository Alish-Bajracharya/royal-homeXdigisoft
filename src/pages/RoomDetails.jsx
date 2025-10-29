import React, { useState } from "react";
import {
  MapPin,
  Star,
  Share2,
  Check,
  Phone,
  Mail,
  Map,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero from "../assets/hero.webp";
import gallery1 from "../assets/night1.webp";
import gallery2 from "../assets/hero.webp";
import icon12 from "../assets/rooms/icon-12.png";
import icon13 from "../assets/rooms/icon-13.png";
import icon14 from "../assets/rooms/icon-14.png";
import icon15 from "../assets/rooms/icon-15.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const room = {
  title: "Deluxe Room",
  reviews: 56,
  rating: 4.8,
  location: "Tanahun",
  icons: [
    { icon: icon12, label: "2 Guests" },
    { icon: icon13, label: "1 Children" },
    { icon: icon14, label: "40 m²" },
    { icon: icon15, label: "2 Beds" },
  ],
  heroImage: hero,
  description: `The European boutique design of our Deluxe Rooms with Matterhorn view includes either two single beds or a Queen Size double bed. There is accommodation for one additional bed in the spacious living room with couch. Enjoy the breathtaking views of the Tanahun, fresh mountain air, and the gentle afternoon light while lounging on the south-facing balcony.

Enjoy the splendor of Amsterdam's vistas from this opulent accommodation. Each room is elegantly decorated with a remarkably comfortable bed and a modern environment. It also offers access to Nagomi Health and The Lounge, where you can relax and enjoy refreshments and drinks anytime.`,
  rules: [
    "Check-in time: From 3:00 PM",
    "Check-out time: By 11:00 AM",
    "Early check-in / late check-out: Subject to availability and may incur additional charges.",
    "Maximum occupancy: Please adhere to the specified room capacity.",
    "All rooms are non-smoking.",
    "Daily housekeeping service is provided unless otherwise requested.",
    "Requests for extra bedding, baby cots, or amenities should be made in advance.",
  ],
  amenities: [
    "Free Wi-Fi",
    "Smart TV",
    "Swimming Pool",
    "Fitness Center",
    "King Size Bed",
    "24/7 Support",
    "Shower",
    "Refrigerator",
    "Airport Transport",
  ],
  gallery: [gallery1, gallery2, gallery1, gallery2],
};

export default function RoomDetails() {
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    rooms: "1",
    adults: "2",
    children: "0",
    extras: { clean: false, parking: false, gym: false, dinner: false },
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name.startsWith("extra_")) {
      const key = name.replace("extra_", "");
      setForm((prev) => ({
        ...prev,
        extras: { ...prev.extras, [key]: checked },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();
    if (!form.checkIn || !form.checkOut) {
      alert("Please choose both check-in and check-out dates.");
      return;
    }
    if (new Date(form.checkOut) <= new Date(form.checkIn)) {
      alert("Check-out must be after check-in.");
      return;
    }
    alert(`Available ${room.title} from ${form.checkIn} to ${form.checkOut}.`);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
      >
        <img src={room.heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold tracking-wide">{room.title}</h1>
          <p className="text-lg mt-3">Luxurious Accommodation Experience</p>
        </div>
      </motion.section>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Header Section */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
        >
          <div className="flex-1">
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-6 text-center text-gray-700 justify-items-center">
              {room.icons.map((it, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-lg p-2 px-5 hover:shadow-md transition"
                >
                  <img src={it.icon} alt={it.label} className="w-10 h-7 object-contain" />
                  <span className="text-sm font-medium">{it.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 transition"
          >
            <Share2 size={14} /> Share
          </motion.button>
        </motion.header>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-sm overflow-hidden shadow-md mt-8"
        >
          <img
            src={room.heroImage}
            alt="Room"
            className="w-full h-[450px] md:h-[650px] object-cover"
          />
        </motion.div>

        {/* Description, Rules, Amenities, Gallery, Booking */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Room Description</h3>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {room.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Room Rules</h3>
              <ul className="space-y-2 text-gray-700">
                {room.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-700">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Services & Amenities</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                {room.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={18} className="text-emerald-700" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Room Gallery</h3>
              <Swiper
                spaceBetween={20}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {room.gallery.map((g, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="overflow-hidden "
                    >
                      <img
                        src={g}
                        alt={`gallery-${idx}`}
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.aside
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-10"
        >
          {/* Booking Card */}
          <div className="bg-gradient-to-br from-white via-[#fffaf5] to-[#fef6ee] border border-amber-100 p-6 shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
            <h3 className="text-2xl text-center font-serif font-semibold mb-4 text-amber-800 border-b pb-2 border-amber-200">
              Check Your Room
            </h3>

            <form onSubmit={validateAndSubmit} className="space-y-5">
              {["checkIn", "checkOut"].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">
                    {field === "checkIn" ? "Check-In Date" : "Check-Out Date"}
                  </label>
                  <input
                    type="date"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all hover:border-amber-300"
                  />
                </div>
              ))}

              {[ 
                { name: "rooms", label: "Rooms", options: ["1", "2", "3"] },
                { name: "adults", label: "Adults", options: ["1", "2", "3", "4"] },
                { name: "children", label: "Children", options: ["0", "1", "2", "3"] },
              ].map((item) => (
                <div key={item.name}>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">
                    {item.label}
                  </label>
                  <select
                    name={item.name}
                    value={form[item.name]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 hover:border-amber-300 transition-all"
                  >
                    {item.options.map((o) => (
                      <option key={o} value={o}>
                        {o} {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <div className="pt-3 border-t border-amber-100">
                <h4 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
                  <Check size={16} className="text-amber-600" /> Extra Services
                </h4>

                {[
                  { key: "clean", label: "Room Clean", price: "Rs. 1500 /Night" },
                  { key: "parking", label: "Parking", price: "Free" },
                  { key: "breakfast", label: "Breakfast", price: "Rs. 250 /Total" },
                  { key: "dinner", label: "Dinner", price: "Rs. 500 /Day" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between py-1.5 text-sm text-gray-700"
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={`extra_${item.key}`}
                        checked={form.extras[item.key]}
                        onChange={handleChange}
                        className="accent-amber-500"
                      />
                      <span>{item.label}</span>
                    </label>
                    <span className="text-amber-700 font-medium">{item.price}</span>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white rounded-full py-3.5 mt-6 font-medium tracking-wide hover:bg-amber-700 shadow-lg shadow-amber-200/60 transition-all duration-300"
              >
                Check Availability →
              </button>
            </form>
          </div>

          {/* Reservation Support */}
          <div className="px-10 py-5 bg-gradient-to-br from-white via-[#fffaf5] to-[#fef6ee] border border-amber-100 p-6 shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
            <h4 className="font-serif text-xl font-semibold text-center mb-4 text-amber-800 border-b border-amber-200 pb-2">
              For Reservation
            </h4>

            <div className="text-gray-700 text-sm mb-4 space-y-4">
              <div className="flex items-center gap-3 hover:text-amber-700 transition-all">
                <Phone size={18} className="text-amber-600" /> 
                <span className="font-medium text-base">+977-9806767979</span>
              </div>
              <div className="flex items-center gap-3 hover:text-amber-700 transition-all">
                <Mail size={18} className="text-amber-600" /> 
                <span className="font-medium text-base">info@royalshomeresort.com.np</span>
              </div>
              <div className="flex items-center gap-3 hover:text-amber-700 transition-all">
                <Map size={18} className="text-amber-600" /> 
                <span className="font-medium text-base ">Royal Homes, Anboo Khaireni, Tanahun</span>
              </div>
            </div>
            
            <div className="border-t border-amber-100 pt-4 text-xs text-gray-500">
              <p>Need urgent help? Our support team is available 24/7.</p>
            </div>
          </div>
          </motion.aside>

        </section>
      </main>

      <Footer />
    </>
  );
}
