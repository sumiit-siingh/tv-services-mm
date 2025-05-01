import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HoverText = ({ text = "ACET" }) => {
  const svgRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-00">
      <motion.svg
        ref={svgRef}
        onMouseMove={handleMouseMove}
        style={{ width: '900px', height: '300px' }}
        viewBox="0 0 900 300"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient
            id="spotlight"
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#d946ef" stopOpacity="1" />
            <stop offset="25%" stopColor="#dc2626" stopOpacity="1" />
            <stop offset="50%" stopColor="#fb923c" stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#004444" />
            <stop offset="50%" stopColor="#006666" />
            <stop offset="100%" stopColor="#004444" />
          </linearGradient>
        </defs>

        {/* Base text - always visible outline */}
        <text
          x="450"
          y="150"
          textAnchor="middle"
          fontSize="140"
          fill="none"
          stroke="url(#baseGradient)"
          strokeWidth="1"
          letterSpacing="10"
        >
          {text}
        </text>

        {/* Glowing text that follows mouse */}
        <text
          x="450"
          y="150"
          textAnchor="middle"
          fontSize="140"
          fill="none"
          stroke="url(#spotlight)"
          strokeWidth="1"
          filter="url(#glow)"
          letterSpacing="10"
          style={{
            mixBlendMode: "screen"
          }}
        >
          {text}
        </text>
      </motion.svg>
    </div>
  );
};

export default HoverText; 