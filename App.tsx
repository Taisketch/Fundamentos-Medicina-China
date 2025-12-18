import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Info } from 'lucide-react';
import { IntroSlide } from './components/IntroSlide';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';
import { Slide7 } from './components/Slide7';
import { Slide8 } from './components/Slide8';
import { Slide9 } from './components/Slide9';
import { Slide10 } from './components/Slide10';
import { Slide11 } from './components/Slide11';
import { Slide12 } from './components/Slide12';
import { Slide13 } from './components/Slide13';
import { Slide14 } from './components/Slide14';
import { Slide15 } from './components/Slide15';
import { Slide16 } from './components/Slide16';
import { Slide17 } from './components/Slide17';
import { Slide18 } from './components/Slide18';
import { Slide19 } from './components/Slide19';
import { Slide20 } from './components/Slide20';
import { Slide21 } from './components/Slide21';
import { Slide22 } from './components/Slide22';
import { Slide23 } from './components/Slide23';
import { Slide24 } from './components/Slide24';
import { Slide25 } from './components/Slide25';
import { Slide26 } from './components/Slide26';
import { Slide27 } from './components/Slide27';
import { Slide28 } from './components/Slide28';
import { Slide29 } from './components/Slide29';
import { Slide30 } from './components/Slide30';
import { Slide31 } from './components/Slide31';

const TOTAL_SLIDES = 31;

const App: React.FC = () => {
  // Start at 0 for the Intro Slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <IntroSlide onStart={() => setCurrentSlide(1)} />;
      case 1: return <Slide1 />;
      case 2: return <Slide2 />;
      case 3: return <Slide3 />;
      case 4: return <Slide4 />;
      case 5: return <Slide5 />;
      case 6: return <Slide6 />;
      case 7: return <Slide7 />;
      case 8: return <Slide8 />;
      case 9: return <Slide9 />;
      case 10: return <Slide10 />;
      case 11: return <Slide11 />;
      case 12: return <Slide12 />;
      case 13: return <Slide13 />;
      case 14: return <Slide14 />;
      case 15: return <Slide15 />;
      case 16: return <Slide16 />;
      case 17: return <Slide17 />;
      case 18: return <Slide18 />;
      case 19: return <Slide19 />;
      case 20: return <Slide20 />;
      case 21: return <Slide21 />;
      case 22: return <Slide22 />;
      case 23: return <Slide23 />;
      case 24: return <Slide24 />;
      case 25: return <Slide25 />;
      case 26: return <Slide26 />;
      case 27: return <Slide27 />;
      case 28: return <Slide28 />;
      case 29: return <Slide29 />;
      case 30: return <Slide30 />;
      case 31: return <Slide31 />;
      default: return <IntroSlide onStart={() => setCurrentSlide(1)} />;
    }
  };

  const getSectionTitle = () => {
    if (currentSlide === 0) return 'BIENVENIDA';
    if (currentSlide <= 5) return 'TEORÍA YIN YANG';
    if (currentSlide <= 10) return 'SAN BAO (TRES TESOROS)';
    if (currentSlide <= 15) return 'SUSTANCIAS VITALES (SANGRE Y LÍQUIDOS)';
    if (currentSlide <= 20) return 'LAS FORMAS DEL QI';
    if (currentSlide <= 25) return 'LOS 5 MOVIMIENTOS (WU XING)';
    return 'SÍNTESIS Y CONCLUSIÓN';
  };

  return (
    <div className="min-h-screen bg-[#dcdcdc] flex items-center justify-center p-2 md:p-4 overflow-hidden">
      {/* Main Presentation Container */}
      <div className="w-full max-w-[1920px] aspect-video max-h-[95vh] bg-paper ink-brush-border rounded-lg overflow-hidden flex flex-col relative shadow-2xl">
        
        {/* Header / Top Bar (Hidden on Intro Slide for immersion, or modified) */}
        <header className={`h-20 md:h-24 border-b border-stone-200 flex items-center justify-between px-6 md:px-12 bg-[#f8f6f0] shrink-0 transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-0 pointer-events-none absolute w-full' : 'opacity-100'}`}>
          <div className="flex items-center gap-4 text-ink">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-seal-red rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl md:text-2xl shadow-sm">
              中
            </div>
            <h1 className="font-serif text-xl md:text-3xl font-bold tracking-wide">Fundamentos de Medicina China</h1>
          </div>
          <div className="text-stone-500 font-sans text-sm md:text-base tracking-widest hidden md:block font-bold">
            {getSectionTitle()} • DIAPOSITIVA {currentSlide} / {TOTAL_SLIDES}
          </div>
          <div className="text-stone-500 font-sans text-sm tracking-widest md:hidden">
            {currentSlide} / {TOTAL_SLIDES}
          </div>
        </header>

        {/* Slide Content Area - Scrolling enabled */}
        <main className="flex-1 overflow-y-auto custom-scroll relative bg-paper">
          {renderSlide()}
        </main>

        {/* Footer / Navigation (Hidden on Intro Slide) */}
        <footer className={`h-20 md:h-24 border-t border-stone-200 bg-[#f8f6f0] flex items-center justify-between px-6 md:px-12 shrink-0 transition-all duration-500 ${currentSlide === 0 ? 'translate-y-full' : 'translate-y-0'}`}>
          <div className="flex items-center gap-6">
            <button className="text-stone-400 hover:text-ink transition-colors p-3 hover:bg-stone-100 rounded-full">
               <BookOpen size={28} />
            </button>
            <button className="text-stone-400 hover:text-ink transition-colors p-3 hover:bg-stone-100 rounded-full">
               <Info size={28} />
            </button>
          </div>

          <div className="flex items-center gap-6 md:gap-10">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300
                ${currentSlide === 0 
                  ? 'text-stone-300 cursor-not-allowed' 
                  : 'text-ink hover:bg-stone-200 active:scale-95'}`}
            >
              <ChevronLeft size={28} />
              <span className="font-sans font-bold hidden md:inline text-xl">Anterior</span>
            </button>

            {/* Progress Dots */}
            <div className="flex gap-3 md:gap-4 overflow-x-auto max-w-[200px] md:max-w-none">
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i + 1)}
                  className={`rounded-full transition-all duration-300 shrink-0 ${
                    currentSlide === i + 1 ? 'bg-seal-red w-8 md:w-10 h-3 md:h-4' : 'bg-stone-300 w-3 md:w-4 h-3 md:h-4 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              disabled={currentSlide === TOTAL_SLIDES}
              className={`flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300
                ${currentSlide === TOTAL_SLIDES 
                  ? 'text-stone-300 cursor-not-allowed' 
                  : 'bg-ink text-white hover:bg-ink-light active:scale-95 shadow-md'}`}
            >
              <span className="font-sans font-bold hidden md:inline text-xl">Siguiente</span>
              <ChevronRight size={28} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;