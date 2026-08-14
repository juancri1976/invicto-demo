"use client";

import { useState } from "react";
import { Palette } from "lucide-react";

export default function AccentSwitcher() {
  const [desplegado, setDesplegado] = useState(false);
  const [colorActivo, setColorActivo] = useState("#00E5FF");

  // Paleta de colores de acentuación
  const paleta = [
    { nombre: "Cian Invicto", hex: "#00E5FF" },
    { nombre: "Lima Ácido", hex: "#A3FF12" },
    { nombre: "Naranja Eléctrico", hex: "#FF6A00" },
    { nombre: "Violeta Eléctrico", hex: "#8B5CF6" },
    { nombre: "Magenta Eléctrico", hex: "#FF2BD6" },
  ];

  const cambiarColor = (hex: string) => {
    setColorActivo(hex);
    // Cambiamos la variable CSS global de Tailwind en caliente
    document.documentElement.style.setProperty("--color-invicto-cyan", hex);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
      {/* Botón Principal Flotante */}
      <button
        onClick={() => setDesplegado(!desplegado)}
        className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        title="Cambiar Color de Acentuación"
      >
        <Palette size={20} style={{ color: colorActivo }} />
      </button>

      {/* Desplegable de colores */}
      {desplegado && (
        <div className="flex items-center gap-2 bg-black/90 backdrop-blur-xl border border-white/15 p-2 rounded-full shadow-2xl animate-in fade-in slide-in-from-left-4 duration-300">
          {paleta.map((item) => (
            <button
              key={item.hex}
              onClick={() => cambiarColor(item.hex)}
              className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer relative group ${
                colorActivo === item.hex ? "scale-125 border-white" : "border-transparent hover:scale-110 opacity-70 hover:opacity-100"
              }`}
              style={{ backgroundColor: item.hex }}
              title={item.nombre}
            >
              {colorActivo === item.hex && (
                <span className="absolute inset-0 flex items-center justify-center text-[10px] text-black font-black">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}