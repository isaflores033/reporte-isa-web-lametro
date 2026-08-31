"use client";

import React from "react";
import { ArrowUpRight, ArrowDownRight, GitCompare, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { monthComparisonData, formatNumber } from "@/data/reportData";

export default function MonthComparison() {
  const { metrics, channelsComparison } = monthComparisonData;

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-50 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white shrink-0">
              <GitCompare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                Comparativa Mensual: Julio vs. Agosto 2026
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Fluctuación de volumen, deltas de crecimiento y cambios en el comportamiento del usuario
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 self-start sm:self-auto">
            WP Statistics
          </span>
        </div>

        {/* 6 Key Comparative Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {metrics.map((item, idx) => {
            const isPos = item.isPositive;
            return (
              <div
                key={idx}
                className="p-5 bg-gray-50/40 border border-gray-100 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-3">
                    <span>{item.metric}</span>
                    <span
                      className={`inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-bold rounded-full border ${
                        isPos
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-rose-50 text-rose-700 border-rose-100"
                      }`}
                    >
                      {isPos ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {item.percentage}
                    </span>
                  </div>

                  {/* Side-by-side values */}
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400">Julio</span>
                      <p className="text-lg font-bold text-gray-600 mt-0.5">
                        {typeof item.july === "number" ? formatNumber(item.july) : item.july}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400">Agosto</span>
                      <p className="text-lg font-bold text-gray-900 mt-0.5">
                        {typeof item.august === "number" ? formatNumber(item.august) : item.august}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insight footer */}
                <p className="text-[11px] text-gray-500 font-medium mt-3 pt-2.5 border-t border-gray-100/70 leading-relaxed">
                  {item.insight}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Channels Variation Table */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 space-y-5">
        <div>
          <h4 className="text-base font-bold text-gray-900 tracking-tight">
            Variación de Canales de Adquisición (Julio vs. Agosto)
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">
            Comportamiento comparativo de las fuentes principales que enviaron tráfico a La Metro
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-100 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/70 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                <th className="px-5 py-3">Canal / Fuente</th>
                <th className="px-5 py-3 text-right">Julio 2026</th>
                <th className="px-5 py-3 text-right">Agosto 2026</th>
                <th className="px-5 py-3 text-right">Variación (%)</th>
                <th className="px-5 py-3">Diagnóstico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {channelsComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/40 text-xs font-semibold text-gray-700">
                  <td className="px-5 py-3.5 font-bold text-gray-900">{row.channel}</td>
                  <td className="px-5 py-3.5 text-right text-gray-500">{formatNumber(row.july)}</td>
                  <td className="px-5 py-3.5 text-right font-bold text-gray-950">{formatNumber(row.august)}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span
                      className={`inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-bold rounded-full border ${
                        row.isPositive
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-rose-50 text-rose-700 border-rose-100"
                      }`}
                    >
                      {row.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {row.change}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-[11px] text-gray-500 font-normal">
                    {row.isPositive
                      ? "Crecimiento destacado de captación"
                      : "Ajuste tras pico temprano"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
