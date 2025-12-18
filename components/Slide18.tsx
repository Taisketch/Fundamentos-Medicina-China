import React, { useState } from 'react';
import { Wind, Utensils, Heart, Mic } from 'lucide-react';

export const Slide18: React.FC = () => {
  const [breathing, setBreathing] = useState(true);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 18</span>
        <h2 className="text-5xl font-serif font-bold text-ink">Zong Qi (Qi de Reunión)</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Ritmo del Pecho"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Interactive Chest Visualization */}
        <div className="flex-1 relative bg-blue-50 rounded-3xl border-4 border-blue-200 p-8 flex flex-col items-center justify-center min-h-[500px]">
           
           <div className="absolute top-6 left-6 bg-white/80 px-4 py-2 rounded-full text-stone-500 font-bold uppercase tracking-widest text-xs shadow-sm">
             Mar Superior del Qi (Dan Zhong)
           </div>

           {/* Chest Cavity Animation */}
           <div className={`relative w-80 h-80 bg-white rounded-[3rem] border-4 border-stone-200 shadow-xl flex flex-col items-center justify-center transition-transform duration-[2000ms] ease-in-out ${breathing ? 'scale-105' : 'scale-95'}`}>
              
              {/* Inputs */}
              <div className="absolute -top-12 flex gap-12 w-full justify-center">
                 <div className="flex flex-col items-center animate-bounce duration-[2000ms]">
                   <Wind className="text-blue-400 mb-1" />
                   <span className="text-xs font-bold uppercase text-blue-400">Aire (Cielo)</span>
                 </div>
                 <div className="flex flex-col items-center animate-bounce duration-[2000ms] delay-700">
                   <Utensils className="text-yellow-500 mb-1" />
                   <span className="text-xs font-bold uppercase text-yellow-600">Alimento (Tierra)</span>
                 </div>
              </div>

              {/* Heart Beat */}
              <Heart 
                size={80} 
                className="text-red-500 fill-red-500 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 scale-[2]" 
              />
              
              <div className="z-10 text-center space-y-2 bg-white/80 p-4 rounded-xl backdrop-blur-sm border border-indigo-100">
                <span className="text-4xl font-black text-indigo-900 tracking-wider block">宗氣</span>
                <span className="text-2xl font-bold text-indigo-700 uppercase tracking-widest block">Zong Qi</span>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Qi de Reunión</span>
              </div>

           </div>

           <button 
             onClick={() => setBreathing(!breathing)}
             className="mt-12 px-8 py-3 bg-white border-2 border-stone-200 rounded-full text-stone-500 font-bold hover:bg-stone-50 transition-colors uppercase tracking-widest text-sm"
           >
             {breathing ? 'Pausar Respiración' : 'Reanudar Ritmo'}
           </button>

        </div>

        {/* Info Cards */}
        <div className="flex-1 grid grid-cols-1 gap-6 content-center">
           
           <div className="bg-white p-8 rounded-2xl border-l-8 border-indigo-500 shadow-sm hover:translate-x-2 transition-transform">
             <div className="flex items-center gap-4 mb-3">
               <div className="bg-indigo-100 p-3 rounded-full"><Wind className="text-indigo-600" size={28}/></div>
               <h4 className="text-2xl font-bold text-ink">Ayuda al Pulmón</h4>
             </div>
             <p className="text-xl text-stone-600">Permite la respiración profunda, la fuerza de la voz y el habla.</p>
           </div>

           <div className="bg-white p-8 rounded-2xl border-l-8 border-red-500 shadow-sm hover:translate-x-2 transition-transform">
             <div className="flex items-center gap-4 mb-3">
               <div className="bg-red-100 p-3 rounded-full"><Heart className="text-red-600" size={28}/></div>
               <h4 className="text-2xl font-bold text-ink">Ayuda al Corazón</h4>
             </div>
             <p className="text-xl text-stone-600">Regula el ritmo cardiaco y propulsa la sangre a través de los vasos.</p>
           </div>

           <div className="bg-stone-100 p-6 rounded-xl border border-stone-200">
             <h5 className="font-bold text-lg text-stone-700 mb-2 flex items-center gap-2">
               <Mic size={20} />
               Diagnóstico Rápido
             </h5>
             <p className="italic text-lg text-stone-600">
               "Si la voz es muy débil, se cansa al hablar o tiene las manos frías... pensamos en debilidad de Zong Qi."
             </p>
           </div>

        </div>

      </div>
    </div>
  );
};