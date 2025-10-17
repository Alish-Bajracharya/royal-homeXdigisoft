import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/hills.webp";
import Img2 from "../../assets/homes.webp";
import Img3 from "../../assets/swimming.webp";
import Img4 from "../../assets/happy.webp";

const rooms = [
  { id: 1, title: "Twin Bed Room", img: Img1, path: "/room" },
  { id: 2, title: "Deluxe Room", img: Img2, path: "/room" },
  { id: 3, title: "Super Deluxe Room", img: Img3, path: "/room" },
  { id: 4, title: "Deluxe Room", img: Img4, path: "/room" },
];

const ResortRooms = () => {
  const [activeImg, setActiveImg] = useState(rooms[0].img); // start with first image
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();

  const handleHover = (img) => {
    if (img !== activeImg) {
      setZoom(true);
      setActiveImg(img);
      setTimeout(() => setZoom(false), 600);
    }
  };

  return (
    <section className="relative w-full h-[90vh] flex flex-col justify-end overflow-hidden transition-all duration-700">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-in-out ${
          zoom ? "scale-110" : "scale-100"
        }`}
        style={{ backgroundImage: `url(${activeImg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Room Cards */}
      <div
        className="
          relative z-10 grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          border-t border-[#ffffff40]
          overflow-x-auto lg:overflow-x-hidden
          snap-x snap-mandatory scrollbar-hide
        "
      >
        {rooms.map((room) => (
          <div
            key={room.id}
            className="group relative flex items-center justify-between px-8 h-[160px]
                       bg-[#00000070] backdrop-blur-sm text-white
                       border border-[#ffffff40] snap-center 
                       cursor-pointer transition-all duration-500 hover:bg-[#b2925a]
                       min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-0"
            onMouseEnter={() => handleHover(room.img)}
          >
            {/* Room Title */}
            <h3 className="text-2xl font-serif tracking-wide transition-colors duration-300">
              {room.title}
            </h3>

            {/* + Button */}
            <button
              onClick={() => navigate(room.path)}
              className="w-12 h-12 flex items-center justify-center
                         bg-white text-black rounded-full text-xl font-bold
                         hover:bg-[#b2925a] hover:text-white transition-all duration-300"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResortRooms;
