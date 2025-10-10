import { Calendar, CheckCircle2 } from 'lucide-react';
import type { Dossie } from '../types/api';
import profileImage from '../assets/profile.jpg';

interface HeaderProps {
  dossie: Dossie;
}

export function Header({ dossie }: HeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-4">
        <div className="relative flex-shrink-0 animate-fade-in-left">
          <div className="relative w-48 h-48">
            <div className="rounded-full overflow-hidden border-4 border-primary/60 shadow-2xl shadow-primary/30 w-full h-full">
              <img 
                src={profileImage} 
                alt={`Foto de ${dossie.colaborador.nome}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-primary to-tertiary rounded-full flex items-center justify-center border-4 border-black">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
        
        <div className="h-48 flex flex-col justify-center text-center md:text-left animate-fade-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent mb-4 leading-relaxed">
            {dossie.colaborador.nome}
          </h1>
          <p className="text-gray-400 text-xl mb-4 font-medium leading-relaxed">
            {dossie.colaborador.funcaoAtual}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
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
