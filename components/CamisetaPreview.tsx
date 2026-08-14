"use client";

import Image from "next/image";

export default function CamisetaPreview({ 
  colorPrincipal, 
  colorSecundario, 
  trama = "Liso",
  escudo = null,   
  sponsor = null,
  vista = "frente", 
  nombre = "Tu Nombre",
  numero = "10",
  deporte = "Fútbol" // <--- NUEVO: Recibimos la disciplina
}: { 
  colorPrincipal: string; 
  colorSecundario: string; 
  trama?: string;
  escudo?: string | null;
  sponsor?: string | null;
  vista?: "frente" | "espalda";
  nombre?: string;
  numero?: string;
  deporte?: string; // <--- Añadimos el tipo acá
}) {
  
  const getColorHex = (nombre: string): string => {
    const mapa: Record<string, string> = {
      'Blanco': '#FFFFFF', 'Negro': '#222222', 'Rojo': '#E53935', 'Azul': '#1E88E5',
      'Marino': '#1A237E', 'Celeste': '#03A9F4', 'Verde': '#43A047', 'Amarillo': '#FDD835',
      'Naranja': '#FB8C00', 'Violeta': '#8E24AA', 'Bordó': '#880E4F', 'Cian': '#00E5FF', 'Magenta': '#FF2BD6'
    };
    return mapa[nombre] || '#FFFFFF';
  };

  const cPrincipal = getColorHex(colorPrincipal);
  const cSecundario = getColorHex(colorSecundario);

  let tramaStyles: React.CSSProperties = {};
  
  // --- GEOMÉTRICAS ---
  if (trama === "Ajedrez") {
    tramaStyles = { backgroundImage: `conic-gradient(from 270deg at 50% 50%, ${cSecundario} 90deg, transparent 0, transparent 180deg, ${cSecundario} 0, ${cSecundario} 270deg, transparent 0)`, backgroundSize: "60px 60px" };
  } else if (trama === "Diamantes") {
    tramaStyles = { backgroundImage: `linear-gradient(135deg, ${cSecundario} 25%, transparent 25%), linear-gradient(225deg, ${cSecundario} 25%, transparent 25%), linear-gradient(45deg, ${cSecundario} 25%, transparent 25%), linear-gradient(315deg, ${cSecundario} 25%, transparent 25%)`, backgroundPosition: `10px 0, 10px 0, 0 0, 0 0`, backgroundSize: `20px 20px`, opacity: 0.6 };
  } else if (trama === "Triángulos") {
    const svgTriang = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><polygon points='15,0 30,30 0,30' fill='${cSecundario}' fill-opacity='0.25'/></svg>`);
    tramaStyles = { backgroundImage: `url("data:image/svg+xml;utf8,${svgTriang}")`, backgroundSize: '30px 30px' };
  } else if (trama === "Polígonos") {
    tramaStyles = { backgroundImage: `linear-gradient(45deg, ${cSecundario} 25%, transparent 25%), linear-gradient(-45deg, ${cSecundario} 25%, transparent 25%), linear-gradient(135deg, ${cSecundario} 25%, transparent 25%), linear-gradient(-135deg, ${cSecundario} 25%, transparent 25%)`, backgroundSize: '40px 40px', opacity: 0.4 };
  }
  
  // --- LÍNEAS ---
  else if (trama === "Bastones") {
    tramaStyles = { backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 30px, ${cSecundario} 30px, ${cSecundario} 60px)` };
  } else if (trama === "Aros") {
    tramaStyles = { backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, ${cSecundario} 30px, ${cSecundario} 60px)` };
  } else if (trama === "Mitad") {
    tramaStyles = { backgroundImage: `linear-gradient(90deg, transparent 50%, ${cSecundario} 50%)` };
  } else if (trama === "Líneas Finas") {
    tramaStyles = { backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${cSecundario} 10px, ${cSecundario} 12px)`, opacity: 0.7 };
  }
  
  // --- FUTURISTAS ---
  else if (trama === "Panal") {
    const svgPanal = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'><g fill='${cSecundario}' fill-opacity='0.4'><path d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/></g></svg>`);
    tramaStyles = { backgroundImage: `url("data:image/svg+xml;utf8,${svgPanal}")` };
  } else if (trama === "Digital Camo") {
    const svgCamo = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><rect width='20' height='20' fill='${cSecundario}' fill-opacity='0.3'/><rect x='20' y='20' width='10' height='10' fill='${cSecundario}' fill-opacity='0.5'/><rect x='10' y='30' width='10' height='10' fill='${cSecundario}' fill-opacity='0.2'/></svg>`);
    tramaStyles = { backgroundImage: `url("data:image/svg+xml;utf8,${svgCamo}")` };
  } else if (trama === "Cyberpunk") {
    tramaStyles = { backgroundImage: `linear-gradient(90deg, ${cSecundario} 4px, transparent 4px), linear-gradient(0deg, ${cSecundario} 4px, transparent 4px)`, backgroundSize: '40px 40px', opacity: 0.3 };
  } else if (trama === "Matriz") {
    tramaStyles = { backgroundImage: `radial-gradient(${cSecundario} 2px, transparent 3px)`, backgroundSize: "15px 30px", opacity: 0.8 };
  }
  
  // --- STREET ---
  else if (trama === "Graffiti") {
    tramaStyles = { backgroundImage: `repeating-radial-gradient(circle at 0 0, transparent, transparent 20px, ${cSecundario} 20px, ${cSecundario} 24px)`, opacity: 0.4 };
  } else if (trama === "Manchas") {
    tramaStyles = { backgroundImage: `radial-gradient(circle at 50% 50%, ${cSecundario} 40%, transparent 41%), radial-gradient(circle at 0 0, ${cSecundario} 20%, transparent 21%)`, backgroundSize: '50px 50px', opacity: 0.3 };
  } else if (trama === "Salpicado") {
    tramaStyles = { backgroundImage: `radial-gradient(circle at 20% 30%, ${cSecundario} 10%, transparent 12%), radial-gradient(circle at 75% 60%, ${cSecundario} 8%, transparent 10%)`, backgroundSize: '30px 30px', opacity: 0.6 };
  } else if (trama === "Urbano") {
    tramaStyles = { backgroundImage: `linear-gradient(45deg, ${cSecundario} 12%, transparent 12%), linear-gradient(-45deg, ${cSecundario} 12%, transparent 12%)`, backgroundSize: '20px 20px', opacity: 0.5 };
  }
  
  // --- GRAVITACIÓN ---
  else if (trama === "Degradé") {
    tramaStyles = { backgroundImage: `linear-gradient(to bottom, ${cSecundario}, transparent)`, opacity: 0.6 };
  } else if (trama === "Ondas") {
    const svgOndas = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='60' height='30' viewBox='0 0 60 30'><path d='M0 15 Q 15 0, 30 15 T 60 15' fill='none' stroke='${cSecundario}' stroke-width='4' stroke-opacity='0.4'/></svg>`);
    tramaStyles = { backgroundImage: `url("data:image/svg+xml;utf8,${svgOndas}")`, backgroundSize: '60px 30px' };
  } else if (trama === "Líneas Fugaces") {
    tramaStyles = { backgroundImage: `linear-gradient(115deg, transparent 40%, ${cSecundario} 40%, ${cSecundario} 45%, transparent 45%)`, backgroundSize: '60px 100px', opacity: 0.5 };
  } else if (trama === "Vórtice") {
    tramaStyles = { backgroundImage: `repeating-radial-gradient(circle at center, transparent, transparent 15px, ${cSecundario} 15px, ${cSecundario} 20px)`, opacity: 0.3 };
  }

  // --- LÓGICA DE FRENTE/ESPALDA Y DISCIPLINA DEPORTIVA ---
  let imagenMockup = "/images/mockup2.png"; // Defecto para Frente de Fútbol

  if (vista === "frente") {
    if (deporte === "Básquet") imagenMockup = "/images/mockup-basquet2.png";
    else if (deporte === "Vóley") imagenMockup = "/images/mockup-voley.png";
    else imagenMockup = "/images/mockup2.png";
  } else {
    // Si la vista es ESPALDA
    if (deporte === "Básquet") imagenMockup = "/images/mockup-basquet-back.png";
    else if (deporte === "Vóley") imagenMockup = "/images/voley-back.png";
    else imagenMockup = "/images/mockup-back2.png";
  }

  const maskStyle = {
    WebkitMaskImage: `url('${imagenMockup}')`,
    WebkitMaskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskImage: `url('${imagenMockup}')`,
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center"
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center drop-shadow-2xl transition-all">
      
      {/* CAPA 1: Color Base */}
      <div className="absolute inset-0 z-10 transition-colors duration-500" style={{ backgroundColor: cPrincipal, ...maskStyle }} />

      {/* CAPA 1.5: Trama */}
      {trama !== "Liso" && (
        <div className="absolute inset-0 z-10 opacity-90 transition-all duration-500" style={{ ...tramaStyles, ...maskStyle }} />
      )}

      {/* CAPA 2: Foto Real (Usa la variable dinámica para Frente/Espalda) */}
      <Image 
        src={imagenMockup} 
        alt={`Mockup Camiseta Invicto - ${vista}`} 
        fill
        className="object-contain z-20 mix-blend-multiply opacity-95 transition-all duration-500 pointer-events-none"
        priority
      />

      {/* --- VISTA FRENTE --- */}
      {vista === "frente" && escudo && (
        <div className="absolute z-30 top-[28%] left-[62%] -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center pointer-events-none opacity-95">
          <img src={escudo} alt="Escudo Club" className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" />
        </div>
      )}

      {vista === "frente" && sponsor && (
        <div className="absolute z-30 top-[48%] left-1/2 -translate-x-1/2 w-24 h-12 md:w-32 md:h-16 flex items-center justify-center pointer-events-none opacity-95">
          <img src={sponsor} alt="Sponsor Principal" className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]" />
        </div>
      )}

      {/* --- VISTA ESPALDA: DORSAL Y NÚMERO --- */}
      {vista === "espalda" && (
        <div className="absolute z-30 top-[28%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-start pointer-events-none w-full px-12 opacity-95">
          <span className="font-oswald font-bold text-2xl md:text-3xl uppercase tracking-widest filter drop-shadow-md transition-all duration-300 truncate text-center w-full" style={{ color: cSecundario }}>
            {nombre || "NOMBRE"}
          </span>
          <span className="font-oswald font-black text-[5.5rem] md:text-[6.5rem] leading-none mt-1 filter drop-shadow-md transition-all duration-300" style={{ color: cSecundario }}>
            {numero || "10"}
          </span>
        </div>
      )}

      {/* Etiqueta flotante premium */}
      <div className="absolute top-0 right-4 flex items-center gap-2 z-30">
         <span className="bg-invicto-magenta text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(255,43,214,0.3)]">
           Calidad Pro
         </span>
      </div>
    </div>
  );
}