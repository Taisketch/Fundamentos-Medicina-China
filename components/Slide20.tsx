import React, { useState } from 'react';
import { Shield, Sun, Moon, Wind, Thermometer } from 'lucide-react';

export const Slide20: React.FC = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper transition-colors duration-1000" style={{ backgroundColor: isDay ? '#fdfbf7' : '#1a1a2e' }}>
      
      <div className="mb-8 border-b border-stone-200 pb-6 flex justify-between items-end">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 20</span>
          <h2 className={`text-5xl font-serif font-bold transition-colors ${isDay ? 'text-ink' : 'text-white'}`}>Wei Qi (Qi Defensivo)</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Soldado de la Frontera"</h3>
        </div>
        <button 
          onClick={() => setIsDay(!isDay)}
          className={`p-4 rounded-full transition-all ${isDay ? 'bg-yellow-100 text-yellow-600' : 'bg-indigo-900 text-yellow-300'}`}
        >
          {isDay ? <Sun size={40} /> : <Moon size={40} />}
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Visual Metaphor: The Body Shield */}
        <div className="flex-1 relative h-[500px] w-full flex items-center justify-center">
           
           {/* Body Silhouette */}
           <div className={`w-48 h-80 rounded-[3rem] z-10 transition-colors duration-1000 ${isDay ? 'bg-stone-300' : 'bg-indigo-900 border-2 border-indigo-700'}`}></div>

           {/* The Shield (Wei Qi) */}
           <div 
             className={`absolute rounded-[4rem] border-4 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center
               ${isDay 
                 ? 'w-64 h-96 border-orange-400 bg-orange-400/20 shadow-[0_0_50px_rgba(251,146,60,0.4)]' // External (Day)
                 : 'w-40 h-72 border-indigo-400 bg-indigo-400/10 shadow-[inset_0_0_30px_rgba(99,102,241,0.3)]' // Internal (Night)
               }
             `}
           >
             <Shield className={`transition-all duration-1000 mb-2 ${isDay ? 'text-orange-500 scale-125' : 'text-indigo-400 scale-75'}`} size={64} />
             
             {/* Explicit Label */}
             <div className={`px-3 py-1 rounded font-bold text-sm uppercase tracking-widest transition-all duration-1000 ${isDay ? 'bg-orange-500 text-white' : 'bg-indigo-500 text-white scale-75'}`}>
               Wei Qi
             </div>
           </div>

           {/* External Pathogens (Wind/Cold) */}
           {isDay && (
             <>
               <div className="absolute top-10 right-10 animate-bounce text-blue-300"><Wind size={40} /></div>
               <div className="absolute bottom-20 left-10 animate-pulse text-blue-300"><Wind size={40} /></div>
               <div className="absolute top-1/2 -right-12 bg-red-100 text-red-600 px-3 py-1 rounded text-xs font-bold uppercase rotate-12">¡Ataque!</div>
             </>
           )}

           <div className={`absolute bottom-0 text-center font-bold text-xl uppercase tracking-widest transition-colors ${isDay ? 'text-stone-400' : 'text-indigo-300'}`}>
             {isDay ? 'Modo: Protección Externa (Yang)' : 'Modo: Reparación Interna (Yin)'}
           </div>

        </div>

        {/* Content */}
        <div className="flex-1 space-y-8">
           
           <div className={`p-8 rounded-2xl border-l-8 transition-colors duration-1000 ${isDay ? 'bg-white border-orange-500' : 'bg-stone-800 border-indigo-500'}`}>
             <h4 className={`text-3xl font-bold mb-4 ${isDay ? 'text-ink' : 'text-white'}`}>Funciones Principales</h4>
             <ul className={`space-y-4 text-xl ${isDay ? 'text-stone-600' : 'text-stone-300'}`}>
               <li className="flex items-center gap-3">
                 <Shield size={24} /> Protege la superficie contra factores patógenos (viento, frío).
               </li>
               <li className="flex items-center gap-3">
                 <Thermometer size={24} /> Calienta la piel y los músculos (Termorregulación).
               </li>
               <li className="flex items-center gap-3">
                 <Wind size={24} /> Controla la apertura y cierre de los poros (sudoración).
               </li>
             </ul>
           </div>

           <div className={`p-6 rounded-xl italic text-lg transition-colors ${isDay ? 'bg-orange-50 text-orange-800' : 'bg-indigo-950 text-indigo-200'}`}>
             {isDay 
               ? '"El Wei Qi es como el sistema de alarma. Si funciona bien, la casa está tibia y los ladrones no entran."'
               : '"De noche, el Wei Qi entra al interior (Yin) para permitirnos dormir y regenerarnos."'
             }
           </div>

        </div>

      </div>
    </div>
  );
};