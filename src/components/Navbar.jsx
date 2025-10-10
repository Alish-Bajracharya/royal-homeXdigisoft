import { useState, useEffect } from "react";
import { FiPhone, FiSearch, FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/logo.jpeg"
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-8 py-4 lg:py-5 transition-all duration-500">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Hotelo Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-serif text-2xl font-medium tracking-wide">
            Royal Homes
          </span>
        </div>

        {/* Nav Links */}
        <nav
          className={`hidden lg:flex items-center text-[14px] font-semibold transition-all ${
            scrolled
              ? "bg-transparent"
              : "bg-white/10 backdrop-blur-lg px-10 py-2 rounded-full"
          }`}
        >
          {["HOME", "PAGES", "ROOMS & SUITES", "SERVICES", "NEWS"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className={`px-4 tracking-wide transition-all duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#b38b59]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Phone */}
          <div className="hidden lg:flex items-center gap-1">
            <FiPhone
              className={`text-base ${
                scrolled ? "text-[#b38b59]" : "text-white"
              }`}
            />
            <span className="text-sm font-semibold tracking-wide">
              +977-9824071911
            </span>
          </div>

          {/* Search */}
          {/* <FiSearch className="cursor-pointer text-lg" /> */}

          {/* Cart */}
          {/* <div className="relative cursor-pointer">
            <FiShoppingCart className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-[#b38b59] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div> */}

          {/* BOOK NOW Button */}
           <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#caa577] hover:bg-black text-white font-[sans-serif] font-semibold px-8 py-4 text-sm tracking-wide rounded-xs shadow-sm relative"
                >
                BOOK NOW
                <span className="absolute inset-0 border border-[#caa577] translate-x-2 translate-y-2 opacity-60"></span>
            </motion.button>
          {/* <button
            className={`font-semibold text-sm px-6 py-2 rounded-md transition-all duration-300 ${
              scrolled
                ? "bg-[#b38b59] text-white shadow-sm hover:bg-[#9a754a]"
                : "bg-[#b38b59] text-white shadow-md hover:bg-[#9a754a]"
            }`}
          >
            BOOK NOW
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
