import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Flame, Droplet, AlertTriangle } from 'lucide-react';

export const Slide24: React.FC = () => {
  const [separated, setSeparated] = useState(false);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 24</span>
        <h2 className="text-5xl font-serif font-bold text-ink">La Raíz Vertical - Fuego y Agua</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Fundamento de la Vida"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Alchemy Interaction */}
        <div className="flex-1 relative w-full h-[600px] bg-stone-900 rounded-3xl border-4 border-stone-700 flex items-center justify-center p-8 shadow-2xl overflow-hidden">
           
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

           {/* Fire (Heart) */}
           <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-1000 w-full flex flex-col items-center z-10
              ${separated ? 'top-10' : 'top-[20%]'}
           `}>
             <div className="w-32 h-32 bg-red-600 rounded-full blur-[40px] absolute top-0 opacity-50"></div>
             <Flame size={80} className="text-red-500 fill-red-500 animate-pulse relative z-10" />
             <span className="text-red-400 font-bold uppercase tracking-widest mt-2">Fuego (Corazón)</span>
             <span className="text-xs text-red-300">Máximo Yang</span>
             
             {/* Descending Arrow */}
             <div className={`mt-4 transition-opacity duration-500 ${separated ? 'opacity-0' : 'opacity-100'}`}>
                <ArrowDown className="text-red-500 animate-bounce" size={40} />
             </div>
           </div>

           {/* Water (Kidney) */}
           <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-1000 w-full flex flex-col-reverse items-center z-10
              ${separated ? 'bottom-10' : 'bottom-[20%]'}
           `}>
             <div className="w-32 h-32 bg-blue-600 rounded-full blur-[40px] absolute bottom-0 opacity-50"></div>
             <Droplet size={80} className="text-blue-500 fill-blue-500 animate-bounce relative z-10" />
             <span className="text-blue-400 font-bold uppercase tracking-widest mb-2">Agua (Riñón)</span>
             <span className="text-xs text-blue-300">Máximo Yin</span>

             {/* Ascending Arrow */}
             <div className={`mb-4 transition-opacity duration-500 ${separated ? 'opacity-0' : 'opacity-100'}`}>
                <ArrowUp className="text-blue-500 animate-bounce" size={40} />
             </div>
           </div>

           {/* The Middle Interaction Zone */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full transition-all duration-1000 flex items-center justify-center
              ${separated ? 'opacity-0 scale-50' : 'opacity-100 scale-100 bg-purple-500/20 blur-xl'}
           `}>
           </div>
           {!separated && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-serif italic text-xl opacity-80 z-20">
                Vida / Comunicación
              </div>
           )}

           {separated && (
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-800 border border-red-500 p-4 rounded-lg flex items-center gap-3 z-30 animate-pulse">
               <AlertTriangle className="text-red-500" />
               <span className="text-red-400 font-bold uppercase">Muerte / Enfermedad</span>
             </div>
           )}

        </div>

        {/* Controls Panel */}
        <div className="flex-1 space-y-10">
           
           <div className="bg-white p-8 rounded-2xl border-l-8 border-red-600 shadow-sm">
             <h4 className="text-3xl font-bold text-ink mb-4">El Esfuerzo Vital</h4>
             <p className="text-xl text-stone-700 leading-relaxed">
               En el cuerpo: <br/>
               El <strong>Fuego</strong> (que flota) debe obligarse a bajar.<br/>
               El <strong>Agua</strong> (que se hunde) debe obligarse a subir.
             </p>
           </div>

           <div className="p-6 bg-stone-100 rounded-xl">
             <div className="flex justify-between items-center mb-4">
               <span className="font-bold text-lg text-stone-600">Estado Clínico</span>
               <span className={`font-bold text-lg ${separated ? 'text-red-600' : 'text-green-600'}`}>
                 {separated ? 'Separación (Yin/Yang)' : 'Comunicación (Salud)'}
               </span>
             </div>
             
             <div className="flex gap-4">
               <button 
                 onClick={() => setSeparated(false)}
                 className={`flex-1 py-4 rounded-lg font-bold text-lg transition-all ${!separated ? 'bg-green-600 text-white shadow-md' : 'bg-stone-200 text-stone-500'}`}
               >
                 Unir (Vida)
               </button>
               <button 
                 onClick={() => setSeparated(true)}
                 className={`flex-1 py-4 rounded-lg font-bold text-lg transition-all ${separated ? 'bg-red-600 text-white shadow-md' : 'bg-stone-200 text-stone-500'}`}
               >
                 Separar (Muerte)
               </button>
             </div>
           </div>

           <div className="space-y-4">
              <p className="text-lg text-stone-600">
                <strong className="text-red-700">Fuego (Verano):</strong> Su movimiento natural es ir arriba, pero fisiológicamente debe <strong>descender</strong> para calentar el Agua.
              </p>
              <p className="text-lg text-stone-600">
                <strong className="text-blue-700">Agua (Invierno):</strong> Almacena esencia y debe <strong>ascender</strong> para nutrir y controlar el Fuego.
              </p>
           </div>

        </div>

      </div>
    </div>
  );
};