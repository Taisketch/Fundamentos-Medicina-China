import React, { useState } from 'react';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';

export const Slide3: React.FC = () => {
  const [cycle, setCycle] = useState<'morning' | 'noon' | 'afternoon' | 'night'>('morning');

  const cycleData = {
    morning: {
      label: "Mañana a Mediodía",
      sub: "Yang dentro del Yang",
      desc: "Crecimiento. El sol asciende. Primavera.",
      color: "bg-orange-100",
      icon: <Sunrise size={64} className="text-orange-500" />,
      rotation: "rotate-0"
    },
    noon: {
      label: "Mediodía a Tarde",
      sub: "Yin dentro del Yang",
      desc: "Contracción inicial. Máximo Yang empieza a declinar. Verano.",
      color: "bg-yellow-100",
      icon: <Sun size={64} className="text-yellow-500" />,
      rotation: "rotate-90"
    },
    afternoon: {
      label: "Tarde a Noche",
      sub: "Yin dentro del Yin",
      desc: "Almacenamiento. El sol se oculta. Otoño.",
      color: "bg-indigo-100",
      icon: <Sunset size={64} className="text-indigo-500" />,
      rotation: "rotate-180"
    },
    night: {
      label: "Noche a Mañana",
      sub: "Yang dentro del Yin",
      desc: "Generación. Reposo absoluto y renacimiento. Invierno.",
      color: "bg-slate-800 text-white",
      icon: <Moon size={64} className="text-slate-200" />,
      rotation: "-rotate-90"
    }
  };

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 gap-8 bg-paper">
      
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink">Ley de Crecimiento y Decrecimiento</h2>
        <h3 className="text-2xl md:text-3xl text-stone-500 font-serif italic mt-2">"Los Ciclos del Tiempo y el Espacio"</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center flex-1">
        
        {/* Cycle Control Visualization */}
        <div className="relative w-96 h-96 shrink-0 scale-110">
          {/* Background Circle */}
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-stone-200"></div>
          
          {/* Center Info */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-52 h-52 rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-500 shadow-xl ${cycleData[cycle].color}`}>
               <div className="mb-4 animate-bounce">{cycleData[cycle].icon}</div>
               <span className="font-bold text-base uppercase tracking-wider">{cycleData[cycle].sub}</span>
            </div>
          </div>

          {/* Buttons placed broadly around the circle */}
          <button 
            onClick={() => setCycle('morning')}
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 px-4 py-2 rounded-full text-sm font-bold uppercase transition-all ${cycle === 'morning' ? 'bg-orange-500 text-white scale-110' : 'bg-stone-200 text-stone-500 hover:bg-stone-300'}`}
          >
            Mañana
          </button>
          
          <button 
            onClick={() => setCycle('noon')}
            className={`absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 px-4 py-2 rounded-full text-sm font-bold uppercase transition-all ${cycle === 'noon' ? 'bg-yellow-500 text-white scale-110' : 'bg-stone-200 text-stone-500 hover:bg-stone-300'}`}
          >
            Mediodía
          </button>

          <button 
            onClick={() => setCycle('afternoon')}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 px-4 py-2 rounded-full text-sm font-bold uppercase transition-all ${cycle === 'afternoon' ? 'bg-indigo-500 text-white scale-110' : 'bg-stone-200 text-stone-500 hover:bg-stone-300'}`}
          >
            Tarde
          </button>

          <button 
            onClick={() => setCycle('night')}
            className={`absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 px-4 py-2 rounded-full text-sm font-bold uppercase transition-all ${cycle === 'night' ? 'bg-slate-700 text-white scale-110' : 'bg-stone-200 text-stone-500 hover:bg-stone-300'}`}
          >
            Noche
          </button>
        </div>

        {/* Text Explanation */}
        <div className="flex-1 bg-white p-10 rounded-xl border border-stone-100 shadow-sm max-w-xl">
           <h4 className="text-3xl font-bold text-seal-red mb-4">{cycleData[cycle].label}</h4>
           <p className="text-2xl text-ink leading-relaxed mb-8 min-h-[100px]">
             {cycleData[cycle].desc}
           </p>
           
           <div className="border-t border-stone-100 pt-6">
             <h5 className="font-bold text-base uppercase text-stone-400 mb-4">Correspondencia Estacional</h5>
             <div className="flex justify-between text-sm text-center font-medium gap-2">
                <div className={`p-3 rounded-lg flex-1 ${cycle === 'morning' ? 'text-green-700 bg-green-50 font-bold border border-green-200' : 'text-stone-300'}`}>Primavera<br/>(Generación)</div>
                <div className={`p-3 rounded-lg flex-1 ${cycle === 'noon' ? 'text-red-700 bg-red-50 font-bold border border-red-200' : 'text-stone-300'}`}>Verano<br/>(Crecimiento)</div>
                <div className={`p-3 rounded-lg flex-1 ${cycle === 'afternoon' ? 'text-amber-700 bg-amber-50 font-bold border border-amber-200' : 'text-stone-300'}`}>Otoño<br/>(Recolección)</div>
                <div className={`p-3 rounded-lg flex-1 ${cycle === 'night' ? 'text-blue-700 bg-blue-50 font-bold border border-blue-200' : 'text-stone-300'}`}>Invierno<br/>(Almacenamiento)</div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};