import React, { useState } from 'react';
import { ArrowUp, Utensils, Heart, Wind, Flame } from 'lucide-react';

export const Slide11: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { id: 0, title: "1. Materia Prima", desc: "El Bazo y Estómago (Tierra) procesan los alimentos y generan Gu Qi.", color: "bg-yellow-100" },
    { id: 1, title: "2. El Ascenso", desc: "El Bazo envía esta esencia pura hacia arriba, al Pulmón.", color: "bg-stone-100" },
    { id: 2, title: "3. El Toque Final", desc: "El Fuego del Corazón tiñe la esencia de rojo. ¡Nace la Sangre!", color: "bg-red-100" },
  ];

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 flex justify-between items-end border-b border-stone-200 pb-6">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 11</span>
          <h2 className="text-5xl font-serif font-bold text-ink">La Sangre (Xue) - Origen y Producción</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Transformación de lo Cotidiano en Vida"</h3>
        </div>
        <div className="text-8xl font-serif opacity-10 font-bold text-red-800">血</div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16">
        
        {/* Diagram Area */}
        <div className="flex-1 relative bg-white rounded-2xl border border-stone-200 shadow-sm p-12 flex flex-col items-center justify-between min-h-[500px]">
           
           {/* Heart (Destination) */}
           <div className={`transition-all duration-700 p-6 rounded-full border-4 ${step >= 2 ? 'border-red-500 bg-red-50 scale-110 shadow-lg shadow-red-200' : 'border-stone-200 bg-stone-50 opacity-50'}`}>
              <div className="flex flex-col items-center text-center">
                <Heart size={48} className={step >= 2 ? "text-red-600 fill-red-600 animate-pulse" : "text-stone-400"} />
                <span className="font-bold mt-2 text-xl">Corazón</span>
                {step >= 2 && <span className="text-sm font-bold text-red-500 animate-bounce mt-1">¡FUEGO SOBERANO!</span>}
              </div>
           </div>

           {/* Arrow 2 */}
           <div className={`transition-all duration-700 ${step >= 2 ? 'opacity-100' : 'opacity-20'}`}>
              <ArrowUp size={40} className="text-stone-400" />
           </div>

           {/* Lung (Intermediate) */}
           <div className={`transition-all duration-700 p-6 rounded-full border-4 ${step >= 1 ? 'border-blue-300 bg-blue-50 scale-105' : 'border-stone-200 bg-stone-50 opacity-50'}`}>
              <div className="flex flex-col items-center text-center">
                <Wind size={40} className={step >= 1 ? "text-blue-500" : "text-stone-400"} />
                <span className="font-bold mt-2 text-xl">Pulmón</span>
              </div>
           </div>

           {/* Arrow 1 */}
           <div className={`transition-all duration-700 ${step >= 1 ? 'opacity-100' : 'opacity-20'}`}>
              <ArrowUp size={40} className="text-stone-400" />
           </div>

           {/* Spleen/Stomach (Origin) */}
           <div className={`transition-all duration-700 p-6 rounded-full border-4 ${step >= 0 ? 'border-yellow-500 bg-yellow-50 scale-105' : 'border-stone-200'}`}>
              <div className="flex flex-col items-center text-center">
                <Utensils size={40} className="text-yellow-600" />
                <span className="font-bold mt-2 text-xl">Bazo / Estómago</span>
                <span className="text-sm text-stone-500">Gu Qi (Alimentos)</span>
              </div>
           </div>

        </div>

        {/* Controls and Text */}
        <div className="flex-1 flex flex-col justify-center space-y-10">
           
           <div className="bg-stone-50 p-8 rounded-xl border-l-8 border-stone-400 shadow-sm">
             <h4 className="text-3xl font-bold text-ink mb-4">{steps[step].title}</h4>
             <p className="text-2xl text-stone-700 leading-relaxed">{steps[step].desc}</p>
           </div>

           {step === 2 && (
             <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4 items-center animate-fadeIn">
               <Flame className="text-red-500 shrink-0" size={32} />
               <p className="text-xl text-red-800 italic">"El fuego del corazón lo transforma en rojo". Sin el Espíritu (Shen) y el Fuego, no hay sangre viva.</p>
             </div>
           )}

           {/* Stepper Controls */}
           <div className="flex gap-4">
             <button 
               onClick={() => setStep(Math.max(0, step - 1))}
               disabled={step === 0}
               className="px-8 py-4 rounded-lg bg-stone-200 hover:bg-stone-300 disabled:opacity-50 text-xl font-bold transition-colors"
             >
               Anterior
             </button>
             <button 
               onClick={() => setStep(Math.min(2, step + 1))}
               disabled={step === 2}
               className="px-8 py-4 rounded-lg bg-ink text-white hover:bg-ink-light disabled:opacity-50 text-xl font-bold transition-colors flex-1"
             >
               {step === 2 ? 'Proceso Completo' : 'Siguiente Paso'}
             </button>
           </div>

           <p className="text-lg text-stone-500 italic mt-4">
             Nota: El Jing de Riñón también contribuye ("Jing y Sangre tienen el mismo origen").
           </p>

        </div>

      </div>
    </div>
  );
};