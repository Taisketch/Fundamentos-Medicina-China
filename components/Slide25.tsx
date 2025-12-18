import React, { useState } from 'react';
import { Leaf, Flame, Mountain, Wind, Droplet, User } from 'lucide-react';

export const Slide25: React.FC = () => {
  const [activeElement, setActiveElement] = useState('wood');

  const elements = {
    wood: {
      name: 'Madera (Hígado)',
      color: 'bg-green-100 border-green-500 text-green-800',
      icon: <Leaf />,
      tissue: 'TENDONES',
      tissueDesc: 'Gobierna el movimiento flexible.',
      fluid: 'LÁGRIMAS',
      fluidDesc: 'Lubrican los ojos, la "apertura" del Hígado.',
      bodyPartColor: 'stroke-green-500 fill-green-200'
    },
    fire: {
      name: 'Fuego (Corazón)',
      color: 'bg-red-100 border-red-500 text-red-800',
      icon: <Flame />,
      tissue: 'VASOS SANGUÍNEOS',
      tissueDesc: 'Gobierna la circulación.',
      fluid: 'SUDOR',
      fluidDesc: 'Líquido del Corazón. Sudor excesivo daña el Yang de Corazón.',
      bodyPartColor: 'stroke-red-500 fill-red-200'
    },
    earth: {
      name: 'Tierra (Bazo)',
      color: 'bg-yellow-100 border-yellow-500 text-yellow-800',
      icon: <Mountain />,
      tissue: 'CARNE (Músculos)',
      tissueDesc: 'Gobierna el volumen muscular y la fuerza.',
      fluid: 'SALIVA FINA (Xian)',
      fluidDesc: 'Inicia la digestión en la boca.',
      bodyPartColor: 'stroke-yellow-500 fill-yellow-200'
    },
    metal: {
      name: 'Metal (Pulmón)',
      color: 'bg-stone-200 border-stone-500 text-stone-800',
      icon: <Wind />,
      tissue: 'PIEL y VELLO',
      tissueDesc: 'La barrera externa.',
      fluid: 'MOCO / MUCOSIDAD',
      fluidDesc: 'Protege las vías respiratorias.',
      bodyPartColor: 'stroke-stone-500 fill-stone-200'
    },
    water: {
      name: 'Agua (Riñón)',
      color: 'bg-blue-100 border-blue-500 text-blue-800',
      icon: <Droplet />,
      tissue: 'HUESOS y MÉDULA',
      tissueDesc: 'La estructura profunda.',
      fluid: 'SALIVA ESPESA / ORINA',
      fluidDesc: 'Lubricación profunda y excreción.',
      bodyPartColor: 'stroke-blue-500 fill-blue-200'
    }
  };

  const current = elements[activeElement as keyof typeof elements];

  return (
    <div className="min-h-full w-full flex flex-col p-6 md:p-12 bg-paper">
      
      <div className="mb-8 border-b border-stone-200 pb-6">
        <span className="text-seal-red font-bold tracking-widest text-base uppercase">Diapositiva 25</span>
        <h2 className="text-5xl font-serif font-bold text-ink">Correspondencias Fisiológicas</h2>
        <h3 className="text-2xl text-stone-500 font-serif italic mt-2">"La Manifestación de los 5 en el Cuerpo"</h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12">
        
        {/* Navigation Tabs (Left) */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
           {Object.entries(elements).map(([key, data]) => (
             <button
               key={key}
               onClick={() => setActiveElement(key)}
               className={`p-4 rounded-xl text-left border-l-8 transition-all duration-300 flex items-center gap-4 font-bold text-lg
                 ${activeElement === key 
                   ? `${data.color} shadow-md scale-105` 
                   : 'bg-white border-stone-200 text-stone-500 hover:bg-stone-50'}
               `}
             >
               {data.icon}
               {data.name}
             </button>
           ))}
        </div>

        {/* Display Area (Right) */}
        <div className="flex-1 bg-white rounded-3xl border border-stone-200 shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden">
           
           {/* Background Tint */}
           <div className={`absolute inset-0 opacity-10 transition-colors duration-700 ${current.color.split(' ')[0]}`}></div>

           {/* Info Cards */}
           <div className="flex-1 space-y-8 z-10 w-full">
             
             <div className="animate-fadeIn">
               <h4 className="text-stone-400 font-bold uppercase tracking-widest mb-2">Estructura Física (Jing)</h4>
               <div className={`p-6 rounded-2xl border-4 bg-white shadow-sm ${current.color.split(' ')[1]}`}>
                 <strong className="block text-4xl mb-2 text-ink">{current.tissue}</strong>
                 <p className="text-xl text-stone-600">{current.tissueDesc}</p>
               </div>
             </div>

             <div className="animate-fadeIn delay-100">
               <h4 className="text-stone-400 font-bold uppercase tracking-widest mb-2">Fluido Corporal</h4>
               <div className={`p-6 rounded-2xl border-4 bg-white shadow-sm ${current.color.split(' ')[1]}`}>
                 <strong className="block text-4xl mb-2 text-ink">{current.fluid}</strong>
                 <p className="text-xl text-stone-600">{current.fluidDesc}</p>
               </div>
             </div>

           </div>

           {/* Body Diagram Visualization */}
           <div className="flex-1 flex justify-center items-center h-[500px] relative z-10">
              <div className="relative w-64 h-[500px]">
                 {/* Simplified Body Silhouette SVG */}
                 <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-xl">
                    <path 
                      d="M50,10 C40,10 35,15 35,25 C35,35 40,40 50,40 C60,40 65,35 65,25 C65,15 60,10 50,10 Z M35,45 L20,70 L25,120 L40,120 L40,180 L45,195 L55,195 L60,180 L60,120 L75,120 L80,70 L65,45 Z" 
                      className={`transition-all duration-700 stroke-2 ${current.bodyPartColor}`}
                    />
                 </svg>

                 {/* Highlighting specific zones roughly based on element */}
                 {activeElement === 'wood' && ( /* Tendons/Movement - Joints */
                   <>
                     <div className="absolute top-[35%] left-[20%] w-4 h-4 rounded-full bg-green-500 animate-ping"></div>
                     <div className="absolute top-[35%] right-[20%] w-4 h-4 rounded-full bg-green-500 animate-ping delay-100"></div>
                     <div className="absolute bottom-[40%] left-[45%] w-4 h-4 rounded-full bg-green-500 animate-ping delay-200"></div>
                   </>
                 )}
                 {activeElement === 'fire' && ( /* Vessels - Heart Area */
                   <div className="absolute top-[25%] left-[45%] w-8 h-8 rounded-full bg-red-500 animate-pulse shadow-[0_0_20px_red]"></div>
                 )}
                 {activeElement === 'earth' && ( /* Flesh - Thighs/Arms */
                   <>
                     <div className="absolute top-[30%] left-[25%] w-6 h-12 bg-yellow-500/50 rounded-full animate-pulse"></div>
                     <div className="absolute top-[30%] right-[25%] w-6 h-12 bg-yellow-500/50 rounded-full animate-pulse"></div>
                   </>
                 )}
                 {activeElement === 'metal' && ( /* Skin - Outline Glow */
                    <div className="absolute inset-4 border-2 border-stone-400 rounded-[3rem] animate-pulse opacity-50"></div>
                 )}
                 {activeElement === 'water' && ( /* Bones - Skeleton Line */
                    <div className="absolute top-[10%] bottom-[10%] left-[48%] w-2 bg-blue-400/50 rounded-full"></div>
                 )}

              </div>
           </div>

        </div>

      </div>
    </div>
  );
};