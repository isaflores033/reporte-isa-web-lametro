"use client";

import React from "react";
import { formatNumber } from "@/data/reportData";

export default function DataTable({ title, subtitle, data, columns, linkKey }) {
  return (
    <div className="bg-white border border-gray-100/90 rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-6 pb-4">
        <h3 className="text-base font-bold text-[lab(29%_-0.04_-7.9)]">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-y border-gray-100 bg-[#27313B]/[0.02] text-[10px] font-bold tracking-wider text-gray-400 uppercase">
              {columns.map((col, idx) => (
                <th 
                  key={idx} 
                  className={`px-6 py-3 ${col.align === "right" ? "text-right" : "text-left"}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((row, rowIdx) => (
              <tr 
                key={rowIdx}
                className="hover:bg-gray-50/50 transition-colors text-xs font-semibold text-gray-700"
              >
                {columns.map((col, colIdx) => {
                  const val = row[col.accessor];
                  const formattedVal = typeof val === "number" ? formatNumber(val) : val;
                  const isPrimaryColumn = linkKey && col.accessor === linkKey;

                  return (
                    <td 
                      key={colIdx} 
                      className={`px-6 py-3.5 ${
                        col.align === "right" 
                          ? "text-right font-bold text-[lab(29%_-0.04_-7.9)]" 
                          : isPrimaryColumn 
                          ? "font-bold text-[lab(29%_-0.04_-7.9)]" 
                          : "font-medium text-gray-600"
                      }`}
                    >
                      {formattedVal}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
