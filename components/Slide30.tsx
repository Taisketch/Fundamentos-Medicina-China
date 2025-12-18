import React, { useState } from 'react';
import { Scale, RefreshCw, Zap, Contrast } from 'lucide-react';

export const Slide30: React.FC = () => {
  const [activeLaw, setActiveLaw] = useState<number | null>(null);

  const laws = [
    {
      id: 1,
      title: "Oposición",
      icon: <Contrast size={40} />,
      desc: "Yin y Yang son opuestos (Agua vs Fuego, Noche vs Día). Esta tensión genera el movimiento.",
      color: "bg-stone-800 text-white"
    },
    {
      id: 2,
      title: "Interdependencia",
      icon: <Scale size={40} />,
      desc: "La Raíz Mutua. El Yin nutre, el Yang calienta. No existen por separado.",
      color: "bg-blue-600 text-white"
    },
    {
      id: 3,
      title: "Consumo Mutuo",
      icon: <Zap size={40} />,
      desc: "Crecimiento y Decrecimiento. Si el Yang sube demasiado, consume al Yin (Fiebre).",
      color: "bg-orange-500 text-white"
    },
    {
      id: 4,
      title: "Inter-transformación",
      icon: <RefreshCw size={40} />,
      desc: "En el extremo, uno se convierte en el otro. El Qi se condensa en Forma, la Forma se dispersa en Qi.",
      color: "bg-purple-600 text-white"
    }
  ];

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6 text-center">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 30</span>
        <h2 className="text-5xl font-serif font-bold text-ink">Las 4 Leyes Fundamentales</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Dinámica del Cambio Perpetuo"</h3>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-5xl mx-auto w-full">
        
        {laws.map((law) => (
          <button
            key={law.id}
            onClick={() => setActiveLaw(activeLaw === law.id ? null : law.id)}
            className={`relative h-64 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105
              ${law.color}
              ${activeLaw === law.id ? 'col-span-2 md:col-span-2 scale-105 z-10' : ''}
            `}
          >
            <div className="mb-4 bg-white/20 p-4 rounded-full backdrop-blur-sm">
              {law.icon}
            </div>
            <h4 className="text-3xl font-bold mb-2">{law.title}</h4>
            
            {activeLaw === law.id && (
              <p className="text-xl mt-4 max-w-2xl animate-fadeIn leading-relaxed">
                {law.desc}
              </p>
            )}
            
            {activeLaw !== law.id && (
              <span className="text-sm uppercase tracking-widest opacity-70 mt-2">Click para expandir</span>
            )}
          </button>
        ))}

      </div>
      
      <div className="mt-8 text-center bg-stone-100 p-4 rounded-xl text-stone-500 italic">
        "Estas no son teoría abstracta, son la regla que sigue el cuerpo para mantenerse vivo."
      </div>

    </div>
  );
};