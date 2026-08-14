"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hexagon } from "lucide-react";

// Base de datos de productos (Mockup)
const productos = [
  { id: 1, nombre: 'Camiseta Elite Pro', categoria: 'Camisetas', deporte: 'Fútbol', tech: 'DRY-FIT', img: '/images/cat1.jpeg' },
  { id: 2, nombre: 'Musculosa Court 360', categoria: 'Camisetas', deporte: 'Básquet', tech: 'AERO-MESH', img: '/images/cat2.jpeg' },
  { id: 3, nombre: 'Camiseta Spike', categoria: 'Camisetas', deporte: 'Vóley', tech: 'FLEX-SPANDEX', img: '/images/cat3.jpeg' },
  { id: 4, nombre: 'Conjunto Deportivo Track', categoria: 'Conjuntos', deporte: 'Entrenamiento', tech: 'THERMO-FLEX', img: '/images/conjunto.jpg' },
  { id: 5, nombre: 'Camperón Stadium', categoria: 'Abrigo', deporte: 'General', tech: 'WIND-PROOF', img: '/images/cat4.jpg' }, // Podés usar cualquier foto genérica mientras tanto
  { id: 6, nombre: 'Buzo Hoodie Urbano', categoria: 'Abrigo', deporte: 'Street', tech: 'COTTON-BLEND', img: '/images/cat5.png' },
  { id: 7, nombre: 'Medias Pro-Grip', categoria: 'Accesorios', deporte: 'Fútbol / General', tech: 'ANTI-SLIP', img: '/images/media.jpg' },
  { id: 8, nombre: 'Remera Retro', categoria: 'General', deporte: 'Historica', tech: 'ULTRA-STRETCH', img: '/images/cat6.jpeg' },
  { id: 9, nombre: 'Gorra Trucker Invicto', categoria: 'Accesorios', deporte: 'Street', tech: 'MESH-BACK', img: '/images/cat7.jpg' },
  { id: 10, nombre: 'Mochila Botinera Squad', categoria: 'Accesorios', deporte: 'General', tech: 'WATER-PROOF', img: '/images/cat8.jpg' },
];

const categorias = ["Todos", "Camisetas", "Conjuntos", "Abrigo", "Accesorios"];

export default function Catalogo() {
  const [filtro, setFiltro] = useState("Todos");

  const productosFiltrados = filtro === "Todos" 
    ? productos 
    : productos.filter(p => p.categoria === filtro);

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-poppins pb-20">
      <Navbar />
      
      {/* HEADER DEL CATÁLOGO */}
      <header className="relative py-20 overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-invicto-magenta/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-12 text-center z-10">
          <span className="font-mono text-invicto-magenta text-xs tracking-[0.3em] font-bold uppercase mb-4 block">
            Colección Oficial
          </span>
          <h1 className="font-oswald text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-lg">
            Arsenal Deportivo
          </h1>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Indumentaria de alto rendimiento fabricada para soportar las máximas exigencias. Explora nuestra línea completa de productos personalizados.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 relative z-10">
        
        {/* BARRA DE FILTROS (Glassmorphism) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10 w-fit mx-auto shadow-xl">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`py-2 px-6 rounded-xl font-oswald text-sm tracking-wide uppercase transition-all duration-300 ${
                filtro === cat 
                  ? 'bg-invicto-magenta text-white shadow-[0_0_15px_rgba(255,43,214,0.4)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLA DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map(producto => (
            <div 
              key={producto.id}
              className="relative group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-invicto-magenta/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(255,43,214,0.15)] flex flex-col"
            >
              {/* Imagen del Producto */}
              <div className="relative w-full h-[320px] bg-black/50 p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                
                {/* Glow de fondo dinámico en hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-invicto-magenta/20 transition-colors duration-500"></div>

                <Image 
                  src={producto.img} 
                  alt={producto.nombre} 
                  fill 
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out z-0 filter drop-shadow-xl" 
                />

                {/* Badge Tech */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono text-gray-300 uppercase tracking-widest">
                  <Hexagon size={10} className="text-invicto-magenta" />
                  {producto.tech}
                </div>
              </div>

              {/* Info del Producto */}
              <div className="p-6 bg-black/40 flex-1 flex flex-col justify-between z-20">
                <div>
                  <span className="text-invicto-magenta text-[10px] font-bold uppercase tracking-widest font-mono mb-2 block">
                    {producto.deporte}
                  </span>
                  <h3 className="font-oswald text-xl text-white font-bold uppercase tracking-wide leading-tight mb-2 group-hover:text-gray-200 transition-colors">
                    {producto.nombre}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link 
                    href={producto.categoria === 'Camisetas' ? '/crear' : '#'}
                    className="font-poppins text-xs font-bold text-gray-400 group-hover:text-invicto-magenta transition-colors flex items-center gap-2 uppercase tracking-wide"
                  >
                    {producto.categoria === 'Camisetas' ? 'Personalizar' : 'Ver Detalles'} 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MENSAJE SI NO HAY RESULTADOS */}
        {productosFiltrados.length === 0 && (
          <div className="text-center py-20">
            <Hexagon size={48} className="text-gray-700 mx-auto mb-4" />
            <h3 className="text-white font-oswald text-2xl uppercase">No hay productos disponibles</h3>
            <p className="text-gray-500 font-poppins mt-2">Pronto agregaremos más equipamiento a esta categoría.</p>
          </div>
        )}

      </main>
    </div>
  );
}