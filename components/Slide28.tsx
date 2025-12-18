import React, { useState } from 'react';
import { Cloud, Waves, Archive } from 'lucide-react';

export const Slide28: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 28</span>
        <h2 className="text-5xl font-serif font-bold text-ink">El Escenario del Cambio (San Jiao)</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Sistema de Carreteras y Alcantarillado"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Visual Metaphor: 3-Story Pagoda/Infrastructure */}
        <div className="flex-1 flex flex-col gap-4">
           
           {/* Upper Jiao */}
           <div 
             onMouseEnter={() => setActiveLevel(1)}
             onMouseLeave={() => setActiveLevel(null)}
             className={`flex-1 rounded-2xl border-4 flex items-center justify-center p-6 cursor-pointer transition-all duration-300 relative overflow-hidden
               ${activeLevel === 1 ? 'bg-blue-50 border-blue-400 scale-105 shadow-lg' : 'bg-white border-stone-200'}
             `}
           >
             <div className="text-center z-10">
               <Cloud size={48} className={`mx-auto mb-2 ${activeLevel === 1 ? 'text-blue-500 animate-pulse' : 'text-stone-300'}`} />
               <h4 className="text-2xl font-bold text-ink">Jiao Superior (Niebla)</h4>
             </div>
             {activeLevel === 1 && <div className="absolute inset-0 bg-blue-100/20 backdrop-blur-[2px]"></div>}
           </div>

           {/* Middle Jiao */}
           <div 
             onMouseEnter={() => setActiveLevel(2)}
             onMouseLeave={() => setActiveLevel(null)}
             className={`flex-1 rounded-2xl border-4 flex items-center justify-center p-6 cursor-pointer transition-all duration-300 relative overflow-hidden
               ${activeLevel === 2 ? 'bg-yellow-50 border-yellow-400 scale-105 shadow-lg' : 'bg-white border-stone-200'}
             `}
           >
             <div className="text-center z-10">
               <Waves size={48} className={`mx-auto mb-2 ${activeLevel === 2 ? 'text-yellow-600 animate-bounce' : 'text-stone-300'}`} />
               <h4 className="text-2xl font-bold text-ink">Jiao Medio (Maceración)</h4>
             </div>
           </div>

           {/* Lower Jiao */}
           <div 
             onMouseEnter={() => setActiveLevel(3)}
             onMouseLeave={() => setActiveLevel(null)}
             className={`flex-1 rounded-2xl border-4 flex items-center justify-center p-6 cursor-pointer transition-all duration-300 relative overflow-hidden
               ${activeLevel === 3 ? 'bg-stone-100 border-stone-500 scale-105 shadow-lg' : 'bg-white border-stone-200'}
             `}
           >
             <div className="text-center z-10">
               <Archive size={48} className={`mx-auto mb-2 ${activeLevel === 3 ? 'text-stone-600' : 'text-stone-300'}`} />
               <h4 className="text-2xl font-bold text-ink">Jiao Inferior (Desagüe)</h4>
             </div>
           </div>

        </div>

        {/* Description Panel */}
        <div className="flex-1 flex flex-col justify-center bg-stone-50 rounded-2xl p-8 border border-stone-200 h-full">
           
           {activeLevel === null ? (
             <div className="text-center opacity-50">
               <p className="text-2xl font-serif italic">Pasa el mouse sobre los niveles para ver detalles</p>
             </div>
           ) : (
             <div className="animate-fadeIn">
               <h3 className="text-3xl font-bold text-ink mb-4">
                 {activeLevel === 1 && "La Niebla (Distribución)"}
                 {activeLevel === 2 && "La Maceración (Transformación)"}
                 {activeLevel === 3 && "La Zanja (Eliminación)"}
               </h3>
               <p className="text-2xl text-stone-700 leading-relaxed mb-6">
                 {activeLevel === 1 && "Distribuye Ying y Wei Qi hacia la piel y músculos. Como un rocío fino."}
                 {activeLevel === 2 && "Digiere y fermenta para extraer nutrientes. Es la ciénaga fértil."}
                 {activeLevel === 3 && "Separa lo claro de lo turbio y excreta los desechos. El alcantarillado."}
               </p>
             </div>
           )}

           <div className="mt-auto bg-white p-6 rounded-xl border-l-4 border-seal-red">
             <strong className="block text-xl mb-2 text-seal-red">Analogía Urbana</strong>
             <p className="text-lg text-stone-600">
               "San Jiao son las carreteras y el alcantarillado. Si se tapan, la ciudad se inunda (edema/humedad) o se queda sin suministros."
             </p>
           </div>

        </div>

      </div>
    </div>
  );
};