import Image from "next/image";

export default function Hero() {
  return (
    // Agregamos pl-16 o pl-20 en pantallas grandes para darle espacio al box lateral izquierdo
    <section className="flex flex-col md:flex-row min-h-[calc(100vh-76px)] bg-invicto-light overflow-visible relative pl-0 md:pl-16">
      
      {/* BOX NEGRO LATERAL VERTICAL (Estilo Boceto) */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-16 bg-invicto-dark z-30 flex-col items-center justify-center border-r border-invicto-cyan/20">
        <div className="transform -rotate-90 origin-center whitespace-nowrap font-oswald text-sm tracking-[0.3em] text-gray-400 uppercase flex items-center gap-3">
          <span>INVICTO</span>
          <span className="text-invicto-cyan font-bold">•</span>
          <span className="text-white font-medium">LEGENDS</span>
        </div>
      </div>

      {/* Columna Izquierda: Mensaje y CTA */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 relative z-20">
        <h1 className="font-oswald text-6xl md:text-8xl text-invicto-dark font-bold uppercase leading-none mb-6">
          Tu identidad.<br />
          Tu diseño.<br />
          Creá sin límites.
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
          Equipamiento profesional 100% personalizado. Elegí el modelo, aplicá los colores de tu club, sumá los escudos y salí a la cancha.
        </p>
        
        <div>
          <button className="bg-invicto-cyan text-invicto-dark font-poppins font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform shadow-lg shadow-invicto-cyan/20 cursor-pointer">
            DISEÑAR AHORA
          </button>
        </div>
      </div>

      {/* Columna Derecha: Pantalla Dividida perfecta para el JPG */}
      {/* Le damos un alto mínimo para celulares, y en PC se adapta al alto de la sección */}
      <div className="flex-1 relative w-full min-h-[450px] lg:min-h-0 border-l-[6px] border-invicto-cyan">
        <Image 
          src="/images/cha.png" 
          alt="Hincha Invicto celebrando" 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          // object-cover es el secreto: hace que la foto llene el espacio sin deformarse
          // object-top asegura que siempre se le vea la cara al jugador si la pantalla es más chica
          className="object-cover object-top md:object-center"
          priority 
        />
      </div>
      
    </section>
  );
}