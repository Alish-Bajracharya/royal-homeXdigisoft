import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-16 bg-[#ddbd71]/90 text-black shadow-md">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide mt-20"
        >
          Contact Our Resort
        </motion.h1>
        <p className="mt-3 text-lg opacity-90">
          We’re here to help you plan your perfect stay in paradise.
        </p>
      </section>

      {/* Main Contact Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 border border-[#ceb885] hover:shadow-xl transition-all"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#c9b27c]">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Phone className="text-[#c9b27c] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+977 980-1234567</p>
                <p className="text-gray-600">+977 1-5555555</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Mail className="text-[#c9b27c] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">info@paradiseresort.com</p>
                <p className="text-gray-600">booking@paradiseresort.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <MapPin className="text-[#c9b27c] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">
                  Royals Home Resort, Tanahun,
                  <br /> Pokhara, Nepal
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 border border-amber-100"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#c4a763]">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-[#e0cc9c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#face66]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-[#e0cc9c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#face66]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full border border-[#e0cc9c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#face66]"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#cfb26e] text-white font-semibold py-2 rounded-lg hover:bg-[#face66] transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-[600px] mt-10"
      >
        <iframe
          title="Resort Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112823.12615346168!2d84.4451978652874!3d27.91048199001936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399519bdbc64fa73%3A0x31979c4406333f56!2sRoyals%20Home%20Resort%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1762664667662!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-t-2xl shadow-inner"
        ></iframe>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
