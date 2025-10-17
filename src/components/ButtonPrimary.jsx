import React from "react";
import { motion } from "framer-motion";

const ButtonPrimary = ({
  label = "Click Here",
  href,
  onClick,
  bgColor = "#caa577",
  hoverBg = "#000000",
  textColor = "#ffffff",
  className = "",
}) => {
  const MotionComponent = motion[href ? "a" : "button"];

  return (
    <MotionComponent
      href={href}
      whileHover={{ scale: 1.05, backgroundColor: hoverBg }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className={`relative font-sans font-bold px-8 py-4 text-sm tracking-wide  shadow-md inline-block ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {label}
      <span
        className="absolute inset-0 translate-x-2 translate-y-2 hover:-translate-x-2 hover:-translate-y-2 opacity-60 pointer-events-none"
        style={{
          border: `1px solid ${bgColor}`,
        }}
      ></span>
    </MotionComponent>
  );
};

export default ButtonPrimary;
