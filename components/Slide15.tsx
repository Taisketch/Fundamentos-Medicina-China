import React, { useState } from 'react';
import { Settings, CloudRain, RotateCcw, Droplet } from 'lucide-react';

export const Slide15: React.FC = () => {
  const [activePart, setActivePart] = useState<number | null>(null);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 15</span>
        <h2 className="text-5xl font-serif font-bold text-ink">Metabolismo de los Líquidos</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">Dinámica: "El Ingeniero Hidráulico"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Interactive Diagram */}
        <div className="flex-1 relative bg-blue-50 rounded-3xl border-4 border-blue-200 p-8 flex flex-col items-center justify-between min-h-[600px] overflow-hidden">
           
           {/* Background Pipes */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

           {/* 1. Middle Jiao (Pump) */}
           <div 
             className={`relative w-full p-6 bg-white rounded-xl shadow-md border-2 border-yellow-400 cursor-pointer transition-all duration-300 ${activePart === 1 ? 'scale-105 ring-4 ring-yellow-200' : 'hover:scale-102'}`}
             onClick={() => setActivePart(1)}
           >
             <div className="flex items-center gap-4">
               <div className="bg-yellow-100 p-3 rounded-full"><Settings className="text-yellow-600" size={32}/></div>
               <div>
                 <h4 className="font-bold text-2xl text-ink">1. La Bomba de Entrada</h4>
                 <span className="text-stone-500 text-lg">Estómago y Bazo</span>
               </div>
             </div>
             {activePart === 1 && (
               <p className="mt-4 text-lg text-stone-600 animate-fadeIn">Sube el Gu Qi al Pulmón.</p>
             )}
           </div>

           {/* Arrow Up */}
           <div className="h-12 w-2 bg-blue-300 rounded-full animate-pulse"></div>

           {/* 2. Upper Jiao (Sprinkler) */}
           <div 
             className={`relative w-full p-6 bg-white rounded-xl shadow-md border-2 border-blue-400 cursor-pointer transition-all duration-300 ${activePart === 2 ? 'scale-105 ring-4 ring-blue-200' : 'hover:scale-102'}`}
             onClick={() => setActivePart(2)}
           >
             <div className="flex items-center gap-4">
               <div className="bg-blue-100 p-3 rounded-full"><CloudRain className="text-blue-600" size={32}/></div>
               <div>
                 <h4 className="font-bold text-2xl text-ink">2. El Aspersor Superior</h4>
                 <span className="text-stone-500 text-lg">Pulmón</span>
               </div>
             </div>
             {activePart === 2 && (
               <p className="mt-4 text-lg text-stone-600 animate-fadeIn">Difunde a la piel (sudor) y hace descender el resto al Riñón.</p>
             )}
           </div>

           {/* Arrow Down */}
           <div className="h-12 w-2 bg-blue-300 rounded-full animate-pulse"></div>

           {/* 3. Lower Jiao (Boiler) */}
           <div 
             className={`relative w-full p-6 bg-white rounded-xl shadow-md border-2 border-indigo-400 cursor-pointer transition-all duration-300 ${activePart === 3 ? 'scale-105 ring-4 ring-indigo-200' : 'hover:scale-102'}`}
             onClick={() => setActivePart(3)}
           >
             <div className="flex items-center gap-4">
               <div className="bg-indigo-100 p-3 rounded-full"><RotateCcw className="text-indigo-600" size={32}/></div>
               <div>
                 <h4 className="font-bold text-2xl text-ink">3. La Caldera de Reciclaje</h4>
                 <span className="text-stone-500 text-lg">Riñón</span>
               </div>
             </div>
             {activePart === 3 && (
               <p className="mt-4 text-lg text-stone-600 animate-fadeIn">Vaporiza lo útil de nuevo hacia arriba. Envía lo sucio a la Vejiga.</p>
             )}
           </div>

        </div>

        {/* Info / Pathology Panel */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
           
           <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
             <h4 className="text-3xl font-bold text-ink mb-6">El Concepto Clave</h4>
             <p className="text-xl text-stone-700 leading-relaxed mb-6">
               Es un sistema de purificación constante. Siempre se está separando "lo Claro" (útil) de "lo Turbio" (desecho).
             </p>
             <div className="flex items-center gap-4 p-4 bg-stone-100 rounded-lg">
                <span className="font-bold text-lg text-stone-600">San Jiao:</span>
                <span className="text-lg text-stone-500">La vía oficial por donde circulan todos estos líquidos.</span>
             </div>
           </div>

           <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
             <h4 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-3">
               <Droplet className="fill-red-200 text-red-600" />
               ¿Qué pasa si falla el sistema?
             </h4>
             <p className="text-xl text-red-700 leading-relaxed">
               Se acumula "Humedad" (agua estancada).
             </p>
             <ul className="mt-4 space-y-2 text-lg text-red-600">
               <li>• Si falla el Pulmón (Arriba) → Edema facial / manos.</li>
               <li>• Si falla el Riñón (Abajo) → Edema en tobillos / piernas.</li>
               <li>• Si falla el Bazo (Medio) → Flema / Hinchazón abdominal.</li>
             </ul>
           </div>

        </div>

      </div>
    </div>
  );
};