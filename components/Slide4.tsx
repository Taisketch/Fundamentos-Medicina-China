import React, { useState } from 'react';
import { Wind, Box } from 'lucide-react';

export const Slide4: React.FC = () => {
  const [state, setState] = useState<'matter' | 'energy'>('matter');

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 4</span>
        <h2 className="text-5xl font-serif font-bold text-ink">Ley de Transformación Intermutua</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Materia se vuelve Energía y viceversa"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Interaction Area */}
        <div className="flex-1 bg-[#2a2a2a] rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-10 shadow-2xl min-h-[400px]">
          
          <div className="absolute top-6 left-6 text-stone-500 text-sm font-mono uppercase">Simulación de Estado</div>

          {/* Particles Container */}
          <div className="w-80 h-80 relative flex items-center justify-center scale-125">
            {/* Generating particles with CSS for simplicity in this constrained environment */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className={`absolute rounded-full transition-all duration-1000 ease-in-out
                  ${state === 'matter' 
                    ? 'w-10 h-10 bg-stone-300 border-2 border-stone-400' // Clumped together
                    : 'w-5 h-5 bg-blue-400 blur-[2px] animate-pulse' // Dispersed
                  }
                `}
                style={{
                  transform: state === 'matter' 
                    // Pack them in a grid/circle
                    ? `translate(${(i % 4 - 1.5) * 35}px, ${(Math.floor(i / 4) - 2) * 35}px)`
                    // Spread them out randomly
                    : `translate(${(Math.random() * 250 - 125)}px, ${(Math.random() * 250 - 125)}px)`
                }}
              />
            ))}
          </div>

          <div className="mt-12 flex gap-6 bg-black/30 p-3 rounded-full backdrop-blur-sm z-10">
            <button 
              onClick={() => setState('matter')}
              className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold text-lg transition-all ${state === 'matter' ? 'bg-stone-200 text-ink shadow-lg' : 'text-stone-400 hover:text-white'}`}
            >
              <Box size={24} /> Materia (Yin)
            </button>
            <button 
              onClick={() => setState('energy')}
              className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold text-lg transition-all ${state === 'energy' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-stone-400 hover:text-white'}`}
            >
              <Wind size={24} /> Energía (Yang)
            </button>
          </div>

        </div>

        {/* Text Area */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div className="p-8 border-l-8 border-seal-red bg-white shadow-sm rounded-r-lg">
            <h4 className="font-bold text-2xl mb-3">Mecanismo</h4>
            <p className="text-xl text-stone-600 leading-relaxed">"La transformación del Jing (Yin) se vuelve Qi (Yang)". Para producir energía, debemos consumir sustancia (alimento).</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
             <div className={`p-6 rounded-lg border-2 transition-all ${state === 'matter' ? 'bg-stone-100 border-stone-400' : 'border-stone-100 opacity-50'}`}>
                <h5 className="font-bold text-ink text-xl">Condensación</h5>
                <p className="text-lg text-stone-600 mt-2">Cuando el Qi (sutil) se condensa, se vuelve forma física.</p>
                <div className="mt-3 text-sm font-mono bg-stone-200 inline-block px-3 py-1 rounded">Exceso Qi → Jing</div>
             </div>

             <div className={`p-6 rounded-lg border-2 transition-all ${state === 'energy' ? 'bg-blue-50 border-blue-400' : 'border-stone-100 opacity-50'}`}>
                <h5 className="font-bold text-ink text-xl">Dispersión</h5>
                <p className="text-lg text-stone-600 mt-2">Cuando la materia se dispersa, vuelve a ser Qi.</p>
                <div className="mt-3 text-sm font-mono bg-blue-100 inline-block px-3 py-1 rounded">Alimento → Qi</div>
             </div>
          </div>

          <p className="text-lg italic text-stone-500 mt-4 bg-stone-50 p-4 rounded-lg">
            <strong>Nota clínica:</strong> Comemos algo físico (Yin) para tener calor y movimiento (Yang). Si esta transformación falla, tenemos indigestión o falta de energía.
          </p>
        </div>

      </div>
    </div>
  );
};