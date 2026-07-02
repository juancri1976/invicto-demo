import Image from "next/image";

export default function CamisetaPreview({ 
  colorPrincipal, 
  colorSecundario, 
  trama = "Liso",
  escudo = null,   
  sponsor = null,
  vista = "frente", 
  nombre = "MESSI",
  numero = "10"
}: { 
  colorPrincipal: string; 
  colorSecundario: string; 
  trama?: string;
  escudo?: string | null;
  sponsor?: string | null;
  vista?: "frente" | "espalda";
  nombre?: string;
  numero?: string;
}) {
  
  const getColorHex = (nombre: string): string => {
    const mapa: Record<string, string> = {
      'Blanco': '#FFFFFF', 'Negro': '#222222', 'Rojo': '#E53935', 'Azul': '#1E88E5',
      'Marino': '#1A237E', 'Celeste': '#03A9F4', 'Verde': '#43A047', 'Amarillo': '#FDD835',
      'Naranja': '#FB8C00', 'Violeta': '#8E24AA', 'Bordó': '#880E4F', 'Cian': '#00E5FF',
    };
    return mapa[nombre] || '#FFFFFF';
  };

  const cPrincipal = getColorHex(colorPrincipal);
  const cSecundario = getColorHex(colorSecundario);

  let tramaStyles: React.CSSProperties = {};
  if (trama === "Bastones") {
    tramaStyles = { backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 30px, ${cSecundario} 30px, ${cSecundario} 60px)` };
  } else if (trama === "Aros") {
    tramaStyles = { backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, ${cSecundario} 30px, ${cSecundario} 60px)` };
  } else if (trama === "Ajedrez") {
    tramaStyles = { 
      backgroundImage: `conic-gradient(from 270deg at 50% 50%, ${cSecundario} 90deg, transparent 0, transparent 180deg, ${cSecundario} 0, ${cSecundario} 270deg, transparent 0)`,
      backgroundSize: "60px 60px" 
    };
  } else if (trama === "Mitad") {
    tramaStyles = { backgroundImage: `linear-gradient(90deg, transparent 50%, ${cSecundario} 50%)` };
  } else if (trama === "Puntos") {
    tramaStyles = { 
      backgroundImage: `radial-gradient(${cSecundario} 3px, transparent 4px)`,
      backgroundSize: "20px 20px" 
    };
  } 
  // --- TRAMAS PREMIUM AGREGADAS ---
  else if (trama === "Panal") {
    // Patrón de Hexágonos inyectados mediante SVG dinámico
    const svgPanal = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'><g fill='${cSecundario}' fill-opacity='0.5'><path d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.65V49h-2z'/></g></svg>`);
    tramaStyles = { backgroundImage: `url("data:image/svg+xml;utf8,${svgPanal}")` };
  } 
  else if (trama === "Diamantes") {
    tramaStyles = {
      backgroundImage: `linear-gradient(135deg, ${cSecundario} 25%, transparent 25%), linear-gradient(225deg, ${cSecundario} 25%, transparent 25%), linear-gradient(45deg, ${cSecundario} 25%, transparent 25%), linear-gradient(315deg, ${cSecundario} 25%, transparent 25%)`,
      backgroundPosition: `10px 0, 10px 0, 0 0, 0 0`,
      backgroundSize: `20px 20px`,
      opacity: 0.7
    };
  }
  else if (trama === "ZigZag") {
    tramaStyles = {
      backgroundImage: `linear-gradient(135deg, ${cSecundario} 25%, transparent 25%) -10px 0, linear-gradient(225deg, ${cSecundario} 25%, transparent 25%) -10px 0, linear-gradient(315deg, ${cSecundario} 25%, transparent 25%), linear-gradient(45deg, ${cSecundario} 25%, transparent 25%)`,
      backgroundSize: `20px 20px`,
      opacity: 0.6
    };
  }

  // --- LÓGICA DE FRENTE/ESPALDA ---
  const imagenMockup = vista === "frente" ? "/images/mockup.png" : "/images/mockup-back.png";

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
         <span className="bg-invicto-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
           Calidad Pro
         </span>
      </div>
    </div>
  );
}