"use client";

import React from "react";
import { HelpCircle, Share2, Search, Link2 } from "lucide-react";

export default function ReferralBanner() {
  return (
    <div className="bg-[#EB0027]/[0.03] border border-[#EB0027]/15 rounded-2xl p-5 md:p-6 mb-6">
      <div className="flex items-start gap-3.5">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#EB0027] text-white shrink-0 mt-0.5">
          <HelpCircle className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-[#27313B]">¿Qué es el Tráfico de Referidos (Referrals)?</h4>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            Representa a los visitantes que llegan a la web de La Metro haciendo clic en un enlace ubicado en <strong className="text-[#27313B]">otra plataforma o web externa</strong> (como un video de YouTube, el perfil de TikTok, Facebook o una noticia recomendada), sin necesidad de escribir la dirección URL directamente en la barra del navegador.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            <div className="flex items-start gap-2.5 p-3 bg-white border border-[#EB0027]/15 rounded-xl shadow-2xs">
              <Search className="w-4 h-4 text-[#EB0027] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-bold text-[#27313B]">Motores de Búsqueda</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-normal">Visitas desde Google o Bing al buscar temas afines o diseño.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 bg-white border border-[#EB0027]/15 rounded-xl shadow-2xs">
              <Share2 className="w-4 h-4 text-[#EB0027] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-bold text-[#27313B]">Redes Sociales</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-normal">Tráfico de enlaces en perfiles, historias y posts de TikTok y Facebook.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 bg-white border border-[#EB0027]/15 rounded-xl shadow-2xs">
              <Link2 className="w-4 h-4 text-[#EB0027] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-bold text-[#27313B]">Sitios Externos</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-normal">Recomendaciones en blogs, notas de prensa y portales aliados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
