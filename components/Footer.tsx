import { MapPin } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image"; // Importamos Image para el logo

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-white/10 pb-8 text-center md:text-left">
          
          {/* Columna 1: Marca */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4 block transition-transform hover:scale-105">
              <Image 
                src="/images/logooficial.png" 
                alt="Logo Invicto Oficial" 
                width={140} 
                height={70} 
                className="object-contain filter drop-shadow-lg"
              />
            </Link>
            <p className="font-poppins text-gray-400 text-sm max-w-xs">
              Equipamiento deportivo de alto rendimiento. Diseñado para ganar, fabricado para durar.
            </p>
          </div>

          {/* Columna 2: Ubicación */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-oswald text-xl font-bold mb-4 text-invicto-magenta tracking-wide">DÓNDE ESTAMOS</h3>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                <MapPin size={18} className="text-invicto-magenta" />
                Rafaela, Santa Fe, Argentina
              </li>
              <li className="text-xs text-gray-500 mt-1">
                Envíos a todo el país.
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-oswald text-xl font-bold mb-4 text-invicto-magenta tracking-wide">SEGUINOS</h3>
            <div className="flex flex-col space-y-3 font-poppins text-sm text-gray-400">
              
              {/* INSTAGRAM CON SVG NATIVO */}
              <a 
                href="https://instagram.com/invicto.oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-invicto-magenta transition-colors group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:scale-110 transition-transform"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                @invicto.oficial
              </a>

              {/* FACEBOOK CON SVG NATIVO */}
              <a 
                href="https://facebook.com/invictoindumentariadeportiva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-invicto-magenta transition-colors group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                /invictoindumentariadeportiva
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center font-poppins text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} INVICTO® Indumentaria Deportiva. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}