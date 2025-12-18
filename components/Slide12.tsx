import React, { useState } from 'react';
import { User, Anchor, Wind } from 'lucide-react';

export const Slide12: React.FC = () => {
  const [bloodStatus, setBloodStatus] = useState<'abundant' | 'deficient'>('abundant');

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 flex justify-between items-end border-b border-stone-200 pb-6">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 12</span>
          <h2 className="text-5xl font-serif font-bold text-ink">Funciones de la Sangre</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"Nutrición y Anclaje: La Casa de la Mente"</h3>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16">
        
        {/* Theory Column */}
        <div className="flex-1 space-y-8 flex flex-col justify-center">
           
           <div className="p-8 bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-4">
               <div className="bg-red-100 p-3 rounded-full"><User className="text-red-600" size={32} /></div>
               <h4 className="text-3xl font-bold text-ink">1. Nutrición de la Forma</h4>
             </div>
             <p className="text-xl text-stone-600 leading-relaxed">
               "La sangre es abundante, luego la forma es abundante". Nutre órganos, piel, músculos, tendones y huesos. <br/>
               <span className="text-red-800 font-bold">Sin Sangre:</span> Sequedad, atrofia, entumecimiento.
             </p>
           </div>

           <div className="p-8 bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-4">
               <div className="bg-blue-100 p-3 rounded-full"><Anchor className="text-blue-600" size={32} /></div>
               <h4 className="text-3xl font-bold text-ink">2. Anclaje del Shen</h4>
             </div>
             <p className="text-xl text-stone-600 leading-relaxed">
               La sangre es el "Shen del ser". El espíritu (Yang) tiende a flotar; necesita de la Sangre (Yin) para anclarse.
             </p>
           </div>

           {/* Toggle Switch */}
           <div className="bg-stone-100 p-4 rounded-xl flex gap-4 mt-8">
             <button 
               onClick={() => setBloodStatus('abundant')}
               className={`flex-1 py-4 text-xl font-bold rounded-lg transition-all ${bloodStatus === 'abundant' ? 'bg-red-600 text-white shadow-lg' : 'bg-transparent text-stone-500'}`}
             >
               Sangre Abundante
             </button>
             <button 
               onClick={() => setBloodStatus('deficient')}
               className={`flex-1 py-4 text-xl font-bold rounded-lg transition-all ${bloodStatus === 'deficient' ? 'bg-stone-300 text-stone-600' : 'bg-transparent text-stone-500'}`}
             >
               Insuficiencia de Sangre
             </button>
           </div>

        </div>

        {/* Visual Metaphor: The Kite */}
        <div className="flex-1 bg-gradient-to-b from-blue-50 to-white rounded-2xl border border-stone-200 relative overflow-hidden flex flex-col items-center justify-end p-8 min-h-[500px]">
           
           <div className="absolute top-8 right-8 text-stone-400 font-bold uppercase tracking-widest text-sm text-right">
             Analogía de la Cometa<br/>(Sangre y Mente)
           </div>

           {/* The Kite (Shen) */}
           <div className={`absolute transition-all duration-[2000ms] flex flex-col items-center
              ${bloodStatus === 'abundant' 
                ? 'top-20 left-1/2 -translate-x-1/2' 
                : 'top-10 left-3/4 rotate-12 opacity-50' /* Flying away */
              }
           `}>
              <div className="w-32 h-32 bg-yellow-400 rotate-45 rounded-lg shadow-xl border-2 border-yellow-500 flex items-center justify-center z-20">
                <span className="text-yellow-700 font-bold -rotate-45 text-xl">SHEN</span>
              </div>
              <div className="w-1 h-8 bg-stone-400 mt-[-4px]"></div>
              {/* Tail */}
              <div className={`w-2 h-20 bg-red-400 rounded-full mt-[-10px] animate-pulse origin-top ${bloodStatus === 'deficient' ? 'animate-spin' : ''}`}></div>
           </div>

           {/* The String (Blood Connection) */}
           <div className={`absolute w-1 bg-stone-800 origin-bottom transition-all duration-1000
              ${bloodStatus === 'abundant' 
                ? 'h-[250px] bottom-32 left-1/2 -translate-x-1/2' 
                : 'h-[100px] bottom-1/2 left-2/3 rotate-45 opacity-30' /* Broken string */
              }
           `}></div>

           {/* The Person (Body/Jing) */}
           <div className="relative z-10 flex flex-col items-center">
              <div className={`w-20 h-20 rounded-full border-4 border-stone-700 bg-stone-800 flex items-center justify-center text-white mb-2 transition-all ${bloodStatus === 'deficient' ? 'animate-shake' : ''}`}>
                 <User size={40} />
              </div>
              <div className="w-32 h-10 bg-stone-300 rounded-full opacity-50 blur-sm"></div>
              
              {bloodStatus === 'deficient' && (
                <div className="absolute -top-10 bg-white px-4 py-2 rounded-lg shadow-md border border-red-200 text-red-600 font-bold whitespace-nowrap animate-bounce">
                  ¡Ansiedad! ¡Insomnio!
                </div>
              )}
           </div>

           {/* Wind Effect */}
           <div className="absolute top-1/3 left-10 opacity-20">
             <Wind size={100} className="text-blue-400 animate-pulse" />
           </div>

        </div>

      </div>
    </div>
  );
};