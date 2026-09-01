"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Globe, 
  ArrowUpRight, 
  BookOpen, 
  CheckSquare, 
  X,
  Compass,
  Search,
  HelpCircle,
  Layers,
  Trophy,
  GitCompare,
  Calendar,
  ChevronDown,
  Hash
} from "lucide-react";

export default function Sidebar({
  isOpen,
  setIsOpen,
  activeSection,
  setActiveSection,
  periodType,
  setPeriodType,
  selectedMonth,
  setSelectedMonth,
  isComparing,
  setIsComparing,
  compareMonth,
  setCompareMonth,
  selectedYear,
  setSelectedYear
}) {
  const monthlyItems = [
    { id: "overview", label: "Reporte", icon: BarChart3 },
    { id: "careers", label: "Ranking de Carreras", icon: Trophy },
    { id: "trends", label: "Tendencias de Tráfico", icon: TrendingUp },
    { id: "pages", label: "Páginas y Blog", icon: FileText },
    { id: "keywords", label: "Palabras Clave (SEO)", icon: Hash },
    { id: "demographics", label: "Dispositivos y Países", icon: Globe },
    { id: "referrals", label: "Fuentes y Referidos", icon: ArrowUpRight },
    { id: "seo", label: "Search Console (SEO)", icon: Search },
    { id: "content", label: "Analítica de Contenido", icon: BookOpen },
    { id: "conclusions", label: "Conclusiones", icon: CheckSquare },
    { id: "glossary", label: "Glosario y FAQs", icon: HelpCircle },
  ];

  const comparisonItems = [
    { id: "comp-overview", label: "Métricas Comparativas", icon: GitCompare },
    { id: "keywords", label: "Palabras Clave (SEO)", icon: Hash },
    { id: "conclusions", label: "Conclusiones Comparativas", icon: CheckSquare },
    { id: "glossary", label: "Glosario y FAQs", icon: HelpCircle },
  ];

  const annualItems = [
    { id: "annual-overview", label: "Reporte Anual", icon: BarChart3 },
    { id: "annual-channels", label: "Canales de Tráfico", icon: Layers },
    { id: "annual-pages", label: "Páginas del Año", icon: FileText },
    { id: "keywords", label: "Palabras Clave (SEO)", icon: Hash },
    { id: "annual-conclusions", label: "Conclusiones Anuales", icon: CheckSquare },
    { id: "glossary", label: "Glosario y FAQs", icon: HelpCircle },
  ];

  const menuItems = 
    periodType === "annual" 
      ? annualItems 
      : isComparing 
      ? comparisonItems 
      : monthlyItems;

  const handleScrollTo = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handlePeriodChange = (type) => {
    setPeriodType(type);
    setIsComparing(false);
    const defaultSec = type === "annual" ? "annual-overview" : "overview";
    setActiveSection(defaultSec);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600/30 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-100 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with Logo La Metro */}
        <div className="flex flex-col px-5 py-4 border-b border-gray-50 gap-3">
          <div className="flex items-center justify-between">
            <img 
              src="/LogoBlack_LaMetro.svg" 
              alt="Logo La Metro" 
              className="h-5 object-contain" 
            />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50 lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-1.5 border-t border-gray-50 pt-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-md bg-[#27313B] text-white shrink-0">
              <Compass className="w-3 h-3" />
            </div>
            <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Web Analytics</span>
          </div>
        </div>

        {/* Período de Análisis: 2 opciones principales (Mensual / Anual) */}
        <div className="px-3.5 py-3 border-b border-gray-50 bg-gray-50/25 space-y-2.5">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-0.5">
            Período de Análisis
          </p>

          {/* 2 Primary Tabs: Mensual / Anual */}
          <div className="grid grid-cols-2 gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => handlePeriodChange("monthly")}
              className={`py-1 px-2 text-xs font-bold rounded-md transition-all ${
                periodType === "monthly"
                  ? "bg-white text-[lab(29%_-0.04_-7.9)] shadow-xs"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => handlePeriodChange("annual")}
              className={`py-1 px-2 text-xs font-bold rounded-md transition-all ${
                periodType === "annual"
                  ? "bg-white text-[lab(29%_-0.04_-7.9)] shadow-xs"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Anual
            </button>
          </div>

          {/* Sub-selector for Monthly View */}
          {periodType === "monthly" && (
            <div className="space-y-2 pt-0.5">
              {/* Select Month */}
              <div>
                <label className="text-[10px] font-semibold text-gray-500 block mb-1">
                  {isComparing ? "Mes Base:" : "Seleccionar Mes:"}
                </label>
                <div className="relative">
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full text-xs font-bold text-[lab(29%_-0.04_-7.9)] bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 appearance-none pr-7 focus:outline-none focus:border-gray-400 cursor-pointer shadow-2xs"
                  >
                    <option value="august">Agosto 2026 (Activo)</option>
                    <option value="july">Julio 2026</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Compare Toggle Button */}
              <button
                onClick={() => setIsComparing(!isComparing)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  isComparing
                    ? "bg-[#27313B]/5 border-[#27313B]/20 text-[lab(29%_-0.04_-7.9)]"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <GitCompare className="w-3.5 h-3.5" />
                  Comparar con otro mes
                </span>
                <span className={`w-2 h-2 rounded-full ${isComparing ? "bg-emerald-500" : "bg-gray-300"}`} />
              </button>

              {/* Second Month Selector (when comparing) */}
              {isComparing && (
                <div className="p-2 bg-white rounded-lg border border-gray-200/80 space-y-1">
                  <label className="text-[10px] font-semibold text-gray-500 block">
                    Comparar contra:
                  </label>
                  <div className="relative">
                    <select
                      value={compareMonth}
                      onChange={(e) => setCompareMonth(e.target.value)}
                      className="w-full text-xs font-bold text-[lab(29%_-0.04_-7.9)] bg-gray-50 border border-gray-200 rounded-md px-2 py-1 appearance-none pr-6 focus:outline-none cursor-pointer"
                    >
                      <option value="july">Julio 2026</option>
                      <option value="august">Agosto 2026</option>
                    </select>
                    <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sub-selector for Annual View */}
          {periodType === "annual" && (
            <div className="pt-0.5">
              <label className="text-[10px] font-semibold text-gray-500 block mb-1">
                Año Consolidado:
              </label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full text-xs font-bold text-[lab(29%_-0.04_-7.9)] bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 appearance-none pr-7 focus:outline-none cursor-pointer shadow-2xs"
                >
                  <option value="2026">Año 2026 (Consolidado)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Content (Menu) */}
        <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
          <div className="px-3 mb-1.5 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
            Navegación
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`flex items-center w-full gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  isActive 
                    ? "bg-gray-100 text-[lab(29%_-0.04_-7.9)] shadow-xs" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[lab(29%_-0.04_-7.9)]" : "text-gray-400 group-hover:text-gray-900"}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer - Isabel Flores */}
        <div className="p-3 border-t border-gray-50">
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Reporte mensual</p>
            <p className="text-xs font-bold text-[lab(29%_-0.04_-7.9)] mt-0.5">por Isabel Flores</p>
            <p className="text-[10px] text-gray-500 mt-0.5 font-medium">
              {periodType === "annual"
                ? "Consolidado 2026"
                : isComparing
                ? `${selectedMonth === "august" ? "Agosto" : "Julio"} vs. ${compareMonth === "july" ? "Julio" : "Agosto"}`
                : `${selectedMonth === "august" ? "Agosto 2026" : "Julio 2026"}`}
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-gray-400 font-bold">Datos consolidados</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
