"use client";

import React, { useState } from "react";
import { 
  Search, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  HelpCircle, 
  ShieldCheck, 
  Copy, 
  Check, 
  Lightbulb, 
  Hash,
  ChevronRight
} from "lucide-react";
import { keywordsStrategyData } from "@/data/reportData";

export default function KeywordsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    { id: "all", label: "Todas las Carreras (9)" },
    ...keywordsStrategyData.map((item) => ({
      id: item.id,
      label: item.categoryName
    }))
  ];

  const filteredData = selectedCategory === "all"
    ? keywordsStrategyData
    : keywordsStrategyData.filter((item) => item.id === selectedCategory);

  const handleCopyKeywords = (category) => {
    const allKeywords = [
      `=== ${category.title} ===`,
      `[Búsquedas Principales]: ${category.headTerms.join(", ")}`,
      `[Intención de Matrícula]: ${category.transactional.join(", ")}`,
      `[Preguntas para Blog]: ${category.longTailBlog.join(", ")}`,
      `[Acreditación y SENESCYT]: ${category.senescyt.join(", ")}`
    ].join("\n");

    navigator.clipboard.writeText(allKeywords);
    setCopiedId(category.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="bg-white border border-gray-100/90 rounded-2xl p-6 md:p-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-50 pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#27313B] text-white">
              <Search className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[lab(29%_-0.04_-7.9)] tracking-tight">
              Palabras Clave más Buscadas por Carrera (Estrategia SEO)
            </h3>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Arquitectura de términos de búsqueda, intención transaccional de matrícula y oportunidades editoriales para Google
          </p>
        </div>

        <span className="text-[11px] font-bold text-[lab(29%_-0.04_-7.9)] bg-[#27313B]/5 px-3 py-1.5 rounded-lg border border-[#27313B]/10 self-start sm:self-auto flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#27313B]" />
          9 Categorías Mapeadas
        </span>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#27313B] text-white shadow-xs"
                  : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Category Cards List */}
      <div className="space-y-6">
        {filteredData.map((cat) => {
          const isCopied = copiedId === cat.id;
          return (
            <div
              key={cat.id}
              className="border border-gray-200/80 rounded-2xl p-5 md:p-6 bg-white hover:border-gray-300 transition-all space-y-5 shadow-2xs"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-extrabold text-[lab(29%_-0.04_-7.9)]">
                      {cat.title}
                    </h4>
                    <span className="text-[10px] font-bold text-[#27313B] bg-[#27313B]/5 px-2.5 py-0.5 rounded-full border border-[#27313B]/10">
                      {cat.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-mono">
                    {cat.url}
                  </p>
                </div>

                <button
                  onClick={() => handleCopyKeywords(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all self-start sm:self-auto cursor-pointer ${
                    isCopied
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>¡Copiado al portapapeles!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar palabras clave</span>
                    </>
                  )}
                </button>
              </div>

              {/* Strategic Tip Box */}
              {cat.strategicTip && (
                <div className="flex items-start gap-2.5 p-3.5 bg-gray-50/70 border border-gray-200/80 rounded-xl text-xs">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <strong className="text-[lab(29%_-0.04_-7.9)]">Recomendación SEO:</strong> {cat.strategicTip}
                  </p>
                </div>
              )}

              {/* 4 Intent Columns Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Búsquedas Principales (Head Terms) */}
                <div className="p-4 bg-gray-50/40 border border-gray-100 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[lab(29%_-0.04_-7.9)]">
                    <Compass className="w-4 h-4 text-gray-500" />
                    <span>Búsquedas Principales (Head Terms)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.headTerms.map((term, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-white border border-gray-200 text-[lab(29%_-0.04_-7.9)] rounded-md shadow-2xs"
                      >
                        <Hash className="w-3 h-3 text-gray-400" />
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Intención de Matrícula (Transaccionales) */}
                <div className="p-4 bg-emerald-50/30 border border-emerald-100/60 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <span>Intención de Matrícula (Transaccionales)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.transactional.map((term, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-white border border-emerald-200/70 text-emerald-950 rounded-md shadow-2xs"
                      >
                        <Hash className="w-3 h-3 text-emerald-500" />
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Preguntas para Blog (Long-Tail) */}
                <div className="p-4 bg-blue-50/20 border border-blue-100/60 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <HelpCircle className="w-4 h-4 text-blue-500" />
                    <span>Preguntas para Blog (Ideas de Artículos)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.longTailBlog.map((term, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium bg-white border border-gray-200 text-gray-700 rounded-md shadow-2xs"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Acreditación y SENESCYT */}
                <div className="p-4 bg-purple-50/20 border border-purple-100/60 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    <span>Acreditación y SENESCYT (Confianza Oficial)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.senescyt.map((term, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-white border border-gray-200 text-gray-800 rounded-md shadow-2xs"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* SEO Strategic Recommendations Summary */}
      <div className="p-5 md:p-6 bg-gray-50/70 border border-gray-200/80 rounded-2xl space-y-3">
        <h4 className="text-xs font-bold text-[lab(29%_-0.04_-7.9)] uppercase tracking-wider flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          Plan de Acción SEO Recomendado para La Metro
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <span className="font-bold text-[lab(29%_-0.04_-7.9)] block mb-1">1. Optimización On-Page</span>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Incluir los <strong>Head Terms</strong> en las etiquetas <code>&lt;title&gt;</code> y encabezados <code>&lt;H1&gt;</code> de cada una de las 7 páginas de carrera.
            </p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <span className="font-bold text-[lab(29%_-0.04_-7.9)] block mb-1">2. Calendario de Blog</span>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Redactar 1 o 2 artículos mensuales basados en las <strong>Preguntas Long-Tail</strong> para captar aspirantes que buscan orientación vocacional en Google.
            </p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <span className="font-bold text-[lab(29%_-0.04_-7.9)] block mb-1">3. Confianza SENESCYT</span>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Destacar el sello de <strong>Título de Tercer Nivel Tecnológico Acreditado</strong> en los formularios y pie de página para derribar objeciones de validez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
