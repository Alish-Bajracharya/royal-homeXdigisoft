import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import RoomDetails from "./pages/RoomDetails";
import RoyalHomes from "./pages/RoyalHomes";
import Service from "./pages/Service";
import Events from "./pages/Event";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3s, then popup
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Loader */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
       <ScrollToTop />   
      {/* Main Routes */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RoomDetails" element={<RoomDetails />} />
          <Route path="/RoyalHomes" element={<RoyalHomes />} />
          <Route path="/Services" element={<Service />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Gallery" element={<GalleryP />} /> */}

        </Routes>
      )}

    </Router>
  );
}

export default App;
