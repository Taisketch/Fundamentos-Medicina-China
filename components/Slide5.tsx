import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Thermometer, XCircle, AlertTriangle, Activity, Snowflake } from 'lucide-react';

export const Slide5: React.FC = () => {
  const [balance, setBalance] = useState<'healthy' | 'pathology'>('healthy');

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-stone-300 pb-6 gap-4">
        <div>
           <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 5</span>
           <h2 className="text-5xl font-serif font-bold text-ink">Aplicación Clínica</h2>
           <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"El Eje Fuego-Agua en el Cuerpo Humano"</h3>
        </div>
        
        <div className="flex gap-4 bg-stone-200 p-2 rounded-xl">
          <button 
            onClick={() => setBalance('healthy')}
            className={`px-6 py-3 rounded-lg text-lg font-bold transition-all ${balance === 'healthy' ? 'bg-white shadow text-green-700' : 'text-stone-500 hover:text-stone-700'}`}
          >
            Salud (Unión)
          </button>
          <button 
            onClick={() => setBalance('pathology')}
            className={`px-6 py-3 rounded-lg text-lg font-bold transition-all ${balance === 'pathology' ? 'bg-white shadow text-red-700' : 'text-stone-500 hover:text-stone-700'}`}
          >
            Patología (Separación)
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Human Body Viz */}
        <div className="flex-1 relative flex items-center justify-center bg-white rounded-xl border border-stone-200 shadow-inner min-h-[500px] overflow-hidden">
           
           {/* Abstract Body Shape */}
           <div className={`relative w-72 h-[480px] rounded-[4rem] border-4 border-stone-300 overflow-hidden transition-all duration-1000
              ${balance === 'healthy' 
                ? 'bg-gradient-to-b from-red-50 to-blue-50' 
                : 'bg-gradient-to-b from-red-200 via-stone-100 to-blue-200' // Hot top, Cold bottom
              }
           `}>
              
              {/* Heat Symptom Layer (Pathology Only) */}
              <div className={`absolute top-0 left-0 right-0 h-1/2 bg-red-500/10 transition-opacity duration-1000 ${balance === 'pathology' ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Cold Symptom Layer (Pathology Only) */}
              <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-blue-500/10 transition-opacity duration-1000 ${balance === 'pathology' ? 'opacity-100' : 'opacity-0'}`}></div>


              {/* Heart Area (Top) */}
              <div className="absolute top-12 left-0 right-0 h-28 flex flex-col items-center justify-center z-20">
                <div 
                   className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700 shadow-lg cursor-pointer
                   ${balance === 'healthy' ? 'bg-red-100 text-red-800' : 'bg-red-600 text-white animate-pulse shadow-red-400/50'}
                   `}
                   onClick={() => setBalance(balance === 'healthy' ? 'pathology' : 'healthy')}
                >
                   <span className="font-bold text-lg">Fuego</span>
                </div>
                
                {/* Symptom Label */}
                <div className={`mt-2 bg-white/90 px-3 py-1 rounded text-xs font-bold text-red-600 border border-red-200 shadow-sm transition-opacity duration-500 ${balance === 'pathology' ? 'opacity-100' : 'opacity-0'}`}>
                  ¡Calor Arriba!
                </div>
              </div>

              {/* Kidney Area (Bottom) */}
              <div className="absolute bottom-12 left-0 right-0 h-28 flex flex-col items-center justify-center z-20">
                 {/* Symptom Label */}
                <div className={`mb-2 bg-white/90 px-3 py-1 rounded text-xs font-bold text-blue-600 border border-blue-200 shadow-sm transition-opacity duration-500 ${balance === 'pathology' ? 'opacity-100' : 'opacity-0'}`}>
                  ¡Frío Abajo!
                </div>

                <div 
                  className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700 shadow-lg cursor-pointer
                  ${balance === 'healthy' ? 'bg-blue-100 text-blue-800' : 'bg-blue-700 text-white shadow-blue-400/50'}
                  `}
                  onClick={() => setBalance(balance === 'healthy' ? 'pathology' : 'healthy')}
                >
                   <span className="font-bold text-lg">Agua</span>
                </div>
              </div>

              {/* Healthy Flow Arrows */}
              {balance === 'healthy' && (
                <>
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce duration-[3000ms] z-10">
                    <ArrowDown className="text-red-400/80 w-16 h-16" />
                  </div>
                  
                  {/* Center Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-white/80 rounded-full border border-stone-200 flex items-center justify-center z-30 shadow-sm backdrop-blur-sm">
                    <span className="text-sm font-bold text-stone-600 uppercase tracking-widest">Comunicación</span>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 animate-bounce duration-[3000ms] z-10">
                    <ArrowUp className="text-blue-400/80 w-16 h-16" />
                  </div>
                </>
              )}

              {/* Pathology Block */}
              {balance === 'pathology' && (
                <>
                  {/* Barrier */}
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-stone-800 z-30 flex items-center justify-center">
                     <div className="bg-stone-800 px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       <XCircle size={14} /> Bloqueo
                     </div>
                  </div>

                  {/* Chaos Icons */}
                  <div className="absolute top-24 right-6 animate-pulse text-red-500">
                     <Activity size={24} />
                  </div>
                  <div className="absolute bottom-24 left-6 animate-pulse text-blue-400">
                     <Snowflake size={24} />
                  </div>
                </>
              )}
           </div>

           {/* Side Explanations */}
           <div className={`absolute top-20 right-8 md:right-16 w-40 text-right transition-all duration-500 ${balance === 'pathology' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
              <div className="bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm">
                <strong className="text-red-800 block text-sm mb-1">Síntomas Yang (Arriba)</strong>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• Rostro Rojo</li>
                  <li>• Ansiedad/Insomnio</li>
                  <li>• Úlceras bucales</li>
                </ul>
              </div>
           </div>

           <div className={`absolute bottom-20 left-8 md:left-16 w-40 text-left transition-all duration-500 ${balance === 'pathology' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg shadow-sm">
                <strong className="text-blue-800 block text-sm mb-1">Síntomas Yin (Abajo)</strong>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Pies Fríos</li>
                  <li>• Dolor Lumbar</li>
                  <li>• Orina Clara</li>
                </ul>
              </div>
           </div>

        </div>

        {/* Right Info Panel */}
        <div className="flex-1 space-y-6 flex flex-col justify-center">
           
           <div className={`p-8 rounded-xl border-l-8 transition-all duration-500 ${balance === 'healthy' ? 'bg-green-50 border-green-500 shadow-md' : 'bg-stone-50 border-stone-300 opacity-50'}`}>
              <h4 className="font-bold text-2xl mb-2 text-ink">Estado de Salud</h4>
              <p className="text-lg text-stone-700 leading-relaxed">
                El Yang desciende para calentar. El Yin asciende para nutrir. Hay mezcla y armonía térmica.
              </p>
           </div>

           <div className={`p-8 rounded-xl border-l-8 transition-all duration-500 ${balance === 'pathology' ? 'bg-red-50 border-red-500 shadow-md scale-105' : 'bg-stone-50 border-stone-300 opacity-50'}`}>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-600" size={32} />
                <h4 className="font-bold text-2xl text-ink">Patología: Desconexión</h4>
              </div>
              <p className="text-lg text-stone-700 leading-relaxed">
                Al romperse la comunicación, los elementos vuelven a su naturaleza absoluta: <strong>el Fuego flota y el Agua se hunde.</strong>
              </p>
              <div className="mt-4 p-4 bg-white rounded border border-red-100 text-stone-600 text-sm italic">
                "Arriba calor verdadero (fuego estancado), abajo frío verdadero (agua sin calentar)."
              </div>
           </div>

           <div className="mt-4 bg-stone-800 text-stone-200 p-6 rounded-xl border border-stone-700">
             <div className="flex items-center gap-3 mb-2 text-amber-400 font-bold text-xl">
               <Thermometer size={24} />
               <span>Equilibrio Térmico</span>
             </div>
             <p className="text-lg italic leading-relaxed text-stone-300">
               "El secreto de la vida es que el Fuego baje al Agua."
             </p>
           </div>
        </div>

      </div>
    </div>
  );
};