"use client";

import React from "react";
import { AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import { conclusions } from "@/data/reportData";

export default function Conclusions() {
  return (
    <div className="bg-white border border-gray-100/90 rounded-2xl p-6 md:p-8 space-y-6">
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
          Conclusiones y Recomendaciones Estratégicas
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Diagnóstico de rendimiento y oportunidades de optimización para La Metro
        </p>
      </div>

      <div className="space-y-3.5">
        {conclusions.map((item, idx) => {
          const isAlert = item.type === "alert";
          return (
            <div
              key={idx}
              className={`flex items-start gap-3.5 p-4 md:p-5 border rounded-xl transition-all duration-200 ${
                isAlert
                  ? "bg-rose-50/40 border-rose-200/70 text-rose-950"
                  : "bg-gray-50/60 border-gray-100 text-gray-900 hover:border-gray-200"
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {isAlert ? (
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                ) : (
                  <FileText className="w-5 h-5 text-gray-700" />
                )}
              </div>
              <div className="space-y-1">
                <h4 className={`text-xs font-bold uppercase tracking-wider ${isAlert ? "text-rose-900" : "text-gray-900"}`}>
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed font-medium ${isAlert ? "text-rose-900/90" : "text-gray-600"}`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
