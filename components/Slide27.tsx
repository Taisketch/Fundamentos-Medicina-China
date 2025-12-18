import React, { useState } from 'react';
import { Utensils, Cog, Droplet, Wind } from 'lucide-react';

export const Slide27: React.FC = () => {
  const [isOperating, setIsOperating] = useState(false);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 27</span>
        <h2 className="text-5xl font-serif font-bold text-ink">El Motor de la Maquinaria</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Origen de la Energía Diaria"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Machinery Visualization */}
        <div className="flex-1 relative bg-stone-100 rounded-3xl border-4 border-stone-300 p-10 flex flex-col items-center justify-center min-h-[500px]">
           
           {/* Input: Food */}
           <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <button 
                onClick={() => setIsOperating(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform active:scale-95"
              >
                <Utensils size={20} /> Ingerir Alimento
              </button>
              {isOperating && (
                <div className="mt-2 text-yellow-600 animate-bounce">↓↓↓</div>
              )}
           </div>

           {/* The Engine (Stomach/Spleen) */}
           <div className="relative mt-12 mb-12">
              <Cog 
                size={160} 
                className={`text-stone-400 transition-all duration-[3000ms] ease-in-out ${isOperating ? 'animate-spin text-yellow-500' : ''}`} 
              />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-stone-600 bg-white/80 w-20 h-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                CENTRO
              </div>
           </div>

           {/* Outputs */}
           <div className="flex w-full justify-between mt-8">
              {/* Wei Qi (Lung) */}
              <div className={`flex flex-col items-center transition-all duration-1000 ${isOperating ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'}`}>
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                   <Wind className="text-blue-500" size={32} />
                 </div>
                 <span className="font-bold text-stone-600">Wei Qi (Niebla)</span>
                 <span className="text-xs text-stone-400">Protección</span>
              </div>

              {/* Blood (Heart) */}
              <div className={`flex flex-col items-center transition-all duration-1000 delay-500 ${isOperating ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'}`}>
                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                   <Droplet className="text-red-500" size={32} />
                 </div>
                 <span className="font-bold text-stone-600">Sangre</span>
                 <span className="text-xs text-stone-400">Nutrición/Sueño</span>
              </div>
           </div>

        </div>

        {/* Text Panel */}
        <div className="flex-1 space-y-8">
           
           <div className="bg-white p-8 rounded-2xl border-l-8 border-yellow-500 shadow-sm">
             <h4 className="text-3xl font-bold text-ink mb-4">La Fuente Postnatal</h4>
             <p className="text-xl text-stone-700 leading-relaxed">
               Bazo y Estómago son la "fábrica" que produce el Qi, la Sangre y los Líquidos. Todo el sistema depende de que el centro funcione para reponer lo que gastamos.
             </p>
           </div>

           <div className="bg-stone-800 text-stone-200 p-6 rounded-xl border border-stone-600">
             <h5 className="font-bold text-xl mb-2 text-yellow-400">Consecuencia Clínica</h5>
             <p className="text-lg leading-relaxed">
               Si hay cansancio, frío o falta de sangre, primero miramos al Centro. <br/>
               <span className="italic">"El hombre vive en el centro del Qi como el pez vive en el agua".</span>
             </p>
           </div>

           <p className="text-lg text-stone-500 italic p-4 bg-stone-100 rounded-lg">
             Nota: Sin una buena digestión, no hay Wei Qi para protegerse ni Sangre para dormir bien.
           </p>

        </div>

      </div>
    </div>
  );
};