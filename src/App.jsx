import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Loader from "./components/Loader";
// import DeluxeRooms from "./pages/DeluxeRooms";
// import About from "./pages/About";
// import Restaurant from "./pages/Restaurant"
import ScrollToTop from "./components/ScrollToTop";
// import Contact from "./pages/Contact";
// import Experience from "./pages/Experience";
// import GalleryP from "./pages/Gallery.jsx";

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
          {/* <Route path="/DeluxeRooms" element={<DeluxeRooms />} />
          <Route path="/About" element={<About />} />
          <Route path="/Restaurant-Bars" element={<Restaurant />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<GalleryP />} /> */}

        </Routes>
      )}

    </Router>
  );
}

export default App;
