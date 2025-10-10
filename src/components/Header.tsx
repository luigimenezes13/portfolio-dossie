import { Calendar, CheckCircle2 } from 'lucide-react';
import type { Dossie } from '../types/api';
import profileImage from '../assets/profile.jpg';

interface HeaderProps {
  dossie: Dossie;
}

export function Header({ dossie }: HeaderProps) {
  return (
    <header className="mb-16 md:mb-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
        <div className="relative flex-shrink-0 animate-fade-in-left">
          <div className="profile-image-container">
            <div className="profile-image">
              <img 
                src={profileImage} 
                alt={`Foto de ${dossie.colaborador.nome}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="profile-badge">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center text-center md:text-left animate-fade-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent mb-6 leading-tight">
            {dossie.colaborador.nome}
          </h1>
          <p className="text-neutral-200 text-2xl md:text-3xl mb-6 font-semibold leading-relaxed">
            {dossie.colaborador.funcaoAtual}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-6 text-base text-neutral-400 font-medium">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
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
