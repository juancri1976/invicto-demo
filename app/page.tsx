"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image"; // <--- Agregamos la importación de Image
import { ArrowRight, ShieldCheck, Zap, Layers, Trophy, Star } from "lucide-react";

export default function Home() {
  // Datos simulados actualizados apuntando a tus imágenes reales
  const clubesreales = [
    { nombre: "Florida de Clusellas", liga: "Liga Regional", imagen: "/images/club1.jpg" },
    { nombre: "Peñarol Rafaela", liga: "Torneo Federal", imagen: "/images/club2.jpg" },
    { nombre: "Tiro Moises Ville", liga: "Liga Comercial", imagen: "/images/club3.jpg" },
    { nombre: "Sportivo Norte", liga: "Liga Rafaelina", imagen: "/images/club4.jpg" },
    { nombre: "Quilmes Rafaela", liga: "Liga Rafaelina", imagen: "/images/club5.jpg" },
    { nombre: "Sportivo 24 Septiembre", liga: "Arroyito CBA.", imagen: "/images/club6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-invicto-light text-invicto-dark font-poppins">
      <Navbar />

      {/* 1. HERO SECTION: Impacto visual inmediato */}
      <header className="relative bg-invicto-dark text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-invicto-cyan/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-invicto-cyan/10 rounded-full blur-3xl z-0"></div>
        
        <div className="absolute right-0 bottom-0 md:top-12 lg:right-[-5%] w-[350px] md:w-[600px] h-[80%] md:h-[90%] opacity-15 md:opacity-20 z-0 pointer-events-none select-none filter grayscale contrast-125 transition-all duration-700 hover:opacity-25">
          <img 
            src="/images/logo.png" 
            alt="Logo Marca Invicto Fondo" 
            className="w-full h-full object-contain object-right-bottom md:object-right-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="max-w-3xl">
           
            <h1 className="font-oswald text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Diseñá tu armadura.<br />
              <span className="text-invicto-cyan">Conquistá la cancha.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 font-medium max-w-2xl leading-relaxed">
              Creadores de indumentaria deportiva premium para equipos exigentes. Configurá colores, tramas, nombres y números en tiempo real con calidad de fábrica profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/crear" 
                className="bg-invicto-cyan text-invicto-dark font-oswald font-bold text-lg py-4 px-8 rounded-xl hover:bg-white hover:scale-[1.03] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                IR AL CONFIGURADOR
                <ArrowRight size={20} />
              </Link>
              <button className="border-2 border-gray-700 text-white font-oswald font-bold text-lg py-4 px-8 rounded-xl hover:border-white hover:bg-white/5 transition-colors">
                VER CATÁLOGO
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. VENTAJAS: Por qué elegir Invicto */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase text-invicto-dark mb-4">
            El estándar profesional para tu club
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Llevamos el proceso manual de planillas y chats de WhatsApp a un sistema digital automatizado de primer nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-invicto-cyan/10 rounded-xl flex items-center justify-center text-invicto-cyan mb-4 mx-auto md:mx-0">
              <Layers size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Diseño Sublimado</h3>
            <p className="text-gray-500 text-sm">Tramas integradas al tejido que jamás se borran, agrietan ni pierden el brillo original.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-invicto-cyan/10 rounded-xl flex items-center justify-center text-invicto-cyan mb-4 mx-auto md:mx-0">
              <Zap size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Sin Mínimos</h3>
            <p className="text-gray-700 text-sm font-semibold">¿Te falta uno para el banco? <span className="text-gray-500 font-normal">Pedí desde 1 sola prenda de reposición con el mismo diseño.</span></p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-invicto-cyan/10 rounded-xl flex items-center justify-center text-invicto-cyan mb-4 mx-auto md:mx-0">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Telas Dry-Fit</h3>
            <p className="text-gray-500 text-sm">Poliéster tecnológico de alta respirabilidad con micro-perforaciones para máxima exigencia física.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-invicto-cyan/10 rounded-xl flex items-center justify-center text-invicto-cyan mb-4 mx-auto md:mx-0">
              <Trophy size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Carga Express</h3>
            <p className="text-gray-500 text-sm">Subí tus sponsors y cargá el talle y número de todo tu plantel en un par de clics.</p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: MÁS DE 100 CLUBES YA VISTEN INVICTO --- */}
      <section className="bg-invicto-dark text-white py-20 overflow-hidden relative border-y border-gray-800">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-invicto-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-invicto-dark to-transparent z-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-invicto-cyan font-oswald font-bold tracking-widest uppercase text-xs bg-invicto-cyan/10 px-3 py-1 rounded-full inline-block mb-3 border border-invicto-cyan/20">
                Casos de Éxito
              </span>
              <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase tracking-tight">
                MÁS DE 100 CLUBES YA VISTEN <span className="text-invicto-cyan">INVICTO</span>
              </h2>
              <p className="text-gray-400 font-poppins font-medium text-sm md:text-base mt-2">
                Clubes reales. Camisetas reales. Siempre INVICTO
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400 font-oswald text-sm tracking-wider bg-white/5 px-4 py-2 rounded-xl border border-white/10 self-start md:self-auto">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="text-white ml-2 font-poppins text-xs text-gray-400">Calidad 5 Estrellas</span>
            </div>
          </div>
        </div>

        {/* Carrusel Deslizable Transversal con FOTOS REALES */}
        <div className="flex gap-6 overflow-x-auto px-8 md:px-32 pb-6 scrollbar-none snap-x snap-mandatory">
          {clubesreales.map((club, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[260px] md:w-[300px] bg-white/5 border border-white/10 rounded-2xl p-5 snap-center hover:border-invicto-cyan/40 hover:bg-white/[0.08] transition-all duration-300 group cursor-grab active:cursor-grabbing flex flex-col"
            >
              {/* Tarjeta de imagen real fotográfica */}
              <div className="w-full h-[320px] md:h-[380px] rounded-xl mb-5 relative overflow-hidden bg-gray-900 border border-white/5">
                <Image 
                  src={club.imagen} 
                  alt={`Camiseta oficial de ${club.nombre}`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 260px, 300px"
                />
                {/* Sombra interna sutil para darle profundidad a la foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info del Club (Intacta como pediste) */}
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h4 className="font-oswald text-lg font-bold uppercase tracking-wide group-hover:text-invicto-cyan transition-colors">
                    {club.nombre}
                  </h4>
                  <p className="text-xs text-gray-400 font-poppins mt-0.5">
                    {club.liga}
                  </p>
                </div>
                <span className="text-[10px] bg-invicto-cyan/10 text-invicto-cyan font-bold px-2 py-0.5 rounded border border-invicto-cyan/20 font-mono mt-1">
                  VER
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PASO A PASO VISUAL */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-oswald text-4xl font-bold uppercase text-invicto-dark mb-6 leading-tight">
              ¿Cómo funciona el <br />creador interactivo?
            </h2>
            <div className="space-y-6">
              {[
                { n: "1", t: "Elegí tu disciplina y corte", d: "Fútbol, básquet, vóley... seleccioná el molde anatómico ideal para tu equipo." },
                { n: "2", t: "Elegí colores y tramas dinámicas", d: "Combiná la paleta del club con bastones, ajedrez, aros horizontales y más." },
                { n: "3", t: "Subí sponsors e identidad", d: "Cargá los archivos PNG transparentes de tus escudos sin dar vueltas por chat." },
                { n: "4", t: "Detallá el plantel y listo", d: "Ingresá los nombres, números y talles individuales de cada jugador." }
              ].map((item) => (
                <div key={item.n} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-invicto-dark text-invicto-cyan flex items-center justify-center font-oswald font-bold flex-shrink-0">
                    {item.n}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-invicto-dark">{item.t}</h4>
                    <p className="text-gray-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-invicto-dark p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-invicto-cyan/10 rounded-full blur-2xl"></div>
              <h3 className="font-oswald text-2xl text-white uppercase mb-2">Probá el Laboratorio 3D</h3>
              <p className="font-poppins text-gray-400 text-sm mb-6">Experimentá con las arrugas reales de la tela y patrones en vivo.</p>
              <div className="bg-white/5 rounded-xl border border-white/10 p-6 inline-block mb-6 backdrop-blur-sm">
                <span className="text-invicto-cyan font-mono text-xs block mb-1">PREVIEW EN VIVO</span>
                <div className="w-32 h-32 mx-auto bg-invicto-cyan/20 rounded-full flex items-center justify-center animate-pulse">
                  <Trophy className="text-invicto-cyan" size={48} />
                </div>
              </div>
              <Link 
                href="/crear" 
                className="block bg-white text-invicto-dark font-oswald font-bold py-3 px-6 rounded-xl hover:bg-invicto-cyan hover:text-invicto-dark transition-colors"
              >
                INGRESAR AHORA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BÁSICO */}
      <footer className="bg-invicto-dark text-gray-500 text-center py-8 text-sm font-poppins border-t border-gray-800">
        <p>© 2026 INVICTO Indumentaria. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}