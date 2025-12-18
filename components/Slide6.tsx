import React, { useState } from 'react';
import { Cloud, Mountain, User, Sparkles } from 'lucide-react';

export const Slide6: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<'heaven' | 'human' | 'earth' | null>(null);

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 6</span>
        <h2 className="text-5xl font-serif font-bold text-ink">San Bao y las Tres Potencias</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"Lo que ocurre en el Macrocosmos se refleja en el Microcosmos"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center justify-center">
        
        {/* Interactive Diagram */}
        <div className="relative w-96 h-[600px] flex flex-col justify-between py-12">
            
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-24 bottom-24 w-2 bg-gradient-to-b from-blue-200 via-stone-300 to-amber-200 -translate-x-1/2 -z-10"></div>

            {/* Heaven / Shen */}
            <div 
              className={`relative group cursor-pointer transition-all duration-500 ${activeLevel === 'heaven' ? 'scale-110' : 'hover:scale-105'}`}
              onClick={() => setActiveLevel('heaven')}
            >
              <div className="w-44 h-44 rounded-full bg-blue-50 border-4 border-blue-200 flex flex-col items-center justify-center shadow-lg mx-auto z-10 relative overflow-hidden">
                <Cloud className="text-blue-400 mb-2 w-16 h-16" />
                <span className="font-serif font-bold text-ink text-2xl">CIELO</span>
                <span className="text-sm text-stone-500 uppercase tracking-widest font-bold">Macrocosmos</span>
                {activeLevel === 'heaven' && <div className="absolute inset-0 bg-blue-400/10 animate-pulse rounded-full"></div>}
              </div>
              
              {/* Correspondence Tag */}
              <div className="absolute top-1/2 -translate-y-1/2 left-full ml-6 bg-white px-6 py-4 rounded-r-xl border-l-8 border-blue-500 shadow-md w-64 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 pointer-events-none z-20">
                 <h4 className="font-bold text-blue-800 text-xl">SHEN (Espíritu)</h4>
                 <p className="text-lg text-stone-600 mt-1">Consciencia, Mente</p>
              </div>
            </div>

            {/* Human / Qi */}
            <div 
              className={`relative group cursor-pointer transition-all duration-500 ${activeLevel === 'human' ? 'scale-110' : 'hover:scale-105'}`}
              onClick={() => setActiveLevel('human')}
            >
              <div className="w-40 h-40 rounded-full bg-white border-4 border-stone-300 flex flex-col items-center justify-center shadow-lg mx-auto z-10">
                <User className="text-stone-600 mb-2 w-14 h-14" />
                <span className="font-serif font-bold text-ink text-2xl">HOMBRE</span>
                <span className="text-sm text-stone-500 uppercase tracking-widest font-bold">Intermediario</span>
              </div>

               {/* Correspondence Tag */}
               <div className="absolute top-1/2 -translate-y-1/2 left-full ml-6 bg-white px-6 py-4 rounded-r-xl border-l-8 border-stone-500 shadow-md w-64 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 pointer-events-none z-20">
                 <h4 className="font-bold text-ink text-xl">QI (Energía)</h4>
                 <p className="text-lg text-stone-600 mt-1">Movimiento, Aliento</p>
              </div>
            </div>

            {/* Earth / Jing */}
            <div 
              className={`relative group cursor-pointer transition-all duration-500 ${activeLevel === 'earth' ? 'scale-110' : 'hover:scale-105'}`}
              onClick={() => setActiveLevel('earth')}
            >
              <div className="w-44 h-44 rounded-full bg-amber-50 border-4 border-amber-200 flex flex-col items-center justify-center shadow-lg mx-auto z-10">
                <Mountain className="text-amber-600 mb-2 w-16 h-16" />
                <span className="font-serif font-bold text-ink text-2xl">TIERRA</span>
                <span className="text-sm text-stone-500 uppercase tracking-widest font-bold">Sustento</span>
              </div>

               {/* Correspondence Tag */}
               <div className="absolute top-1/2 -translate-y-1/2 left-full ml-6 bg-white px-6 py-4 rounded-r-xl border-l-8 border-amber-600 shadow-md w-64 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 pointer-events-none z-20">
                 <h4 className="font-bold text-amber-800 text-xl">JING (Esencia)</h4>
                 <p className="text-lg text-stone-600 mt-1">Cuerpo, Semilla</p>
              </div>
            </div>

        </div>

        {/* Text / Info Panel */}
        <div className="flex-1 max-w-2xl space-y-8">
           <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
             <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
               <Sparkles className="text-yellow-500" size={32} />
               La Tríada de la Vida
             </h4>
             <p className="text-xl text-stone-700 leading-relaxed">
               Así como en el universo existen las <strong>Tres Potencias (San Cai)</strong>: Cielo, Tierra y Hombre; en nuestro cuerpo tenemos los <strong>Tres Tesoros (San Bao)</strong>: Shen, Jing y Qi.
             </p>
           </div>

           <div className={`transition-all duration-500 border-l-8 pl-6 py-4 
              ${activeLevel === 'heaven' ? 'border-blue-500 opacity-100 bg-blue-50 rounded-r-lg' : 'border-stone-200 opacity-50'}`}>
              <h5 className="font-bold text-ink text-2xl mb-1">Shen (Espíritu) = Cielo</h5>
              <p className="text-xl text-stone-600">La instrucción, el plano, la mente. Corresponde a lo inmaterial.</p>
           </div>

           <div className={`transition-all duration-500 border-l-8 pl-6 py-4 
              ${activeLevel === 'human' ? 'border-stone-600 opacity-100 bg-stone-50 rounded-r-lg' : 'border-stone-200 opacity-50'}`}>
              <h5 className="font-bold text-ink text-2xl mb-1">Qi (Energía) = Hombre</h5>
              <p className="text-xl text-stone-600">La interacción, el movimiento, la vida. Es la mezcla dinámica.</p>
           </div>

           <div className={`transition-all duration-500 border-l-8 pl-6 py-4 
              ${activeLevel === 'earth' ? 'border-amber-600 opacity-100 bg-amber-50 rounded-r-lg' : 'border-stone-200 opacity-50'}`}>
              <h5 className="font-bold text-ink text-2xl mb-1">Jing (Esencia) = Tierra</h5>
              <p className="text-xl text-stone-600">La base material, la genética, el cuerpo físico. El soporte.</p>
           </div>
        </div>

      </div>
    </div>
  );
};