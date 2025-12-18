import React, { useState } from 'react';
import { Sprout, Dna, Droplets } from 'lucide-react';

export const Slide7: React.FC = () => {
  const [nutrition, setNutrition] = useState(50);
  
  // Visual calculation for tree growth based on nutrition
  const scale = 0.5 + (nutrition / 200); 
  const leafColor = nutrition > 80 ? 'text-green-600' : nutrition > 40 ? 'text-green-500' : 'text-yellow-600';

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 flex justify-between items-end border-b border-stone-200 pb-6">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 7</span>
          <h2 className="text-5xl font-serif font-bold text-ink">Jing (La Esencia y la Trama)</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Semilla y la Plantilla de la Vida"</h3>
        </div>
        <div className="text-8xl font-serif opacity-10 font-bold">精</div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Left Column: Theory */}
        <div className="flex-1 space-y-8 flex flex-col justify-center">
           <div className="prose prose-stone max-w-none">
             <p className="text-2xl leading-relaxed">
               El <strong>Jing</strong> es la materia prima más densa, la esencia primordial que heredamos y que permite que el cuerpo se desarrolle.
             </p>
             <ul className="space-y-8 mt-8">
               <li className="flex gap-5">
                 <div className="bg-stone-200 p-4 rounded-xl h-fit"><Dna size={32} className="text-stone-700"/></div>
                 <div>
                   <strong className="block text-ink text-2xl mb-1">La Trama de la Vida (Genética)</strong>
                   <span className="text-xl text-stone-600 leading-relaxed">Contiene la información de cómo deben generarse nuestros huesos, médula y órganos. Es el "Cielo Anterior".</span>
                 </div>
               </li>
               <li className="flex gap-5">
                 <div className="bg-amber-100 p-4 rounded-xl h-fit"><Droplets size={32} className="text-amber-700"/></div>
                 <div>
                   <strong className="block text-ink text-2xl mb-1">Ubicación</strong>
                   <span className="text-xl text-stone-600 leading-relaxed">Almacenado principalmente en los <strong>Riñones</strong>. Es el anclaje físico necesario para que el espíritu (Shen) no se "vuele".</span>
                 </div>
               </li>
             </ul>
           </div>
        </div>

        {/* Right Column: Interactive Peach Analogy */}
        <div className="flex-1 bg-stone-50 rounded-2xl border border-stone-200 p-10 flex flex-col items-center justify-between relative overflow-hidden min-h-[500px]">
           
           <div className="absolute top-6 right-6 text-sm text-stone-400 font-bold uppercase tracking-widest text-right">
             Analogía del Durazno<br/>(Cielo Anterior vs Posterior)
           </div>

           {/* The Tree Visualization */}
           <div className="flex-1 flex items-end justify-center relative w-full mb-10 scale-125 origin-bottom">
              {/* Soil */}
              <div className="absolute bottom-0 w-full h-6 bg-[#8B4513] rounded-full opacity-20 filter blur-xl"></div>
              
              {/* Seed/Roots (Fixed - Pre-natal) */}
              <div className="absolute bottom-[-10px] flex flex-col items-center">
                 <div className="w-12 h-12 bg-amber-800 rounded-full border-4 border-amber-900 z-20" title="Jing Prenatal (Semilla)"></div>
                 <span className="text-xs uppercase font-bold text-stone-500 mt-2">Jing Prenatal (Fijo)</span>
              </div>

              {/* Tree (Variable - Post-natal) */}
              <div 
                className={`transition-all duration-1000 ease-in-out origin-bottom flex flex-col items-center z-10`}
                style={{ transform: `scale(${scale})` }}
              >
                 <div className="w-4 h-32 bg-amber-700 rounded-sm"></div> {/* Trunk */}
                 <div className="relative">
                    <Sprout size={96} className={`${leafColor} transition-colors duration-500 -mt-2`} />
                    {nutrition > 90 && (
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-pink-400 rounded-full animate-bounce shadow-lg border-2 border-pink-500"></div> // Fruit
                    )}
                 </div>
              </div>
           </div>

           {/* Controls */}
           <div className="w-full bg-white p-6 rounded-xl shadow-md border border-stone-100">
             <div className="flex justify-between text-lg font-bold text-stone-600 mb-4">
               <span>Cuidado (Nutrición/Descanso)</span>
               <span className="text-green-600 text-xl">{nutrition}%</span>
             </div>
             <input 
               type="range" 
               min="0" 
               max="100" 
               value={nutrition}
               onChange={(e) => setNutrition(Number(e.target.value))}
               className="w-full h-4 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-green-600"
             />
             <p className="text-lg text-stone-500 mt-4 italic text-center leading-relaxed">
               "No podemos cambiar que sea un durazno (Esencia/Jing), pero sí podemos nutrirlo para que sea un BUEN durazno."
             </p>
           </div>

        </div>

      </div>
    </div>
  );
};