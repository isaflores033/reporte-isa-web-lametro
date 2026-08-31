import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reporte Orgánico de Tráfico Web La Metro - Isa Flores",
  description: "Dashboard interactivo de analítica web, métricas de visitas, SEO y rendimiento de carreras de La Metro por Isabel Flores.",
  openGraph: {
    title: "Reporte Orgánico de Tráfico Web La Metro - Isa Flores",
    description: "Dashboard interactivo de analítica web, métricas de visitas, SEO y rendimiento de carreras de La Metro por Isabel Flores.",
    siteName: "La Metro Web Analytics",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
