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
  metadataBase: new URL("https://reporteweb-lametro.vercel.app"),
  title: "Reporte Orgánico de Tráfico Web La Metro - Isa Flores",
  description: "Dashboard interactivo de analítica web, métricas de visitas, SEO y rendimiento de carreras de La Metro por Isabel Flores.",
  applicationName: "La Metro Web Analytics",
  authors: [{ name: "Isabel Flores" }],
  creator: "Isabel Flores",
  publisher: "La Metro",
  openGraph: {
    title: "Reporte Orgánico de Tráfico Web La Metro - Isa Flores",
    description: "Dashboard interactivo de analítica web, métricas de visitas, SEO y rendimiento de carreras de La Metro por Isabel Flores.",
    url: "https://reporteweb-lametro.vercel.app",
    siteName: "La Metro Web Analytics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reporte Orgánico de Tráfico Web La Metro - Isa Flores",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reporte Orgánico de Tráfico Web La Metro - Isa Flores",
    description: "Dashboard interactivo de analítica web, métricas de visitas, SEO y rendimiento de carreras de La Metro por Isabel Flores.",
    images: ["/og-image.png"],
  },
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
