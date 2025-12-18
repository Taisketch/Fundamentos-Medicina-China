import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Zap, Star } from 'lucide-react';

export const Slide1: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'principle' | 'opposition' | 'dynamics'>('principle');

  return (
    <div className="min-h-full w-full flex flex-col md:flex-row p-6 md:p-12 gap-10 bg-paper">
      
      {/* Left Content Column */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <div className="space-y-3">
          <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 1</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-ink leading-tight">
            El Origen y la Generalidad
          </h2>
          <h3 className="text-2xl text-stone-500 font-serif italic">
            "La Matriz del Pensamiento: Cielo y Tierra"
          </h3>
        </div>

        <div className="bg-white/50 p-8 rounded-lg border border-stone-200 shadow-sm backdrop-blur-sm">
          <p className="text-ink-light leading-relaxed text-2xl">
            El Yin y el Yang no son solo símbolos, son la forma en que el universo y el cuerpo se organizan desde el "Uno".
            No son estáticos, son una danza constante.
          </p>
        </div>

        {/* Accordion / Interactive List */}
        <div className="space-y-4">
          <button 
            onClick={() => setActiveTab('principle')}
            className={`w-full text-left p-6 rounded-md transition-all duration-300 border-l-8 ${activeTab === 'principle' ? 'bg-stone-100 border-seal-red shadow-sm' : 'border-transparent hover:bg-stone-50'}`}
          >
            <h4 className="font-bold text-ink mb-2 text-xl">El Principio Daoísta</h4>
            <p className={`text-lg text-stone-600 ${activeTab === 'principle' ? 'block' : 'hidden'} animate-fadeIn`}>
              "El Dao engendra el Uno, el Uno engendra el Dos". Este "Dos" es la dualidad esencial.
            </p>
          </button>

          <button 
            onClick={() => setActiveTab('opposition')}
            className={`w-full text-left p-6 rounded-md transition-all duration-300 border-l-8 ${activeTab === 'opposition' ? 'bg-stone-100 border-seal-red shadow-sm' : 'border-transparent hover:bg-stone-50'}`}
          >
            <h4 className="font-bold text-ink mb-2 text-xl">La Oposición Natural</h4>
            <p className={`text-lg text-stone-600 ${activeTab === 'opposition' ? 'block' : 'hidden'} animate-fadeIn`}>
              El Cielo (Yang absoluto, puro) vs. La Tierra (Yin absoluto, impuro). Su unión crea la vida (El Hombre).
            </p>
          </button>

          <button 
            onClick={() => setActiveTab('dynamics')}
            className={`w-full text-left p-6 rounded-md transition-all duration-300 border-l-8 ${activeTab === 'dynamics' ? 'bg-stone-100 border-seal-red shadow-sm' : 'border-transparent hover:bg-stone-50'}`}
          >
            <h4 className="font-bold text-ink mb-2 text-xl">Dinámicas Opuestas</h4>
            <p className={`text-lg text-stone-600 ${activeTab === 'dynamics' ? 'block' : 'hidden'} animate-fadeIn`}>
              Condensación vs. Dispersión. Ascenso vs. Descenso. Si se separan, hay muerte.
            </p>
          </button>
        </div>
      </div>

      {/* Right Visual Column - Universe Theme */}
      <div className="flex-1 flex items-center justify-center relative rounded-xl border border-stone-800 overflow-hidden p-8 min-h-[400px] bg-[#090a0f] shadow-2xl">
        
        {/* Universe Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#090a0f] to-[#000000]"></div>
        
        {/* Stars */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <div className="absolute top-10 left-10 text-white/80 animate-pulse"><Star size={10} fill="white" /></div>
          <div className="absolute top-1/4 right-20 text-blue-200/60 animate-pulse delay-75"><Star size={6} fill="white" /></div>
          <div className="absolute bottom-1/3 left-1/4 text-white/40 animate-pulse delay-150"><Star size={4} fill="white" /></div>
          <div className="absolute top-20 left-1/2 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-blue-100 rounded-full blur-[1px]"></div>
        </div>

        <div className="absolute top-4 right-4 opacity-20 pointer-events-none font-serif text-[10rem] text-white select-none">道</div>
        
        {/* Interactive Visualization */}
        <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
          
          {/* Heaven (Yang) */}
          <div className={`transition-all duration-1000 flex flex-col items-center justify-center
            ${activeTab === 'opposition' || activeTab === 'dynamics' ? 'translate-y-[-30px]' : 'translate-y-0'}
          `}>
            <div className="w-40 h-20 bg-gradient-to-t from-transparent to-blue-500/20 rounded-t-full border-t-2 border-blue-400/50 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-blue-600/20 shadow-[0_-10px_40px_rgba(59,130,246,0.2)]">
               <span className="text-blue-100 font-serif font-bold z-10 text-xl drop-shadow-md">CIELO (Yang)</span>
               <div className="absolute inset-0 bg-white/5 blur-md group-hover:animate-pulse"></div>
            </div>
            
            {activeTab === 'dynamics' && (
              <div className="text-red-400 animate-bounce mt-4 flex flex-col items-center text-sm font-bold uppercase tracking-widest drop-shadow-lg">
                <ArrowDown size={28} />
                Debe Bajar
              </div>
            )}
          </div>

          {/* The Interaction/Man */}
          <div className={`my-6 w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] z-20 transition-all duration-700 ${activeTab === 'principle' ? 'scale-50 opacity-50' : 'scale-100 opacity-100'}`}>
            <div className="text-center">
              <span className="block text-4xl text-white drop-shadow-lg">人</span>
              <span className="text-sm font-bold uppercase text-stone-300 tracking-widest">Vida</span>
            </div>
          </div>

          {/* Earth (Yin) */}
          <div className={`transition-all duration-1000 flex flex-col items-center justify-center
             ${activeTab === 'opposition' || activeTab === 'dynamics' ? 'translate-y-[30px]' : 'translate-y-0'}
          `}>
             {activeTab === 'dynamics' && (
              <div className="text-blue-300 animate-bounce mb-4 flex flex-col-reverse items-center text-sm font-bold uppercase tracking-widest drop-shadow-lg">
                <ArrowUp size={28} />
                Debe Subir
              </div>
            )}

            <div className="w-40 h-20 bg-gradient-to-b from-transparent to-stone-700 rounded-b-full border-b-2 border-stone-500 flex items-center justify-center relative group cursor-pointer hover:bg-stone-800">
              <span className="text-stone-300 font-serif font-bold text-xl drop-shadow-md">TIERRA (Yin)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};