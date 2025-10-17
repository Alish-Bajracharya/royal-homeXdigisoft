// import About from "../components/Home/About";
// import Gallery from "../components/Home/Gallery";
import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import Service from "../components/Home/Service";
import Style from "../components/Home/Style";
import WhyChooseUs from "../components/Home/WhyChooseUs";
// import Room from "../components/Home/Rooms";
import Footer from "../components/Footer";
import Contact from "../components/Home/Contact";
import Testimonial from "../components/Home/Testimonial";
// import Experience from "../components/Home/Experience";
// import Wilderness from "../components/Home/Wilderness";
// import Availability from "../components/Home/Availability";
import Navbar from "../components/Navbar";
import ResortRooms from "../components/Home/ResortRooms";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Style />
      <ResortRooms />
      <Service />
      <WhyChooseUs />
      <Testimonial />
      
      
      <Contact />
      <Footer/>  
      
      {/*<Availability />
      <About />
      <Room />
      <Experience />
       <Testimonial />
       <Wilderness />
      */}
    </>
  );
};

export default Home;
