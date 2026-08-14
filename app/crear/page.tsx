"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { UploadCloud, Plus, Trash2, CheckCircle, MessageCircle } from "lucide-react";
import CamisetaPreview from "@/components/CamisetaPreview";

// 1. Definimos la estructura de categorías AFUERA del componente para que esté prolijo
const categoriasTramas = {
  Geometricas: ['Ajedrez', 'Diamantes', 'Triángulos', 'Polígonos'],
  Lineas: ['Bastones', 'Aros', 'Mitad', 'Líneas Finas'],
  Futuristas: ['Panal', 'Digital Camo', 'Cyberpunk', 'Matriz'],
  Street: ['Graffiti', 'Manchas', 'Salpicado', 'Urbano'],
  Gravitacion: ['Degradé', 'Ondas', 'Líneas Fugaces', 'Vórtice']
};

export default function Configurador() {
  // Estado para controlar en qué paso estamos (ahora del 1 al 5)
  const [paso, setPaso] = useState(1);

  // Estado para guardar TODA la info de la camiseta
  const [pedido, setPedido] = useState({
    deporte: "",
    modelo: "",
    colorPrincipal: "",
    colorSecundario: "",
    trama: "Liso",
    escudo: null as string | null,
    sponsor: null as string | null,
    talles: [] as { nombre: string; numero: string; talle: string }[]
  });

  const [vista, setVista] = useState<"frente" | "espalda">("frente");
  const [catSeleccionada, setCatSeleccionada] = useState<keyof typeof categoriasTramas>('Geometricas');

  const avanzarPaso = () => setPaso((prev) => Math.min(prev + 1, 5));
  const retrocederPaso = () => setPaso((prev) => Math.max(prev - 1, 1));
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, tipo: 'escudo' | 'sponsor') => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPedido({ ...pedido, [tipo]: imageUrl });
    }
  };

  // Función para enviar a WhatsApp
  const enviarPedidoWhatsApp = () => {
    const numeroDeVentas = "549XXXXXXXXX"; // <-- ACÁ PONÉ TU NÚMERO DE WHATSAPP
    
    const texto = `¡Hola Invicto! Acabo de armar un diseño en su Laboratorio 3D y quiero cotizarlo:%0A%0A` +
      `*DEPORTE:* ${pedido.deporte}%0A` +
      `*MODELO:* ${pedido.modelo}%0A` +
      `*TRAMA:* ${pedido.trama}%0A` +
      `*COLOR PRINCIPAL:* ${pedido.colorPrincipal || 'Blanco'}%0A` +
      `*COLOR SECUNDARIO:* ${pedido.colorSecundario || 'Negro'}%0A` +
      `*CANTIDAD DE JUGADORES:* ${pedido.talles.length}%0A%0A` +
      `¿Me podrán decir cómo avanzamos? ¡Gracias!`;

    window.open(`https://wa.me/${numeroDeVentas}?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-poppins pb-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10 relative z-10">
        
        {/* Título y Barra de Progreso */}
        <div className="text-center mb-10">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase mb-4 drop-shadow-lg">
            {paso === 5 ? '¡Diseño Finalizado!' : 'Armá tu equipo'}
          </h1>
          <p className="font-poppins text-gray-400 font-medium">
            {paso === 5 ? 'Tu configuración está lista para producción.' : `Paso ${paso} de 4`}
          </p>
          <div className="w-full max-w-md mx-auto bg-gray-800 h-2 mt-4 rounded-full overflow-hidden shadow-inner">
            <div 
              className={`h-full transition-all duration-500 shadow-[0_0_10px_#FF2BD6] ${paso === 5 ? 'bg-green-400 shadow-[0_0_10px_#4ADE80]' : 'bg-invicto-magenta'}`}
              style={{ width: `${(Math.min(paso, 4) / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="flex flex-col lg:flex-row gap-10 relative">
          
          {/* COLUMNA IZQUIERDA: Controles */}
          <div className="flex-1 bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10">
            
            {paso === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-white">1. Elegí la Disciplina</h2>
                <p className="font-poppins text-gray-400 mb-8">Seleccioná el deporte para ver los cortes y modelos disponibles.</p>
                
                {/* Grilla de Deportes (Ahora solo 3 disciplinas) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {['Fútbol', 'Básquet', 'Vóley'].map((deporte) => (
                    <button
                      key={deporte}
                      onClick={() => setPedido({ ...pedido, deporte, modelo: "" })}
                      className={`relative overflow-hidden rounded-xl border p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${
                        pedido.deporte === deporte 
                          ? 'border-invicto-magenta bg-invicto-magenta/10 shadow-[0_0_20px_rgba(255,43,214,0.15)] scale-[1.02]' 
                          : 'border-white/10 bg-black/40 hover:border-invicto-magenta/50 hover:bg-white/5'
                      }`}
                    >
                      {pedido.deporte === deporte && (
                        <div className="absolute top-3 right-3 w-2 h-2 bg-invicto-magenta rounded-full shadow-[0_0_8px_#FF2BD6] animate-pulse"></div>
                      )}
                      <span className={`font-oswald text-lg tracking-wide uppercase font-semibold ${pedido.deporte === deporte ? 'text-invicto-magenta' : 'text-gray-300'}`}>
                        {deporte}
                      </span>
                    </button>
                  ))}
                </div>

                {pedido.deporte && (
                  <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in duration-500">
                    <h3 className="font-oswald text-xl font-bold mb-4 uppercase text-white">
                      Modelo de {pedido.deporte}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Clásica (Cuello Redondo)', 'Pro (Cuello V)', 'Femenino (Entallada)'].map((modelo) => (
                        <button
                          key={modelo}
                          onClick={() => setPedido({ ...pedido, modelo })}
                          className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                            pedido.modelo === modelo 
                              ? 'border-invicto-magenta bg-invicto-magenta/20 text-white shadow-[0_0_15px_rgba(255,43,214,0.1)]' 
                              : 'border-white/10 bg-black/40 hover:border-white/30 text-gray-400'
                          }`}
                        >
                          <span className={`font-poppins font-semibold block ${pedido.modelo === modelo ? 'text-white' : 'text-gray-300'}`}>{modelo}</span>
                          <span className={`text-xs mt-1 block ${pedido.modelo === modelo ? 'text-invicto-magenta/80' : 'text-gray-500'}`}>
                            Calce anatómico profesional
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-white/10 mt-6 animate-in fade-in duration-500">
                  <h3 className="font-poppins font-bold text-white mb-4 pb-2">Diseño de la Tela (Trama)</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4 bg-black/50 p-1.5 rounded-xl border border-white/10">
                    {Object.keys(categoriasTramas).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCatSeleccionada(cat as keyof typeof categoriasTramas)}
                        className={`py-2 px-4 rounded-lg font-poppins text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                          catSeleccionada === cat
                            ? 'bg-invicto-magenta/20 text-invicto-magenta shadow-sm border border-invicto-magenta/30'
                            : 'text-gray-400 border border-transparent hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => setPedido({ ...pedido, trama: 'Liso' })}
                      className={`w-full py-2.5 rounded-xl border font-poppins text-xs font-bold uppercase tracking-wider transition-all ${
                        pedido.trama === 'Liso'
                          ? 'border-invicto-magenta bg-invicto-magenta/10 text-white shadow-[0_0_10px_rgba(255,43,214,0.1)]'
                          : 'border-white/10 bg-black/40 text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      Mantener Tela Lisa (Sin Trama)
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {categoriasTramas[catSeleccionada].map((tramaOption) => (
                      <button
                        key={tramaOption}
                        type="button"
                        onClick={() => setPedido({ ...pedido, trama: tramaOption })}
                        className={`py-3 px-4 rounded-xl border font-poppins text-sm font-semibold text-center transition-all duration-300 ${
                          pedido.trama === tramaOption 
                            ? 'border-invicto-magenta bg-invicto-magenta/20 text-white shadow-[0_0_15px_rgba(255,43,214,0.15)] scale-[1.02]' 
                            : 'border-white/10 bg-black/40 text-gray-400 hover:border-invicto-magenta/50 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {tramaOption}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {paso === 2 && ( 
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-white">2. Personalizá los Colores</h2>
                <p className="font-poppins text-gray-400 mb-8">Elegí la combinación perfecta para representar la identidad de tu equipo.</p>

                <div className="space-y-10">
                  <div>
                    <h3 className="font-poppins font-bold text-white mb-4 border-b border-white/10 pb-2">Color Principal</h3>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { nombre: 'Blanco', hex: '#FFFFFF', border: 'border-gray-200' },
                        { nombre: 'Negro', hex: '#111111', border: 'border-gray-800' },
                        { nombre: 'Rojo', hex: '#E53935', border: 'border-red-600' },
                        { nombre: 'Azul', hex: '#1E88E5', border: 'border-blue-600' },
                        { nombre: 'Marino', hex: '#1A237E', border: 'border-indigo-900' },
                        { nombre: 'Celeste', hex: '#03A9F4', border: 'border-sky-500' },
                        { nombre: 'Verde', hex: '#43A047', border: 'border-green-600' },
                        { nombre: 'Amarillo', hex: '#FDD835', border: 'border-yellow-400' },
                        { nombre: 'Naranja', hex: '#FB8C00', border: 'border-orange-500' },
                        { nombre: 'Violeta', hex: '#8E24AA', border: 'border-purple-600' },
                        { nombre: 'Bordó', hex: '#880E4F', border: 'border-pink-900' },
                        { nombre: 'Magenta', hex: '#FF2BD6', border: 'border-invicto-magenta' }
                      ].map((color) => (
                        <button
                          key={`princ-${color.nombre}`}
                          onClick={() => setPedido({ ...pedido, colorPrincipal: color.nombre })}
                          className={`w-12 h-12 rounded-full border-2 transition-all duration-300 relative ${
                            pedido.colorPrincipal === color.nombre
                              ? 'scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10 border-white'
                              : `${color.border} hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]`
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.nombre}
                        >
                          {pedido.colorPrincipal === color.nombre && (
                            <span className={`absolute inset-0 flex items-center justify-center font-black text-lg ${['Blanco', 'Amarillo', 'Cian'].includes(color.nombre) ? 'text-black' : 'text-white'}`}>✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-poppins font-bold text-white mb-4 border-b border-white/10 pb-2">Color Secundario (Detalles)</h3>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { nombre: 'Blanco', hex: '#FFFFFF', border: 'border-gray-200' },
                        { nombre: 'Negro', hex: '#111111', border: 'border-gray-800' },
                        { nombre: 'Rojo', hex: '#E53935', border: 'border-red-600' },
                        { nombre: 'Azul', hex: '#1E88E5', border: 'border-blue-600' },
                        { nombre: 'Marino', hex: '#1A237E', border: 'border-indigo-900' },
                        { nombre: 'Celeste', hex: '#03A9F4', border: 'border-sky-500' },
                        { nombre: 'Verde', hex: '#43A047', border: 'border-green-600' },
                        { nombre: 'Amarillo', hex: '#FDD835', border: 'border-yellow-400' },
                        { nombre: 'Naranja', hex: '#FB8C00', border: 'border-orange-500' },
                        { nombre: 'Violeta', hex: '#8E24AA', border: 'border-purple-600' },
                        { nombre: 'Bordó', hex: '#880E4F', border: 'border-pink-900' },
                        { nombre: 'Magenta', hex: '#FF2BD6', border: 'border-invicto-magenta' }
                      ].map((color) => (
                        <button
                          key={`sec-${color.nombre}`}
                          onClick={() => setPedido({ ...pedido, colorSecundario: color.nombre })}
                          className={`w-12 h-12 rounded-full border-2 transition-all duration-300 relative ${
                            pedido.colorSecundario === color.nombre
                              ? 'scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10 border-white'
                              : `${color.border} hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]`
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.nombre}
                        >
                          {pedido.colorSecundario === color.nombre && (
                            <span className={`absolute inset-0 flex items-center justify-center font-black text-lg ${['Blanco', 'Amarillo', 'Cian'].includes(color.nombre) ? 'text-black' : 'text-white'}`}>✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {paso === 3 && ( 
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-white">3. Escudos y Sponsors</h2>
                <p className="font-poppins text-gray-400 mb-8">Subí los logos de tu equipo. Para un mejor resultado, usá formato PNG sin fondo o archivos vectoriales (SVG, AI).</p>

                <div className="space-y-6">
                  <div className={`relative border border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group ${pedido.escudo ? 'border-invicto-magenta bg-invicto-magenta/10 shadow-[0_0_15px_rgba(255,43,214,0.1)]' : 'border-white/20 bg-black/40 hover:border-invicto-magenta hover:bg-white/5'}`}>
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".png,.svg,.jpg" onChange={(e) => handleImageUpload(e, 'escudo')} />
                    
                    {pedido.escudo ? (
                      <div className="w-20 h-20 mb-4 relative z-0">
                         <img src={pedido.escudo} alt="Escudo Preview" className="w-full h-full object-contain filter drop-shadow-md" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-invicto-magenta/20 group-hover:scale-110 transition-all shadow-sm z-0">
                         <UploadCloud className="text-invicto-magenta" size={28} />
                      </div>
                    )}
                    
                    <h3 className="font-poppins font-bold text-white mb-1">Escudo del Club</h3>
                    <p className="text-sm text-gray-400 mb-4">{pedido.escudo ? '¡Escudo cargado con éxito!' : 'Hacé clic o arrastrá tu archivo acá'}</p>
                    <span className="bg-white/10 border border-white/20 text-white font-semibold py-2 px-6 rounded-md text-sm group-hover:border-invicto-magenta transition-colors z-0">
                      {pedido.escudo ? 'Cambiar Escudo' : 'Seleccionar Archivo'}
                    </span>
                  </div>

                  <div className={`relative border border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group ${pedido.sponsor ? 'border-invicto-magenta bg-invicto-magenta/10 shadow-[0_0_15px_rgba(255,43,214,0.1)]' : 'border-white/20 bg-black/40 hover:border-invicto-magenta hover:bg-white/5'}`}>
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".png,.svg,.jpg" onChange={(e) => handleImageUpload(e, 'sponsor')} />
                    
                    {pedido.sponsor ? (
                      <div className="w-32 h-16 mb-4 relative z-0">
                         <img src={pedido.sponsor} alt="Sponsor Preview" className="w-full h-full object-contain filter drop-shadow-md" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-invicto-magenta/20 group-hover:scale-110 transition-all shadow-sm z-0">
                         <UploadCloud className="text-invicto-magenta" size={28} />
                      </div>
                    )}
                    
                    <h3 className="font-poppins font-bold text-white mb-1">Sponsor Principal (Frente)</h3>
                    <p className="text-sm text-gray-400 mb-4">{pedido.sponsor ? '¡Sponsor cargado con éxito!' : 'Hacé clic o arrastrá tu archivo acá'}</p>
                    <span className="bg-white/10 border border-white/20 text-white font-semibold py-2 px-6 rounded-md text-sm group-hover:border-invicto-magenta transition-colors z-0">
                      {pedido.sponsor ? 'Cambiar Sponsor' : 'Seleccionar Archivo'}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 p-4 bg-black/50 rounded-lg border border-white/10 relative z-20 hover:border-white/30 transition-colors">
                   <input type="checkbox" id="no-sponsor" className="w-5 h-5 accent-invicto-magenta cursor-pointer rounded border-white/20 bg-black" onClick={() => setPedido({...pedido, sponsor: null})} />
                   <label htmlFor="no-sponsor" className="font-poppins text-sm text-gray-300 cursor-pointer select-none">Mi equipo no lleva sponsor principal</label>
                </div>
              </div>
            )}

            {paso === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-white">4. Carga del Plantel</h2>
                <p className="font-poppins text-gray-400 mb-8">Ingresá los nombres, números y talles de cada jugador. Podés agregar la cantidad que necesites.</p>

                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                  {pedido.talles.length === 0 && (
                    <div className="text-center p-8 border border-dashed border-white/20 rounded-xl bg-black/40">
                      <p className="text-gray-500 font-poppins">Todavía no agregaste jugadores al pedido.</p>
                    </div>
                  )}

                  {pedido.talles.map((jugador, index) => (
                    <div key={index} className="flex gap-3 items-center bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm hover:border-invicto-magenta hover:bg-invicto-magenta/5 transition-all group">
                      <span className="font-oswald font-bold text-gray-500 w-6 text-right">{index + 1}.</span>
                      <input
                        type="text"
                        placeholder="Nombre (ej. MESSI)"
                        value={jugador.nombre || ""}
                        onChange={(e) => {
                          const nuevosTalles = [...pedido.talles];
                          nuevosTalles[index] = { ...nuevosTalles[index], nombre: e.target.value.toUpperCase() };
                          setPedido({ ...pedido, talles: nuevosTalles });
                        }}
                        className="flex-1 px-4 py-2 rounded-md bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:bg-black focus:border-invicto-magenta focus:outline-none font-poppins text-sm uppercase transition-colors shadow-inner"
                      />
                      <input
                        type="number"
                        placeholder="Nº"
                        value={jugador.numero || ""}
                        onChange={(e) => {
                          const nuevosTalles = [...pedido.talles];
                          nuevosTalles[index] = { ...nuevosTalles[index], numero: e.target.value };
                          setPedido({ ...pedido, talles: nuevosTalles });
                        }}
                        className="w-20 px-4 py-2 rounded-md bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:bg-black focus:border-invicto-magenta focus:outline-none font-poppins text-sm text-center transition-colors shadow-inner"
                      />
                      <select
                        value={jugador.talle || "M"}
                        onChange={(e) => {
                          const nuevosTalles = [...pedido.talles];
                          nuevosTalles[index] = { ...nuevosTalles[index], talle: e.target.value };
                          setPedido({ ...pedido, talles: nuevosTalles });
                        }}
                        className="w-24 px-4 py-2 rounded-md bg-black/50 border border-white/10 text-white focus:bg-black focus:border-invicto-magenta focus:outline-none font-poppins text-sm cursor-pointer transition-colors shadow-inner [&>option]:bg-gray-900"
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                      <button
                        onClick={() => {
                          const nuevosTalles = pedido.talles.filter((_, i) => i !== index);
                          setPedido({ ...pedido, talles: nuevosTalles });
                        }}
                        className="text-gray-500 hover:text-red-500 transition-colors p-2 bg-white/5 rounded-md hover:bg-red-500/10"
                        title="Eliminar jugador"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setPedido({
                      ...pedido,
                      talles: [...pedido.talles, { nombre: "", numero: "", talle: "M" }]
                    });
                  }}
                  className="w-full border border-dashed border-invicto-magenta bg-invicto-magenta/5 text-invicto-magenta font-poppins font-bold py-4 rounded-xl hover:bg-invicto-magenta hover:text-white hover:shadow-[0_0_20px_rgba(255,43,214,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  AGREGAR JUGADOR
                </button>
              </div>
            )}

            {/* PASO 5: ¡ÉxITO! PANTALLA FINAL */}
            {paso === 5 && (
              <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center text-center py-10">
                <div className="w-24 h-24 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                  <CheckCircle size={50} strokeWidth={1.5} />
                </div>
                
                <h2 className="font-oswald text-3xl font-bold mb-3 uppercase text-white tracking-wide">¡Configuración Exitosa!</h2>
                <p className="font-poppins text-gray-400 mb-8 max-w-sm">
                  Tu diseño ha sido procesado por el laboratorio 3D. Estamos listos para presupuestar tu equipamiento y pasarlo a fábrica.
                </p>

                <div className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 text-left mb-8 shadow-inner">
                  <h4 className="font-poppins font-bold text-white mb-4 border-b border-white/10 pb-2">Resumen del Pedido</h4>
                  <ul className="space-y-3 font-poppins text-sm text-gray-300">
                    <li className="flex justify-between"><span>Deporte:</span> <b className="text-white">{pedido.deporte}</b></li>
                    <li className="flex justify-between"><span>Modelo:</span> <b className="text-white">{pedido.modelo}</b></li>
                    <li className="flex justify-between"><span>Trama:</span> <b className="text-white">{pedido.trama}</b></li>
                    <li className="flex justify-between"><span>Jugadores:</span> <b className="text-invicto-magenta">{pedido.talles.length} prendas</b></li>
                  </ul>
                </div>

                <button
                  onClick={enviarPedidoWhatsApp}
                  className="w-full bg-green-500 text-black font-oswald font-bold text-lg py-4 rounded-xl hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] flex items-center justify-center gap-3"
                >
                  <MessageCircle size={22} />
                  ENVIAR A WHATSAPP
                </button>

                <button 
                  onClick={() => window.location.href = '/'}
                  className="mt-6 text-sm font-poppins text-gray-500 hover:text-white transition-colors"
                >
                  Volver al inicio
                </button>
              </div>
            )}

            {/* BOTONES DE NAVEGACIÓN INFERIOR (Se ocultan en el Paso 5) */}
            {paso < 5 && (
              <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
                <button 
                  onClick={retrocederPaso}
                  disabled={paso === 1}
                  className={`font-poppins font-bold py-3 px-6 rounded-md transition-colors ${paso === 1 ? 'text-gray-600 cursor-not-allowed opacity-50' : 'text-white hover:bg-white/10 border border-white/10'}`}
                >
                  ← VOLVER
                </button>
                
                <button 
                  onClick={() => {
                    // Validar antes de ir al paso 5
                    if (paso === 4) {
                      if (pedido.talles.length === 0) {
                        alert("Por favor, agregá al menos un jugador al plantel para continuar.");
                        return;
                      }
                      setPaso(5);
                    } else {
                      avanzarPaso();
                    }
                  }}
                  className="bg-white text-black font-poppins font-bold py-3 px-8 rounded-md hover:bg-invicto-magenta hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,43,214,0.4)]"
                >
                  {paso === 4 ? 'FINALIZAR PEDIDO' : 'SIGUIENTE →'}
                </button>
              </div>
            )}

          </div> {/* FIN COLUMNA IZQUIERDA */}

          {/* COLUMNA DERECHA: Vista Previa en Vivo */}
          <div className="lg:w-[400px] xl:w-[500px]">
            <div className="sticky top-24 rounded-3xl h-[600px] flex flex-col items-center justify-center p-6 shadow-2xl overflow-hidden relative group transition-all border border-white/10 bg-gradient-to-br from-gray-900 via-[#0A0A0A] to-black">
              
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-invicto-magenta/10 group-hover:w-96 group-hover:h-96"></div>

              <div className="absolute top-6 left-6 z-40 flex bg-black/60 backdrop-blur-md rounded-xl p-1 shadow-lg border border-white/10">
                <button 
                  onClick={() => setVista('frente')} 
                  className={`px-4 py-1.5 text-xs font-bold font-oswald uppercase rounded-lg transition-all ${vista === 'frente' ? 'bg-invicto-magenta text-white shadow-[0_0_10px_rgba(255,43,214,0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                  Frente
                </button>
                <button 
                  onClick={() => setVista('espalda')} 
                  className={`px-4 py-1.5 text-xs font-bold font-oswald uppercase rounded-lg transition-all ${vista === 'espalda' ? 'bg-invicto-magenta text-white shadow-[0_0_10px_rgba(255,43,214,0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                  Espalda
                </button>
              </div>

              <div className="absolute top-8 right-6 z-40 flex items-center gap-1.5 font-mono text-[10px] text-gray-500 uppercase tracking-wider border border-white/10 bg-black/50 px-2 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-invicto-magenta animate-pulse shadow-[0_0_5px_#FF2BD6]"></span>
                LIVE RENDER
              </div>

              <div className="w-full h-full absolute inset-0 flex items-center justify-center z-10 pointer-events-none pb-24 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                 <CamisetaPreview 
                   colorPrincipal={pedido.colorPrincipal || "Blanco"} 
                   colorSecundario={pedido.colorSecundario || "Negro"} 
                   trama={pedido.trama}
                   escudo={pedido.escudo}  
                   sponsor={pedido.sponsor}
                   vista={vista}
                   nombre={pedido.talles[0]?.nombre || "INVICTO"} 
                   numero={pedido.talles[0]?.numero || "10"}
                   deporte={pedido.deporte} 
                 />
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] z-20 transition-all hover:bg-black/60 hover:border-white/20">
                <h3 className="font-oswald text-xl font-bold text-white mb-4 tracking-wide flex items-center justify-between">
                  TU DISEÑO
                  <span className="font-mono text-[10px] text-invicto-magenta font-normal border border-invicto-magenta/30 bg-invicto-magenta/10 px-2 py-0.5 rounded">ID: {Math.floor(1000 + Math.random() * 9000)}</span>
                </h3>
                
                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase font-poppins font-bold tracking-wider block mb-1">Corte</span>
                    <b className="font-poppins text-sm text-gray-200">{pedido.modelo || "Competición"}</b>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase font-poppins font-bold tracking-wider block mb-1">Deporte</span>
                    <b className="font-poppins text-sm text-gray-200">{pedido.deporte || "Seleccionar"}</b>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-[10px] uppercase font-poppins font-bold tracking-wider block mb-1">Total Plantel</span>
                    <b className="font-oswald text-2xl text-white leading-none">{pedido.talles.length} <span className="text-xs font-poppins text-invicto-magenta font-normal">jug.</span></b>
                  </div>
                </div>
              </div>

            </div>
          </div> {/* FIN COLUMNA DERECHA */}

        </div>
      </main>
    </div>
  );
}