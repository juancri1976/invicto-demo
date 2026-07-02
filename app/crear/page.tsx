"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { UploadCloud, Plus, Trash2 } from "lucide-react";
import CamisetaPreview from "@/components/CamisetaPreview";

export default function Configurador() {
  // Estado para controlar en qué paso estamos (1 al 4)
  const [paso, setPaso] = useState(1);

  // Estado para guardar TODA la info de la camiseta que el cliente va armando
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

  // Estado para controlar si vemos el frente o la espalda de la remera
  const [vista, setVista] = useState<"frente" | "espalda">("frente");

  // Funciones para navegar entre pasos
  const avanzarPaso = () => setPaso((prev) => Math.min(prev + 1, 4));
  const retrocederPaso = () => setPaso((prev) => Math.max(prev - 1, 1));
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, tipo: 'escudo' | 'sponsor') => {
    const file = e.target.files?.[0];
    if (file) {
      // Creamos una URL local temporal para mostrar la imagen instantáneamente en el 3D
      const imageUrl = URL.createObjectURL(file);
      setPedido({ ...pedido, [tipo]: imageUrl });
    }
  };

  return (
    <div className="min-h-screen bg-invicto-light">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        
        {/* Título y Barra de Progreso Mínima */}
        <div className="text-center mb-10">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-invicto-dark uppercase mb-4">
            Armá tu equipo
          </h1>
          <p className="font-poppins text-gray-500 font-medium">
            Paso {paso} de 4
          </p>
          <div className="w-full max-w-md mx-auto bg-gray-300 h-2 mt-4 rounded-full overflow-hidden">
            <div 
              className="bg-invicto-cyan h-full transition-all duration-500"
              style={{ width: `${(paso / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* CONTENEDOR PRINCIPAL: Dividido en Opciones (Izquierda) y Vista Previa (Derecha) */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* COLUMNA IZQUIERDA: Los Controles del Paso Actual */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            
            {/* PASO 1: Disciplina y Modelo */}
            {paso === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-invicto-dark">1. Elegí la Disciplina</h2>
                <p className="font-poppins text-gray-500 mb-8">Seleccioná el deporte para ver los cortes y modelos disponibles.</p>
                
                {/* Grilla de Deportes */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {['Fútbol', 'Básquet', 'Vóley', 'Handball', 'Hockey', 'Entrenamiento'].map((deporte) => (
                    <button
                      key={deporte}
                      onClick={() => setPedido({ ...pedido, deporte, modelo: "" })}
                      className={`relative overflow-hidden rounded-xl border-2 p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${
                        pedido.deporte === deporte 
                          ? 'border-invicto-cyan bg-invicto-cyan/5 shadow-[0_0_15px_rgba(0,229,255,0.1)] scale-[1.02]' 
                          : 'border-gray-200 hover:border-invicto-cyan/50 hover:bg-gray-50'
                      }`}
                    >
                      {pedido.deporte === deporte && (
                        <div className="absolute top-3 right-3 w-3 h-3 bg-invicto-cyan rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
                      )}
                      <span className={`font-oswald text-xl tracking-wide uppercase font-semibold ${pedido.deporte === deporte ? 'text-invicto-cyan' : 'text-invicto-dark'}`}>
                        {deporte}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Sub-paso: Elegir el modelo */}
                {pedido.deporte && (
                  <div className="mt-8 pt-8 border-t border-gray-100 animate-in fade-in duration-500">
                    <h3 className="font-oswald text-xl font-bold mb-4 uppercase text-invicto-dark">
                      Modelo de {pedido.deporte}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Clásica (Cuello Redondo)', 'Pro (Cuello V)', 'Femenino (Entallada)'].map((modelo) => (
                        <button
                          key={modelo}
                          onClick={() => setPedido({ ...pedido, modelo })}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                            pedido.modelo === modelo 
                              ? 'border-invicto-cyan bg-invicto-dark text-white' 
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                        >
                          <span className="font-poppins font-semibold block">{modelo}</span>
                          <span className={`text-xs mt-1 block ${pedido.modelo === modelo ? 'text-gray-400' : 'text-gray-400'}`}>
                            Calce anatómico profesional
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Selector de Trama */}
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <h3 className="font-poppins font-bold text-invicto-dark mb-4 pb-2">Diseño de la Tela (Trama)</h3>
                  {/* Cambiamos a grid-cols-3 para que entren todos prolijos */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Liso', 'Bastones', 'Aros', 'Ajedrez', 'Mitad', 'Puntos', 'Panal', 'Diamantes', 'ZigZag'].map((trama) => (
                      <button
                        key={trama}
                        onClick={() => setPedido({ ...pedido, trama })}
                        className={`py-3 px-4 rounded-xl border-2 font-poppins text-sm font-semibold transition-all duration-300 ${
                          pedido.trama === trama 
                            ? 'border-invicto-cyan bg-invicto-dark text-invicto-cyan shadow-md scale-[1.02]' 
                            : 'border-gray-200 text-gray-600 hover:border-invicto-cyan/50 hover:bg-gray-50'
                        }`}
                      >
                        {trama}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PASO 2: Colores */}
            {paso === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-invicto-dark">2. Personalizá los Colores</h2>
                <p className="font-poppins text-gray-500 mb-8">Elegí la combinación perfecta para representar la identidad de tu equipo.</p>

                <div className="space-y-10">
                  {/* Selector de Color Principal */}
                  <div>
                    <h3 className="font-poppins font-bold text-invicto-dark mb-4 border-b border-gray-100 pb-2">Color Principal</h3>
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
                        { nombre: 'Cian', hex: '#00E5FF', border: 'border-invicto-cyan' }
                      ].map((color) => (
                        <button
                          key={`princ-${color.nombre}`}
                          onClick={() => setPedido({ ...pedido, colorPrincipal: color.nombre })}
                          className={`w-12 h-12 rounded-full border-2 transition-all duration-300 relative ${
                            pedido.colorPrincipal === color.nombre
                              ? 'scale-110 shadow-[0_5px_15px_rgba(0,0,0,0.2)] z-10 border-gray-400'
                              : `${color.border} hover:scale-110 hover:shadow-md`
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.nombre}
                        >
                          {pedido.colorPrincipal === color.nombre && (
                            <span className={`absolute inset-0 flex items-center justify-center font-bold text-lg ${['Blanco', 'Amarillo', 'Cian'].includes(color.nombre) ? 'text-invicto-dark' : 'text-white'}`}>✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selector de Color Secundario */}
                  <div>
                    <h3 className="font-poppins font-bold text-invicto-dark mb-4 border-b border-gray-100 pb-2">Color Secundario (Detalles)</h3>
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
                        { nombre: 'Cian', hex: '#00E5FF', border: 'border-invicto-cyan' }
                      ].map((color) => (
                        <button
                          key={`sec-${color.nombre}`}
                          onClick={() => setPedido({ ...pedido, colorSecundario: color.nombre })}
                          className={`w-12 h-12 rounded-full border-2 transition-all duration-300 relative ${
                            pedido.colorSecundario === color.nombre
                              ? 'scale-110 shadow-[0_5px_15px_rgba(0,0,0,0.2)] z-10 border-gray-400'
                              : `${color.border} hover:scale-110 hover:shadow-md`
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.nombre}
                        >
                          {pedido.colorSecundario === color.nombre && (
                            <span className={`absolute inset-0 flex items-center justify-center font-bold text-lg ${['Blanco', 'Amarillo', 'Cian'].includes(color.nombre) ? 'text-invicto-dark' : 'text-white'}`}>✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PASO 3: Escudos */}
            {paso === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-invicto-dark">3. Escudos y Sponsors</h2>
                <p className="font-poppins text-gray-500 mb-8">Subí los logos de tu equipo. Para un mejor resultado, usá formato PNG sin fondo o archivos vectoriales (SVG, AI).</p>

                <div className="space-y-6">
                  {/* Caja de Escudo */}
                  <div className={`relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group ${pedido.escudo ? 'border-invicto-cyan bg-invicto-cyan/5' : 'border-gray-300 hover:border-invicto-cyan hover:bg-invicto-cyan/5'}`}>
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".png,.svg,.jpg" onChange={(e) => handleImageUpload(e, 'escudo')} />
                    
                    {pedido.escudo ? (
                      <div className="w-20 h-20 mb-4 relative z-0">
                         <img src={pedido.escudo} alt="Escudo Preview" className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all shadow-sm z-0">
                         <UploadCloud className="text-invicto-cyan" size={28} />
                      </div>
                    )}
                    
                    <h3 className="font-poppins font-bold text-invicto-dark mb-1">Escudo del Club</h3>
                    <p className="text-sm text-gray-500 mb-4">{pedido.escudo ? '¡Escudo cargado con éxito!' : 'Hacé clic o arrastrá tu archivo acá'}</p>
                    <span className="bg-white border border-gray-200 text-invicto-dark font-semibold py-2 px-6 rounded-md text-sm group-hover:border-invicto-cyan transition-colors z-0">
                      {pedido.escudo ? 'Cambiar Escudo' : 'Seleccionar Archivo'}
                    </span>
                  </div>

                  {/* Caja de Sponsor */}
                  <div className={`relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group ${pedido.sponsor ? 'border-invicto-cyan bg-invicto-cyan/5' : 'border-gray-300 hover:border-invicto-cyan hover:bg-invicto-cyan/5'}`}>
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".png,.svg,.jpg" onChange={(e) => handleImageUpload(e, 'sponsor')} />
                    
                    {pedido.sponsor ? (
                      <div className="w-32 h-16 mb-4 relative z-0">
                         <img src={pedido.sponsor} alt="Sponsor Preview" className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all shadow-sm z-0">
                         <UploadCloud className="text-invicto-cyan" size={28} />
                      </div>
                    )}
                    
                    <h3 className="font-poppins font-bold text-invicto-dark mb-1">Sponsor Principal (Frente)</h3>
                    <p className="text-sm text-gray-500 mb-4">{pedido.sponsor ? '¡Sponsor cargado con éxito!' : 'Hacé clic o arrastrá tu archivo acá'}</p>
                    <span className="bg-white border border-gray-200 text-invicto-dark font-semibold py-2 px-6 rounded-md text-sm group-hover:border-invicto-cyan transition-colors z-0">
                      {pedido.sponsor ? 'Cambiar Sponsor' : 'Seleccionar Archivo'}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 relative z-20">
                   <input type="checkbox" id="no-sponsor" className="w-5 h-5 accent-invicto-cyan cursor-pointer rounded border-gray-300" onClick={() => setPedido({...pedido, sponsor: null})} />
                   <label htmlFor="no-sponsor" className="font-poppins text-sm text-gray-600 cursor-pointer select-none">Mi equipo no lleva sponsor principal</label>
                </div>
              </div>
            )}

            {/* PASO 4: Plantel */}
            {paso === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-oswald text-2xl font-bold mb-2 uppercase text-invicto-dark">4. Carga del Plantel</h2>
                <p className="font-poppins text-gray-500 mb-8">Ingresá los nombres, números y talles de cada jugador. Podés agregar la cantidad que necesites.</p>

                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                  {pedido.talles.length === 0 && (
                    <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                      <p className="text-gray-400 font-poppins">Todavía no agregaste jugadores al pedido.</p>
                    </div>
                  )}

                  {pedido.talles.map((jugador, index) => (
                    <div key={index} className="flex gap-3 items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-invicto-cyan transition-colors group">
                      <span className="font-oswald font-bold text-gray-300 w-6 text-right">{index + 1}.</span>
                      <input
                        type="text"
                        placeholder="Nombre (ej. MESSI)"
                        value={jugador.nombre || ""}
                        onChange={(e) => {
                          const nuevosTalles = [...pedido.talles];
                          nuevosTalles[index] = { ...nuevosTalles[index], nombre: e.target.value.toUpperCase() };
                          setPedido({ ...pedido, talles: nuevosTalles });
                        }}
                        className="flex-1 px-4 py-2 rounded-md bg-gray-50 border border-transparent focus:bg-white focus:border-invicto-cyan focus:outline-none font-poppins text-sm uppercase transition-colors"
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
                        className="w-20 px-4 py-2 rounded-md bg-gray-50 border border-transparent focus:bg-white focus:border-invicto-cyan focus:outline-none font-poppins text-sm text-center transition-colors"
                      />
                      <select
                        value={jugador.talle || "M"}
                        onChange={(e) => {
                          const nuevosTalles = [...pedido.talles];
                          nuevosTalles[index] = { ...nuevosTalles[index], talle: e.target.value };
                          setPedido({ ...pedido, talles: nuevosTalles });
                        }}
                        className="w-24 px-4 py-2 rounded-md bg-gray-50 border border-transparent focus:bg-white focus:border-invicto-cyan focus:outline-none font-poppins text-sm cursor-pointer transition-colors"
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
                        className="text-gray-300 hover:text-red-500 transition-colors p-2"
                        title="Eliminar jugador"
                      >
                        <Trash2 size={20} />
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
                  className="w-full border-2 border-dashed border-invicto-cyan text-invicto-cyan font-poppins font-bold py-4 rounded-xl hover:bg-invicto-cyan hover:text-invicto-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Plus size={20} />
                  AGREGAR JUGADOR
                </button>
              </div>
            )}

            {/* BOTONES DE NAVEGACIÓN INFERIOR */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
              <button 
                onClick={retrocederPaso}
                disabled={paso === 1}
                className={`font-poppins font-bold py-3 px-6 rounded-md transition-colors ${paso === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-invicto-dark hover:bg-gray-100'}`}
              >
                ← VOLVER
              </button>
              
              <button 
                onClick={avanzarPaso}
                className="bg-invicto-dark text-invicto-cyan font-poppins font-bold py-3 px-8 rounded-md hover:bg-black transition-colors shadow-md"
              >
                {paso === 4 ? 'FINALIZAR PEDIDO' : 'SIGUIENTE →'}
              </button>
            </div>

          </div> {/* FIN COLUMNA IZQUIERDA */}

          {/* COLUMNA DERECHA: Vista Previa en Vivo */}
          <div className="lg:w-[400px] xl:w-[500px]">
            {/* Fondo con gradiente premium, bordes muy redondeados y sombras suaves */}
            <div className="sticky top-24 rounded-3xl h-[600px] flex flex-col items-center justify-center p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden relative group transition-all border border-white/60 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200">
              
              {/* Luces sutiles de fondo para darle volumen 3D al entorno */}
              <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-invicto-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* BOTONES FRENTE / ESPALDA */}
              <div className="absolute top-6 left-6 z-40 flex bg-white/70 backdrop-blur-md rounded-xl p-1 shadow-sm border border-white/60">
                <button 
                  onClick={() => setVista('frente')} 
                  className={`px-4 py-1.5 text-xs font-bold font-oswald uppercase rounded-lg transition-all ${vista === 'frente' ? 'bg-invicto-dark text-invicto-cyan shadow-md' : 'text-gray-500 hover:text-invicto-dark'}`}
                >
                  Frente
                </button>
                <button 
                  onClick={() => setVista('espalda')} 
                  className={`px-4 py-1.5 text-xs font-bold font-oswald uppercase rounded-lg transition-all ${vista === 'espalda' ? 'bg-invicto-dark text-invicto-cyan shadow-md' : 'text-gray-500 hover:text-invicto-dark'}`}
                >
                  Espalda
                </button>
              </div>

              {/* Camiseta Dinámica (Centrada con un margen inferior 'pb-24' para que no la tape la tarjeta) */}
              <div className="w-full h-full absolute inset-0 flex items-center justify-center z-10 pointer-events-none pb-24">
                 <CamisetaPreview 
                    colorPrincipal={pedido.colorPrincipal || "Blanco"} 
                    colorSecundario={pedido.colorSecundario || "Negro"} 
                    trama={pedido.trama}
                    escudo={pedido.escudo}  
                    sponsor={pedido.sponsor}
                    vista={vista}
                    nombre={pedido.talles[0]?.nombre || "INVICTO"} 
                    numero={pedido.talles[0]?.numero || "10"}
                 />
              </div>

              {/* --- LA MAGIA: Tarjeta GLASSMORPHISM (Resumen de datos) --- */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/50 backdrop-blur-xl p-6 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-20 transition-all hover:bg-white/60">
                <h3 className="font-oswald text-xl font-bold text-invicto-dark mb-4">TU DISEÑO</h3>
                
                {/* Grilla de datos tipo ticket de compra */}
                <div className="flex justify-between items-end border-t border-gray-300/50 pt-4">
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase font-poppins font-bold tracking-wider block mb-1">Corte</span>
                    <b className="font-poppins text-sm text-invicto-dark">{pedido.modelo || "Competición"}</b>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase font-poppins font-bold tracking-wider block mb-1">Deporte</span>
                    <b className="font-poppins text-sm text-invicto-dark">{pedido.deporte || "Seleccionar"}</b>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-[10px] uppercase font-poppins font-bold tracking-wider block mb-1 text-invicto-cyan">Total Plantel</span>
                    <b className="font-oswald text-2xl text-invicto-dark leading-none">{pedido.talles.length} <span className="text-xs font-poppins text-gray-500 font-normal">jug.</span></b>
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