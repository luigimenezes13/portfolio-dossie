import { useState, useEffect } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import type { Dossie } from '../types/api';
import profileImage from '../assets/profile.jpg';

interface HeaderProps {
  dossie: Dossie;
}

export function Header({ dossie }: HeaderProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500),
      setTimeout(() => setPhase(2), 2500),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <header className={`mb-12 transition-all duration-1000 ${phase === 0 ? 'min-h-[80vh] flex items-center justify-center' : ''}`}>
      <div className={`transition-all duration-1000 ease-out ${phase === 0 ? 'flex flex-col items-center gap-8' : 'flex flex-row items-center gap-6 mb-4'}`}>
        <div className="relative group">
          <div className={`relative transition-all duration-1000 ease-out ${phase === 0 ? 'w-64 h-64' : 'w-24 h-24 group-hover:w-64 group-hover:h-64'}`}>
            <div className={`rounded-full overflow-hidden border-4 shadow-lg transition-all duration-1000 w-full h-full ${
              phase === 0
                ? 'border-primary/60 shadow-2xl shadow-primary/30' 
                : 'border-primary/30 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/30'
            }`}>
              <img 
                src={profileImage} 
                alt={`Foto de ${dossie.colaborador.nome}`}
                className={`w-full h-full object-cover transition-all duration-1000 ${phase === 0 ? '' : 'group-hover:scale-110'}`}
              />
            </div>
            
            <div className={`absolute bg-gradient-to-br from-primary to-tertiary rounded-full flex items-center justify-center border-black transition-all duration-1000 ${
              phase === 0
                ? '-bottom-2 -right-2 w-16 h-16 border-4' 
                : '-bottom-1 -right-1 w-8 h-8 border-2 group-hover:scale-125 group-hover:w-12 group-hover:h-12 group-hover:-bottom-2 group-hover:-right-2'
            }`}>
              <CheckCircle2 className={`text-white transition-all duration-1000 ${
                phase === 0 ? 'w-8 h-8' : 'w-4 h-4 group-hover:w-6 group-hover:h-6'
              }`} />
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 ${phase === 0 ? 'block' : 'hidden'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent">
              Bem-vindo ao meu dossiê
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-400">
            por <span className="text-white font-semibold">Luigi Bertoli Menezes</span>
          </p>
        </div>
        
        <div className={`transition-all duration-1000 ${phase === 0 ? 'hidden' : 'block'}`}>
          <h1 className={`text-4xl font-bold bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent mb-2 ${phase === 1 ? 'animate-fade-in-right' : ''}`}>
            {dossie.colaborador.nome}
          </h1>
          <p className={`text-gray-400 text-lg mb-1 ${phase === 1 ? 'animate-fade-in-right' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            {dossie.colaborador.funcaoAtual}
          </p>
          <div className={`flex items-center gap-4 text-sm text-gray-500 transition-all duration-700 ${
            phase >= 2 ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {dossie.colaborador.idade} anos
            </span>
            <span>•</span>
            <span>Início: {dossie.colaborador.dataInicio}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
