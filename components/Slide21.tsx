import React, { useState } from 'react';
import { Compass, User, RefreshCw } from 'lucide-react';

export const Slide21: React.FC = () => {
  const [showCenter, setShowCenter] = useState(false);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 21</span>
        <h2 className="text-5xl font-serif font-bold text-ink">Del 4 al 5 - La Aparición del Centro</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Tiempo, el Espacio y el Observador"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Interactive Diagram: The Cross becoming The Circle */}
        <div className="flex-1 relative w-full h-[600px] bg-stone-100 rounded-full border-4 border-stone-300 flex items-center justify-center overflow-hidden">
           
           {/* The 4 Phases (Seasons) */}
           <div className={`absolute top-10 font-bold text-2xl uppercase tracking-widest text-red-600 transition-all duration-700 ${showCenter ? 'top-10' : 'top-10'}`}>Verano (Fuego)</div>
           <div className={`absolute bottom-10 font-bold text-2xl uppercase tracking-widest text-blue-800 transition-all duration-700 ${showCenter ? 'bottom-10' : 'bottom-10'}`}>Invierno (Agua)</div>
           <div className={`absolute left-10 font-bold text-2xl uppercase tracking-widest text-green-700 transition-all duration-700 ${showCenter ? 'left-10' : 'left-10'}`}>Primavera (Madera)</div>
           <div className={`absolute right-10 font-bold text-2xl uppercase tracking-widest text-stone-500 transition-all duration-700 ${showCenter ? 'right-10' : 'right-10'}`}>Otoño (Metal)</div>

           {/* Cross Lines */}
           <div className="absolute w-[90%] h-1 bg-stone-300"></div>
           <div className="absolute h-[90%] w-1 bg-stone-300"></div>

           {/* The Cycle Arrows */}
           <div className={`absolute inset-0 border-[20px] border-dashed border-stone-200 rounded-full animate-spin-slow opacity-30 pointer-events-none`}></div>

           {/* The Observer / Center */}
           <div 
             className={`z-20 flex flex-col items-center justify-center transition-all duration-1000 
               ${showCenter ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}
             `}
           >
             <div className="w-32 h-32 bg-yellow-400 rounded-full border-4 border-yellow-600 shadow-xl flex items-center justify-center">
                <User size={64} className="text-yellow-900" />
             </div>
             <div className="mt-4 bg-white/90 px-4 py-2 rounded-lg shadow-md text-center">
               <strong className="block text-yellow-800 text-xl font-bold uppercase">Tierra (Centro)</strong>
               <span className="text-sm text-stone-500 font-bold">El Pivote (5)</span>
             </div>
           </div>

        </div>

        {/* Content Panel */}
        <div className="flex-1 space-y-10">
           
           <div className="bg-white p-8 rounded-2xl border-l-8 border-yellow-500 shadow-sm">
             <h4 className="text-3xl font-bold text-ink mb-4">El Origen Temporal</h4>
             <p className="text-xl text-stone-600 leading-relaxed">
               Los 5 Movimientos nacen de la experiencia de una persona parada en la Tierra observando el ciclo del sol.
             </p>
           </div>

           <ul className="space-y-6 text-xl text-stone-700">
             <li className="flex gap-4 items-center">
               <RefreshCw className="text-stone-400" />
               <span>El tiempo es cíclico (4 fases), pero...</span>
             </li>
             <li className="flex gap-4 items-center">
               <Compass className="text-yellow-600" />
               <span>Las direcciones no son nada sin <strong>alguien en el medio</strong> que las experimente.</span>
             </li>
           </ul>

           <button 
             onClick={() => setShowCenter(!showCenter)}
             className={`w-full py-6 rounded-xl font-bold text-2xl transition-all shadow-md flex items-center justify-center gap-3
               ${showCenter 
                 ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                 : 'bg-stone-200 text-stone-500 hover:bg-stone-300'}
             `}
           >
             {showCenter ? 'Quitar Observador' : 'Añadir el Centro (Tierra)'}
             <User size={28} />
           </button>

           <div className="bg-stone-100 p-6 rounded-xl text-center">
             <p className="italic text-lg text-stone-500">
               "El número 5 no es un elemento más, es el pivote. Sin el centro, las estaciones no giran."
             </p>
           </div>

        </div>

      </div>
    </div>
  );
};