"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { MessageCircle, Shirt, ShieldCheck, ChevronDown } from "lucide-react";

export default function HockeyPage() {
  const enviarPromoWhatsApp = () => {
    const numeroDeVentas = "5493492419889"; // <-- REEMPLAZÁ CON TU WHATSAPP
    const texto = encodeURIComponent(
      "¡Hola Invicto! Vengo de la web y me interesa encargar la nueva indumentaria de HOCKEY (Musculosas, Polleras, Medias) para mi equipo. ¿Me pasarían presupuesto?"
    );
    window.open(`https://wa.me/${numeroDeVentas}?text=${texto}`, "_blank");
  };

  const scrollHaciaInfo = () => {
    document.getElementById("info-tecnica")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-poppins pb-0 text-white">
      {/* NAVBAR SUPERPUESTO */}
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      {/* 1. HERO SECTION Nuevo Estilo */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/images/hockey.png"
          alt="Invicto Hockey Collection"
          fill
          className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          priority
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60"></div>

        <div className="relative z-10 text-center px-4 mt-20">
          <span className="font-mono text-invicto-magenta text-sm md:text-base tracking-[0.3em] uppercase font-bold mb-4 block drop-shadow-md">
            Nueva División
          </span>
          <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-8 drop-shadow-2xl leading-none">
            HOCKEY <br className="md:hidden" /> COLLECTION
          </h1>
          
          <button
            onClick={enviarPromoWhatsApp}
            className="bg-white text-black hover:bg-invicto-magenta hover:text-white font-oswald font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,43,214,0.6)] hover:-translate-y-1 uppercase tracking-wide"
          >
            Encargar Ahora
          </button>
        </div>

        <button 
          onClick={scrollHaciaInfo}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce cursor-pointer z-10"
          aria-label="Ver más detalles"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* 2. SECCIÓN DE INFORMACIÓN Y CARACTERÍSTICAS VISUALES */}
      <section id="info-tecnica" className="relative z-20 bg-[#0A0A0A] py-24 max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase text-white mb-4">
            Indumentaria profesional para tu plantel
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Musculosas, Polleras con calza y Medias. Desarrolladas con tecnología de alto rendimiento para el máximo confort en la cancha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Tarjeta 1: Diseños Exclusivos */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl hover:border-invicto-magenta/30 transition-all group overflow-hidden flex flex-col shadow-2xl">
            {/* Contenedor de Imagen */}
            <div className="relative w-full h-64 overflow-hidden bg-black">
              <Image
                src="/images/hockey2.jpg"
                alt="Diseños Exclusivos Hockey"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Degradado para fundir la imagen con la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
            </div>
            
            {/* Contenido Texto */}
            <div className="px-8 pb-10 relative z-10 flex flex-col flex-1">
              {/* Ícono flotante */}
              <div className="w-14 h-14 rounded-full bg-[#0A0A0A] text-invicto-magenta flex items-center justify-center mb-5 -mt-7 border border-white/10 group-hover:border-invicto-magenta/50 group-hover:shadow-[0_0_20px_rgba(255,43,214,0.3)] transition-all">
                <Shirt size={26} />
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-3">
                Diseños Exclusivos
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                Elige entre el modelo de franjas anchas o el diseño de líneas finas. Disponibles en moldería anatómica Femenina para todo el plantel.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Personalización Total */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl hover:border-invicto-magenta/30 transition-all group overflow-hidden flex flex-col shadow-2xl">
            {/* Contenedor de Imagen */}
            <div className="relative w-full h-64 overflow-hidden bg-black">
              <Image
                src="/images/hockey3.jpeg"
                alt="Personalización Total Hockey"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Degradado para fundir la imagen con la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
            </div>
            
            {/* Contenido Texto */}
            <div className="px-8 pb-10 relative z-10 flex flex-col flex-1">
              {/* Ícono flotante */}
              <div className="w-14 h-14 rounded-full bg-[#0A0A0A] text-invicto-magenta flex items-center justify-center mb-5 -mt-7 border border-white/10 group-hover:border-invicto-magenta/50 group-hover:shadow-[0_0_20px_rgba(255,43,214,0.3)] transition-all">
                <ShieldCheck size={26} />
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-3">
                Personalización Total
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                Agregamos el escudo de tu club, nombre de cada jugador, números y todos tus sponsors sin costo extra. Mantené la identidad intacta.
              </p>
            </div>
          </div>

        </div>

        {/* 3. CAJA DE CONTACTO FINAL */}
        <div className="bg-gradient-to-br from-invicto-dark via-[#111] to-black border border-white/10 p-8 md:p-14 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-invicto-magenta/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="md:w-3/5 relative z-10 text-center md:text-left">
            <h3 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              Iniciá la temporada con nosotros
            </h3>
            <p className="text-gray-300 text-lg font-light">
              Contactate ahora con nuestro equipo de ventas para coordinar talles, escudos y tiempos de entrega de esta edición exclusiva.
            </p>
          </div>

          <div className="md:w-2/5 w-full relative z-10 flex flex-col items-center md:items-end">
            <button
              onClick={enviarPromoWhatsApp}
              className="w-full md:w-auto bg-invicto-magenta text-white font-oswald font-bold text-xl px-8 py-5 rounded-2xl hover:bg-pink-500 transition-all shadow-[0_0_20px_rgba(255,43,214,0.3)] hover:shadow-[0_0_30px_rgba(255,43,214,0.5)] flex items-center justify-center gap-3 uppercase"
            >
              <MessageCircle size={24} />
              ENCARGAR AHORA
            </button>
            <span className="block mt-4 text-xs text-gray-500 font-mono uppercase tracking-widest text-center md:text-right">
              Atención inmediata por WhatsApp
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}