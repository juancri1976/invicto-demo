import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Invicto | Diseño de Indumentaria Pro",
  description: "Plataforma de equipamiento deportivo premium 100% personalizado.",
  icons: {
    icon: "/images/logooficial.png", 
    apple: "/images/logooficial.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${oswald.variable} ${poppins.variable} font-poppins bg-invicto-light flex flex-col min-h-screen`}>
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}