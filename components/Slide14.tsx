import React, { useState } from 'react';
import { Droplet, Droplets } from 'lucide-react';

export const Slide14: React.FC = () => {
  const [view, setView] = useState<'jin' | 'ye'>('jin');

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 flex justify-between items-end border-b border-stone-200 pb-6">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 14</span>
          <h2 className="text-5xl font-serif font-bold text-ink">Jin Ye (Líquidos Orgánicos)</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Distinción: El Riego del Cuerpo"</h3>
        </div>
        <div className="text-8xl font-serif opacity-10 font-bold text-blue-800">津液</div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Selection Area */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
           <button 
             onClick={() => setView('jin')}
             className={`p-8 rounded-xl border-4 text-left transition-all duration-300 group
               ${view === 'jin' ? 'border-blue-400 bg-blue-50 shadow-lg' : 'border-stone-200 hover:border-blue-200'}
             `}
           >
             <div className="flex items-center gap-4 mb-2">
               <Droplet className="text-blue-500" size={40} />
               <h4 className="text-3xl font-bold text-ink">JIN (津)</h4>
             </div>
             <p className="text-xl text-stone-600">Líquidos Claros</p>
             <div className={`mt-4 h-2 rounded-full bg-blue-200 transition-all ${view === 'jin' ? 'w-full' : 'w-10'}`}></div>
           </button>

           <button 
             onClick={() => setView('ye')}
             className={`p-8 rounded-xl border-4 text-left transition-all duration-300 group
               ${view === 'ye' ? 'border-amber-400 bg-amber-50 shadow-lg' : 'border-stone-200 hover:border-amber-200'}
             `}
           >
             <div className="flex items-center gap-4 mb-2">
               <Droplets className="text-amber-600" size={40} />
               <h4 className="text-3xl font-bold text-ink">YE (液)</h4>
             </div>
             <p className="text-xl text-stone-600">Líquidos Espesos</p>
             <div className={`mt-4 h-2 rounded-full bg-amber-200 transition-all ${view === 'ye' ? 'w-full' : 'w-10'}`}></div>
           </button>

           <div className="mt-auto bg-stone-100 p-6 rounded-xl">
             <p className="italic text-lg text-stone-500">
               "Imagina un jardín. El Jin es el rocío (superficie). El Ye es la savia profunda del árbol."
             </p>
           </div>
        </div>

        {/* Detail View */}
        <div className="flex-1 bg-white rounded-2xl border border-stone-200 shadow-sm p-12 relative overflow-hidden flex flex-col justify-center">
           
           <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${view === 'jin' ? 'bg-blue-50/30' : 'bg-amber-50/30'}`}></div>

           <h3 className={`text-4xl font-bold mb-8 flex items-center gap-4 ${view === 'jin' ? 'text-blue-700' : 'text-amber-700'}`}>
             {view === 'jin' ? 'Características JIN' : 'Características YE'}
           </h3>

           <ul className="space-y-8">
             <li className="flex items-start gap-6">
               <span className="font-bold text-2xl w-32 shrink-0 text-stone-400">Naturaleza</span>
               <span className="text-2xl text-ink font-medium">
                 {view === 'jin' ? 'Yang, ligeros, sutiles y móviles.' : 'Yin, densos, pesados y viscosos.'}
               </span>
             </li>
             
             <li className="flex items-start gap-6">
               <span className="font-bold text-2xl w-32 shrink-0 text-stone-400">Ubicación</span>
               <span className="text-2xl text-ink font-medium">
                 {view === 'jin' ? 'Superficie (Piel y Músculos).' : 'Profundidad (Articulaciones, Huesos, Cerebro).'}
               </span>
             </li>

             <li className="flex items-start gap-6">
               <span className="font-bold text-2xl w-32 shrink-0 text-stone-400">Función</span>
               <span className="text-2xl text-ink font-medium">
                 {view === 'jin' ? 'Humectar, acompañar al Wei Qi (Defensivo).' : 'Nutrir el interior, lubricar articulaciones.'}
               </span>
             </li>

             <li className="flex items-start gap-6">
               <span className="font-bold text-2xl w-32 shrink-0 text-stone-400">Ejemplos</span>
               <span className="text-2xl text-ink font-medium">
                 {view === 'jin' ? 'Sudor, lágrimas, saliva fluida.' : 'Líquido sinovial, médula, jugos gástricos.'}
               </span>
             </li>
           </ul>

           {/* Visual Element */}
           <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              {view === 'jin' 
                ? <div className="text-[200px] leading-none">💦</div> 
                : <div className="text-[200px] leading-none">🍯</div>
              }
           </div>

        </div>

      </div>
    </div>
  );
};