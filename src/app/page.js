"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import CareerRanking from "@/components/CareerRanking";
import MonthComparison from "@/components/MonthComparison";
import CustomLineChart from "@/components/CustomLineChart";
import CustomBarChart from "@/components/CustomBarChart";
import DataTable from "@/components/DataTable";
import ReferralBanner from "@/components/ReferralBanner";
import Conclusions from "@/components/Conclusions";
import Glossary from "@/components/Glossary";
import KeywordsSection from "@/components/KeywordsSection";

import {
  augustExecutiveMetrics,
  julyExecutiveMetrics,
  dailyTraffic,
  topPages,
  topBlogPosts,
  deviceCategories,
  topCountries,
  topBrowsers,
  topReferrers,
  searchEnginesBreakdown,
  socialMediaBreakdown,
  gscMetrics,
  gscPagesPerformance,
  gscVsWpComparison,
  seoConclusions,
  annualExecutiveMetrics,
  annualSourceCategories,
  annualTopPages,
  conclusions,
  contentAnalytics,
  reportPeriod,
  formatNumber
} from "@/data/reportData";

import { 
  AlertCircle, 
  FileText, 
  Search, 
  BarChart3, 
  Layers, 
  Globe, 
  ArrowUpRight, 
  BookOpen, 
  CheckSquare, 
  TrendingUp, 
  Trophy, 
  Sparkles,
  Newspaper,
  GitCompare,
  Hash
} from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Period Navigation State (Mensual / Anual)
  const [periodType, setPeriodType] = useState("monthly"); // "monthly" | "annual"
  const [selectedMonth, setSelectedMonth] = useState("august"); // "august" | "july"
  const [isComparing, setIsComparing] = useState(false);
  const [compareMonth, setCompareMonth] = useState("july");
  const [selectedYear, setSelectedYear] = useState("2026");

  const [activeSection, setActiveSection] = useState("overview");

  // Intersection Observer for scroll spy
  useEffect(() => {
    let sections = [];
    if (periodType === "annual") {
      sections = ["annual-overview", "annual-channels", "annual-pages", "keywords", "annual-conclusions", "glossary"];
    } else if (isComparing) {
      sections = ["comp-overview", "keywords", "conclusions", "glossary"];
    } else {
      sections = ["overview", "careers", "trends", "pages", "keywords", "demographics", "referrals", "seo", "content", "conclusions", "glossary"];
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [periodType, isComparing]);

  // Table Columns
  const pageColumns = [
    { header: "Página / Sección Web", accessor: "page" },
    { header: "Visitantes Únicos", accessor: "visitors", align: "right" },
    { header: "Páginas Vistas", accessor: "views", align: "right" },
    { header: "Categoría", accessor: "category" },
    { header: "Diagnóstico Estratégico", accessor: "diagnosis" }
  ];

  const blogColumns = [
    { header: "Título del Artículo / Noticia", accessor: "title" },
    { header: "Categoría", accessor: "category" },
    { header: "Vistas Mensuales", accessor: "monthlyViews", align: "right" },
    { header: "Vistas Anuales", accessor: "annualViews", align: "right" },
    { header: "Impacto / Utilidad SEO", accessor: "impact" }
  ];

  const searchEngineColumns = [
    { header: "Buscador / Canal", accessor: "name" },
    { header: "Visitas", accessor: "referrals", align: "right" },
    { header: "% Buscadores", accessor: "percentage", align: "right" }
  ];

  const socialMediaColumns = [
    { header: "Red Social", accessor: "name" },
    { header: "Visitas", accessor: "referrals", align: "right" },
    { header: "% Social", accessor: "percentage", align: "right" }
  ];

  const referrerColumns = [
    { header: "Dominio / Origen", accessor: "domain" },
    { header: "Visitas Referidas", accessor: "referrals", align: "right" },
    { header: "Tipo de Canal", accessor: "type" },
    { header: "Descripción", accessor: "description" }
  ];

  const gscPageColumns = [
    { header: "Página / URL de Destino", accessor: "page" },
    { header: "Clics Orgánicos", accessor: "clicks", align: "right" },
    { header: "Tendencia", accessor: "trend", align: "right" },
    { header: "Categoría", accessor: "category" },
    { header: "Diagnóstico", accessor: "diagnosis" }
  ];

  const gscVsWpColumns = [
    { header: "Canal / Fuente de Llegada", accessor: "channel" },
    { header: "Volumen Registrado (Agosto)", accessor: "volume", align: "right" },
    { header: "¿Lo mide Search Console?", accessor: "gsc" },
    { header: "¿Lo mide WP Statistics?", accessor: "wp" },
    { header: "Descripción del Canal", accessor: "desc" }
  ];

  const annualChannelColumns = [
    { header: "Categoría de Fuente (Source Category)", accessor: "category" },
    { header: "Visitantes Acumulados", accessor: "referrals", align: "right" },
    { header: "Participación (%)", accessor: "percentage", align: "right" },
    { header: "Descripción del Canal", accessor: "desc" }
  ];

  const annualPageColumns = [
    { header: "Página Web", accessor: "page" },
    { header: "Páginas Vistas (Vistas)", accessor: "views", align: "right" },
    { header: "Participación (%)", accessor: "percentage", align: "right" },
    { header: "Evaluación de Tracción Anual", accessor: "desc" }
  ];

  const currentExecutiveMetrics = selectedMonth === "july" ? julyExecutiveMetrics : augustExecutiveMetrics;

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        periodType={periodType}
        setPeriodType={setPeriodType}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        isComparing={isComparing}
        setIsComparing={setIsComparing}
        compareMonth={compareMonth}
        setCompareMonth={setCompareMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <Header setIsOpen={setSidebarOpen} />

        <main className="flex-1 p-5 md:p-8 max-w-6xl w-full mx-auto space-y-14 pb-28">
          
          {/* Welcome / Header Intro */}
          <div className="border-b border-gray-100 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[lab(29%_-0.04_-7.9)] tracking-tight">
                {periodType === "annual" && `Reporte Anual Consolidado · ${selectedYear}`}
                {periodType === "monthly" && !isComparing && (selectedMonth === "august" ? "Reporte de Rendimiento Web · Agosto 2026" : "Reporte de Rendimiento Web · Julio 2026")}
                {periodType === "monthly" && isComparing && `Comparativa Mensual · ${selectedMonth === "august" ? "Agosto" : "Julio"} vs. ${compareMonth === "july" ? "Julio" : "Agosto"} 2026`}
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {periodType === "annual"
                  ? "Visión macro acumulada del comportamiento y distribución de canales de tráfico web durante todo el año."
                  : isComparing
                  ? "Análisis comparativo de crecimiento, fluctuación de tráfico y cambios en fuentes de adquisición entre los meses seleccionados."
                  : "Monitoreo y analítica de visitas, carreras, procedencias y comportamiento de los usuarios en www.lametro.edu.ec."}
              </p>
            </div>
            
            <div className="text-[11px] font-bold text-gray-500 self-start md:self-auto bg-gray-50 px-3.5 py-1.5 rounded-lg border border-gray-200/70">
              Fuente: WP Statistics + Google Search Console
            </div>
          </div>

          {/* =========================================================================
              VIEW MODE: COMPARISON (MES VS MES)
              ========================================================================= */}
          {periodType === "monthly" && isComparing ? (
            <div className="space-y-12">
              <section id="comp-overview" className="scroll-mt-20">
                <MonthComparison />
              </section>

              <section id="keywords" className="scroll-mt-20">
                <KeywordsSection />
              </section>

              <section id="conclusions" className="scroll-mt-20">
                <Conclusions />
              </section>
            </div>
          ) : periodType === "annual" ? (
            /* =========================================================================
               VIEW MODE: ANNUAL REPORT (2026)
               ========================================================================= */
            <div className="space-y-12">
              {/* Section: Resumen Anual (6 Cards en 3x2) */}
              <section id="annual-overview" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <BarChart3 className="w-5 h-5 text-[#27313B]" /> Resumen Ejecutivo Anual (Vista Rápida)
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Consolidado {selectedYear}</span>
                </div>
                
                {/* 6 Metric Cards Grid (3 Columns x 2 Rows) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {annualExecutiveMetrics.map((metric) => (
                    <MetricCard key={metric.id} metric={metric} />
                  ))}
                </div>
              </section>

              {/* Section: Canales Anuales */}
              <section id="annual-channels" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-[#27313B]" /> Distribución Anual por Categorías de Fuente
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">60.372 Referencias</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <DataTable 
                    title="Orígenes de Tráfico del Año (Macro)"
                    subtitle="Distribución acumulada de las fuentes que aportaron visitas al sitio de La Metro durante todo el 2026."
                    data={annualSourceCategories}
                    columns={annualChannelColumns}
                  />
                </div>
              </section>

              {/* Section: Contenidos Anuales */}
              <section id="annual-pages" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-[#27313B]" /> Páginas y Contenidos Más Vistos del Año
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Vistas Acumuladas</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <DataTable 
                    title="Secciones con Mayor Tracción del Año"
                    subtitle="Páginas más populares de la web en base a las vistas totales de 2026."
                    data={annualTopPages}
                    columns={annualPageColumns}
                    linkKey="page"
                  />
                </div>
              </section>

              {/* Section: Palabras Clave (SEO) */}
              <section id="keywords" className="scroll-mt-20">
                <KeywordsSection />
              </section>

              {/* Section: Conclusiones Anuales */}
              <section id="annual-conclusions" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <CheckSquare className="w-5 h-5 text-[#27313B]" /> Conclusiones y Diagnóstico Anual Consolidado
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Diagnóstico Macro</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3.5 p-5 border rounded-2xl bg-gray-50/70 border-gray-200/80 text-[lab(29%_-0.04_-7.9)]">
                    <div className="shrink-0 mt-0.5"><FileText className="w-5 h-5 text-[#27313B]" /></div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider">Crecimiento Sostenido en Admisión</h4>
                      <p className="text-xs font-medium leading-relaxed text-gray-600">
                        Más de 74.000 visitantes únicos y 122.000 vistas acumuladas en el año, demostrando un fuerte pico e incremento de interés sostenido durante los meses de admisión (julio/agosto).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 p-5 border rounded-2xl bg-gray-50/70 border-gray-200/80 text-[lab(29%_-0.04_-7.9)]">
                    <div className="shrink-0 mt-0.5"><Globe className="w-5 h-5 text-[#27313B]" /></div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider">Dominio Orgánico del Tráfico (60.8%)</h4>
                      <p className="text-xs font-medium leading-relaxed text-gray-600">
                        La sumatoria de Google SEO (búsquedas), redes sociales orgánicas y contenido en video representa el 60.8% del tráfico. La reputación académica y el contenido visual atraen a 6 de cada 10 visitantes sin costo publicitario.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 p-5 border rounded-2xl bg-gray-50/70 border-gray-200/80 text-[lab(29%_-0.04_-7.9)]">
                    <div className="shrink-0 mt-0.5"><Trophy className="w-5 h-5 text-[#27313B]" /></div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider">Carreras Ancla: Diseño Industrial y Modas</h4>
                      <p className="text-xs font-medium leading-relaxed text-gray-600">
                        Entre ambas carreras concentran más de 39.000 visitas en el acumulado anual. Representan los dos mayores motores de interés y tracción de prospectos de La Metro.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 p-5 border rounded-2xl bg-gray-50/70 border-gray-200/80 text-[lab(29%_-0.04_-7.9)]">
                    <div className="shrink-0 mt-0.5"><Globe className="w-5 h-5 text-[#27313B]" /></div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider">Expansión e Interés Internacional</h4>
                      <p className="text-xs font-medium leading-relaxed text-gray-600">
                        Se consolidan visitas internacionales notables, lideradas por Estados Unidos (1.830), Argentina (836), México (346) y Chile (250), demostrando potencial de atracción regional.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            /* =========================================================================
               VIEW MODE: MONTHLY (AGOSTO O JULIO 2026)
               ========================================================================= */
            <div className="space-y-14">
              {/* Section 1: Resumen Ejecutivo (Vista Rápida) - 6 Cards en 3x2 */}
              <section id="overview" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <BarChart3 className="w-5 h-5 text-[#27313B]" /> Resumen Ejecutivo (Vista Rápida)
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">
                    {selectedMonth === "july" ? "Julio 2026" : "Agosto 2026"}
                  </span>
                </div>
                
                {/* 6 Metric Cards Grid (3 Columns x 2 Rows - Img 2 Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {currentExecutiveMetrics.map((metric) => (
                    <MetricCard key={metric.id} metric={metric} />
                  ))}
                </div>
              </section>

              {/* Section 2: Ranking de Carreras de La Metro */}
              <section id="careers" className="scroll-mt-20 space-y-6">
                <CareerRanking />
              </section>

              {/* Section 3: Tendencias de Tráfico */}
              <section id="trends" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <TrendingUp className="w-5 h-5 text-[#27313B]" /> Tendencias de Tráfico
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Tráfico diario</span>
                </div>
                <CustomLineChart data={dailyTraffic} />
              </section>

              {/* Section 4: Páginas Principales y Artículos de Blog */}
              <section id="pages" className="scroll-mt-20 space-y-8">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-[#27313B]" /> Páginas y Artículos Más Visitados
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">WP Statistics</span>
                </div>
                
                {/* Main Pages Table */}
                <div className="grid grid-cols-1 gap-6">
                  <DataTable 
                    title="Páginas y secciones institucionales con mayor tráfico"
                    subtitle="Listado detallado de las secciones principales, portales y carreras consultadas por los usuarios."
                    data={topPages}
                    columns={pageColumns}
                    linkKey="page"
                  />
                </div>

                {/* Blog Articles & News Table */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#27313B] text-white">
                        <Newspaper className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[lab(29%_-0.04_-7.9)]">Artículos de Blog y Noticias Más Leídos</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Entradas informativas que atraen tráfico orgánico constante y resuelven dudas vocacionales de aspirantes</p>
                      </div>
                    </div>

                    <div className="overflow-x-auto border border-gray-100 rounded-xl mt-4">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-100 bg-gray-50/70 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                            <th className="px-5 py-3">Título del Artículo</th>
                            <th className="px-5 py-3">Categoría</th>
                            <th className="px-5 py-3 text-right">Vistas Mensuales</th>
                            <th className="px-5 py-3 text-right">Vistas Anuales</th>
                            <th className="px-5 py-3">Impacto / Utilidad SEO</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-xs">
                          {topBlogPosts.map((post, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/40 text-gray-700 font-semibold">
                              <td className="px-5 py-3.5 font-bold text-[lab(29%_-0.04_-7.9)]">{post.title}</td>
                              <td className="px-5 py-3.5">
                                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md text-[10px] font-medium">
                                  {post.category}
                                </span>
                              </td>
                              <td className="px-5 py-3.5 text-right font-bold text-[lab(29%_-0.04_-7.9)]">{post.monthlyViews}</td>
                              <td className="px-5 py-3.5 text-right text-gray-500">{post.annualViews}</td>
                              <td className="px-5 py-3.5 text-[11px] text-gray-500 font-normal">{post.impact}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Palabras Clave (SEO) por Carrera */}
              <section id="keywords" className="scroll-mt-20 space-y-6">
                <KeywordsSection />
              </section>

              {/* Section 6: Demografía y Dispositivos */}
              <section id="demographics" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <Globe className="w-5 h-5 text-[#27313B]" /> Dispositivos y Demografía
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Perfil técnico</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomBarChart 
                    title="Distribución por Dispositivos de Acceso"
                    subtitle="Equipos desde los cuales acceden los aspirantes (Smartphone dominante con 82.6%)."
                    data={deviceCategories}
                    labelKey="category"
                    valueKey="views"
                    percentageKey="percentage"
                  />
                  <CustomBarChart 
                    title="Distribución por Países"
                    subtitle="Ubicación geográfica de los usuarios según su dirección IP (95.3% Ecuador)."
                    data={topCountries}
                    labelKey="country"
                    valueKey="visitors"
                    percentageKey="percentage"
                    iconKey="flag"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <CustomBarChart 
                    title="Navegadores Principales"
                    subtitle="Distribución de navegadores web utilizados por el tráfico web."
                    data={topBrowsers}
                    labelKey="browser"
                    valueKey="views"
                    percentageKey="percentage"
                  />
                </div>
              </section>

              {/* Section 6: Fuentes y Referidos */}
              <section id="referrals" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <ArrowUpRight className="w-5 h-5 text-[#27313B]" /> Orígenes de Tráfico y Referidos
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Adquisición</span>
                </div>
                
                {/* Explanatory Banner on Referrals */}
                <ReferralBanner />

                {/* Monthly detailed referrers */}
                <div className="grid grid-cols-1 gap-6">
                  <DataTable 
                    title="Top Referidores (Dominios Externos)"
                    subtitle="Sitios web externos y portales que dirigieron tráfico de enlaces a www.lametro.edu.ec."
                    data={topReferrers}
                    columns={referrerColumns}
                  />
                </div>

                {/* Breakdown of Search Engines & Social Media */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DataTable 
                    title="Motores de Búsqueda (Buscadores)"
                    subtitle="Desglose detallado del tráfico proveniente de buscadores (Google orgánico, campañas pagas y buscadores secundarios)."
                    data={searchEnginesBreakdown}
                    columns={searchEngineColumns}
                  />
                  <DataTable 
                    title="Tráfico desde Redes Sociales"
                    subtitle="Desglose detallado del tráfico redirigido por enlaces compartidos en redes sociales (Facebook y TikTok liderando)."
                    data={socialMediaBreakdown}
                    columns={socialMediaColumns}
                  />
                </div>
              </section>

              {/* Section 7: Google Search Console (SEO) */}
              <section id="seo" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <Search className="w-5 h-5 text-[#27313B]" /> Google Search Console (SEO)
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Últimos 28 Días</span>
                </div>

                {/* GSC explanatory warning card */}
                <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-5 md:p-6">
                  <div className="flex items-start gap-3.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#27313B] text-white shrink-0 mt-0.5">
                      <Search className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-[lab(29%_-0.04_-7.9)] uppercase tracking-wider">¿Qué mide Google Search Console en comparación con WordPress?</h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-medium">
                        <strong>Google Search Console</strong> se enfoca de manera exclusiva en el posicionamiento orgánico en el buscador de Google. WordPress (WP Statistics), en cambio, mide la masa de audiencia total: incluye a todos los usuarios que hicieron clic desde descripciones de YouTube, perfiles de TikTok, chats directos de WhatsApp, anuncios pagados o escribiendo directamente el dominio de La Metro. Ambos datos son complementarios.
                      </p>
                    </div>
                  </div>
                </div>

                {/* GSC Metrics Grid (6 Cards en 3x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {gscMetrics.map((metric) => (
                    <MetricCard key={metric.id} metric={metric} />
                  ))}
                </div>

                {/* GSC Pages Table */}
                <div className="grid grid-cols-1 gap-6">
                  <DataTable 
                    title="Rendimiento de Páginas Orgánicas en Google (GSC)"
                    subtitle="Páginas que atrajeron la mayor cantidad de clics directos de búsquedas no pagas en Google."
                    data={gscPagesPerformance}
                    columns={gscPageColumns}
                    linkKey="page"
                  />
                </div>

                {/* GSC vs WP Channel Comparison Table */}
                <div className="grid grid-cols-1 gap-6">
                  <DataTable 
                    title="Cuadro Comparativo: Canales Medidos por Cada Herramienta"
                    subtitle="Explicación detallada de cómo se rastrea cada canal en Google Search Console frente a WordPress."
                    data={gscVsWpComparison}
                    columns={gscVsWpColumns}
                  />
                </div>

                {/* GSC / SEO Specific Conclusions (Minimalist Gray/Rose) */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 space-y-4">
                  <h4 className="text-sm font-bold text-[lab(29%_-0.04_-7.9)] uppercase tracking-wider">Conclusiones de Posicionamiento Orgánico (SEO)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seoConclusions.map((item, idx) => {
                      const isAlert = item.type === "alert";
                      return (
                        <div 
                          key={idx} 
                          className={`flex items-start gap-3 p-4 border rounded-xl ${
                            isAlert 
                              ? "bg-rose-50/40 border-rose-200/70 text-rose-950" 
                              : "bg-gray-50/60 border-gray-100 text-[lab(29%_-0.04_-7.9)]"
                          }`}
                        >
                          <div className="shrink-0 mt-0.5">
                            {isAlert ? <AlertCircle className="w-4 h-4 text-rose-600" /> : <FileText className="w-4 h-4 text-[#27313B]" />}
                          </div>
                          <div className="space-y-0.5">
                            <h5 className={`text-[11px] font-bold uppercase tracking-wider ${isAlert ? "text-rose-900" : "text-[lab(29%_-0.04_-7.9)]"}`}>
                              {item.title}
                            </h5>
                            <p className={`text-xs leading-relaxed font-medium ${isAlert ? "text-rose-900/90" : "text-gray-600"}`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Section 8: Analítica de Contenido */}
              <section id="content" className="scroll-mt-20 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[lab(29%_-0.04_-7.9)] flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-[#27313B]" /> Analítica de Contenido
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">Contenido Blog</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-white border border-gray-100 rounded-2xl">
                    <p className="text-xs font-semibold text-gray-400 uppercase">Entradas Publicadas</p>
                    <p className="text-3xl font-bold text-[lab(29%_-0.04_-7.9)] mt-2 flex items-baseline gap-2">
                      {contentAnalytics.publishedEntradas}
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {contentAnalytics.publishedEntradasChange}
                      </span>
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">Nuevos contenidos publicados en el mes.</p>
                  </div>
                  <div className="p-5 bg-white border border-gray-100 rounded-2xl">
                    <p className="text-xs font-semibold text-gray-400 uppercase">Visitantes en Artículos</p>
                    <p className="text-3xl font-bold text-[lab(29%_-0.04_-7.9)] mt-2 flex items-baseline gap-2">
                      {formatNumber(contentAnalytics.visitors)}
                      <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">
                        {contentAnalytics.visitorsChange}
                      </span>
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">Usuarios que interactuaron con noticias y entradas.</p>
                  </div>
                  <div className="p-5 bg-white border border-gray-100 rounded-2xl">
                    <p className="text-xs font-semibold text-gray-400 uppercase">Páginas Vistas en Artículos</p>
                    <p className="text-3xl font-bold text-[lab(29%_-0.04_-7.9)] mt-2 flex items-baseline gap-2">
                      {formatNumber(contentAnalytics.views)}
                      <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">
                        {contentAnalytics.viewsChange}
                      </span>
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">Visualizaciones totales en el blog.</p>
                  </div>
                </div>
              </section>

              {/* Section 9: Conclusiones */}
              <section id="conclusions" className="scroll-mt-20">
                <Conclusions />
              </section>
            </div>
          )}

          {/* Section 10: Glosario y FAQs (Visible en todos los modos) */}
          <section id="glossary" className="scroll-mt-20">
            <Glossary />
          </section>

        </main>
      </div>
    </div>
  );
}
