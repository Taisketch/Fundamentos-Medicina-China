import React, { useState } from 'react';
import { ArrowUp, ArrowDown, ArrowRight, CornerRightUp, AlertOctagon } from 'lucide-react';

export const Slide29: React.FC = () => {
  const [mode, setMode] = useState<'healthy' | 'pathology'>('healthy');

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6 flex justify-between items-end">
        <div>
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 29</span>
          <h2 className="text-5xl font-serif font-bold text-ink">La Coreografía Vital</h2>
          <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Salud es Movimiento Ordenado"</h3>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setMode('healthy')}
            className={`px-6 py-3 rounded-lg font-bold text-lg transition-all ${mode === 'healthy' ? 'bg-green-600 text-white shadow-lg' : 'bg-stone-200 text-stone-500'}`}
          >
            Flujo Normal
          </button>
          <button 
            onClick={() => setMode('pathology')}
            className={`px-6 py-3 rounded-lg font-bold text-lg transition-all ${mode === 'pathology' ? 'bg-red-600 text-white shadow-lg' : 'bg-stone-200 text-stone-500'}`}
          >
            Contracorriente
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Flow Chart Visualization */}
        <div className="flex-1 relative w-full h-[500px] bg-white rounded-3xl border border-stone-200 shadow-xl flex items-center justify-center p-8">
           
           {/* Center */}
           <div className="absolute w-32 h-32 bg-yellow-100 rounded-full border-4 border-yellow-400 flex items-center justify-center z-10">
             <span className="font-bold text-yellow-800">CENTRO</span>
           </div>

           {/* Spleen (Left - Up) */}
           <div className="absolute left-10 flex flex-col items-center">
             <div className="w-24 h-24 bg-stone-100 rounded-xl flex items-center justify-center border-2 border-stone-300 font-bold text-stone-600">
               BAZO
             </div>
             {mode === 'healthy' ? (
               <div className="flex flex-col items-center text-green-500 mt-2 animate-bounce">
                 <ArrowUp size={40} />
                 <span className="font-bold">Ascenso</span>
               </div>
             ) : (
               <div className="flex flex-col items-center text-red-500 mt-2 opacity-30">
                 <ArrowDown size={40} />
                 <span className="font-bold line-through">Caída</span>
               </div>
             )}
           </div>

           {/* Stomach (Right - Down) */}
           <div className="absolute right-10 flex flex-col items-center">
             <div className="w-24 h-24 bg-stone-100 rounded-xl flex items-center justify-center border-2 border-stone-300 font-bold text-stone-600">
               ESTÓMAGO
             </div>
             {mode === 'healthy' ? (
               <div className="flex flex-col items-center text-green-500 mt-2 animate-bounce">
                 <ArrowDown size={40} />
                 <span className="font-bold">Descenso</span>
               </div>
             ) : (
               <div className="flex flex-col items-center text-red-500 mt-2 animate-bounce">
                 <ArrowUp size={40} />
                 <span className="font-bold">REFLUJO!</span>
               </div>
             )}
           </div>

           {/* Wei Qi (Top - Out) */}
           <div className="absolute top-10 flex flex-col items-center">
             <div className="w-40 h-16 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200 font-bold text-blue-600 mb-2">
               WEI QI (Sudor)
             </div>
             {mode === 'healthy' && <CornerRightUp className="text-blue-400 rotate-45" size={32} />}
           </div>

        </div>

        {/* Text Explanations */}
        <div className="flex-1 space-y-8">
           
           <div className={`p-8 rounded-xl border-l-8 transition-all duration-500 ${mode === 'healthy' ? 'bg-green-50 border-green-500' : 'bg-stone-50 border-stone-300 opacity-50'}`}>
             <h4 className="font-bold text-2xl mb-4 text-ink">El Mapa de Flujo (Salud)</h4>
             <ul className="space-y-3 text-lg text-stone-700">
               <li className="flex gap-3"><ArrowUp className="text-green-600"/> <strong>Bazo:</strong> Sube para aclarar la mente.</li>
               <li className="flex gap-3"><ArrowDown className="text-green-600"/> <strong>Estómago:</strong> Baja para digerir y guardar.</li>
               <li className="flex gap-3"><ArrowRight className="text-green-600"/> <strong>Salida/Entrada:</strong> Intercambio constante.</li>
             </ul>
           </div>

           <div className={`p-8 rounded-xl border-l-8 transition-all duration-500 ${mode === 'pathology' ? 'bg-red-50 border-red-500' : 'bg-stone-50 border-stone-300 opacity-50'}`}>
             <h4 className="font-bold text-2xl mb-4 text-red-900 flex items-center gap-2">
               <AlertOctagon /> Patología (Qi Rebelde)
             </h4>
             <p className="text-xl text-red-800 leading-relaxed">
               ¿Qué pasa si el Estómago hace 'ascenso' en vez de 'descenso'? <br/>
               <strong>Respuesta:</strong> Vómito, reflujo, náuseas. Es el Qi yendo en contra mano.
             </p>
           </div>

        </div>

      </div>
    </div>
  );
};