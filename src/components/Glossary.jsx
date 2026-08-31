"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Info, BookOpen } from "lucide-react";
import { glossaryData } from "@/data/reportData";

export default function Glossary() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-white border border-gray-100/90 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#27313B] text-white">
          <BookOpen className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-[#27313B]">Glosario y Preguntas Frecuentes</h3>
          <p className="text-xs text-gray-500 mt-0.5">Guía explicativa para comprender los conceptos y métricas clave de analítica web y SEO</p>
        </div>
      </div>

      <div className="space-y-3">
        {glossaryData.map((item, idx) => {
          const isOpen = !!openIndexes[idx];
          return (
            <div 
              key={idx} 
              className={`border rounded-xl transition-all duration-200 ${
                isOpen 
                  ? "border-[#27313B]/20 bg-[#27313B]/[0.02]" 
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isOpen ? "text-[#EB0027]" : "text-gray-400"}`} />
                  <span className="text-xs font-bold text-[#27313B]">{item.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-500 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
                )}
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-gray-100/60 space-y-3">
                  {/* Definition */}
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">¿Qué significa en palabras sencillas?</span>
                    <p className="text-xs text-gray-700 font-medium mt-1 leading-relaxed">{item.answer}</p>
                  </div>

                  {/* Two column layout for Example and Importance */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-3 bg-white border border-[#EB0027]/15 rounded-lg shadow-2xs">
                      <span className="text-[10px] font-bold text-[#EB0027] uppercase tracking-wider flex items-center gap-1.5">
                        <Info className="w-3 h-3 text-[#EB0027]" /> Ejemplo Real en La Metro
                      </span>
                      <p className="text-xs text-gray-600 font-medium mt-1.5 leading-relaxed">{item.example}</p>
                    </div>

                    <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-2xs">
                      <span className="text-[10px] font-bold text-[#27313B] uppercase tracking-wider">
                        Importancia / Utilidad
                      </span>
                      <p className="text-xs text-gray-600 font-medium mt-1.5 leading-relaxed">{item.utility}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
