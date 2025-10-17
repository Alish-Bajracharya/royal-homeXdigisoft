import { useState, useEffect } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ACCOMMODATION", href: "/accommodation" },
    { name: "ROYAL HOMES", href: "/royalhomes" },
    { name: "SERVICES", href: "/services" },
    { name: "EVENTS", href: "/events" },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[1850px] mx-auto flex items-center justify-between px-8 py-4 lg:py-5 transition-all duration-500">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} alt="Royal Homes Logo" className="w-16 h-16 object-contain" />
          <span className="font-serif text-2xl font-medium tracking-wide">
            Royal Homes
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex items-center text-[14px] font-bold transition-all ${
            scrolled
              ? "bg-transparent"
              : "bg-white/10 backdrop-blur-lg px-8 py-6 rounded-full"
          }`}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`px-4 tracking-wide transition-all duration-300 ${
                scrolled
                  ? "text-black hover:text-[#b38b59]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          {/* Phone */}
          <div className="hidden lg:flex items-center gap-1">
            <FiPhone
              className={`text-base ${
                scrolled ? "text-[#b38b59]" : "text-white"
              }`}
            />
            <span className="text-lg font-bold tracking-wide">
              +977-9806767979
            </span>
          </div>

          {/* Book Now */}
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hidden lg:block bg-[#caa577] hover:bg-black text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-xs shadow-sm relative"
          >
            BOOK NOW
            <span className="absolute inset-0 border border-[#caa577] translate-x-2 translate-y-2 opacity-60"></span>
          </motion.a>

          {/* Hamburger Menu */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden w-12 h-12 flex items-center justify-center border-2 rounded-full ${
              scrolled ? "border-[#b38b59] text-[#b38b59]" : "border-white text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            ></motion.div>

            {/* Slide-in Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white/90 backdrop-blur-lg text-black z-50 shadow-2xl flex flex-col items-center justify-center gap-8 p-8"
            >
              <ul className="flex flex-col items-center gap-8 font-semibold tracking-wider text-lg">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-800 hover:text-[#b38b59] transition-all duration-300 uppercase"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-8 bg-[#caa577] hover:bg-black text-white font-semibold px-10 py-3 rounded-md shadow-md relative"
                onClick={() => setMenuOpen(false)}
              >
                BOOK NOW
                <span className="absolute inset-0 border border-[#caa577] translate-x-2 translate-y-2 opacity-60"></span>
              </motion.a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
