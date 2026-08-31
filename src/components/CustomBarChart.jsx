"use client";

import React from "react";

export default function CustomBarChart({ title, subtitle, data, labelKey, valueKey, percentageKey, iconKey }) {
  // Find the maximum value to scale the bars relative to each other (if they are percentages or absolute values)
  const maxVal = Math.max(...data.map(d => d[valueKey] || parseFloat(d[percentageKey]) || 0));

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col h-full">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>

      <div className="mt-6 flex-1 space-y-4">
        {data.map((item, idx) => {
          const rawVal = item[valueKey];
          const pct = item[percentageKey];
          const formattedPct = typeof pct === "number" ? `${pct}%` : pct;
          const displayVal = typeof rawVal === "number" && rawVal >= 1000 ? `${(rawVal / 1000).toFixed(1)}K` : rawVal;

          return (
            <div key={idx} className="relative">
              {/* Labels layer */}
              <div className="flex justify-between items-center text-xs font-semibold text-gray-700 z-10 relative mb-1.5">
                <div className="flex items-center gap-2">
                  {iconKey && item[iconKey] && (
                    <span className="text-base select-none">{item[iconKey]}</span>
                  )}
                  <span>{item[labelKey]}</span>
                </div>
                <div className="flex items-center gap-2">
                  {displayVal !== undefined && (
                    <span className="text-gray-500 font-medium">{displayVal}</span>
                  )}
                  <span className="text-gray-950 font-bold">{formattedPct}</span>
                </div>
              </div>

              {/* Bar background */}
              <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                {/* Bar fill */}
                <div
                  className="h-full bg-gray-900 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${pct || (rawVal / maxVal) * 100}%`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
