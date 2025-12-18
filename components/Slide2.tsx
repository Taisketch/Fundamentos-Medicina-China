import React, { useState, useEffect } from 'react';
import { Droplet, Flame } from 'lucide-react';

export const Slide2: React.FC = () => {
  const [oilLevel, setOilLevel] = useState(70);
  const [flameStatus, setFlameStatus] = useState<'burning' | 'dying' | 'dead'>('burning');

  // Effect to manage flame status based on oil
  useEffect(() => {
    if (oilLevel <= 0) {
      setFlameStatus('dead');
    } else if (oilLevel < 20) {
      setFlameStatus('dying');
    } else {
      setFlameStatus('burning');
    }
  }, [oilLevel]);

  return (
    <div className="min-h-full w-full flex flex-col md:flex-row p-6 md:p-12 gap-12 bg-paper">
      
      {/* Content */}
      <div className="flex-1 space-y-8">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 2</span>
          <h2 className="text-5xl font-serif font-bold text-ink mt-2">Ley de Interdependencia</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mb-4">"Sin el uno no existe el otro"</h3>
        </div>

        <div className="prose prose-stone">
           <p className="text-2xl leading-relaxed">
             El Yin y el Yang se necesitan mutuamente para existir. Es una relación de <strong>Raíz Mutua</strong>.
           </p>
           <ul className="list-none space-y-6 pl-0 mt-6">
             <li className="flex items-start gap-4 p-5 bg-white rounded shadow-sm border-l-8 border-blue-400">
                <Droplet className="text-blue-500 shrink-0 mt-1" size={32} />
                <span className="text-xl"><strong>Sustento Mutuo:</strong> El Yang (Qi) necesita de los líquidos (Yin) para anclarse. Los líquidos necesitan del Qi para moverse.</span>
             </li>
             <li className="flex items-start gap-4 p-5 bg-white rounded shadow-sm border-l-8 border-red-400">
                <Flame className="text-red-500 shrink-0 mt-1" size={32} />
                <span className="text-xl"><strong>Ejemplo Clásico (Riñón):</strong> El Agua (Yin) contiene Fuego (Yang). Sin fuego, el agua se congela; sin agua, el fuego quema.</span>
             </li>
           </ul>
        </div>

        <div className="bg-stone-100 p-6 rounded-lg text-lg italic text-stone-600 border border-stone-200">
          Nota: Analicemos la analogía de la lámpara de aceite. Ajusta el nivel de aceite para ver qué sucede con la llama.
        </div>
      </div>

      {/* Interactive Illustration */}
      <div className="flex-1 flex flex-col items-center justify-center bg-stone-800 rounded-xl p-10 relative overflow-hidden shadow-inner min-h-[400px]">
        
        {/* Lamp Visualization */}
        <div className="relative w-64 h-80 flex flex-col items-center justify-end scale-125">
          
          {/* Flame */}
          <div 
            className={`absolute bottom-32 transition-all duration-500 blur-sm rounded-full bg-orange-500 mix-blend-screen
              ${flameStatus === 'burning' ? 'w-16 h-24 opacity-90 animate-pulse' : ''}
              ${flameStatus === 'dying' ? 'w-8 h-12 opacity-60 animate-bounce' : ''}
              ${flameStatus === 'dead' ? 'w-0 h-0 opacity-0' : ''}
            `}
            style={{ boxShadow: `0 0 ${oilLevel}px ${oilLevel / 2}px rgba(255, 100, 0, 0.4)` }}
          ></div>
          <div 
            className={`absolute bottom-32 w-4 h-8 bg-yellow-200 rounded-full transition-all duration-300
              ${flameStatus === 'dead' ? 'h-0' : 'h-8'}
            `}
          ></div>

          {/* Lamp Base/Oil Container */}
          <div className="w-full h-32 border-4 border-stone-400 bg-stone-900 rounded-b-3xl rounded-t-md relative overflow-hidden backdrop-blur-sm z-10">
            {/* Oil Liquid */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-amber-600/80 transition-all duration-300 ease-out flex items-center justify-center"
              style={{ height: `${oilLevel}%` }}
            >
              <span className="text-white/30 text-xs font-bold uppercase tracking-widest rotate-90">Aceite (Yin)</span>
            </div>
          </div>
          
          {/* Label */}
          <div className="mt-4 text-stone-300 font-serif text-base tracking-widest text-center">
             LÁMPARA DE LA VIDA
             <div className="text-sm text-stone-500 mt-1">Llama = Yang (Función)</div>
             <div className="text-sm text-stone-500">Aceite = Yin (Sustancia)</div>
          </div>

        </div>

        {/* Controls */}
        <div className="w-full max-w-sm mt-12 bg-stone-700/50 p-6 rounded-lg backdrop-blur-md">
          <div className="flex justify-between text-stone-300 text-sm font-bold mb-3 uppercase">
            <span>Sin Sustancia</span>
            <span>Plenitud</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={oilLevel} 
            onChange={(e) => setOilLevel(Number(e.target.value))}
            className="w-full h-3 bg-stone-600 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400"
          />
          <div className="mt-3 text-center text-amber-400 font-bold text-lg">
            Nivel de Aceite (Yin): {oilLevel}%
          </div>
        </div>

      </div>
    </div>
  );
};