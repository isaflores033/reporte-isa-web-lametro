"use client";

import React from "react";
import { Award, Trophy } from "lucide-react";
import { metroCareersRanking, formatNumber } from "@/data/reportData";

export default function CareerRanking() {
  const top3 = metroCareersRanking.slice(0, 3);

  return (
    <div className="bg-white border border-gray-100/90 rounded-2xl p-6 md:p-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-50 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#27313B] text-white">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[lab(29%_-0.04_-7.9)] tracking-tight">
              Ranking de Interés por Carreras de La Metro
            </h3>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Demanda informativa, visitantes únicos y páginas vistas de las 7 carreras oficiales de La Metro
          </p>
        </div>
        <span className="text-[11px] font-bold text-[lab(29%_-0.04_-7.9)] bg-[#27313B]/5 px-3 py-1.5 rounded-lg border border-[#27313B]/10 self-start sm:self-auto">
          7 Carreras Evaluadas
        </span>
      </div>

      {/* Top 3 Spotlight Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {top3.map((career) => {
          const isFirst = career.rank === 1;
          return (
            <div
              key={career.rank}
              className={`relative overflow-hidden rounded-2xl p-5 md:p-6 border transition-all duration-200 ${
                isFirst
                  ? "bg-white border-emerald-200/80 shadow-xs ring-1 ring-emerald-100"
                  : "bg-white border-gray-200/70 shadow-xs"
              }`}
            >
              {/* Podium Badge & Percentage */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-full ${
                    isFirst
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                      : "bg-[#27313B]/5 text-[lab(29%_-0.04_-7.9)] border border-[#27313B]/10"
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  {career.rank}º Lugar
                </span>
                <span className={`text-xs font-bold ${isFirst ? "text-emerald-700" : "text-gray-500"}`}>
                  {career.sharePercentage}% del total
                </span>
              </div>

              {/* Title & Description (Sin enlaces externos) */}
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[lab(29%_-0.04_-7.9)]">
                  {career.name}
                </h4>
                <p className="text-[11px] leading-relaxed text-gray-500 line-clamp-2">
                  {career.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    Visitantes
                  </p>
                  <p className="text-lg font-bold tracking-tight text-[lab(29%_-0.04_-7.9)] mt-0.5">
                    {formatNumber(career.visitors)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    Páginas Vistas
                  </p>
                  <p className={`text-lg font-bold tracking-tight mt-0.5 ${isFirst ? "text-emerald-700" : "text-[lab(29%_-0.04_-7.9)]"}`}>
                    {formatNumber(career.views)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full 7-Careers Comparative Table (Sin enlaces externos) */}
      <div className="overflow-x-auto border border-gray-100 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-[#27313B]/[0.02] text-[10px] font-bold tracking-wider text-gray-400 uppercase">
              <th className="px-5 py-3 text-center w-12">#</th>
              <th className="px-5 py-3">Carrera Oficial</th>
              <th className="px-5 py-3 text-right">Visitantes Únicos</th>
              <th className="px-5 py-3 text-right">Páginas Vistas</th>
              <th className="px-5 py-3">Cuota de Interés (%)</th>
              <th className="px-5 py-3">Tendencia / Diagnóstico</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {metroCareersRanking.map((career) => (
              <tr
                key={career.rank}
                className="hover:bg-gray-50/60 transition-colors text-xs font-semibold text-gray-700"
              >
                <td className="px-5 py-3.5 text-center">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      career.rank === 1
                        ? "bg-emerald-600 text-white"
                        : career.rank === 2
                        ? "bg-[#27313B] text-white"
                        : career.rank === 3
                        ? "bg-[#27313B]/10 text-[lab(29%_-0.04_-7.9)]"
                        : "text-gray-400"
                    }`}
                  >
                    {career.rank}
                  </span>
                </td>
                <td className="px-5 py-3.5 font-bold text-[lab(29%_-0.04_-7.9)]">
                  {career.name}
                </td>
                <td className="px-5 py-3.5 text-right font-medium text-gray-600">
                  {formatNumber(career.visitors)}
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-[lab(29%_-0.04_-7.9)]">
                  {formatNumber(career.views)}
                </td>
                <td className="px-5 py-3.5 min-w-[140px]">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          career.rank === 1 ? "bg-emerald-500" : "bg-[#27313B]/70"
                        }`}
                        style={{ width: `${Math.min(career.sharePercentage, 100)}%` }}
                      />
                    </div>
                    <span className={`text-[11px] font-bold w-10 text-right ${career.rank === 1 ? "text-emerald-700" : "text-[lab(29%_-0.04_-7.9)]"}`}>
                      {career.sharePercentage}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-[11px] text-gray-500 font-normal">
                  <span className="inline-block px-2 py-0.5 bg-[#27313B]/[0.04] text-[lab(29%_-0.04_-7.9)] rounded-md font-medium text-[10px]">
                    {career.trend}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
