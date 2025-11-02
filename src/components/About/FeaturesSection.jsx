import React from "react";
import hotelIcon from "../../assets/hotelIcon.png"; 
import safetyIcon from "../../assets/safetyIcon.png";
import changeIcon from "../../assets/changeIcon.png";

const features = [
  {
    icon: hotelIcon,
    title: "ROYALS HOME Resort",
    description:
      "Our luxury and best hotel & resort for you. Phasellus enim libero, blandit vel sapien vitae.",
  },
  {
    icon: safetyIcon,
    title: "Maintaining Your Safety",
    description:
      "Your safety and well-being are our highest priorities. We follow strict cleaning protocols.",
  },
  {
    icon: changeIcon,
    title: "Change Room",
    description:
      "You will have the right to change the room within 24 hours from the time of booking.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-600"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14 mb-4 object-contain opacity-80"
            />
            <h3 className="text-xl font-light text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
