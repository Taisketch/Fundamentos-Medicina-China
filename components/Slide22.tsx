import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Settings } from 'lucide-react';

export const Slide22: React.FC = () => {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 22</span>
        <h2 className="text-5xl font-serif font-bold text-ink">El Eje Central - La Tierra</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Pivote del Ascenso y Descenso"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Interactive Pivot Mechanism */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[500px] w-full bg-stone-50 rounded-3xl border-2 border-stone-200 p-10">
           
           <h4 className="absolute top-6 left-6 font-bold text-stone-400 uppercase tracking-widest">Mecanismo Central</h4>

           {/* The Pivot System */}
           <div className="relative flex items-center justify-center">
              
              {/* Central Gear/Pivot */}
              <div className={`relative z-10 w-48 h-48 bg-yellow-400 rounded-full border-8 border-yellow-600 flex items-center justify-center shadow-xl ${isRotating ? 'animate-spin-slow' : ''}`}>
                 <Settings size={80} className="text-yellow-800 opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-yellow-900 uppercase">Tierra</div>
              </div>

              {/* Spleen (Left Side - Rising) */}
              <div className={`absolute left-[-180px] flex flex-col items-center transition-all duration-1000 ${isRotating ? 'translate-y-[-50px]' : 'translate-y-0'}`}>
                 <div className="w-40 h-24 bg-yellow-100 border-4 border-yellow-400 rounded-xl flex items-center justify-center shadow-md relative">
                    <span className="font-bold text-yellow-800 text-xl">BAZO (Yin)</span>
                    {isRotating && <ArrowUp className="absolute -top-10 text-yellow-600 animate-bounce" size={40} />}
                 </div>
                 <span className="mt-2 text-sm font-bold text-stone-500 uppercase">Asciende lo Claro</span>
              </div>

              {/* Stomach (Right Side - Descending) */}
              <div className={`absolute right-[-180px] flex flex-col items-center transition-all duration-1000 ${isRotating ? 'translate-y-[50px]' : 'translate-y-0'}`}>
                 <div className="w-40 h-24 bg-stone-200 border-4 border-stone-400 rounded-xl flex items-center justify-center shadow-md relative">
                    <span className="font-bold text-stone-700 text-xl">ESTÓMAGO (Yang)</span>
                    {isRotating && <ArrowDown className="absolute -bottom-10 text-stone-600 animate-bounce" size={40} />}
                 </div>
                 <span className="mt-2 text-sm font-bold text-stone-500 uppercase">Desciende lo Turbio</span>
              </div>

              {/* Connecting Bars */}
              <div className={`absolute w-[400px] h-4 bg-stone-300 -z-10 rounded-full ${isRotating ? 'rotate-12' : 'rotate-0'} transition-transform duration-1000`}></div>

           </div>

           {/* Control */}
           <button 
             onClick={() => setIsRotating(!isRotating)}
             className={`mt-20 px-10 py-4 rounded-full font-bold text-xl transition-all shadow-lg border-b-4 active:border-b-0 active:translate-y-1
               ${isRotating ? 'bg-red-500 border-red-700 text-white' : 'bg-green-500 border-green-700 text-white'}
             `}
           >
             {isRotating ? 'OXIDAR / TRABAR EJE' : 'REPARAR / GIRAR EJE'}
           </button>

        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-8">
           <div className="p-8 border-l-8 border-yellow-500 bg-yellow-50 rounded-r-xl shadow-sm">
             <h4 className="font-bold text-ink text-2xl mb-3">La Madre de los 4</h4>
             <p className="text-xl text-stone-700 leading-relaxed">
               La Tierra no es solo "digestión", es el <strong>eje mecánico</strong> que permite que el resto de los órganos suban o bajen.
             </p>
           </div>

           <div className="space-y-6 text-xl text-stone-600">
             <div className="flex items-center gap-4">
               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
               <p>Si el eje central se bloquea, la rueda externa (Hígado/Pulmón) deja de girar.</p>
             </div>
           </div>

           <div className="bg-stone-800 text-stone-200 p-8 rounded-xl border border-stone-700 mt-8">
             <p className="text-lg italic leading-relaxed text-center">
               "El Bazo/Estómago es el eje. Si el eje se oxida o traba, no importa qué tan buenas sean las llantas (Hígado/Pulmón), la bici no anda."
             </p>
           </div>

        </div>

      </div>
    </div>
  );
};