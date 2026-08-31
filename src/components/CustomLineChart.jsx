"use client";

import React, { useState, useRef, useEffect } from "react";
import { formatNumber } from "@/data/reportData";

export default function CustomLineChart({ data }) {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // SVG dimensions
  const width = 800;
  const height = 300;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;

  // Chart plotting dimensions
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Find max values for scaling
  const maxVal = Math.max(
    ...data.map((d) => d.views),
    ...data.map((d) => d.visitors)
  ) * 1.05; // add 5% buffer

  const minVal = 0;

  // Coordinate helper functions
  const getX = (index) => {
    return paddingLeft + (index / (data.length - 1)) * chartWidth;
  };

  const getY = (value) => {
    return paddingTop + chartHeight - ((value - minVal) / (maxVal - minVal)) * chartHeight;
  };

  // Generate SVG Path for line
  const generatePath = (key, isArea = false) => {
    if (data.length === 0) return "";
    let path = `M ${getX(0)} ${getY(data[0][key])}`;
    for (let i = 1; i < data.length; i++) {
      path += ` L ${getX(i)} ${getY(data[i][key])}`;
    }
    
    if (isArea) {
      // Connect to the bottom of the chart to close the loop
      path += ` L ${getX(data.length - 1)} ${paddingTop + chartHeight}`;
      path += ` L ${getX(0)} ${paddingTop + chartHeight} Z`;
    }
    return path;
  };

  // Handle mouse move to find closest data point
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xMouse = e.clientX - rect.left;
    const yMouse = e.clientY - rect.top;

    // Convert mouse x to SVG x
    const svgX = (xMouse / rect.width) * width;
    
    // Find closest data index based on X coordinate
    let closestIndex = 0;
    let closestDist = Infinity;
    
    for (let i = 0; i < data.length; i++) {
      const dist = Math.abs(getX(i) - svgX);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    }

    const pointX = getX(closestIndex);
    const pointY = getY(data[closestIndex].views); // Tooltip positioned near the view curve peak
    
    setHoveredPoint({
      index: closestIndex,
      data: data[closestIndex]
    });
    
    // Position tooltip relative to container
    setTooltipPos({
      x: (pointX / width) * rect.width,
      y: (pointY / height) * rect.height
    });
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  // Generate Y-axis grid line values (e.g. 4 divisions)
  const yGridValues = [];
  const gridDivisions = 4;
  for (let i = 0; i <= gridDivisions; i++) {
    yGridValues.push(minVal + (maxVal - minVal) * (i / gridDivisions));
  }

  // Filter X-axis labels to prevent overlap (show label every 4 days)
  const filteredLabels = data.map((d, index) => {
    if (index % 4 === 0 || index === data.length - 1) {
      return { label: d.day, x: getX(index) };
    }
    return null;
  }).filter(Boolean);

  return (
    <div className="w-full bg-white border border-gray-100/90 rounded-2xl p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h3 className="text-sm font-bold text-[#27313B]">Tendencias de Tráfico Diario</h3>
          <p className="text-xs text-gray-500 mt-0.5">Comportamiento diario de visitantes y páginas vistas</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#EB0027] inline-block rounded-full"></span>
            <span className="text-[#27313B]">Visitantes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#27313B] inline-block border border-dashed border-[#27313B]"></span>
            <span className="text-gray-600">Páginas Vistas</span>
          </div>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full h-auto select-none"
        >
          {/* Definitions for Gradients in La Metro Colors */}
          <defs>
            <linearGradient id="visitorsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EB0027" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#EB0027" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#27313B" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#27313B" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines & Y-axis labels */}
          {yGridValues.map((val, idx) => (
            <g key={idx}>
              <line
                x1={paddingLeft}
                y1={getY(val)}
                x2={width - paddingRight}
                y2={getY(val)}
                stroke="#f3f4f6"
                strokeWidth={idx === 0 ? "1.5" : "1"}
              />
              <text
                x={paddingLeft - 8}
                y={getY(val) + 4}
                className="text-[10px] fill-gray-400 font-semibold text-right"
                textAnchor="end"
              >
                {formatNumber(val)}
              </text>
            </g>
          ))}

          {/* Fill Areas */}
          <path d={generatePath("views", true)} fill="url(#viewsGrad)" />
          <path d={generatePath("visitors", true)} fill="url(#visitorsGrad)" />

          {/* Line Paths */}
          <path
            d={generatePath("views")}
            fill="none"
            stroke="#27313B"
            strokeWidth="1.8"
            strokeDasharray="4 4"
          />
          <path
            d={generatePath("visitors")}
            fill="none"
            stroke="#EB0027"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* X-axis labels */}
          {filteredLabels.map((lbl, idx) => (
            <g key={idx}>
              <text
                x={lbl.x}
                y={height - paddingBottom + 18}
                className="text-[10px] fill-gray-400 font-semibold"
                textAnchor="middle"
              >
                {lbl.label}
              </text>
            </g>
          ))}

          {/* Hover interaction line and dots */}
          {hoveredPoint && (
            <g>
              {/* Vertical line */}
              <line
                x1={getX(hoveredPoint.index)}
                y1={paddingTop}
                x2={getX(hoveredPoint.index)}
                y2={paddingTop + chartHeight}
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              {/* Dot for visitors */}
              <circle
                cx={getX(hoveredPoint.index)}
                cy={getY(hoveredPoint.data.visitors)}
                r="5"
                fill="#EB0027"
                stroke="white"
                strokeWidth="2"
              />
              {/* Dot for views */}
              <circle
                cx={getX(hoveredPoint.index)}
                cy={getY(hoveredPoint.data.views)}
                r="5"
                fill="#27313B"
                stroke="white"
                strokeWidth="2"
              />
            </g>
          )}
        </svg>

        {/* Tooltip HTML Box overlay */}
        {hoveredPoint && (
          <div
            className="absolute bg-[#27313B] text-white rounded-xl p-3 shadow-2xl border border-gray-700/60 text-xs pointer-events-none z-20 w-44 transition-all duration-150 ease-out"
            style={{
              left: `${Math.min(tooltipPos.x + 12, (containerRef.current?.getBoundingClientRect().width || width) - 185)}px`,
              top: `${Math.max(tooltipPos.y - 85, 10)}px`,
            }}
          >
            <div className="font-bold text-gray-300 border-b border-gray-700/60 pb-1 mb-2 flex justify-between items-center">
              <span>Día {hoveredPoint.data.day}</span>
              <span className="text-[10px] text-gray-400 font-normal">Agosto 2026</span>
            </div>
            <div className="flex justify-between items-center gap-2 mb-1.5">
              <span className="text-gray-100 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EB0027] shrink-0 inline-block" />
                Visitantes:
              </span>
              <span className="font-extrabold text-white">{formatNumber(hoveredPoint.data.visitors)}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-gray-300 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0 inline-block" />
                Páginas Vistas:
              </span>
              <span className="font-extrabold text-white">{formatNumber(hoveredPoint.data.views)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
