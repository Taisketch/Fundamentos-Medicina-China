import React from 'react';
import { Truck, Box, GitCommitHorizontal } from 'lucide-react';

export const Slide19: React.FC = () => {
  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 19</span>
        <h2 className="text-5xl font-serif font-bold text-ink">Ying Qi (Qi Nutritivo)</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Constructor Interno"</h3>
      </div>

      <div className="flex-1 flex flex-col gap-12">
        
        {/* Main Metaphor Visual - The Highway */}
        <div className="w-full h-64 bg-red-50 rounded-3xl border-4 border-red-200 relative overflow-hidden flex items-center shadow-inner">
           
           {/* Vessel Walls */}
           <div className="absolute top-0 left-0 right-0 h-4 bg-red-200/50"></div>
           <div className="absolute bottom-0 left-0 right-0 h-4 bg-red-200/50"></div>
           
           {/* Blood Cells / Qi particles */}
           <div className="absolute inset-0 flex items-center justify-around opacity-30">
              <div className="w-12 h-12 rounded-full bg-red-400 blur-sm animate-pulse"></div>
              <div className="w-16 h-16 rounded-full bg-red-300 blur-sm animate-pulse delay-75"></div>
              <div className="w-10 h-10 rounded-full bg-red-500 blur-sm animate-pulse delay-150"></div>
           </div>

           {/* The Truck (Ying Qi) */}
           <div className="relative z-10 flex flex-col items-center animate-[slideRight_10s_linear_infinite]">
              <div className="flex items-center gap-4">
                <Truck size={100} className="text-red-700" />
                <div className="flex gap-1">
                   <Box size={50} className="text-yellow-600 bg-yellow-100 p-2 rounded border-2 border-yellow-300" />
                   <Box size={50} className="text-yellow-600 bg-yellow-100 p-2 rounded border-2 border-yellow-300" />
                </div>
              </div>
              <div className="mt-4 bg-white/90 px-6 py-2 rounded-lg border-2 border-red-200 shadow-md">
                 <span className="font-bold text-2xl text-red-800 uppercase tracking-widest whitespace-nowrap block">Ying Qi</span>
                 <span className="text-xs font-bold text-red-400 uppercase tracking-widest block text-center">Nutrición</span>
              </div>
           </div>

           <style>{`
             @keyframes slideRight {
               0% { transform: translateX(-300px); }
               100% { transform: translateX(120vw); }
             }
           `}</style>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
           
           <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h4 className="text-2xl font-bold text-ink mb-2">Ubicación Estricta</h4>
                <p className="text-xl text-stone-600">
                  Circula <strong>estrictamente dentro</strong> de los vasos y canales, siempre junto con la sangre.
                </p>
             </div>
             
             <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h4 className="text-2xl font-bold text-ink mb-2">Función Principal</h4>
                <p className="text-xl text-stone-600">
                  Nutre los órganos (Zang Fu) y se transforma en sangre (es un precursor directo).
                </p>
             </div>
           </div>

           <div className="bg-stone-100 p-8 rounded-2xl flex flex-col justify-center border border-stone-200">
              <h4 className="text-2xl font-bold text-stone-700 mb-4 flex items-center gap-3">
                <GitCommitHorizontal />
                El Ciclo Preciso
              </h4>
              <p className="text-xl text-stone-600 leading-relaxed italic">
                "El Ying Qi es el camión de suministros que viaja por la autopista (vasos). Si el camión no llega, la tienda (órgano) se queda sin productos para trabajar."
              </p>
              <div className="mt-4 bg-stone-200 px-4 py-2 rounded-lg text-stone-500 font-bold text-sm inline-block w-fit">
                50 Vueltas al día por los 12 canales
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};