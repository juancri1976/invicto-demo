"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ShoppingCart, Star, Shield, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function TiendaClub() {
  const params = useParams();
  const slug = params.slug as string;

  // 1. BASE DE DATOS FALSificada (Mock) PARA LA DEMO
  // Si en el navegador ponen /clubes/cacu, carga esto:
  const baseDeDatosClubes: Record<string, any> = {
    cacu: {
      nombre: "Club Atlético Ceres Unión",
      siglas: "CACU",
      colorPrincipal: "bg-[#E53935]", // Rojo CACU
      colorTexto: "text-[#E53935]",
      logo: "/images/cacu.png", // Acá podés poner un logo real si tenés
      productos: [
        { id: 1, nombre: "Camiseta Titular Oficial 2026", precio: "$35.000", tipo: "Juego", imagen: "/images/cacu3.png", estrellas: 5 },
        { id: 2, nombre: "Camiseta Alternativa Oficial", precio: "$35.000", tipo: "Juego", imagen: "/images/cacu5.png", estrellas: 5 },
        { id: 3, nombre: "Pantalón Corto Titular", precio: "$18.500", tipo: "Juego", imagen: "/images/mockup.png", estrellas: 4 },
        { id: 4, nombre: "Buzo de Entrenamiento Dry-Fit", precio: "$42.000", tipo: "Entrenamiento", imagen: "/images/cacu2.png", estrellas: 5 },
      ]
    },
    // Podés agregar otro club de prueba acá si querés
    central: {
      nombre: "Club Central Argentino Olímpico",
      siglas: "CCAO",
      colorPrincipal: "bg-[#FDD835]", // Amarillo CCAO
      colorTexto: "text-[#FDD835]",
      logo: "/images/club2.jpg",
      productos: [
        { id: 1, nombre: "Camiseta Titular CCAO", precio: "$35.000", tipo: "Juego", imagen: "/images/mockup.png", estrellas: 5 },
      ]
    }
  };

  // Buscamos el club en la base de datos falsa. Si no existe, usamos CACU por defecto.
  const club = baseDeDatosClubes[slug] || baseDeDatosClubes["cacu"];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Navbar />

      {/* --- HEADER DEL CLUB (Dinámico según sus colores) --- */}
      <div className={`relative w-full h-64 md:h-80 ${club.colorPrincipal} overflow-hidden flex items-center justify-center`}>
        {/* Trama de fondo para que no quede liso y aburrido */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_25%,rgba(0,0,0,0.2)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.2)_75%,rgba(0,0,0,0.2)_100%)] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="relative z-10 text-center flex flex-col items-center mt-10">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-2xl border-4 border-white mb-4">
            <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden relative">
               {/* Si tenés el escudo real del CACU, cambias el src en el mock de arriba */}
               <Image src={club.logo} alt={`Escudo ${club.siglas}`} fill className="object-cover" />
            </div>
          </div>
          <h1 className="font-oswald text-4xl md:text-5xl font-black text-white uppercase tracking-wider drop-shadow-md">
            {club.nombre}
          </h1>
          <p className="text-white/80 font-poppins text-sm md:text-base mt-2 flex items-center gap-2">
            <Shield size={16} /> Tienda Oficial operada por Invicto
          </p>
        </div>
      </div>

      {/* --- GRID DE PRODUCTOS --- */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <h2 className="font-oswald text-3xl font-bold text-gray-900 uppercase">Indumentaria Oficial</h2>
            <p className="text-gray-500 text-sm mt-1">Comprá directo de fábrica. Calidad profesional garantizada.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Temporada 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {club.productos.map((producto: any) => (
            <div key={producto.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Imagen del producto */}
              <div className="relative w-full h-64 bg-gray-100 p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent opacity-50"></div>
                <Image 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  fill
                  className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 p-4"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-gray-800">
                  {producto.tipo}
                </div>
              </div>

              {/* Info y Compra */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(producto.estrellas)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <h3 className="font-poppins font-bold text-gray-900 leading-tight mb-2 group-hover:text-invicto-cyan transition-colors">
                  {producto.nombre}
                </h3>
                <p className={`font-oswald text-2xl font-black mt-auto ${club.colorTexto}`}>
                  {producto.precio}
                </p>
                
                <button className="mt-5 w-full bg-gray-900 text-white font-poppins font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-invicto-cyan hover:text-gray-900 transition-all">
                  <ShoppingCart size={18} />
                  AÑADIR AL CARRITO
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- BANNER PROMOCIONAL INVICTO --- */}
        <div className="mt-20 bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-invicto-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 md:max-w-2xl text-center md:text-left">
            <span className="text-invicto-cyan font-oswald font-bold tracking-widest uppercase text-xs bg-invicto-cyan/10 px-3 py-1 rounded-full inline-block mb-4 border border-invicto-cyan/20">
              Sponsor Oficial
            </span>
            <h3 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase mb-4 tracking-wide">
              ¿Querés que tu club también tenga su tienda oficial?
            </h3>
            <p className="text-gray-400 font-poppins text-sm md:text-base mb-6 leading-relaxed">
              Invicto desarrolla el merchandising de tu institución sin costo de alta ni manejo de stock. Vos vendés, nosotros fabricamos y enviamos directo a los socios.
            </p>
            <button className="bg-invicto-cyan text-gray-900 font-oswald font-bold px-8 py-3.5 rounded-xl flex items-center gap-2 hover:bg-white hover:scale-[1.02] transition-all mx-auto md:mx-0 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              CONTACTAR A INVICTO <ArrowRight size={18} />
            </button>
          </div>

          {/* --- ACÁ REEMPLAZAMOS EL SHIELD POR EL LOGO OFICIAL DE INVICTO --- */}
          <div className="relative z-10 mt-8 md:mt-0 hidden lg:block w-80 h-84 opacity-20 group-hover:opacity-35 transition-opacity duration-500 filter grayscale contrast-200">
            <Image 
              src="/images/logo.png" 
              alt="Logo Invicto Oficial Banner" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}