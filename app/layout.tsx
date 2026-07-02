import type { Metadata } from "next";
// Importamos las dos tipografías desde Google Fonts
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

// Configuramos Oswald (ideal para los títulos en mayúscula)
const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
});

// Configuramos Poppins (ideal para los textos largos y botones)
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Invicto | Diseño de Indumentaria Pro",
  description: "Plataforma de equipamiento deportivo premium 100% personalizado.",
  icons: {
    // Apunta directamente a la ruta de tu logo oficial en la carpeta pública
    icon: "/images/logooficial.png", 
    apple: "/images/logooficial.png", // Opcional: Para cuando guardan la web en el iPhone
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Inyectamos las variables en el body para que Tailwind las reconozca */}
      <body className={`${oswald.variable} ${poppins.variable} font-poppins bg-invicto-light`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}