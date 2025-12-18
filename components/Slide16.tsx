import React, { useState } from 'react';
import { Cloud, Zap, Droplet, Snowflake } from 'lucide-react';

export const Slide16: React.FC = () => {
  const [form, setForm] = useState<'vapor' | 'liquid' | 'ice'>('liquid');

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 16</span>
        <h2 className="text-5xl font-serif font-bold text-ink">El Qi es Uno, sus Manifestaciones son Múltiples</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"Un Solo Actor, Diferentes Papeles"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Concept Text */}
        <div className="flex-1 space-y-8">
           <div className="bg-stone-50 p-8 rounded-xl border-l-8 border-ink">
             <p className="text-2xl text-ink leading-relaxed">
               No tenemos "baterías separadas". Es la misma energía comportándose diferente según la temperatura y función.
             </p>
           </div>

           <div className="space-y-6">
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                 <span className="font-bold text-blue-800 text-xl">1</span>
               </div>
               <div>
                 <h4 className="text-2xl font-bold text-ink mb-2">Unidad Fundamental</h4>
                 <p className="text-xl text-stone-600">El Qi posee una naturaleza única y constante.</p>
               </div>
             </div>

             <div className="flex gap-4">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                 <span className="font-bold text-blue-800 text-xl">2</span>
               </div>
               <div>
                 <h4 className="text-2xl font-bold text-ink mb-2">Diferenciación</h4>
                 <p className="text-xl text-stone-600">Cambia su forma y función según la tarea: calentar, nutrir, defender.</p>
               </div>
             </div>
           </div>
        </div>

        {/* Visual Analogy */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-4 border-blue-100 p-8 flex flex-col items-center justify-between min-h-[500px] shadow-lg">
           
           <h4 className="text-stone-400 font-bold uppercase tracking-widest mb-4">La Analogía del Agua (H2O)</h4>

           {/* Visualization Area */}
           <div className="flex-1 w-full flex items-center justify-center relative">
              
              {/* VAPOR */}
              <div className={`absolute transition-all duration-700 flex flex-col items-center ${form === 'vapor' ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`}>
                 <Cloud size={120} className="text-stone-300 animate-pulse" />
                 <div className="mt-4 bg-stone-200 px-6 py-2 rounded-full border-2 border-stone-300">
                    <span className="font-bold text-2xl text-stone-600 block text-center">WEI QI</span>
                    <span className="text-sm uppercase tracking-widest font-bold text-stone-400 text-center block">Vapor / Sutil / Defensa</span>
                 </div>
              </div>

              {/* LIQUID */}
              <div className={`absolute transition-all duration-700 flex flex-col items-center ${form === 'liquid' ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`}>
                 <div className="relative">
                   <Droplet size={120} className="text-blue-500 fill-blue-500 animate-bounce" />
                   <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">H2O</div>
                 </div>
                 <div className="mt-4 bg-blue-100 px-6 py-2 rounded-full border-2 border-blue-200">
                    <span className="font-bold text-2xl text-blue-800 block text-center">YING QI</span>
                    <span className="text-sm uppercase tracking-widest font-bold text-blue-400 text-center block">Líquido / Nutritivo</span>
                 </div>
              </div>

              {/* ICE */}
              <div className={`absolute transition-all duration-700 flex flex-col items-center ${form === 'ice' ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`}>
                 <Snowflake size={120} className="text-cyan-300 animate-spin-slow" />
                 <div className="mt-4 bg-cyan-50 px-6 py-2 rounded-full border-2 border-cyan-200">
                    <span className="font-bold text-2xl text-cyan-700 block text-center">JING / FORMA</span>
                    <span className="text-sm uppercase tracking-widest font-bold text-cyan-400 text-center block">Sólido / Estructural</span>
                 </div>
              </div>

           </div>

           {/* Controls */}
           <div className="flex gap-4 w-full mt-8">
             <button 
               onClick={() => setForm('vapor')}
               className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${form === 'vapor' ? 'bg-stone-200 text-ink shadow-inner ring-2 ring-stone-400' : 'bg-white shadow-sm border text-stone-400'}`}
             >
               Vapor (Wei)
             </button>
             <button 
               onClick={() => setForm('liquid')}
               className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${form === 'liquid' ? 'bg-blue-100 text-blue-800 shadow-inner ring-2 ring-blue-400' : 'bg-white shadow-sm border text-stone-400'}`}
             >
               Líquido (Ying)
             </button>
             <button 
               onClick={() => setForm('ice')}
               className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${form === 'ice' ? 'bg-cyan-100 text-cyan-800 shadow-inner ring-2 ring-cyan-400' : 'bg-white shadow-sm border text-stone-400'}`}
             >
               Sólido (Jing)
             </button>
           </div>

        </div>

      </div>
    </div>
  );
};