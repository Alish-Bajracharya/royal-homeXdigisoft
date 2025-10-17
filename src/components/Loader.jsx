import React from "react";
import Logo from "../assets/logo.png";

export default function Loader({
  logo = Logo,
  size = 140,
  arcColor = "#caa577", 
  trackColor = "#f3f4f6",
  thickness = 5,
}) {
  const svgSize = size;
  const center = svgSize / 2;
  const radius1 = center - thickness; 
  const radius2 = center - thickness * 3; 

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div style={{ width: size, height: size }} className="relative">
        {/* Rotating SVG */}
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="absolute inset-0"
          style={{
            animation: "spin 1.8s linear infinite",
          }}
        >
          {/* Outer track */}
          <circle
            cx={center}
            cy={center}
            r={radius1}
            stroke={trackColor}
            strokeWidth={thickness}
            fill="none"
          />
          {/* Outer arc */}
          <circle
            cx={center}
            cy={center}
            r={radius1}
            stroke={arcColor}
            strokeWidth={thickness}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${Math.round(Math.PI * radius1 * 0.35)} ${Math.round(
              Math.PI * radius1 * 2
            )}`}
            transform={`rotate(-90 ${center} ${center})`}
          />

          {/* Inner track */}
          <circle
            cx={center}
            cy={center}
            r={radius2}
            stroke={trackColor}
            strokeWidth={thickness - 1}
            fill="none"
          />
          {/* Inner arc (reverse rotation) */}
          <circle
            cx={center}
            cy={center}
            r={radius2}
            stroke={arcColor}
            strokeWidth={thickness - 1}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${Math.round(Math.PI * radius2 * 0.3)} ${Math.round(
              Math.PI * radius2 * 2
            )}`}
            transform={`rotate(90 ${center} ${center})`}
            style={{
              animation: "spin-reverse 2s linear infinite",
              transformOrigin: "center",
            }}
          />
        </svg>

        {/* Logo in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            style={{
              width: size * 0.55,
              height: size * 0.55,
              objectFit: "contain",
            }}
            className="block"
          />
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
}
