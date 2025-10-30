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
  description: `The European boutique design of our Deluxe Rooms with Tanahun view includes either two single beds or a Queen Size double bed. There is accommodation for one additional bed in the spacious living room with couch. Enjoy the breathtaking views of the Tanahun, fresh mountain air, and the gentle afternoon light while lounging on the south-facing balcony.

Enjoy the splendor of Amsterdam's vistas from this opulent accommodation. Each room is elegantly decorated with a remarkably comfortable bed and a modern environment. It also offers access to Nagomi Health and The Lounge, where you can relax and enjoy refreshments and drinks anytime.`,
  rules: [
    "Check-in time: From 3:00 PM",
    "Check-out time: By 11:00 AM",
    "Early check-in / late check-out: Subject to availability.",
    "All rooms are non-smoking.",
    "Daily housekeeping service is provided unless otherwise requested.",
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
    extras: { clean: false, parking: false, breakfast: false, dinner: false },
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (name.startsWith("extra_")) {
      const key = name.replace("extra_", "");
      setForm((prev) => ({
        ...prev,
        extras: { ...prev.extras, [key]: checked },
      }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#f8f7f4] min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-[460px] md:h-[520px] flex items-center justify-center overflow-hidden">
          <img
            src={room.heroImage}
            alt="room hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white font-semibold tracking-tight">
              {room.title}
            </h1>
            <p className="mt-3 text-base md:text-lg text-[#f2f2f2]/90">
              Elegant comfort in {room.location}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-md text-white/90 text-sm">
              <Star size={14} />
              <span>{room.rating}</span>
              <span className="text-gray-300">({room.reviews} reviews)</span>
            </div>
          </motion.div>
        </section>

        {/* MAIN CONTENT */}
        <main className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SECTION */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-2 space-y-8"
          >
            {/* ICONS ROW */}
            <div className="flex flex-wrap items-center gap-4">
              {room.icons.map((it, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-md"
                >
                  <img
                    src={it.icon}
                    alt={it.label}
                    className="w-6 h-6 object-contain opacity-90"
                  />
                  <span className="text-sm font-medium text-[#1B4332]">
                    {it.label}
                  </span>
                </div>
              ))}

              <button className="ml-auto flex items-center gap-2 text-sm text-gray-700 border border-gray-200 px-3 py-2 rounded-md hover:bg-gray-50 transition">
                <Share2 size={14} />
                Share
              </button>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-white/90 p-6 shadow-sm border border-gray-100 rounded-md">
              <h3 className="text-2xl font-serif text-[#1B4332] mb-3">
                About this Room
              </h3>
              <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">
                {room.description}
              </p>
            </div>

            {/* AMENITIES */}
            <div className="bg-white/90 p-6 shadow-sm border border-gray-100 rounded-md">
              <h4 className="text-lg font-semibold text-[#1B4332] mb-4">
                Amenities & Services
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {room.amenities.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Check size={14} className="text-[#1B4332]" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* RULES */}
            <div className="bg-white/90 p-6 shadow-sm border border-gray-100 rounded-md">
              <h4 className="text-lg font-semibold text-[#1B4332] mb-3">
                Room Rules
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {room.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#1B4332]">•</span> {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* GALLERY */}
            <div className="bg-white/90 p-6 shadow-sm border border-gray-100 rounded-md">
              <h4 className="text-lg font-semibold text-[#1B4332] mb-4">
                Gallery
              </h4>
              <Swiper
                spaceBetween={14}
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
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <img
                        src={g}
                        alt={`gallery-${idx}`}
                        className="w-full h-56 object-cover rounded-md"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            {/* BOOKING FORM */}
            <div className="bg-white/90 border border-gray-100 p-6 shadow-sm rounded-md">
              <h3 className="text-xl font-serif font-semibold text-[#1B4332] text-center mb-4">
                Check Availability
              </h3>

              <form onSubmit={validateAndSubmit} className="space-y-3">
                {["checkIn", "checkOut"].map((field) => (
                  <div key={field}>
                    <label className="block text-xs text-gray-600 mb-1 font-medium">
                      {field === "checkIn" ? "Check-In" : "Check-Out"}
                    </label>
                    <input
                      type="date"
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-[#1B4332] outline-none"
                    />
                  </div>
                ))}

                {[{ name: "rooms", label: "Rooms", options: ["1", "2", "3"] },
                  { name: "adults", label: "Adults", options: ["1", "2", "3", "4"] },
                  { name: "children", label: "Children", options: ["0", "1", "2", "3"] }
                ].map((item) => (
                  <div key={item.name}>
                    <label className="block text-xs text-gray-600 mb-1 font-medium">
                      {item.label}
                    </label>
                    <select
                      name={item.name}
                      value={form[item.name]}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-[#1B4332] outline-none"
                    >
                      {item.options.map((o) => (
                        <option key={o} value={o}>
                          {o} {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}

                <div className="pt-3">
                  <h4 className="text-sm font-semibold text-[#1B4332] mb-2">
                    Extra Services
                  </h4>
                  {[
                    { key: "clean", label: "Room Clean", price: "Rs. 1500 /Night" },
                    { key: "parking", label: "Parking", price: "Free" },
                    { key: "breakfast", label: "Breakfast", price: "Rs. 250 /Total" },
                    { key: "dinner", label: "Dinner", price: "Rs. 500 /Day" },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between py-1 text-sm text-gray-700"
                    >
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name={`extra_${item.key}`}
                          checked={!!form.extras[item.key]}
                          onChange={handleChange}
                          className="accent-[#1B4332]"
                        />
                        {item.label}
                      </label>
                      <span className="text-[#1B4332] font-medium">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B4332] text-white py-3 mt-2 text-sm font-medium rounded-md hover:bg-[#163827] transition"
                >
                  Check Availability →
                </button>
              </form>
            </div>

            {/* CONTACT CARD */}
            <div className="bg-white/90 border border-gray-100 p-6 shadow-sm rounded-md">
              <h4 className="font-serif text-lg font-semibold text-[#1B4332] text-center mb-3">
                Contact & Help
              </h4>

              <div className="text-gray-700 text-sm space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#1B4332]" />
                  <span>+977-9806767979</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#1B4332]" />
                  <span>info@royalshomeresort.com.np</span>
                </div>
                <div className="flex items-center gap-3">
                  <Map size={16} className="text-[#1B4332]" />
                  <span>Anboo Khaireni, Tanahun</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </main>

        <Footer />
      </div>
    </>
  );
}
