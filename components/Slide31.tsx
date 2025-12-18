import React, { useState } from 'react';
import { Sprout, PenTool, ArrowRight } from 'lucide-react';

export const Slide31: React.FC = () => {
  const [flowRestored, setFlowRestored] = useState(false);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 31 - Conclusión</span>
        <h2 className="text-5xl font-serif font-bold text-ink">El Arte de la Acupuntura</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"Redirigiendo los Ríos de la Vida"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* River Visualization */}
        <div className="flex-1 relative w-full h-[500px] bg-stone-100 rounded-3xl border-4 border-stone-300 overflow-hidden shadow-inner">
           
           {/* Landscape */}
           <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-green-50"></div>

           {/* River Bed */}
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
             <path d="M0,250 C150,250 150,150 300,150 C450,150 450,350 600,350 L800,350" 
                   stroke="#93c5fd" strokeWidth="60" fill="none" className="opacity-30" />
           </svg>

           {/* Water Flow Animation */}
           {flowRestored && (
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
               <path d="M0,250 C150,250 150,150 300,150 C450,150 450,350 600,350 L800,350" 
                     stroke="#3b82f6" strokeWidth="40" fill="none" strokeDasharray="20 20" className="animate-dash opacity-60" />
             </svg>
           )}

           {/* The Blockage (Stone) */}
           {!flowRestored && (
             <div 
               className="absolute top-[120px] left-[280px] w-24 h-24 bg-stone-600 rounded-full shadow-xl border-b-8 border-stone-800 cursor-pointer hover:scale-105 transition-transform flex items-center justify-center group z-20"
               onClick={() => setFlowRestored(true)}
             >
               <span className="text-white text-xs font-bold uppercase group-hover:block hidden">¡Desbloquear!</span>
             </div>
           )}

           {/* The Needle (Cursor) */}
           {!flowRestored && (
             <div className="absolute top-[50px] left-[320px] animate-bounce text-seal-red z-30 pointer-events-none">
               <PenTool size={64} className="rotate-[-135deg]" />
               <span className="block text-sm font-bold bg-white px-2 rounded ml-8">Punturar aquí</span>
             </div>
           )}

           {/* Life Blooming */}
           <div className={`absolute bottom-10 right-10 transition-all duration-[2000ms] ${flowRestored ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              <Sprout size={120} className="text-green-600 animate-bounce" />
           </div>

        </div>

        {/* Text / Philosophy */}
        <div className="flex-1 space-y-10">
           
           <div className="bg-white p-10 rounded-2xl border-l-8 border-blue-500 shadow-sm">
             <h4 className="text-3xl font-bold text-ink mb-6">El Principio del Agua</h4>
             <p className="text-2xl text-stone-700 leading-relaxed">
               "La acupuntura desvía o canaliza las aguas. No agregamos nada, solo movemos lo que está estancado."
             </p>
           </div>

           <ul className="space-y-6 text-xl text-stone-600">
             <li className="flex gap-4">
               <ArrowRight className="text-seal-red shrink-0 mt-1" />
               <span><strong>Los Canales (Mai):</strong> Son como ríos. Corregimos el flujo.</span>
             </li>
             <li className="flex gap-4">
               <ArrowRight className="text-seal-red shrink-0 mt-1" />
               <span><strong>Regla de Oro:</strong> Todo tratamiento debe estar enraizado en el Shen (Espíritu).</span>
             </li>
           </ul>

           <div className="bg-stone-800 text-stone-200 p-8 rounded-xl text-center italic text-xl border border-stone-600 mt-8">
             "No curamos imponiendo algo al cuerpo, sino recordándole cómo fluir de nuevo según las leyes del Cielo y la Tierra."
           </div>

           <button 
             onClick={() => setFlowRestored(false)}
             className="w-full text-stone-400 text-sm hover:text-ink transition-colors"
           >
             Reiniciar Simulación
           </button>

        </div>

      </div>
    </div>
  );
};