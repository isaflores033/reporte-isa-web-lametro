"use client";

import React from "react";
import { ArrowUpRight, ArrowDownRight, Info } from "lucide-react";

export default function MetricCard({ metric }) {
  const { id, label, value, change, changePeriod, isPositive, subtext, sparkline, color, description } = metric;

  // Generate SVG path for the sparkline in the background
  const generateSparklinePath = (points, isArea = false) => {
    if (!points || points.length === 0) return "";
    const width = 120;
    const height = 48;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;

    const getX = (idx) => (idx / (points.length - 1)) * width;
    const getY = (val) => height - ((val - min) / range) * (height - 12) - 6;

    let path = `M ${getX(0)} ${getY(points[0])}`;
    for (let i = 1; i < points.length; i++) {
      // Smooth bezier curves
      const prevX = getX(i - 1);
      const prevY = getY(points[i - 1]);
      const currX = getX(i);
      const currY = getY(points[i]);
      const cpX1 = prevX + (currX - prevX) / 2;
      const cpX2 = prevX + (currX - prevX) / 2;
      path += ` C ${cpX1} ${prevY}, ${cpX2} ${currY}, ${currX} ${currY}`;
    }

    if (isArea) {
      path += ` L ${width} ${height} L 0 ${height} Z`;
    }

    return path;
  };

  const isGreen = color === "green" || (isPositive && color !== "rose");
  const strokeColor = isGreen ? "#10b981" : "#f43f5e";
  const gradId = `sparkGrad-${id}`;

  return (
    <div className="group relative bg-white border border-gray-100/90 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-sm hover:border-gray-200 flex flex-col justify-between min-h-[148px]">
      {/* Background SVG Sparkline Curve safely clipped inside its own rounded container */}
      {sparkline && sparkline.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
          <div className="absolute right-0 bottom-0 opacity-35 group-hover:opacity-55 transition-opacity">
            <svg width="130" height="60" viewBox="0 0 120 48" fill="none" className="overflow-visible">
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d={generateSparklinePath(sparkline, true)} fill={`url(#${gradId})`} />
              <path
                d={generateSparklinePath(sparkline, false)}
                stroke={strokeColor}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Top row: Title + Badge with high z-index */}
      <div className="flex items-start justify-between gap-2 relative z-30">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-600 tracking-normal">{label}</span>
          {description && (
            <div className="relative flex items-center group/tooltip">
              <Info className="w-3.5 h-3.5 text-gray-300 cursor-help hover:text-[#27313B] transition-colors" />
              {/* Tooltip positioned downwards with maximum z-index */}
              <div className="absolute left-0 top-full mt-2 hidden group-hover/tooltip:block w-56 p-2.5 text-[11px] font-normal text-white bg-[#27313B] rounded-xl shadow-2xl z-50 leading-relaxed pointer-events-none border border-gray-700/50">
                {description}
              </div>
            </div>
          )}
        </div>

        {change && (
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold rounded-full border ${
              isGreen
                ? "bg-emerald-50/80 text-emerald-700 border-emerald-100/70"
                : "bg-rose-50/80 text-rose-700 border-rose-100/70"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            ) : (
              <ArrowDownRight className="w-3 h-3 stroke-[2.5]" />
            )}
            <span>{change}</span>
            {changePeriod && (
              <span className="text-[9px] font-medium text-gray-400 hidden xl:inline">
                {changePeriod}
              </span>
            )}
          </span>
        )}
      </div>

      {/* Middle: Big bold value (z-0 to stay behind tooltips) */}
      <div className="mt-3 relative z-0">
        <span className="text-3xl sm:text-4xl font-extrabold text-[lab(29%_-0.04_-7.9)] tracking-tight">
          {value}
        </span>
      </div>

      {/* Bottom row: Context subtitle (z-0 to stay behind tooltips) */}
      {subtext && (
        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-gray-500 font-medium relative z-0">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isGreen ? "bg-emerald-500" : "bg-rose-500"
            }`}
          />
          <span>{subtext}</span>
        </div>
      )}
    </div>
  );
}
