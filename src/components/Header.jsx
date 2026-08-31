"use client";

import React from "react";
import { Menu, Calendar, FileDown } from "lucide-react";
import { reportPeriod } from "@/data/reportData";

export default function Header({ setIsOpen }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-100/80 backdrop-blur-md">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="p-1 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 lg:hidden cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-400 hidden sm:block" />
          <h1 className="text-sm font-bold text-[lab(29%_-0.04_-7.9)] sm:text-base">
            Reporte Orgánico de Tráfico Web La Metro · <span className="text-gray-500 font-normal">Isa Flores</span>
          </h1>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Print/Export button */}
        <button
          onClick={handlePrint}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <FileDown className="w-4 h-4" />
          Imprimir / PDF
        </button>
      </div>
    </header>
  );
}
