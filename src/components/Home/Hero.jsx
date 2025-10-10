import { motion } from "framer-motion";
import Herobg from "../../assets/hero.webp"

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Zoom-in animated background overlay */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Semi-transparent dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-5xl px-4"
      >
        {/* Glass effect background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="backdrop-blur-md bg-white/20 rounded-sm border border-white/20 px-4 py-10 mx-72"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-6xl italic text-[#b38b59] py-3 font-[WindSong, cursive]"
          >
            Luxury
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="text-[170px] leading-relaxed text-white font-serif font-medium tracking-[8px]  -ml-80"
          >
            MOUNTAIN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="text-white/90 text-xl w-[600px] font-medium tracking-wider mb-10 font-[sans-serif] -ml-28"
          >
            Our hotel offers a wide range of facilities designed to ensure a
            comfortable and enjoyable stay
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#caa577] hover:bg-black text-white font-[sans-serif] font-semibold px-8 py-4 text-sm tracking-wide rounded-sm shadow-md relative"
          >
            VIEW HOTEL DETAILS
            <span className="absolute inset-0 border border-[#caa577] translate-x-2 translate-y-2 opacity-60"></span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
