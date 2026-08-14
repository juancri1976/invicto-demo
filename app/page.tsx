"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import Link from "next/link";
import Image from "next/image"; 
import { 
  ShieldCheck, 
  Zap, 
  Layers, 
  Trophy, 
  Star
} from "lucide-react";

export default function Home() {
  const clubesreales = [
    { nombre: "Club Atlético Brown ", liga: "San Vicente", imagen: "/images/brown.png" },
    { nombre: "Club Peñarol ", liga: "Rafaela", imagen: "/images/pena.jpg" },
    { nombre: "Club Lago Argentino", liga: "El Calafate", imagen: "/images/lago.jpg" },
    { nombre: "Atlético Ceres Union", liga: "Ceres", imagen: "/images/cacu4.jpeg" },
    { nombre: "Tribu Huayna", liga: "Santa Fe", imagen: "/images/huayna.jpeg" },
    { nombre: "Tiro Federal", liga: "Moises Ville", imagen: "/images/tf.jpeg" },
    { nombre: "Club Moreno", liga: "Lehmann", imagen: "/images/lm.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-invicto-light text-invicto-dark font-poppins">
      <Navbar />

      {/* 1. HERO SECTION DINÁMICO */}
      <Hero />

      {/* 2. VENTAJAS: Por qué elegir Invicto */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase text-invicto-dark mb-4">
            El estándar profesional para tu club
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            A través de un sistema de alto nivel, vestimos tu pasión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-4 mx-auto md:mx-0">
              <Layers size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Diseño Sublimado</h3>
            <p className="text-gray-500 text-sm">Tramas integradas al tejido que jamás se borran, agrietan ni pierden el brillo original.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-4 mx-auto md:mx-0">
              <Zap size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Sin Mínimos</h3>
            <p className="text-gray-700 text-sm font-semibold">¿Te falta uno para el banco? <span className="text-gray-500 font-normal">Pedí desde 1 sola prenda de reposición con el mismo diseño.</span></p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-4 mx-auto md:mx-0">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Telas Dry-Fit</h3>
            <p className="text-gray-500 text-sm">Poliéster tecnológico de alta respirabilidad con micro-perforaciones para máxima exigencia física.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center md:text-left">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-4 mx-auto md:mx-0">
              <Trophy size={24} />
            </div>
            <h3 className="font-oswald text-xl font-bold uppercase mb-2">Carga Express</h3>
            <p className="text-gray-500 text-sm">Subí tus sponsors y cargá el talle y número de todo tu plantel en un par de clics.</p>
          </div>
        </div>
      </section>

      {/* 3. MÁS DE 100 CLUBES YA VISTEN INVICTO */}
      <section className="bg-invicto-dark text-white py-20 overflow-hidden relative border-y border-gray-800">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-invicto-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-invicto-dark to-transparent z-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-gray-300 font-oswald font-bold tracking-widest uppercase text-xs bg-white/10 px-3 py-1 rounded-full inline-block mb-3 border border-white/20">
                Siempre INVICTO
              </span>
              <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase tracking-tight">
                MÁS DE 100 CLUBES YA VISTEN <span className="text-white">INVICTO</span>
              </h2>
              <p className="text-gray-400 font-poppins font-medium text-sm md:text-base mt-2">
                Clubes reales. Camisetas reales.
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

        {/* Carrusel Deslizable */}
        <div className="flex gap-6 overflow-x-auto px-8 md:px-32 pb-6 scrollbar-none snap-x snap-mandatory">
          {clubesreales.map((club, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[260px] md:w-[300px] bg-white/5 border border-white/10 rounded-2xl p-5 snap-center hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-grab active:cursor-grabbing flex flex-col"
            >
              <div className="w-full h-[320px] md:h-[380px] rounded-xl mb-5 relative overflow-hidden bg-gray-900 border border-white/5">
                <Image 
                  src={club.imagen} 
                  alt={`Camiseta oficial de ${club.nombre}`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 260px, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h4 className="font-oswald text-lg font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                    {club.nombre}
                  </h4>
                  <p className="text-xs text-gray-400 font-poppins mt-0.5">
                    {club.liga}
                  </p>
                </div>
                <span className="text-[10px] bg-white/10 text-white font-bold px-2 py-0.5 rounded border border-white/20 font-mono mt-1">
                  VER
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PASO A PASO VISUAL */}
      <section className="bg-white py-20 border-b border-gray-100">
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
                  <div className="w-8 h-8 rounded-full bg-invicto-dark text-white flex items-center justify-center font-oswald font-bold flex-shrink-0">
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
          
          {/* TARJETA LABORATORIO 3D RENOVADA */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden border border-white/10 group">
              
              {/* Glow Magenta suave de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-invicto-magenta/15 rounded-full blur-3xl pointer-events-none group-hover:bg-invicto-magenta/25 transition-all duration-700"></div>

              {/* Encabezado de la Tarjeta */}
              <div className="relative z-10">
                <span className="text-[10px] font-mono font-bold text-invicto-magenta bg-invicto-magenta/10 border border-invicto-magenta/20 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
                  Configurador Pro
                </span>
                <h3 className="font-oswald text-3xl font-bold text-white uppercase mb-2">
                  Probá el Laboratorio 3D
                </h3>
                <p className="font-poppins text-gray-400 text-sm max-w-sm mx-auto mb-8 font-light">
                  Experimentá con texturas fotorrealistas, tramas futuristas y colores en tiempo real.
                </p>
              </div>

              {/* Visor de Estudio 3D (Simulador de pantalla del creador) */}
              <div className="relative w-full h-[280px] bg-black/60 rounded-2xl border border-white/10 p-4 mb-8 flex items-center justify-center overflow-hidden backdrop-blur-sm group-hover:border-invicto-magenta/40 transition-colors duration-500">
                
                {/* Grilla de fondo del visor */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Punteros de Enfoque de Cámara (Esquinas Técnicas) */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-invicto-magenta/60"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-invicto-magenta/60"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-invicto-magenta/60"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-invicto-magenta/60"></div>

                {/* Tag de Rendimiento en vivo */}
                <div className="absolute top-3 left-8 flex items-center gap-1.5 font-mono text-[10px] text-gray-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  RENDER 60 FPS
                </div>

                {/* Imagen del Mockup Flotando */}
                <div className="relative w-48 h-56 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1 z-10">
                  <Image 
                    src="/images/mockup.png" 
                    alt="Preview Laboratorio 3D Invicto" 
                    fill 
                    className="object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
                  />
                </div>

                {/* Paleta de Colores Simulada (Inferior) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md z-20">
                  <span className="w-3 h-3 rounded-full bg-invicto-magenta ring-2 ring-white/50"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="text-[10px] font-mono text-gray-300 ml-1">3D PALETTE</span>
                </div>
              </div>

              {/* Botón de Acción */}
              <Link 
                href="/crear" 
                className="relative z-10 w-full block bg-white text-invicto-dark font-oswald font-bold text-lg py-4 rounded-xl transition-all duration-300 group-hover:bg-invicto-magenta group-hover:text-invicto-dark group-hover:shadow-[0_0_25px_rgba(255,43,214,0.4)]"
              >
                INGRESAR AL CONFIGURADOR
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN ARTÍCULOS (Estilo Editorial / Revista Limpio) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-gray-500 font-oswald font-bold tracking-widest uppercase text-xs bg-gray-200/50 px-3 py-1 rounded-full inline-block mb-3 border border-gray-300">
                Novedades & Servicios
              </span>
              <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase tracking-tight text-invicto-dark">
                SIEMPRE <span className="text-invicto-dark">INVICTO</span>
              </h2>
            </div>
            
          </div>

          {/* GRILLA DE IMÁGENES CON TEXTO INTEGRADO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Artículo 1 */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-invicto-dark/50 transition-colors duration-300">
              <Image 
                src="/images/tienda.png" 
                alt="Tienda Online Invicto" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-oswald text-2xl font-bold text-white uppercase leading-tight mb-2 group-hover:text-gray-300 transition-colors">
                  Tu propia Tienda Online
                </h3>
                <p className="font-poppins text-sm text-gray-300 line-clamp-3">
                  Eleginos como sponsor técnico de la temporada, y te creamos tu propia tienda para que venda toda la indumentaria oficial de tu club! ®️
                </p>
              </div>
            </div>

            {/* Artículo 2 (Actualizado a Marca Registrada) */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-invicto-dark/50 transition-colors duration-300">
              <Image 
                src="/images/media.jpg" 
                alt="Equipos Invicto" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-oswald text-2xl font-bold text-white uppercase leading-tight mb-2 group-hover:text-gray-300 transition-colors">
                  Marca Registrada
                </h3>
                <p className="font-poppins text-sm text-gray-300 line-clamp-3">
                 Oficialmente tenemos el derecho exclusivo sobre nuestra marca el cual nos consolida como empresa y nos permite seguir ofreciendo credibilidad, confianza y calidad en todos nuestros productos. Nº REG. 3.703.814
                </p>
              </div>
            </div>

            {/* Artículo 3 */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-invicto-dark/50 transition-colors duration-300">
              <Image 
                src="/images/impresora.jpg" 
                alt="Impresión Sublimación" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-oswald text-2xl font-bold text-white uppercase leading-tight mb-2 group-hover:text-gray-300 transition-colors">
                  Impresión por sublimación
                </h3>
                <p className="font-poppins text-sm text-gray-300 line-clamp-3">
                  Todo sobre el proceso de impresión textil. Si eres un club deportivo que busca el mejor proceso, tarde o temprano te toparás con esto.
                </p>
              </div>
            </div>

            {/* Artículo 4 */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-invicto-dark/50 transition-colors duration-300">
              <Image 
                src="/images/conjunto.jpg" 
                alt="Vestimos tu Pasión" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-oswald text-2xl font-bold text-white uppercase leading-tight mb-2 group-hover:text-gray-300 transition-colors">
                  Vestimos tu pasión
                </h3>
                <p className="font-poppins text-sm text-gray-300 line-clamp-3">
                  No importa qué deporte hagas, tenemos los mejores diseños para todas las disciplinas, como así también conjuntos, buzos y camperas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}