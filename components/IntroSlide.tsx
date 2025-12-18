import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroSlideProps {
  onStart: () => void;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ onStart }) => {
  return (
    <div className="min-h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#e8e6e1]">
      
      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      {/* Ambient Moving Blobs (Qi Flow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[80px] animate-float-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[80px] animate-float-slow delay-1000"></div>

      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center text-center space-y-12">
        
        {/* The Animated Yin Yang Symbol */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
           {/* Outer Glow Ring */}
           <div className="absolute inset-0 rounded-full border border-stone-400/30 scale-110 animate-pulse"></div>
           <div className="absolute inset-0 rounded-full border border-stone-400/20 scale-125 animate-pulse delay-75"></div>

           {/* The Yin Yang */}
           <div className="w-full h-full rounded-full border-4 border-stone-800 shadow-2xl relative overflow-hidden animate-[spin_12s_linear_infinite] bg-white">
              {/* Black Half (Yin) */}
              <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-black"></div>
              
              {/* Top Circle (White Head) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white rounded-full flex items-center justify-center">
                 <div className="w-1/4 h-1/4 bg-black rounded-full"></div>
              </div>

              {/* Bottom Circle (Black Head) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-black rounded-full flex items-center justify-center">
                 <div className="w-1/4 h-1/4 bg-white rounded-full"></div>
              </div>
           </div>
        </div>

        {/* Titles */}
        <div className="space-y-4 max-w-4xl px-4">
          <div className="flex items-center justify-center gap-4 text-stone-500 font-serif italic text-xl md:text-2xl mb-2">
            <span className="h-[1px] w-12 bg-stone-400 inline-block"></span>
            <span>Clase Magistral</span>
            <span className="h-[1px] w-12 bg-stone-400 inline-block"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink leading-tight tracking-tight">
            Fundamentos de la <br/>
            <span className="text-seal-red">Medicina China</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 font-light mt-4 max-w-2xl mx-auto">
            Un viaje desde la dualidad del Yin Yang hasta los Cinco Movimientos y la Acupuntura.
          </p>
        </div>

        {/* Start Button */}
        <button 
          onClick={onStart}
          className="group relative px-10 py-4 bg-stone-800 text-[#fdfbf7] font-serif text-xl tracking-widest uppercase transition-all hover:bg-seal-red hover:shadow-lg hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Entrar al Tao <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

      </div>

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 text-6xl font-serif text-stone-200 pointer-events-none select-none">道</div>
      <div className="absolute bottom-8 right-8 text-6xl font-serif text-stone-200 pointer-events-none select-none">醫</div>

    </div>
  );
};