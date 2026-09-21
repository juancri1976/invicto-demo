"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { MessageCircle, Heart, ShieldCheck, Shirt } from "lucide-react";

export default function PromoPage() {
  const enviarPromoWhatsApp = () => {
    const numeroDeVentas = "5493492628261"; // <-- ACÁ PONÉ TU NÚMERO DE WHATSAPP
    const texto = `¡Hola Invicto! Vengo de la web y me interesa la edición especial OCTUBRE ROSA para mi equipo. ¿Me podrían pasar más info y presupuesto?`;
    window.open(`https://wa.me/${numeroDeVentas}?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-poppins pb-20">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10 relative z-10">

        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 text-pink-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Heart size={14} className="animate-pulse" />
            Campaña Solidaria / Edición Limitada
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl font-black text-white uppercase mb-4 tracking-tight drop-shadow-lg">
            OCTUBRE <span className="text-pink-500">ROSA</span>
          </h1>
          <p className="font-poppins text-gray-400 text-lg max-w-2xl mx-auto">
            Homenaje a la lucha contra el cáncer de mama. Juguemos juntos el partido más importante.
          </p>
        </div>

        {/* SPLIT LAYOUT: Imagen a la izquierda, Contenido a la derecha */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* COLUMNA IZQUIERDA: IMAGEN */}
          <div className="w-full lg:w-1/2 relative flex">
            <div className="relative w-full min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.15)] border border-pink-500/20 group flex-1 flex items-center justify-center">

              {/* Efecto de fondo desenfocado (Blur) para rellenar los bordes negros */}
              <Image
                src="/images/octubre.png"
                alt="Fondo blur"
                fill
                className="object-cover opacity-30 blur-3xl scale-110 pointer-events-none"
              />

              {/* Imagen Principal */}
              <Image
                src="/images/octubre.jpg"
                alt="Octubre Rosa - Invicto Indumentaria"
                fill
                className="object-contain z-10 relative group-hover:scale-[1.03] transition-transform duration-700 ease-out p-4"
                priority
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: INFO Y CTA */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-between">

            {/* Info de producto */}
            <div className="flex-1 bg-white/[0.03] backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
              <h2 className="font-oswald text-3xl font-bold uppercase text-white mb-8">¿Qué incluye esta edición?</h2>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center flex-shrink-0 border border-pink-500/20">
                    <Shirt size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Diseños Exclusivo</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Elige entre el modelo de franjas anchas o el diseño de líneas finas. Disponibles en moldería anatómica Masculina y Femenina para todo el plantel.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center flex-shrink-0 border border-pink-500/20">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Personalización Total</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Agregamos el escudo de tu club, nombre de cada jugador, números y todos tus sponsors sin costo extra.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caja de Acción (CTA) */}
            <div className="bg-gradient-to-br from-pink-600/20 to-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-pink-500/30 text-center shadow-2xl relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-4 z-10 relative">Vestí a tu equipo por una buena causa</h3>
              <p className="text-gray-300 text-sm mb-8 z-10 relative max-w-sm mx-auto">
                Contactate ahora con nuestro equipo de ventas para coordinar talles, escudos y tiempos de entrega de esta edición exclusiva.
              </p>

              <button
                onClick={enviarPromoWhatsApp}
                className="w-full bg-pink-600 text-white font-oswald font-bold text-xl py-5 rounded-xl hover:bg-pink-500 transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] flex items-center justify-center gap-3 z-10 relative"
              >
                <MessageCircle size={26} />
                ENCARGAR AHORA
              </button>
              <span className="block mt-5 text-[10px] text-gray-500 font-mono uppercase tracking-widest z-10 relative">
                Atención inmediata por WhatsApp
              </span>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}