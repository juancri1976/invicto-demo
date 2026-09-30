"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { 
  MessageCircle, 
  Store, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

export default function TuTiendaPage() {
  const contactarSponsor = () => {
    const numeroDeVentas = "5493492628261"; // <-- REEMPLAZÁ POR TU NÚMERO DE WHATSAPP
    const texto = encodeURIComponent(
      "¡Hola Invicto! Quiero recibir información para elegirlos como sponsor técnico de nuestro club y activar nuestra propia Tienda Online."
    );
    window.open(`https://wa.me/${numeroDeVentas}?text=${texto}`, "_blank");
  };

  const beneficios = [
    {
      icono: <Store size={26} className="text-invicto-magenta" />,
      titulo: "Sin dolores de cabeza",
      desc: "Nosotros configuramos la plataforma, subimos el catálogo oficial de tu club y gestionamos cada pedido.",
    },
    {
      icono: <Globe size={26} className="text-invicto-magenta" />,
      titulo: "Ventas sin fronteras",
      desc: "Tus socios, hinchas y ex-jugadores pueden comprar desde cualquier punto del mundo las 24 horas.",
    },
    {
      icono: <ShieldCheck size={26} className="text-invicto-magenta" />,
      titulo: "Stock bajo demanda",
      desc: "Sin compras mínimas ni riesgo de mercadería clavada. Producimos y despachamos a medida que tus hinchas compran.",
    },
    {
      icono: <TrendingUp size={26} className="text-invicto-magenta" />,
      titulo: "Prestigio e identidad",
      desc: "Posicioná a tu institución al nivel de los clubes profesionales con una vidriera digital propia.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-poppins pb-24">
      <Navbar />

      {/* HERO CON IMAGEN DE FONDO HINCHAS.PNG */}
      <header className="relative min-h-[75vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Imagen de fondo */}
        <Image
          src="/images/hinchas.png"
          alt="Hinchas vistiendo indumentaria del club"
          fill
          className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          priority
        />

        {/* Capas de oscurecimiento y gradiente para legibilidad perfecta */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-invicto-magenta/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Contenido Central */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-12 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-invicto-magenta/15 border border-invicto-magenta/40 text-invicto-magenta px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(255,43,214,0.25)]">
            <Store size={14} />
            Sponsor Técnico Oficial
          </div>

          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-4 drop-shadow-2xl">
            Tu propia <span className="text-invicto-magenta">Tienda Online</span>
          </h1>

          <h2 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-gray-200 tracking-wide mb-6">
            Tu Club, Tu Tienda.
          </h2>

          <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            Te damos la oportunidad de ofrecer a tus socios e hinchas los productos <strong className="text-white font-semibold">Invicto</strong> de tu club en tu propia tienda.
          </p>

          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Eleginos como sponsor técnico de la temporada y empezá a vender la indumentaria a todo el mundo.
          </p>

          <button
            onClick={contactarSponsor}
            className="bg-invicto-magenta hover:bg-pink-500 text-white font-oswald font-bold text-lg md:text-xl px-10 py-5 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(255,43,214,0.4)] hover:shadow-[0_0_45px_rgba(255,43,214,0.6)] hover:-translate-y-0.5 inline-flex items-center gap-3 uppercase tracking-wide cursor-pointer"
          >
            <MessageCircle size={24} />
            Quiero la tienda para mi club
          </button>
        </div>
      </header>

      {/* SECCIÓN DE BENEFICIOS Y FUNCIONAMIENTO */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 -mt-10 relative z-20">
        
        {/* Grilla de 4 pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {beneficios.map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-invicto-magenta/40 p-7 rounded-3xl transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-invicto-magenta/10 border border-invicto-magenta/20 flex items-center justify-center mb-5">
                {item.icono}
              </div>
              <h3 className="font-oswald text-xl font-bold uppercase mb-2 text-white">
                {item.titulo}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bloque de cierre / CTA Secundario */}
        <div className="bg-gradient-to-br from-white/[0.06] to-transparent border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-2/3">
            <span className="font-mono text-xs uppercase tracking-widest text-invicto-magenta font-bold block mb-2">
              Alianza Estratégica
            </span>
            <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-4">
              ¿Qué incluye la tienda oficial de tu club?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mt-6">
              {[
                "Camisetas titulares y alternativas",
                "Conjuntos de viaje y entrenamiento",
                "Camperones, buzos y rompevientos",
                "Accesorios: gorras, medias y bolsos",
                "Atención directa para talles especiales",
                "Personalización con nombre y número",
              ].map((punto, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-invicto-magenta flex-shrink-0" />
                  <span>{punto}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 w-full bg-black/60 border border-white/10 p-8 rounded-2xl text-center">
            <p className="font-oswald text-xl uppercase font-bold mb-2">
              Hablemos de la próxima temporada
            </p>
            <p className="text-gray-400 text-xs mb-6">
              Asesoramiento directo para presidentes, comisiones directivas y delegados deportivos.
            </p>
            <button
              onClick={contactarSponsor}
              className="w-full bg-white text-black hover:bg-invicto-magenta hover:text-white font-oswald font-bold text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase cursor-pointer"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}