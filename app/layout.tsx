import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invicto-indumentaria.ar"),
  title: {
    default: "INVICTO | Indumentaria Deportiva Personalizada & Configurador 3D",
    template: "%s | INVICTO Indumentaria",
  },
  description:
    "Fábrica de indumentaria deportiva de alto rendimiento en Rafaela, Santa Fe. Diseñá las camisetas de fútbol, básquet y vóley de tu club en nuestro Laboratorio 3D. Envíos a todo el país y reposición sin mínimos.",
  keywords: [
    "camisetas deportivas personalizadas",
    "indumentaria deportiva sublimada",
    "camisetas de futbol personalizadas",
    "configurador 3d camisetas",
    "ropa deportiva para clubes",
    "conjuntos deportivos",
    "Invicto indumentaria",
    "Rafaela",
    "Santa Fe",
    "Argentina",
  ],
  authors: [{ name: "INVICTO Indumentaria Deportiva" }],
  creator: "INVICTO",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://invicto-indumentaria.ar",
    siteName: "INVICTO Indumentaria Deportiva",
    title: "INVICTO | Vestimos la pasión de tu club",
    description:
      "Armá el diseño de tu equipo en vivo con nuestro Configurador 3D. Calidad profesional Dry-Fit, sublimación total y envíos a toda la Argentina.",
    images: [
      {
        url: "/images/logooficial.png",
        width: 1200,
        height: 630,
        alt: "INVICTO Indumentaria Deportiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INVICTO | Vestimos la pasión de tu club",
    description:
      "Armá el diseño de tu equipo en vivo con nuestro Configurador 3D. Calidad profesional Dry-Fit, sublimación total y envíos a toda la Argentina.",
    images: ["/images/logooficial.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Objeto de datos estructurados para Google (LocalBusiness + ClothingStore)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "INVICTO Indumentaria Deportiva",
  "image": "https://invicto-indumentaria.ar/images/logooficial.png",
  "url": "https://invicto-indumentaria.ar",
  "description":
    "Fábrica de indumentaria deportiva personalizada y sublimada de alto rendimiento. Configurador 3D para clubes.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rafaela",
    "addressRegion": "Santa Fe",
    "addressCountry": "AR",
  },
  "areaServed": "AR",
  "priceRange": "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${oswald.variable} ${poppins.variable} font-poppins bg-invicto-light flex flex-col min-h-screen`}
      >
        {/* Inyección de Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <div className="flex-grow">{children}</div>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}