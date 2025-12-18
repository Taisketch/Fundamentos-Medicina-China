import React, { useState } from 'react';
import { Move, Shield, Zap } from 'lucide-react';

export const Slide9: React.FC = () => {
  const [heat, setHeat] = useState(30);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 flex justify-between items-end border-b border-stone-200 pb-6">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 9</span>
          <h2 className="text-5xl font-serif font-bold text-ink">Qi (El Dinamismo Vital)</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"Movimiento y Transformación"</h3>
        </div>
        <div className="text-8xl font-serif opacity-10 font-bold">氣</div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Ideogram Interactive Explanation */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white border border-stone-200 rounded-2xl p-10 shadow-sm">
           
           <h4 className="text-sm uppercase font-bold text-stone-400 tracking-widest mb-10">Origen del Ideograma</h4>

           <div className="relative w-64 h-80 flex flex-col items-center justify-end mb-10 scale-110">
              
              {/* Vapor/Steam (Yang) */}
              <div className="absolute bottom-28 w-full flex justify-center space-x-3">
                 {[1, 2, 3].map((i) => (
                   <div 
                     key={i}
                     className="w-6 bg-stone-300 rounded-full blur-md transition-all duration-300"
                     style={{ 
                       height: `${heat * 2}px`, 
                       opacity: heat / 100,
                       transform: `translateY(-${heat/4}px)` 
                     }}
                   ></div>
                 ))}
              </div>
              
              {/* Lid */}
              <div className={`w-40 h-6 bg-stone-800 rounded-t-lg mb-1 transition-transform duration-100 ${heat > 80 ? 'animate-bounce' : ''}`}></div>

              {/* Pot/Rice (Yin) */}
              <div className="w-40 h-32 bg-stone-800 rounded-b-2xl flex items-center justify-center relative overflow-hidden">
                 <span className="text-white font-serif text-6xl">米</span>
                 <div className="absolute bottom-0 w-full bg-red-500 transition-all duration-300 opacity-50" style={{ height: `${heat/3}%` }}></div>
              </div>

              {/* Fire */}
              <div className="mt-4 text-4xl animate-pulse" style={{ opacity: heat / 100 }}>🔥🔥🔥</div>

           </div>

           <div className="w-full max-w-sm bg-stone-50 p-6 rounded-xl">
             <label className="text-base font-bold text-stone-500 mb-3 block text-center">Calor Metabólico</label>
             <input 
               type="range" 
               min="0" 
               max="100" 
               value={heat}
               onChange={(e) => setHeat(Number(e.target.value))}
               className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-red-500"
             />
             <p className="text-lg text-stone-600 mt-4 text-center">
               Arroz (Yin/Tierra) + Calor = Vapor (Yang/Cielo) -> <strong>Qi</strong>
             </p>
           </div>
        </div>

        {/* Functions List */}
        <div className="flex-1 space-y-6 flex flex-col justify-center">
           <div className="prose prose-stone mb-6 max-w-none">
             <p className="text-2xl leading-relaxed">
               El Qi es el resultado de la interacción entre Jing y Shen. Es el "Obrero" que construye y repara constantemente.
             </p>
           </div>

           <div className="grid grid-cols-1 gap-6">
             <div className="flex items-center gap-6 p-6 bg-orange-50 rounded-xl border border-orange-100 transition-transform hover:scale-105 shadow-sm">
               <div className="bg-orange-200 p-4 rounded-full"><Zap className="text-orange-600" size={32}/></div>
               <div>
                 <strong className="block text-ink text-2xl mb-1">Termogénesis</strong>
                 <span className="text-xl text-stone-600">Nutre y calienta. Mantiene la temperatura.</span>
               </div>
             </div>

             <div className="flex items-center gap-6 p-6 bg-blue-50 rounded-xl border border-blue-100 transition-transform hover:scale-105 shadow-sm">
               <div className="bg-blue-200 p-4 rounded-full"><Move className="text-blue-600" size={32}/></div>
               <div>
                 <strong className="block text-ink text-2xl mb-1">Movimiento</strong>
                 <span className="text-xl text-stone-600">Moviliza la sangre y los fluidos. Sin Qi, todo se estanca.</span>
               </div>
             </div>

             <div className="flex items-center gap-6 p-6 bg-stone-100 rounded-xl border border-stone-200 transition-transform hover:scale-105 shadow-sm">
               <div className="bg-stone-300 p-4 rounded-full"><Shield className="text-stone-600" size={32}/></div>
               <div>
                 <strong className="block text-ink text-2xl mb-1">Protección (Wei Qi)</strong>
                 <span className="text-xl text-stone-600">Defiende contra factores externos (viento, frío).</span>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};