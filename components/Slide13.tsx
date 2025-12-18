import React, { useState } from 'react';
import { Activity, Wind, Database, ShieldCheck } from 'lucide-react';

export const Slide13: React.FC = () => {
  const [activeOrgan, setActiveOrgan] = useState<string | null>(null);

  const organs = [
    {
      id: 'heart',
      name: 'Corazón',
      role: 'El Gobernador',
      desc: 'Gobierna los vasos y da el impulso inicial. Es la bomba.',
      icon: <Activity size={48} />,
      color: 'bg-red-100 text-red-700 border-red-300'
    },
    {
      id: 'lung',
      name: 'Pulmón',
      role: 'El Distribuidor',
      desc: 'Distribuye la sangre gracias al Qi rítmico de la respiración.',
      icon: <Wind size={48} />,
      color: 'bg-blue-100 text-blue-700 border-blue-300'
    },
    {
      id: 'liver',
      name: 'Hígado',
      role: 'El Almacén',
      desc: 'Almacena el volumen y regula cuánto circula según la actividad física.',
      icon: <Database size={48} />,
      color: 'bg-green-100 text-green-700 border-green-300'
    },
    {
      id: 'spleen',
      name: 'Bazo',
      role: 'El Contenedor',
      desc: 'Mantiene la sangre DENTRO de los vasos. Evita hemorragias.',
      icon: <ShieldCheck size={48} />,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-300'
    }
  ];

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 13</span>
        <h2 className="text-5xl font-serif font-bold text-ink">La Circulación Sanguínea</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"Un Trabajo en Equipo de los Órganos"</h3>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        
        {/* Intro Text */}
        <div className="bg-stone-50 p-6 rounded-xl border-l-8 border-ink">
          <p className="text-2xl text-ink leading-relaxed">
            <strong>Relación Qi-Sangre:</strong> La sangre no se mueve sola. "El Qi moviliza a la sangre... el Qi circula, luego la sangre circula". Si el Qi se estanca, la sangre se coagula.
          </p>
        </div>

        {/* Organ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {organs.map((organ) => (
            <div 
              key={organ.id}
              onMouseEnter={() => setActiveOrgan(organ.id)}
              onMouseLeave={() => setActiveOrgan(null)}
              className={`relative p-8 rounded-2xl border-4 transition-all duration-300 cursor-pointer flex flex-col justify-center items-start gap-4 group
                ${organ.color}
                ${activeOrgan === organ.id ? 'scale-105 shadow-xl z-10' : 'hover:scale-102 shadow-sm'}
              `}
            >
              <div className="flex items-center gap-6 w-full">
                <div className="p-4 bg-white/50 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {organ.icon}
                </div>
                <div>
                  <h4 className="text-3xl font-bold">{organ.name}</h4>
                  <span className="text-xl font-bold opacity-70 uppercase tracking-widest">{organ.role}</span>
                </div>
              </div>
              
              <div className={`mt-4 text-xl font-medium leading-relaxed transition-opacity duration-300 ${activeOrgan === organ.id || window.innerWidth < 768 ? 'opacity-100' : 'opacity-80'}`}>
                {organ.desc}
              </div>

              {/* Interaction Hint */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 rounded-full bg-current animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-stone-500 italic text-center mt-2">
          "Si hay moretones fáciles, miramos al Bazo (paredes). Si hay palpitaciones, miramos al Corazón (bomba)."
        </p>

      </div>
    </div>
  );
};