import { motion } from "framer-motion";
import Herobg from "../../assets/hero.webp"
import ButtonPrimary from "../ButtonPrimary";

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
        animate={{ scale: 1.3 }}
        transition={{ duration: 13, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Herobg})`,
        }}
      />

      {/* Semi-transparent dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1.2}}
        className="relative z-10 text-center max-w-[400px] px-4"
      >
        {/* Glass effect background */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 px-6 sm:px-8 py-8 sm:py-12 mx-auto max-w-4xl"
        >
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 1.2 }}
            className="text-4xl sm:text-5xl md:text-6xl py-2 italic text-white mb-4"
            style={{ fontFamily: "WindSong", transform: 'capitalize' }}
          >
            Luxury
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.4 }}
            className="text-6xl sm:text-8xl md:text-[160px] -ml-6 sm:-ml-28 md:-ml-80 lg:-ml-80 leading-tight text-white font-serif font-extralight py-2 tracking-[4px]"
          >
            MOUNTAIN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="text-white/90 text-base sm:text-lg md:text-xl w-[380px] sm:w-[500px] md:w-[600px] lg:w-[600px] font-medium tracking-wider py-8 font-[sans-serif]  -ml-8 sm:-ml-24 md:-ml-36 lg:-ml-36"
          > 
            Our hotel offers a wide range of facilities designed to ensure a
            comfortable and enjoyable stay
          </motion.p>
          <ButtonPrimary label="VIEW HOTEL DETAILS" href="/RoyalHomes" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


