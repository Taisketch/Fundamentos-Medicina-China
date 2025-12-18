import React, { useState } from 'react';
import { Flame, Battery, Zap } from 'lucide-react';

export const Slide17: React.FC = () => {
  const [intensity, setIntensity] = useState(80);

  // Derive visual states from intensity
  const glowSize = intensity * 1.5;
  const bodyWarmth = intensity > 40 ? 'opacity-100' : 'opacity-30';
  const growthRate = intensity > 60 ? 'Crecimiento Óptimo' : intensity > 20 ? 'Crecimiento Lento' : 'Estancamiento';

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6 flex justify-between items-end">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 17</span>
          <h2 className="text-5xl font-serif font-bold text-ink">Yuan Qi (Qi Original)</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Fuerza Motriz de la Vida"</h3>
        </div>
        <div className="text-8xl font-serif opacity-10 font-bold text-ink">元氣</div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16">
        
        {/* Left: Analogy Visualization */}
        <div className="flex-1 bg-stone-900 rounded-3xl border-4 border-stone-700 p-10 flex flex-col items-center justify-between relative overflow-hidden shadow-2xl">
           
           <div className="absolute top-6 left-6 text-stone-500 font-bold uppercase tracking-widest text-sm">
             Analogía: Piloto de Estufa
           </div>

           {/* The Core / Ming Men Fire */}
           <div className="relative flex-1 flex flex-col items-center justify-center w-full">
              
              {/* Explicit Label */}
              <div className="mb-8 bg-orange-600/20 border border-orange-500/50 px-6 py-2 rounded-full backdrop-blur-sm">
                 <span className="text-orange-400 font-bold text-xl tracking-wider">YUAN QI (ORIGEN)</span>
              </div>

              <div className="relative flex items-center justify-center">
                {/* Glow */}
                <div 
                  className="absolute bg-orange-500 rounded-full blur-[60px] transition-all duration-300"
                  style={{ width: `${glowSize}px`, height: `${glowSize}px`, opacity: intensity / 100 }}
                ></div>
                
                {/* Flame Icon */}
                <Flame 
                  size={Math.max(40, intensity * 1.5)} 
                  className={`text-yellow-400 fill-yellow-400 relative z-10 transition-all duration-300 ${intensity < 20 ? 'animate-pulse' : ''}`} 
                />
              </div>

              {/* Surrounding "Pipes" / Channels getting warm */}
              <div className="absolute inset-0 pointer-events-none">
                 <div className={`absolute top-1/2 left-0 w-1/2 h-2 bg-gradient-to-r from-stone-800 to-orange-900 transition-opacity duration-1000 ${bodyWarmth}`}></div>
                 <div className={`absolute top-1/2 right-0 w-1/2 h-2 bg-gradient-to-l from-stone-800 to-orange-900 transition-opacity duration-1000 ${bodyWarmth}`}></div>
                 <div className={`absolute left-1/2 top-0 h-1/2 w-2 bg-gradient-to-b from-stone-800 to-orange-900 transition-opacity duration-1000 ${bodyWarmth}`}></div>
                 <div className={`absolute left-1/2 bottom-0 h-1/2 w-2 bg-gradient-to-t from-stone-800 to-orange-900 transition-opacity duration-1000 ${bodyWarmth}`}></div>
              </div>
           </div>

           {/* Status Readout */}
           <div className="w-full grid grid-cols-2 gap-4 mt-8">
              <div className="bg-stone-800 p-4 rounded-xl text-center border border-stone-700">
                <span className="block text-stone-400 text-sm font-bold uppercase">Calor Corporal</span>
                <span className={`text-xl font-bold ${intensity > 30 ? 'text-orange-400' : 'text-blue-400'}`}>
                  {intensity > 30 ? 'Tibio' : 'Frío'}
                </span>
              </div>
              <div className="bg-stone-800 p-4 rounded-xl text-center border border-stone-700">
                <span className="block text-stone-400 text-sm font-bold uppercase">Vitalidad</span>
                <span className={`text-xl font-bold ${intensity > 50 ? 'text-green-400' : 'text-red-400'}`}>
                  {growthRate}
                </span>
              </div>
           </div>

           {/* Slider */}
           <div className="w-full mt-6">
             <input 
               type="range" 
               min="0" 
               max="100" 
               value={intensity}
               onChange={(e) => setIntensity(Number(e.target.value))}
               className="w-full h-4 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
             />
             <div className="flex justify-between text-xs text-stone-500 mt-2 font-bold uppercase">
               <span>Muerte</span>
               <span>Plenitud</span>
             </div>
           </div>

        </div>

        {/* Right: Theory Content */}
        <div className="flex-1 flex flex-col justify-center space-y-10">
           
           <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
             <h4 className="text-3xl font-bold text-ink mb-4 flex items-center gap-3">
               <Battery className="text-green-600" size={32} />
               Origen y Definición
             </h4>
             <p className="text-xl text-stone-600 leading-relaxed">
               Es la "chispa de encendido". Se engendra con el <strong>Jing del Cielo Anterior</strong> (herencia) y se completa con el posterior.
             </p>
           </div>

           <ul className="space-y-6">
             <li className="flex gap-4 items-start">
               <div className="bg-orange-100 p-3 rounded-full mt-1"><Zap className="text-orange-600" size={24} /></div>
               <div>
                 <strong className="block text-2xl text-ink">Fuerza Motriz</strong>
                 <p className="text-xl text-stone-600">Si se agota, sobreviene la muerte. Es el dinamismo detrás de cada función fisiológica.</p>
               </div>
             </li>
             <li className="flex gap-4 items-start">
               <div className="bg-orange-100 p-3 rounded-full mt-1"><Flame className="text-orange-600" size={24} /></div>
               <div>
                 <strong className="block text-2xl text-ink">Calor y Activación</strong>
                 <p className="text-xl text-stone-600">Calienta los órganos y canales. Circula a través del San Jiao.</p>
               </div>
             </li>
           </ul>

           <div className="bg-stone-100 p-6 rounded-xl border-l-4 border-stone-400 italic text-lg text-stone-600">
             "Imaginen al Yuan Qi como el piloto de una estufa. Sin esa chispa original, aunque tengas gas (alimento), no hay fuego."
           </div>

        </div>

      </div>
    </div>
  );
};