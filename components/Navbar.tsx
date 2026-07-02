"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    // Forzamos una altura limpia con h-20 para asegurar que el nav nunca cambie de tamaño
    <nav className="bg-invicto-dark text-white px-6 md:px-12 flex items-center justify-between relative z-40 border-b-2 border-invicto-cyan shadow-md h-20">
      
      {/* --- LOGO OFICIAL INVICTO (ESTILO FLOTANTE DESBORDADO) --- */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center group relative h-20">
          
          {/* Contenedor del logo: Ahora es w-28 h-28 (el DOBLE de grande) o w-32 h-32 en pc */}
          {/* El uso de absolute, top-1/2 y -translate-y-1/2 evita que deforme la barra */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] z-50">
            <Image 
              src="/images/logooficial.png" 
              alt="Logo Invicto Oficial"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* ESPACIADOR INVISIBLE: Como el logo flota de forma absoluta, dejamos este hueco en el flex */}
          {/* para que el texto "Invicto" se acomode al lado perfecto y no quede tapado de fondo */}
          <div className="w-24 md:w-28 h-full pointer-events-none"></div>
          
          
        </Link>
      </div>

      {/* Enlaces centrales */}
      <div className="hidden md:flex gap-8 font-poppins text-sm font-semibold uppercase tracking-wide">
        <Link href="#" className="hover:text-invicto-cyan transition-colors">Fútbol</Link>
        <Link href="#" className="hover:text-invicto-cyan transition-colors">Básquet</Link>
        <Link href="/crear" className="text-invicto-cyan border-b-2 border-invicto-cyan pb-1">Creá tu diseño</Link>
        <Link href="#" className="hover:text-invicto-cyan transition-colors">Contacto</Link>
      </div>

      {/* Iconos de acción derecha (Búsqueda, Usuario, Carrito) */}
      <div className="flex items-center gap-6">
        <button className="hover:text-invicto-cyan transition-colors cursor-pointer" aria-label="Buscar">
          <Search size={20} />
        </button>
        <button className="hover:text-invicto-cyan transition-colors cursor-pointer" aria-label="Perfil de usuario">
          <User size={20} />
        </button>
        <button className="hover:text-invicto-cyan transition-colors cursor-pointer relative" aria-label="Carrito de compras">
          <ShoppingCart size={20} />
          <span className="absolute -top-1.5 -right-1.5 bg-invicto-cyan text-invicto-dark font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </button>
      </div>
      
    </nav>
  );
}