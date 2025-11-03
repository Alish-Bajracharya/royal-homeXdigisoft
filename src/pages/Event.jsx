import React from "react";
import {
  CheckCircle,
  Music,
  Cake,
  Heart,
  PartyPopper,
  ChefHat,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";
import hero from "../assets/hero.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const eventCategories = [
  {
    icon: Cake,
    title: "Birthday Celebrations",
    desc: "Celebrate your special day with customized themes, music, and decoration.",
  },
  {
    icon: Heart,
    title: "Weddings & Pre-Weddings",
    desc: "Make your dream wedding come true with elegant decor and scenic backdrops.",
  },
  {
    icon: PartyPopper,
    title: "Pool Parties",
    desc: "Enjoy your party with poolside fun, food, and live DJ music.",
  },
  {
    icon: ChefHat,
    title: "Catering Service",
    desc: "Delicious multi-cuisine options prepared by our expert chefs.",
  },
  {
    icon: Music,
    title: "Music & DJ",
    desc: "Dance all night with our professional DJ setup and sound systems.",
  },
  {
    icon: Sparkles,
    title: "Event Decoration & Setup",
    desc: "From floral arrangements to lighting — we handle it all.",
  },
];

const room = {
  title: "Our Events",
  reviews: 56,
  rating: 4.8,
  location: "Tanahun",
  heroImage: hero,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 overflow-hidden">
        {/* 🌅 Hero Section */}
        <motion.section initial="hidden" animate="show" variants={fadeUp} className="relative">
          <div
            className="relative h-[480px] md:h-[580px] flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10,35,25,0.75), rgba(10,35,25,0.15)), url(${room.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 backdrop-blur-[1px]" />

            <div className="relative z-10 text-center px-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-serif font-semibold tracking-tight text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.35)]"
              >
                {room.title}
              </motion.h1>
              <p className="mt-3 text-base md:text-lg text-amber-100/90">
                Luxurious Life-Time Experience — {room.location}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-10 flex justify-center"
              >
                <ArrowDown className="w-6 h-6 text-white animate-bounce opacity-70" />
              </motion.div>
            </div>

            {/* Curved Bottom */}
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,40 C200,120 400,0 720,40 C1040,80 1240,20 1440,60 L1440,100 L0,100 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </motion.section>

        {/* 🎉 Section 1: Event Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Celebrate Every Occasion with Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {eventCategories.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white border border-amber-100 shadow-md p-8  
                             hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
                             before:absolute before:inset-0 before:bg-gradient-to-tr 
                             before:from-amber-100/30 before:to-transparent before:opacity-0 hover:before:opacity-100"
                >
                  <div className="flex justify-center mb-4">
                    <event.icon className="w-12 h-12 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Section 2: Why Choose Our Resort */}
        <section className="relative py-28 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200/50">
        {/* Decorative curved shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Image Side */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
            >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/40 hover:border-amber-300/70 transition-all duration-500">
                <img
                src={hero}
                alt="Event celebration"
                className="w-full h-full object-cover"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-amber-300/20 blur-2xl rounded-3xl -z-10" />
            </motion.div>

            {/* Right Content Side */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
            >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                Why Host Your Event <br className="hidden sm:block" /> at Our Resort?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
                Transform your special occasions into unforgettable memories. Whether
                it’s a grand wedding, birthday bash, or a peaceful corporate retreat,
                our resort offers a perfect blend of luxury, comfort, and scenic beauty.
            </p>

            <ul className="space-y-4 mt-6">
                {[
                "Scenic outdoor & indoor event spaces",
                "Custom event decoration & planning",
                "Professional catering & service staff",
                "Luxury rooms for guests & VIPs",
                "Music, DJ & lighting setup",
                "EV Charging Station & ample parking",
                ].map((item, i) => (
                <li
                    key={i}
                    className="flex items-start gap-3 bg-white/40 rounded-xl p-3 backdrop-blur-sm hover:bg-amber-50/70 transition"
                >
                    <CheckCircle className="text-amber-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 text-sm md:text-base font-medium">
                    {item}
                    </span>
                </li>
                ))}
            </ul>

            <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 bg-amber-500 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-amber-400 transition"
            >
                Learn More
            </motion.button>
            </motion.div>
        </div>
        </section>


        {/* 📸 Section 3: Gallery + CTA */}
        <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Memories That Last Forever
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {[
                "https://images.unsplash.com/photo-1593032465171-8c2b8de4b88f",
                "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
                "https://images.unsplash.com/photo-1529634892861-26d1bcd0b53b",
                "https://images.unsplash.com/photo-1524492449095-076e8b3d6c41",
                "https://images.unsplash.com/photo-1524593099470-2d9c8fa2f5e3",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <img
                    src={img}
                    alt="event"
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end justify-center pb-4">
                    <p className="text-sm text-amber-200">Unforgettable Moments</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg mb-5 text-amber-100">
                Plan your next celebration with us today!
              </h3>
              <button className="bg-amber-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition">
                Book Your Event Now
              </button>
            </motion.div>
          </div>
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Events;
