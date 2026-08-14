"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      className="relative w-full h-[88vh] min-h-[650px] flex items-center overflow-hidden bg-[#0A0A0A]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* 1. GRILLA TÉCNICA (Micro-Parallax) */}
      <div 
        className="absolute inset-[-5%] z-0 opacity-15 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,229,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.2) 1px, transparent 1px)',
          backgroundSize: '45px 45px',
          transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
        }}
      />

      {/* 2. GLOW CIAN CENTRADO A LA DERECHA */}
      <div 
        className="absolute top-1/2 -right-10 md:-right-4 lg:right-4 w-[550px] md:w-[700px] h-[550px] md:h-[700px] bg-invicto-magenta/20 rounded-full blur-[140px] pointer-events-none z-0 transition-transform duration-1000 ease-out animate-pulse"
        style={{
          transform: `translate(50%, calc(-50% + ${mousePos.y * 18}px))`,
          animationDuration: '6s'
        }}
      />

      {/* 3. ESCUDO MARCA DE AGUA (Corregido 1 cm más a la derecha) */}
      <div 
        className="absolute top-1/2 -right-20 md:-right-12 lg:-right-6 w-[500px] md:w-[680px] h-[500px] md:h-[680px] pointer-events-none z-0 opacity-15 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -14}px, calc(-50% + ${mousePos.y * -14}px)) rotate(${mousePos.x * -2}deg)`,
        }}
      >
        <Image 
          src="/images/logo.png" 
          alt="Escudo Invicto Sello" 
          fill 
          className="object-contain filter grayscale brightness-200"
          priority
        />
      </div>

      {/* 4. DESTELLOS DE ESTRELLAS SÚPER FINAS (Tamaño micro y brillo sutil) */}
      <div 
        className="absolute top-1/2 -right-20 md:-right-12 lg:-right-6 w-[500px] md:w-[680px] h-[500px] md:h-[680px] pointer-events-none z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 10}px, calc(-50% + ${mousePos.y * 10}px))`,
        }}
      >
        <span className="absolute top-[15%] left-[20%] w-1 h-1 rounded-full bg-invicto-magenta shadow-[0_0_4px_#00E5FF] animate-ping" style={{ animationDuration: '3s' }}></span>
        <span className="absolute top-[25%] right-[18%] w-1 h-1 rounded-full bg-white shadow-[0_0_3px_#fff] animate-pulse" style={{ animationDuration: '2s' }}></span>
        <span className="absolute top-[60%] left-[10%] w-1 h-1 rounded-full bg-invicto-magenta shadow-[0_0_4px_#00E5FF] animate-pulse" style={{ animationDuration: '4s' }}></span>
        <span className="absolute bottom-[20%] right-[25%] w-1 h-1 rounded-full bg-invicto-magenta shadow-[0_0_4px_#00E5FF] animate-ping" style={{ animationDuration: '2.5s' }}></span>
        <span className="absolute top-[40%] right-[8%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_4px_#60A5FA] animate-pulse" style={{ animationDuration: '3.5s' }}></span>
        <span className="absolute bottom-[15%] left-[25%] w-1 h-1 rounded-full bg-white shadow-[0_0_3px_#fff] animate-ping" style={{ animationDuration: '4s' }}></span>
      </div>

      {/* 5. LÍNEAS TÉCNICAS LATERALES VERTICALES */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10 opacity-30 pointer-events-none">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-invicto-magenta"></div>
        <span className="font-mono text-[10px] text-invicto-magenta tracking-widest [writing-mode:vertical-lr] uppercase">INVICTO LABS v2.0</span>
        <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-invicto-magenta"></div>
      </div>

      {/* 6. CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center">
        
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left animate-in fade-in slide-in-from-left-6 duration-1000 ease-out">
          
          {/* Badge Flotante "Status" */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-invicto-magenta/30 bg-invicto-magenta/5 text-invicto-magenta text-xs font-oswald tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.08)] cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-invicto-magenta animate-ping absolute"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-invicto-magenta relative"></span>
            Sistema de Diseño 3D en línea
          </div>

          {/* Título Principal */}
          <h1 className="font-oswald text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-2xl leading-[1.08]">
            Diseñá tu armadura.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-invicto-magenta via-cyan-300 to-blue-400">Vení a ganar.</span>
          </h1>

          {/* Subtítulo */}
          <p className="font-poppins text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-normal drop-shadow-md cursor-default">
            Fábrica de indumentaria deportiva premium. 
            Configurá colores, tramas futuristas, sponsors y dorsales en tiempo real con calidad profesional certificada.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/crear"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-invicto-magenta text-invicto-dark font-oswald font-bold text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,229,255,0.35)]"
            >
              IR AL CONFIGURADOR 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="catalogo"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-oswald font-bold text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              EXPLORAR CATÁLOGO
            </a>
          </div>

          {/* Badges de Garantía inferior */}
          <div className="mt-14 flex items-center gap-6 border-t border-white/10 pt-6 opacity-70 cursor-default">
            <div className="flex items-center gap-2 font-poppins text-xs uppercase tracking-wider text-gray-300 font-medium">
              <ShieldCheck size={16} className="text-invicto-magenta" /> Calidad Pro
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2 font-poppins text-xs uppercase tracking-wider text-gray-300 font-medium">
              <span className="font-mono font-bold text-invicto-magenta">HQ</span> Render en tiempo real
            </div>
          </div>
        </div>

      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-invicto-light to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}