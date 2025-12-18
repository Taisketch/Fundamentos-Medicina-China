import React, { useState } from 'react';
import { User, Layers, Circle } from 'lucide-react';

export const Slide26: React.FC = () => {
  const [unified, setUnified] = useState(false);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 26</span>
        <h2 className="text-5xl font-serif font-bold text-ink">La Gran Síntesis - Tres son Uno</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Ser Humano como Reunión"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Interactive Diagram: Separation vs Unity */}
        <div className="flex-1 relative h-[500px] w-full flex items-center justify-center">
           
           {/* Background Circle (The Whole) */}
           <div className={`absolute transition-all duration-1000 rounded-full border-4 border-stone-300 ${unified ? 'w-96 h-96 opacity-100' : 'w-0 h-0 opacity-0'}`}></div>

           {/* Shen (Heaven) */}
           <div className={`absolute w-40 h-40 rounded-full bg-blue-100 border-4 border-blue-400 flex items-center justify-center shadow-lg transition-all duration-1000 z-30
              ${unified ? 'translate-y-[-80px] translate-x-0 opacity-80 mix-blend-multiply' : 'translate-y-[-150px] translate-x-[-100px]'}
           `}>
             <span className="font-bold text-blue-800 text-xl">SHEN</span>
           </div>

           {/* Qi (Man) */}
           <div className={`absolute w-40 h-40 rounded-full bg-red-100 border-4 border-red-400 flex items-center justify-center shadow-lg transition-all duration-1000 z-20
              ${unified ? 'translate-y-[60px] translate-x-[70px] opacity-80 mix-blend-multiply' : 'translate-y-0 translate-x-[100px]'}
           `}>
             <span className="font-bold text-red-800 text-xl">QI</span>
           </div>

           {/* Jing (Earth) */}
           <div className={`absolute w-40 h-40 rounded-full bg-amber-100 border-4 border-amber-400 flex items-center justify-center shadow-lg transition-all duration-1000 z-10
              ${unified ? 'translate-y-[60px] translate-x-[-70px] opacity-80 mix-blend-multiply' : 'translate-y-[150px] translate-x-[-100px]'}
           `}>
             <span className="font-bold text-amber-800 text-xl">JING</span>
           </div>

           {/* Central Core */}
           <div className={`absolute w-20 h-20 bg-white rounded-full flex items-center justify-center z-40 transition-opacity duration-1000 ${unified ? 'opacity-100' : 'opacity-0'}`}>
              <User size={40} className="text-ink" />
           </div>

        </div>

        {/* Content */}
        <div className="flex-1 space-y-8">
           
           <div className="bg-stone-50 p-8 rounded-2xl border-l-8 border-ink shadow-sm">
             <h4 className="text-2xl font-bold mb-4 text-ink">La Fórmula de la Vida</h4>
             <p className="text-xl text-stone-700 leading-relaxed">
               No somos partes separadas. El Shen (Cielo) impacta en el Jing (Tierra) y esa fricción genera el Qi (Vapor).
             </p>
           </div>

           <div className="space-y-4">
             <p className="text-lg text-stone-600 border-l-4 border-stone-300 pl-4">
               <strong>Conservación:</strong> No podemos "crear" Jing nuevo, pero podemos optimizar su conexión con el Shen.
             </p>
             <p className="text-lg text-stone-600 border-l-4 border-stone-300 pl-4">
               <strong>Unidad Indivisible:</strong> Tratar el cuerpo es tratar el espíritu, y viceversa.
             </p>
           </div>

           <button 
             onClick={() => setUnified(!unified)}
             className={`w-full py-6 rounded-xl font-bold text-2xl transition-all shadow-md flex items-center justify-center gap-3
               ${unified 
                 ? 'bg-stone-800 text-white hover:bg-black' 
                 : 'bg-stone-200 text-stone-500 hover:bg-stone-300'}
             `}
           >
             {unified ? 'Separar (Visión Mecánica)' : 'Unificar (Visión Holística)'}
             {unified ? <Layers size={28} /> : <Circle size={28} />}
           </button>

           {unified && (
             <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center font-bold animate-fadeIn">
               ¡Salud Integral! No existen enfermedades "solo físicas" o "solo mentales".
             </div>
           )}

        </div>

      </div>
    </div>
  );
};