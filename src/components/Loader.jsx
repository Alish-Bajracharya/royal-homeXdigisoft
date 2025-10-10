import React from "react";
import Logo from "../assets/logo.jpeg";
<Logo logo={Logo} size={140} arcColor="#06b6d4" trackColor="#e6eef2" />

export default function Loader({
  logo,
  size = 120,
  arcColor = "#06b6d4",
  trackColor = "#e6eef2",
  thickness = 6,
}) {
  const svgSize = size;
  const center = svgSize / 2;
  const radius = center - thickness; 

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div style={{ width: size, height: size }} className="relative">
        {/* Rotating arc (SVG) */}
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="absolute inset-0"
          style={{
            // use Tailwind's animate-spin but override duration for a nicer speed
            animation: "spin 1.6s linear infinite",
          }}
        >
          {/* Full faint track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={trackColor}
            strokeWidth={thickness}
            fill="none"
          />

          {/* Arc (partial stroke) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={arcColor}
            strokeWidth={thickness}
            strokeLinecap="round"
            fill="none"
            // create an arc by using dasharray (dash + gap)
            strokeDasharray={`${Math.round(Math.PI * radius * 0.25)} ${Math.round(
              Math.PI * radius * 2
            )}`}
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>

        {/* Logo in the center */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-transparent"
          aria-hidden
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: size * 0.55, height: size * 0.55, objectFit: "contain" }}
            className="block"
          />
        </div>
      </div>

      {/* Extra: define keyframes locally so users don't need to modify Tailwind config */}
      <style>
        {`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
      </style>
    </div>
  );
}
   