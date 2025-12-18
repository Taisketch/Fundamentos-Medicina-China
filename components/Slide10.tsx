import React, { useState, useEffect } from 'react';
import { Flame, Info } from 'lucide-react';

export const Slide10: React.FC = () => {
  const [wax, setWax] = useState(80); // Jing
  const [flameSize, setFlameSize] = useState(50); // Shen
  
  // Derived state: Qi (Combustion/Light output)
  const qiOutput = (wax > 0) ? (flameSize * 0.8) : 0;
  
  // Effect: Wax consumption over time based on flame size
  useEffect(() => {
    if (wax > 0 && flameSize > 0) {
      const interval = setInterval(() => {
        // Larger flame consumes wax faster
        const consumption = flameSize / 500; 
        setWax(prev => Math.max(0, prev - consumption));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [wax, flameSize]);

  // Adjust flame automatically if wax runs out
  useEffect(() => {
    if (wax <= 0) setFlameSize(0);
  }, [wax]);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 flex justify-between items-end border-b border-stone-200 pb-6">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 10 - Ejercicio</span>
          <h2 className="text-5xl font-serif font-bold text-ink">El Diagnóstico de la Vela</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"Integración de los Tres Tesoros"</h3>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Interactive Candle Visualization */}
        <div className="flex-1 w-full flex flex-col items-center justify-end h-[600px] relative bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-stone-800">
           
           {/* Darkness / Ambience */}
           <div className="absolute inset-0 bg-black opacity-80 pointer-events-none z-0"></div>
           
           {/* Light (Shen/Qi manifestation) */}
           <div 
             className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full bg-orange-400 blur-[80px] transition-all duration-300 z-0"
             style={{ 
               width: `${qiOutput * 10}px`, 
               height: `${qiOutput * 10}px`,
               opacity: qiOutput / 100 
             }}
           ></div>

           {/* Flame (Shen) */}
           <div className="relative z-10 flex flex-col items-center transition-all duration-300" style={{ marginBottom: `${wax * 3.5}px` }}>
              <div 
                className={`relative transition-all duration-300 ${flameSize > 0 ? 'animate-pulse' : ''}`}
                style={{ transform: `scale(${flameSize/35})` }}
              >
                {flameSize > 0 && (
                   <div className="w-10 h-16 bg-gradient-to-t from-orange-600 via-yellow-400 to-white rounded-full blur-[2px] shadow-[0_0_30px_orange]"></div>
                )}
              </div>
              {/* Wick */}
              <div className="w-2 h-6 bg-stone-800"></div>
           </div>

           {/* Candle Body (Jing) */}
           <div 
             className="w-40 bg-stone-100 rounded-t-lg z-10 transition-all duration-100 relative shadow-[inset_0_0_30px_rgba(0,0,0,0.1)]"
             style={{ height: `${wax * 4}px` }}
           >
             {/* Label on the candle */}
             <div className="absolute bottom-6 left-0 right-0 text-center text-stone-400 text-sm font-bold uppercase tracking-widest">
                Jing (Cera)
             </div>
           </div>
           
           {/* Base */}
           <div className="w-64 h-10 bg-stone-800 rounded-lg z-10"></div>

        </div>

        {/* Controls and Explanation */}
        <div className="flex-1 space-y-10 w-full max-w-xl">
           
           <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
             <h4 className="flex items-center gap-3 font-bold text-ink text-2xl mb-6">
               <Info size={28} className="text-blue-500" />
               Panel de Control Vital
             </h4>
             
             {/* Jing Control */}
             <div className="mb-8">
               <div className="flex justify-between mb-3">
                 <label className="font-bold text-stone-700 text-lg">Jing (Cera/Sustancia)</label>
                 <span className="text-lg text-stone-500 font-bold">{Math.round(wax)}%</span>
               </div>
               <input 
                 type="range" 
                 min="0" 
                 max="100" 
                 value={wax}
                 onChange={(e) => setWax(Number(e.target.value))}
                 className="w-full h-4 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-500"
               />
               <p className="text-base text-stone-500 mt-2">Si se acaba la cera, la llama no tiene sustento.</p>
             </div>

             {/* Shen Control */}
             <div>
               <div className="flex justify-between mb-3">
                 <label className="font-bold text-orange-600 text-lg">Shen (Llama/Espíritu)</label>
                 <span className="text-lg text-stone-500 font-bold">{flameSize}%</span>
               </div>
               <input 
                 type="range" 
                 min="0" 
                 max="100" 
                 value={flameSize}
                 disabled={wax <= 0}
                 onChange={(e) => setFlameSize(Number(e.target.value))}
                 className="w-full h-4 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
               />
               <p className="text-base text-stone-500 mt-2 leading-relaxed">
                 Una llama muy intensa consume el Jing rápidamente (Burnout). Sin llama, es solo un cuerpo inerte.
               </p>
             </div>
           </div>

           {/* Legend */}
           <div className="grid grid-cols-1 gap-5">
              <div className="p-5 border-l-8 border-stone-400 bg-stone-50 rounded-r-lg">
                 <strong className="block text-ink text-xl mb-1">Jing (Cera)</strong>
                 <span className="text-lg text-stone-600">La base material. Lo que se consume.</span>
              </div>
              <div className="p-5 border-l-8 border-orange-500 bg-orange-50 rounded-r-lg">
                 <strong className="block text-ink text-xl mb-1">Shen (Luz/Brillo)</strong>
                 <span className="text-lg text-stone-600">Lo inmaterial. La guía en la oscuridad.</span>
              </div>
              <div className="p-5 border-l-8 border-red-500 bg-red-50 rounded-r-lg">
                 <strong className="block text-ink text-xl mb-1">Qi (Combustión/Calor)</strong>
                 <span className="text-lg text-stone-600">El proceso de transformación de cera en luz. El movimiento del fuego.</span>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};