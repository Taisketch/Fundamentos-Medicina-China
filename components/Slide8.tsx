import React, { useState } from 'react';
import { Lightbulb, Eye, Heart } from 'lucide-react';

export const Slide8: React.FC = () => {
  const [clarity, setClarity] = useState(100);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 flex justify-between items-end border-b border-stone-200 pb-6">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 8</span>
          <h2 className="text-5xl font-serif font-bold text-ink">Shen (La Consciencia Organizadora)</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Gobernador y la Conexión Celeste"</h3>
        </div>
        <div className="text-8xl font-serif opacity-10 font-bold">神</div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Left Interactive Panel */}
        <div className="flex-1 bg-stone-900 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center p-12 text-white min-h-[500px]">
           
           {/* Light/Consciousness Visualization */}
           <div className="relative mb-12">
              {/* Glow effect */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 blur-3xl transition-all duration-700"
                style={{ width: `${clarity * 4}px`, height: `${clarity * 4}px`, opacity: clarity / 100 }}
              ></div>
              
              <Heart 
                size={120} 
                className="relative z-10 text-red-500 transition-all duration-300" 
                fill={clarity > 50 ? "#ef4444" : "transparent"}
                strokeWidth={1.5}
              />
           </div>

           {/* Eyes Visualization */}
           <div className="flex gap-8 mb-16 relative z-10">
              <div className="flex flex-col items-center gap-3">
                 <Eye 
                   size={64} 
                   className={`transition-all duration-500 ${clarity > 60 ? 'text-white' : 'text-stone-600'}`} 
                 />
                 <span className="text-sm uppercase tracking-widest text-stone-500 font-bold">Brillo (Ojos)</span>
              </div>
           </div>

           {/* Slider */}
           <div className="w-full max-w-sm relative z-10 bg-stone-800/50 p-6 rounded-xl backdrop-blur-sm border border-stone-700">
              <label className="flex items-center gap-3 text-lg font-bold text-yellow-500 mb-3">
                <Lightbulb size={24} />
                Intensidad del Shen
              </label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={clarity}
                onChange={(e) => setClarity(Number(e.target.value))}
                className="w-full h-3 bg-stone-600 rounded-lg appearance-none cursor-pointer accent-yellow-400"
              />
           </div>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 space-y-8 flex flex-col justify-center">
           <div className="p-8 border-l-8 border-yellow-500 bg-yellow-50 rounded-r-xl shadow-sm">
             <h4 className="font-bold text-ink text-2xl mb-3">El Director (Emperador)</h4>
             <p className="text-xl text-stone-700 leading-relaxed">
               El Shen es el "gobernador" del Qi y de la Sangre. Es la inteligencia que organiza la materia y nos conecta con el universo.
             </p>
           </div>

           <div className="space-y-6">
             <div className="flex items-start gap-6">
               <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 font-serif font-bold text-red-600 text-xl shadow-sm">1</div>
               <div>
                 <strong className="text-ink block text-2xl mb-1">Interacción</strong>
                 <p className="text-xl text-stone-600 leading-relaxed">El Shen (Yang) desciende e impacta sobre el Jing (Yin). De ese impacto surge la vida y el movimiento.</p>
               </div>
             </div>
             
             <div className="flex items-start gap-6">
               <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 font-serif font-bold text-red-600 text-xl shadow-sm">2</div>
               <div>
                 <strong className="text-ink block text-2xl mb-1">Manifestación</strong>
                 <p className="text-xl text-stone-600 leading-relaxed">
                   Se expresa a través del <strong>brillo en los ojos</strong> y la claridad de los sentidos. Reside en el Corazón.
                 </p>
               </div>
             </div>

             <div className="flex items-start gap-6">
               <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 font-serif font-bold text-red-600 text-xl shadow-sm">3</div>
               <div>
                 <strong className="text-ink block text-2xl mb-1">Necesidad de Anclaje</strong>
                 <p className="text-xl text-stone-600 leading-relaxed">
                   El Shen planea y ordena, pero necesita del Jing (Sustancia) para ejecutarse en el plano físico. Sin casa, el espíritu vaga.
                 </p>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};