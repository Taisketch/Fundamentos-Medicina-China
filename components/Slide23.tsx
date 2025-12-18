import React from 'react';
import { ArrowUpRight, ArrowDownRight, Sprout, Wind } from 'lucide-react';

export const Slide23: React.FC = () => {
  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 23</span>
        <h2 className="text-5xl font-serif font-bold text-ink">La Rueda Externa</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Ciclo de la Izquierda y la Derecha"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12 items-center">
        
        {/* The Vortex Visualization */}
        <div className="flex-1 relative w-full h-[600px] bg-white rounded-3xl border border-stone-200 shadow-xl flex items-center justify-center p-8">
           
           {/* Center Pivot Hint */}
           <div className="absolute w-20 h-20 bg-yellow-100 rounded-full border-2 border-yellow-300 flex items-center justify-center text-xs font-bold text-yellow-700 uppercase z-0 opacity-50">
             Tierra (Eje)
           </div>

           {/* Left Side: Liver / Wood */}
           <div className="absolute left-8 md:left-16 bottom-16 flex flex-col items-center group">
              <div className="w-40 h-40 rounded-full bg-green-100 border-4 border-green-500 flex flex-col items-center justify-center shadow-lg animate-float-slow z-10 relative">
                 <Sprout size={48} className="text-green-600 mb-2" />
                 <span className="font-bold text-green-900 text-xl">HÍGADO</span>
                 <span className="text-xs font-bold text-green-700 uppercase">Izquierda (Este)</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-green-600 font-bold text-xl animate-pulse">
                <ArrowUpRight size={32} />
                <span>ASCENSO</span>
              </div>
              <div className="absolute -right-20 top-0 w-32 text-sm text-stone-400 italic opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow border">
                "Yang dentro del Yin" - Primavera
              </div>
           </div>

           {/* Right Side: Lung / Metal */}
           <div className="absolute right-8 md:right-16 top-16 flex flex-col items-center group">
              <div className="mt-4 flex items-center gap-2 text-stone-500 font-bold text-xl animate-pulse mb-4">
                <span>DESCENSO</span>
                <ArrowDownRight size={32} />
              </div>
              <div className="w-40 h-40 rounded-full bg-stone-100 border-4 border-stone-400 flex flex-col items-center justify-center shadow-lg animate-float-slow delay-700 z-10 relative">
                 <Wind size={48} className="text-stone-600 mb-2" />
                 <span className="font-bold text-stone-800 text-xl">PULMÓN</span>
                 <span className="text-xs font-bold text-stone-500 uppercase">Derecha (Oeste)</span>
              </div>
              <div className="absolute -left-20 bottom-0 w-32 text-sm text-stone-400 italic opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow border text-right">
                "Yin dentro del Yang" - Otoño
              </div>
           </div>

           {/* Cycle Arrows */}
           <div className="absolute inset-20 border-[30px] border-stone-100 rounded-full border-t-stone-200 border-l-green-100 border-r-stone-300 border-b-green-50 -z-10 animate-spin-veryslow"></div>
           
           {/* Flow Path */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
             <path d="M 150 450 Q 100 200 400 100" stroke="green" strokeWidth="4" fill="none" strokeDasharray="10 10" className="animate-dash" />
             <path d="M 450 150 Q 500 400 200 500" stroke="gray" strokeWidth="4" fill="none" strokeDasharray="10 10" className="animate-dash" />
           </svg>

        </div>

        {/* Text Panel */}
        <div className="flex-1 space-y-8">
           
           <div className="bg-stone-50 p-8 rounded-2xl border-l-8 border-ink">
             <h4 className="text-2xl font-bold mb-4">Regulación de Presiones</h4>
             <p className="text-xl text-stone-700 leading-relaxed">
               Madera y Metal regulan la circulación periférica. El ascenso del Hígado por la izquierda ayuda al Bazo a subir. El descenso del Pulmón por la derecha ayuda al Estómago a bajar.
             </p>
           </div>

           <div className="grid grid-cols-1 gap-6">
             <div className="p-6 rounded-xl border-l-4 border-green-500 bg-white shadow-sm">
               <strong className="block text-green-700 text-xl mb-1">Primavera (Generación)</strong>
               <p className="text-stone-600">Movimiento hacia afuera. Expansión.</p>
             </div>
             <div className="p-6 rounded-xl border-l-4 border-stone-500 bg-white shadow-sm">
               <strong className="block text-stone-700 text-xl mb-1">Otoño (Recolección)</strong>
               <p className="text-stone-600">Movimiento hacia adentro. Contracción.</p>
             </div>
           </div>

           <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
             <p className="italic text-lg text-blue-900 font-serif">
               "Esto crea un vórtice de energía circulatoria que mantiene la vida en movimiento."
             </p>
           </div>

        </div>

      </div>
    </div>
  );
};